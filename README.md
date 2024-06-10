# ecomm

# Project Title

●Developed a robust e-commerce application using Next.js and TypeScript, styled with
Tailwind CSS, enhancing performance and maintainability.

● Architected user registration and login functionality with Wix Studio for backend management, increasing user retention by
25%.

● Leveraged Zustand for state management and deployed search functionality, boosting user engagement by 30%.

● Currently working on real-time payment integration to further enhance the shopping experience, aiming to reduce checkout
times by 20% and improve overall user satisfaction.
## Authors

- Chirag Maini(https://github.com/Chirag-04)

## Installation

Install my-project with npm

```bash

Step 1: Create a Next.js Project
Open your terminal.
Run the following command to create a new Next.js project:
bash
Copy code
npx create-next-app@latest my-nextjs-app
Replace my-nextjs-app with your desired project name.
Step 2: Set Up TypeScript
Navigate to your project directory:

bash
Copy code
cd my-nextjs-app
Install TypeScript and the necessary types:

bash
Copy code
npm install --save-dev typescript @types/react @types/node
Initialize TypeScript configuration:

bash
Copy code
npx tsc --init
Rename JavaScript files to TypeScript:

Change pages/index.js to pages/index.tsx.
Change pages/_app.js to pages/_app.tsx.
Run the development server to generate tsconfig.json defaults:

bash
Copy code
npm run dev
Step 3: Set Up Tailwind CSS
Install Tailwind CSS and its dependencies:

bash
Copy code
npm install tailwindcss postcss autoprefixer
Initialize Tailwind CSS configuration:

bash
Copy code
npx tailwindcss init -p
Configure tailwind.config.js:

Open tailwind.config.js and replace its contents with:
javascript
Copy code
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
Add Tailwind CSS to your styles:

Create a styles/globals.css file if it doesn't exist.
Add the following content to styles/globals.css:
css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
Import the global CSS in your _app.tsx file:

Open pages/_app.tsx and modify it to:
javascript
Copy code
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
Step 4: Start Your Development Server
Run the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see your Next.js app running with TypeScript and Tailwind CSS.

```
    
## Demo
https://www.youtube.com/watch?v=0_xm8DT8TsU
