import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content={`Ryan Garfinkel's personal portfolio website showcasing projects and skills in software development.`} />
        <meta name='keywords' content='Ryan Garfinkel' />
        <meta name='author' content='Ryan Garfinkel' />
        <link rel='icon' href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>"/>
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
