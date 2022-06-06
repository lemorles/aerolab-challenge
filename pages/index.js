import { useState } from 'react';
import styled from 'styled-components';
import Filter from '../components/Filter';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

export default function Home({ products, user }) {
  const [filter, setFilter] = useState('Most recent');
  const [currentPage, setCurrentPage] = useState(0);

  const sort = (sortProducts) => {
    switch (filter) {
      case 'Most recent':
        return sortProducts.sort((a, b) => b._id.localeCompare(a._id));
      case 'Lowest price':
        return sortProducts.sort((a, b) => a.cost - b.cost);
      case 'Highest price':
        return sortProducts.sort((a, b) => b.cost - a.cost);
      default:
        return sortProducts;
    }
  };

  const paginate = (sortProducts) => {
    const pageSize = 16;
    const pageNumber = currentPage;
    return sortProducts.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize);
  };

  return (
    <ContainerHome>
      <Hero />
      <Filter
        filter={filter}
        setFilter={setFilter}
        count={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={16}
        totalPages={Math.ceil(products.length / 16) - 1}
      />
      <Container>
        <ProductList products={paginate(sort(products))} user={user} />
      </Container>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  background:#f9f9f9;
`;

const Container = styled.div`
  padding: 4.2rem 13.2rem 6.0rem;
`;
