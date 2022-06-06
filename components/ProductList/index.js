import styled from 'styled-components';
import Product from '../Product';

export default function ProductList({ products, user }) {
  return (
    <ContainerList>
      {
        products.map((product) => (
          <Product key={product._id} product={product} user={user} />
        ))
      }
    </ContainerList>
  );
}

const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
`;
