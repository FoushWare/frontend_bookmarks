import { useState, useEffect, useRef } from 'react';
import type { TestCase } from '../types/project';

export function useTestRunner(tests: TestCase[], iframeRef: React.RefObject<HTMLIFrameElement | null>) {
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});
  const [allPassed, setAllPassed] = useState(false);

  useEffect(() => {
    const runTests = () => {
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentDocument) return;

      const doc = iframe.contentDocument;
      const results: Record<string, boolean> = {};

      tests.forEach(test => {
        try {
          results[test.id] = test.check(doc);
        } catch (error) {
          console.error(`Test ${test.id} failed:`, error);
          results[test.id] = false;
        }
      });

      setTestResults(results);
      setAllPassed(Object.values(results).every(result => result === true));
    };

    runTests();
  }, [tests, iframeRef]);

  const passedCount = Object.values(testResults).filter(result => result === true).length;
  const totalCount = tests.length;

  return { testResults, allPassed, passedCount, totalCount };
}
