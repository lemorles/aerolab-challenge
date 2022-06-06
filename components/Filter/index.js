import styled from 'styled-components';

export default function Filter({
  filter, setFilter, count, setCurrentPage, currentPage, totalPages,
}) {
  const handleFilter = (filterText) => {
    setFilter(filterText);
    setCurrentPage(0);
  };

  return (
    <Wrapper>
      <FilterContainer>
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
          <Divider vertical />
          <FilterTitle>
            Sort by:
          </FilterTitle>
          <FilterList>
            <FilterItem
              onClick={() => handleFilter('Most recent')}
              className={filter === 'Most recent' ? 'active' : ''}
            >
              <Button>Most recent</Button>
            </FilterItem>
            <FilterItem
              onClick={() => handleFilter('Lowest price')}
              className={filter === 'Lowest price' ? 'active' : ''}
            >
              <Button>Lowest price</Button>
            </FilterItem>
            <FilterItem
              onClick={() => handleFilter('Highest price')}
              className={filter === 'Highest price' ? 'active' : ''}
            >
              <Button>Highest price</Button>
            </FilterItem>
          </FilterList>
        </Container>
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

      </FilterContainer>
      <Divider />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 6.5rem 13.2rem 6.7rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  
  display: flex;
  gap: 2.4rem;
`;

const ProductsNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  color: #616161;
`;

const FilterTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  color: #a3a3a3;
`;

const FilterList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

const FilterItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
  color: #a3a3a3;
  border-radius: 10rem;
  height: 4.8rem;
  cursor: pointer;

  &.active {
    background: #0ad4fa;
    
    a{
      color: #fff;
    }

  }
`;

const Button = styled.a`
  font-size: 2.4rem;
  color: #a3a3a3;
  padding: 0 2.4rem;
`;

const IconNext = styled.div`
  cursor: pointer;
`;

const Divider = styled.hr`
  background: #d9d9d9;
  opacity: .5;
  ${(props) => (props.vertical ? 'width: .1rem;' : '')}; 
  ${(props) => (props.vertical ? 'height: 4.9rem' : '')};
  ${(props) => (props.vertical ? '' : 'margin-top: 2.4rem')};  
`;
