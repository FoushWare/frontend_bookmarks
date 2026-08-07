import { ResourceSection } from '@/components/ResourceGuide';

export const formsData: ResourceSection[] = [
  {
    title: 'Form Basics',
    icon: '📝',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>The <code>&lt;form&gt;</code> element wraps form controls and specifies how data is submitted</li>
        <li><strong>action</strong> attribute = URL where form data is sent, <strong>method</strong> = HTTP method (GET or POST)</li>
        <li><strong>GET</strong> appends data to URL (visible, bookmarkable, limited size), <strong>POST</strong> sends in body (hidden, larger, for sensitive data)</li>
        <li>Form controls need <code>name</code> attributes to be included in submission</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Basic form structure</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input id="name" name="name" type="text"&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input id="email" name="email" type="email"&gt;

  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">GET vs POST</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Aspect</th>
          <th style="text-align: left; padding: 0.5rem;">GET</th>
          <th style="text-align: left; padding: 0.5rem;">POST</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;">Data location</td>
          <td style="padding: 0.5rem;">URL query string</td>
          <td style="padding: 0.5rem;">Request body</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;">Visibility</td>
          <td style="padding: 0.5rem;">Visible in URL/bar</td>
          <td style="padding: 0.5rem;">Hidden</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;">Size limit</td>
          <td style="padding: 0.5rem;">~2048 characters</td>
          <td style="padding: 0.5rem;">Much larger</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;">Use case</td>
          <td style="padding: 0.5rem;">Search, filtering</td>
          <td style="padding: 0.5rem;">Sensitive data, file uploads</td>
        </tr>
      </table>
    `,
    interviewQuestion: {
      question: "When should you use GET vs POST for a form?",
      answer: "Use GET for non-sensitive, idempotent requests like search or filtering — data is visible in URL and can be bookmarked. Use POST for sensitive data, file uploads, or actions that modify server state — data is hidden in request body and not limited by URL length."
    },
    keyTakeaways: [
      "<code>action</code> = submission URL, <code>method</code> = HTTP method (GET/POST)",
      "GET = URL query string (visible, limited), POST = request body (hidden, larger)",
      "Form controls need <code>name</code> attributes to be submitted",
      "Use GET for search/filtering, POST for sensitive data/modifications",
      "Default method is GET if not specified"
    ],
  },
  {
    title: 'Input Types',
    icon: '🔤',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>HTML5 provides many <strong>specialized input types</strong> beyond text: email, tel, url, number, date, range, color</li>
        <li>Using the correct type gives you <strong>free validation</strong> (email format, number range) and <strong>better mobile keyboards</strong></li>
        <li>Common types: <code>text</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>tel</code>, <code>url</code>, <code>date</code>, <code>checkbox</code>, <code>radio</code></li>
        <li><code>type="submit"</code> and <code>type="button"</code> on <code>&lt;button&gt;</code> elements control behavior</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common input types</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;input type="text" placeholder="Text input"&gt;
&lt;input type="email" placeholder="name@example.com"&gt;
&lt;input type="tel" placeholder="555-1234"&gt;
&lt;input type="url" placeholder="https://example.com"&gt;
&lt;input type="password" placeholder="Password"&gt;
&lt;input type="number" min="0" max="100"&gt;
&lt;input type="date"&gt;
&lt;input type="range" min="0" max="100"&gt;
&lt;input type="color"&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Benefits of correct input types</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Input type</th>
          <th style="text-align: left; padding: 0.5rem;">Mobile keyboard</th>
          <th style="text-align: left; padding: 0.5rem;">Validation</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>email</code></td>
          <td style="padding: 0.5rem;">Email keyboard (@ symbol)</td>
          <td style="padding: 0.5rem;">Email format check</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>tel</code></td>
          <td style="padding: 0.5rem;">Numeric keypad</td>
          <td style="padding: 0.5rem;">None</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>number</code></td>
          <td style="padding: 0.5rem;">Numeric keypad</td>
          <td style="padding: 0.5rem;">Number only</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>url</code></td>
          <td style="padding: 0.5rem;">URL keyboard</td>
          <td style="padding: 0.5rem;">URL format check</td>
        </tr>
      </table>
    `,
    interviewQuestion: {
      question: "Why use type=\"email\" instead of type=\"text\"?",
      answer: "type=\"email\" provides built-in validation for email format and shows an email-specific keyboard on mobile devices (with @ symbol easily accessible). It also gives screen readers the correct context that this is an email field."
    },
    keyTakeaways: [
      "Use specialized input types for better UX and free validation",
      "<code>email</code>, <code>tel</code>, <code>url</code> show appropriate mobile keyboards",
      "<code>number</code> restricts to numeric input with min/max validation",
      "<code>checkbox</code> and <code>radio</code> for binary/multi-choice options",
      "<code>type=\"submit\"</code> on button submits form, <code>type=\"button\"</code> does not"
    ],
  },
  {
    title: 'Native Validation',
    icon: '✅',
    difficulty: 'Intermediate',
    category: 'Fundamentals',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>HTML5 provides <strong>built-in form validation</strong> without JavaScript: <code>required</code>, <code>pattern</code>, <code>min</code>/<code>max</code>, <code>minlength</code>/<code>maxlength</code></li>
        <li>Validation happens <strong>before</strong> the submit event fires — invalid forms won't submit</li>
        <li>CSS pseudo-classes: <code>:valid</code>, <code>:invalid</code>, <code>:user-invalid</code> (only after user interaction)</li>
        <li>Use <code>novalidate</code> on form to disable native validation if you want custom JS validation</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Native Validation Flow</h4>
      <img src="/images/native-validation-flow.svg" alt="Native Validation Flow" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Validation attributes</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;input type="text" required&gt;
&lt;input type="email" required&gt;
&lt;input type="text" pattern="[A-Za-z]{3}" title="3 letters only"&gt;
&lt;input type="number" min="0" max="100"&gt;
&lt;input type="text" minlength="5" maxlength="20"&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">CSS validation pseudo-classes</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
input:invalid {
  border-color: red;
}

input:user-invalid {
  /* Only applies after user interacts with field */
  border-color: red;
}

input:valid {
  border-color: green;
}
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Important:</strong> <code>:invalid</code> applies immediately on page load (even before user interaction), which can show red borders on empty required fields. Use <code>:user-invalid</code> for better UX.</p>
    `,
    interviewQuestion: {
      question: "What's the difference between :invalid and :user-invalid?",
      answer: ":invalid applies immediately when the field doesn't meet validation criteria, even before the user has interacted with it. :user-invalid only applies after the user has interacted with the field and then it becomes invalid, providing a better user experience by not showing errors on untouched fields."
    },
    keyTakeaways: [
      "Native validation attributes: <code>required</code>, <code>pattern</code>, <code>min/max</code>, <code>minlength/maxlength</code>",
      "Validation runs before submit event — invalid forms won't submit",
      "<code>:user-invalid</code> is better UX than <code>:invalid</code> (waits for interaction)",
      "Use <code>novalidate</code> to disable native validation for custom JS validation",
      "Native validation is a UX enhancement, not a security boundary"
    ],
  },
  {
    title: 'Labels & Fieldsets',
    icon: '🏷️',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Every form input needs a <strong>label</strong> for accessibility — screen readers announce the label when focused</li>
        <li><strong>Explicit labeling:</strong> <code>&lt;label for="id"&gt;</code> with matching <code>id</code> on input (preferred for layout flexibility)</li>
        <li><strong>Implicit labeling:</strong> wrap input inside <code>&lt;label&gt;</code> (simpler but less flexible)</li>
        <li><strong>Placeholder as label anti-pattern:</strong> placeholder disappears on input, poor contrast, unreliable screen reader support — never use as sole label</li>
        <li><strong>&lt;fieldset&gt;</strong> + <strong>&lt;legend&gt;</strong> groups related inputs (radio buttons, checkboxes) with a group label</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Labels & Fieldsets Diagram</h4>
      <img src="/images/labels-fieldset.svg" alt="Labels and Fieldsets" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Explicit vs implicit labeling</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- Explicit (preferred) --&gt;
&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input id="email" name="email" type="email"&gt;

&lt;!-- Implicit (simpler) --&gt;
&lt;label&gt;
  Email:
  &lt;input name="email" type="email"&gt;
&lt;/label&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Fieldset for grouping</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;fieldset&gt;
  &lt;legend&gt;Contact Preferences&lt;/legend&gt;
  
  &lt;label&gt;
    &lt;input type="checkbox" name="newsletter"&gt;
    Subscribe to newsletter
  &lt;/label&gt;
  
  &lt;label&gt;
    &lt;input type="checkbox" name="sms"&gt;
    Receive SMS updates
  &lt;/label&gt;
&lt;/fieldset&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "Why shouldn't you use placeholder as a label?",
      answer: "Placeholder text disappears when the user starts typing, so they can't reference it while filling out the form. It also has poor contrast and isn't reliably announced by screen readers. Always use a proper label element for accessibility and usability."
    },
    keyTakeaways: [
      "Every input needs a real <code>&lt;label&gt;</code> — explicit <code>for</code>/<code>id</code> is generally preferred over implicit wrapping for layout flexibility",
      "<code>placeholder</code> is never a substitute for <code>&lt;label&gt;</code> — disappearing text, poor contrast, unreliable screen reader support",
      "<code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code> gives radio/checkbox groups the group-level context individual labels can't provide alone",
      "<code>disabled</code> on a <code>&lt;fieldset&gt;</code> disables every input inside it in one line — handy for \"same as above\" patterns",
      "If a visually-hidden label is genuinely needed, use the <code>.visually-hidden</code> CSS pattern, never rely on placeholder alone"
    ],
  },
  {
    title: 'Select, Textarea, Datalist',
    icon: '📋',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Three native controls for "more than a single text input" scenarios, each with a distinct use case: <code>&lt;select&gt;</code> (locked to fixed options), <code>&lt;datalist&gt;</code> (suggestions + free text allowed), and <code>&lt;textarea&gt;</code> (multi-line free text)</li>
        <li>Interview signal: knowing <strong>when to reach for a native control vs building a custom dropdown component</strong> — native controls give you free keyboard navigation, mobile-optimized UI, and accessibility, at the cost of limited styling</li>
        <li><code>&lt;datalist&gt;</code> is underused in real-world code and a good one to mention — it gives autocomplete-style UX with <strong>zero JavaScript</strong></li>
        <li><code>&lt;textarea&gt;</code> has a resize quirk worth knowing: default resize behavior can break layouts if not constrained</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Select vs Datalist vs Radio Group</h4>
      <img src="/images/select-datalist-radio.svg" alt="Select vs Datalist vs Radio Diagram" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;select&gt;</code> — locked to given options</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;label for="country"&gt;Country&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value=""&gt;Select a country&lt;/option&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="ca"&gt;Canada&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
&lt;/select&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;datalist&gt;</code> — the underused one, free autocomplete</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;label for="browser"&gt;Favorite browser&lt;/label&gt;
&lt;input list="browsers" id="browser" name="browser"&gt;

&lt;datalist id="browsers"&gt;
  &lt;option value="Chrome"&gt;
  &lt;option value="Firefox"&gt;
  &lt;option value="Safari"&gt;
  &lt;option value="Edge"&gt;
&lt;/datalist&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "When would you use <datalist> instead of <select>?",
      answer: "When the user should be able to enter a custom value not in the predefined list — <select> locks the user to only the given options, while <datalist> just suggests values on top of a normal free-text input."
    },
    keyTakeaways: [
      "<code>&lt;select&gt;</code> = locked to given options only. <code>&lt;datalist&gt;</code> = suggestions on a free-text input, custom values still allowed",
      "Native <code>&lt;select&gt;</code> gives free keyboard nav, mobile UI, and accessibility — know this tradeoff before reaching for a custom dropdown",
      "<code>&lt;datalist&gt;</code> is a great zero-JS answer to \"how would you build simple autocomplete\"",
      "<code>&lt;textarea&gt;</code> default value goes between tags, not in a <code>value</code> attribute",
      "<code>resize: vertical</code> (or <code>none</code>) on <code>&lt;textarea&gt;</code> prevents horizontal resize from breaking layouts"
    ],
  },
  {
    title: 'Form Submission Lifecycle',
    icon: '🔁',
    difficulty: 'Intermediate',
    category: 'Fundamentals',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>The full sequence: <strong>trigger</strong> (click/Enter) → <strong>native validation runs</strong> → <strong><code>submit</code> event fires</strong> → <strong><code>preventDefault()</code> decides the path</strong> (native navigation vs your JS/AJAX handling)</li>
        <li>Classic gotcha: <code>form.submit()</code> (JS method) <strong>does not</strong> fire the <code>submit</code> event at all — it bypasses both your event handlers and native validation entirely. <code>form.requestSubmit()</code> is the modern fix</li>
        <li><code>FormData</code> has quirky-but-important rules: <strong>disabled</strong> inputs are excluded from submission entirely, <strong>readonly</strong> inputs are still included</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The Full Lifecycle</h4>
      <img src="/images/form-submission-lifecycle.svg" alt="Form Submission Lifecycle" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>form.submit()</code> vs <code>form.requestSubmit()</code></h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
// ❌ form.submit(): bypasses the "submit" event entirely
form.submit();

// ✅ form.requestSubmit(): behaves like a real user click
form.requestSubmit();
      </pre>
    `,
    interviewQuestion: {
      question: "What's the difference between form.submit() and form.requestSubmit()?",
      answer: "form.submit() bypasses the submit event entirely — no event listeners run, and native validation is skipped. form.requestSubmit() behaves like a genuine user-triggered submission: it fires the event, runs validation, and respects preventDefault()."
    },
    keyTakeaways: [
      "The <code>submit</code> event only fires <strong>after</strong> native constraint validation passes",
      "<code>form.submit()</code> bypasses the submit event and validation entirely — use <code>form.requestSubmit()</code> instead",
      "<code>disabled</code> inputs are excluded from <code>FormData</code>; <code>readonly</code> inputs are still included",
      "Multiple submit buttons can each carry their own <code>name</code>/<code>value</code> to distinguish actions server-side",
      "Disable the submit button while a request is in-flight to prevent duplicate submissions on double-click"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Web Forms Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms', description: 'Web forms guide' },
      { title: 'HTML5 Form Validation', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation', description: 'Client-side validation techniques' },
    ],
  },
];
