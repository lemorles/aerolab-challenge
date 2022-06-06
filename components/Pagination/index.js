import styled from 'styled-components';

export default function Pagination({
  count, totalPages, currentPage, setCurrentPage,
}) {
  return (
    <PaginationContainer>
      <Container>
        <ProductsNumber>
          {count / (totalPages + 1)}
          {' '}
          of
          {' '}
          {count}
          {' '}
          products
        </ProductsNumber>
        {
        currentPage >= totalPages ? (
          <IconNext onClick={() => setCurrentPage(currentPage - 1)}>
            <img src="/assets/icons/arrow-left.svg" alt="previus" />
          </IconNext>
        )
          : (
            <IconNext onClick={() => setCurrentPage(currentPage + 1)}>
              <img src="/assets/icons/arrow-right.svg" alt="next" />
            </IconNext>
          )
      }
      </Container>
      <Divider />
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  padding: 6rem 13.2rem 9.9rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductsNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  color: #616161;
`;

const IconNext = styled.div`
  cursor: pointer;
`;

const Divider = styled.hr`
  background: #d9d9d9;
  opacity: .7;
  margin-top: 2.4rem;
`;
