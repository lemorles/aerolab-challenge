import styled from 'styled-components';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

export default function Home({ products, user }) {
  return (
    <>
      <Hero />
      <Container>
        <ProductList products={products} user={user} />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 4.2rem 13.2rem 6.0rem;
`;
