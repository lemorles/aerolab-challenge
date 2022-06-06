import { useState } from 'react';
import styled from 'styled-components';

export default function Product({ product, user }) {
  const { points } = user;
  const [hover, setHover] = useState(false);

  return (
    <ProductItem
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        product.cost > points
          ? (
            <IconExceeds>
              <p>
                You need
                {' '}
                {product.cost - points}
              </p>
              <img src="/assets/icons/coin.svg" alt="coin" />
            </IconExceeds>
          ) : (
            <IconShop className="icon" src={hover ? '/assets/icons/buy-white.svg' : '/assets/icons/buy-blue.svg'} alt="buy" />
          )
      }

      <ImgProduct src={product?.img?.url} alt="iPhone 8" />
      <Divider />
      <Category>{product.category}</Category>
      <ProductName>{product.name}</ProductName>
      {
        product.cost <= points && hover && (
          <WrapperHover>
            <Price>
              <span>{product.cost}</span>
              <img src="/assets/icons/coin.svg" alt="coin" />
            </Price>
            <Button>Redeem Now</Button>
          </WrapperHover>
        )
      }
    </ProductItem>
  );
}

const ProductItem = styled.li`
  box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  &:hover {
    &::before {
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);
      opacity: .8;
      position: absolute;
    }

    /* transform: translateY(-12px); */
    transition: all .3s ease;
    box-shadow: 10px 10px 14px 0 rgba(0,0,0,0.3);
    
    .icon {
      z-index: 1;
      transition: all .3s ease;
    }
  }
`;

const IconShop = styled.img`
  align-self: flex-end;
  padding: 1.2rem 1.2rem 0 0; 
`;

const IconExceeds = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 1.5rem;
  gap: .6rem;
  background: #616161;
  opacity: .8;
  border-radius: 10rem;
  height: 4.2rem;
  margin-top: 1.2rem;
  margin-right: 1.2rem;
  align-self: flex-end;

  p {
    font-size: 1.4rem;
    color: #fff;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

const Divider = styled.hr`
  border: 1px solid #d9d9d9;
  width: 22.8rem;
  margin: 0 auto;
`;

const ImgProduct = styled.img`
  width: 25.2rem;
  margin: 0 1.2rem;
`;

const Category = styled.p`
  font-size: 1.6rem;
  color: #a3a3a3;
  margin-top: 2rem;
  padding-left: 2.4rem;
`;

const ProductName = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.8rem;
  padding-left: 2.4rem;
`;

const WrapperHover = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%; 
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  span {
    font-size: 3.6rem;
    color: #fff;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 100rem;
  padding: 1.1rem 5rem;
  font-size: 1.8rem;
  color: #616161;
  cursor: pointer; 
  margin-top: 1.2rem;
`;
