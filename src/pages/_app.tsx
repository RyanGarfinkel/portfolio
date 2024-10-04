import "@/styles/globals.css";
import type { AppProps } from "next/app";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
      <main>
          { children }
      </main>
  )
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <title>Ryan Garfinkel</title>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
