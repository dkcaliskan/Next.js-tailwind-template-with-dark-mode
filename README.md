## Getting Started


First, install the packages:

```bash
npm run install
```
This app template using this packages:

```   
"autoprefixer": "^10.4.0",
"next": "^12.0.5-canary.8",
"next-themes": "^0.0.15",
"nprogress": "^0.2.0",
"postcss": "^8.4.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-icons": "^4.3.1",
"tailwindcss": "^2.2.19"
```

Second, Change Default Props inside components/Layout.js:

```
  Layout.defaultProps = {
    title: "Enter Your Default App Name",
    keywords: "Default, keywords, keyword",
    description:
      "App Default Description.",
      };
```
