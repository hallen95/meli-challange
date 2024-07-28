import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils";
import "./SearchProduct.scss";

const SearchProduct = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/items/${id}`);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <article
          key={product.id}
          className="product-card"
          tabIndex="0"
          onClick={() => handleProductClick(product.id)}
          onKeyDown={(event) =>
            event.key === "Enter" && handleProductClick(product.id)
          }
        >
          <img
            src={product.picture}
            alt={product.title}
            className="product-card__image"
          />

          <div className="product-card__info">
            <div className="product-card__details">
              <p className="product-card__price">
                {formatPrice(product.price)}
                {product.free_shipping && (
                  <img
                    src="/assets/ic_shipping.png"
                    alt="Free shipping available"
                    className="product-card__shipping-icon"
                    aria-label="Free shipping"
                  />
                )}
              </p>
              <h3 className="product-card__title">{product.title}</h3>
            </div>
          </div>

          <div className="product-card__location">
            <p>{product.location || "No location specified"}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default React.memo(SearchProduct);
