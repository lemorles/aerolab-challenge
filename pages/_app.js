import Layout from '../layout';
import GlobalStyle from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const { URL } = process.env;

  const dataUser = await fetch(`${URL}/api/user`);
  const user = await dataUser.json();

  const data = await fetch(`${URL}/api/products`);
  const products = await data.json();

  return { pageProps: { user, products } };
};

export default MyApp;
