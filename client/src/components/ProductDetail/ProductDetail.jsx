import React from "react";
import { formatPrice } from "../../utils";
import "./ProductDetail.scss";

const ProductDetail = ({ product }) => {
  const { picture, title, condition, price, description } = product;

  return (
    <article className="product-detail">
      <section className="product-detail__card">
        <img
          src={picture}
          alt={`View of ${product.title}`}
          className="product-detail__image"
        />
        <div className="product-detail__info" role="complementary">
          <h3 className="product-detail__condition">{condition}</h3>
          <h1 className="product-detail__title">{title}</h1>
          <p className="product-detail__price" data-testid="product-price">
            {formatPrice(price)}
          </p>
          <button className="product-detail__button" aria-label="Buy product">
            Comprar
          </button>
        </div>
      </section>

      <section className="product-detail__description">
        <h2>Descripción del producto</h2>
        <p>{description}</p>
      </section>
    </article>
  );
};

export default ProductDetail;
