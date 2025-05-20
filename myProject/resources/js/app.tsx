import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name: string) => {
    // import.meta.glob returns an object where keys are paths and values are async import functions
    const pages = import.meta.glob<Record<string, any>>(['./pages/**/*.tsx', './pages/**/*.jsx']);

    const tsxPage = `./pages/${name}.tsx`;
    const jsxPage = `./pages/${name}.jsx`;

    if (tsxPage in pages) {
      return pages[tsxPage]();
    } else if (jsxPage in pages) {
      return pages[jsxPage]();
    }

    throw new Error(`Page not found: ${tsxPage} or ${jsxPage}`);
  },
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);
  },
  progress: {
    color: '#4B5563',
  },
});
