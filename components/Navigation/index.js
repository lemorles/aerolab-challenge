import styled from 'styled-components';

export default function Navigation() {
  return (
    <Header>
      <Nav>
        <img src="/assets/aerolab-logo.svg" alt="logo aerolab" />
        <UserList>
          <ItemList>John Kite</ItemList>
          <ItemList coin>
            <p>6000</p>
            <img src="/assets/icons/coin.svg" alt="coin" />
          </ItemList>
        </UserList>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 42px;
`;

const Nav = styled.nav`
  height: 8.0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

const ItemList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  ${({ coin }) => coin && `background-color: #ededed;
  padding: .8rem .8rem .8rem 1.2rem;
  border-radius: 10rem;`}

  img {
    width: 2.8rem;
  }
`;
