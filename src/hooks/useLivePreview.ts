import { useState, useEffect, useRef } from 'react';
import type { Mode } from '../types/project';

export function useLivePreview(mode: Mode, content: string, html: string) {
  const [srcDoc, setSrcDoc] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const generateSrcDoc = () => {
      const tailwindScript = mode === 'tailwind' 
        ? `<script src="https://cdn.tailwindcss.com"></script>` 
        : '';

      if (mode === 'css') {
        return `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: Arial, sans-serif; padding: 20px; }
              ${content}
            </style>
          </head>
          <body>
            ${html}
          </body>
          </html>
        `;
      } else {
        return `
          <!DOCTYPE html>
          <html>
          <head>
            ${tailwindScript}
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: Arial, sans-serif; padding: 20px; }
            </style>
          </head>
          <body>
            ${content}
          </body>
          </html>
        `;
      }
    };

    setSrcDoc(generateSrcDoc());
  }, [mode, content, html]);

  return { srcDoc, iframeRef };
}
