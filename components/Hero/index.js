import styled from 'styled-components';

export default function Hero() {
  return (
    <HeroContainer>
      <Title>Electronics</Title>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background: url('/assets/header-x2.png');
  background-size: cover;
  background-position: top;
  height: 41.2rem;
  display: flex;
  align-items: flex-end;
  padding: 0;
`;

const Title = styled.h1`
  padding-left: 13.2rem;
  padding-bottom: 4.8rem;
  color: #fff;
`;
