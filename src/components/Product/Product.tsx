import React from 'react';
import Spinner from '../Spinner';
import Modal from '../Modal';
import {ProductUpdate} from '../ProductForm';
import * as S from './styled';

const iPhone = require('../../assets/iphone.jpg');

export interface IProductStateProps {
  isLoading: boolean
  product: IProduct
}

export interface IProductDispatchProps {
  fetchProduct: (productId: string) => void
  toggleModal: () => void
}

export interface IProductOwnProps {
  match: {
    params: {
      productId: string
    }
  }
}

interface IProductProps
  extends IProductStateProps,
    IProductDispatchProps,
    IProductOwnProps {}

const Product: React.FC<IProductProps> = (props) => {
  const {fetchProduct, match, isLoading, product, toggleModal} = props;
  React.useEffect(() => {
    fetchProduct(match.params.productId);
  }, []);

  if (isLoading || !product) {
    return <Spinner />;
  }

  const {name, price, description} = product;

  return (
    <S.Wrapper>
      <S.Title>
        <h2>{name}</h2>
        <p>{price}</p>
      </S.Title>
      <S.Img src={iPhone} alt="Айфон" />
      <button onClick={() => toggleModal()}>Редактировать</button>
      <Modal>
        <ProductUpdate
          name={name}
          price={price}
          description={description}
          id={Number(match.params.productId)}
        />
      </Modal>
    </S.Wrapper>
  );
};

export default Product;
