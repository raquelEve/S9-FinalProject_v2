install the dependiencies:

```
$ npm install react-router-dom tailwindcss daisyui flowbite flowbite-react @reduxjs/toolkit react-redux axios
```

init tailwind:

```
$ npx tailwindcss init -p
```

configure tailwind

```
import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    flowbite
  ],
};


```

src/ index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

```
npm install autoprefixer

```
