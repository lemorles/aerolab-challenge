import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function Layout({ children, ...rest }) {
  return (
    <>
      <Navigation user={rest?.user} />
      <MainContainer>{children}</MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;
