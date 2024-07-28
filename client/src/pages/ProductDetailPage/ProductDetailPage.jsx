import React from "react";
import { useParams } from "react-router-dom";

// components
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";

// hooks
import useFetchProducts from "../../hooks/useFetchProduct";
import useSEO from "../../hooks/useSEO";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetchProducts({ id });
  const helmet = useSEO({
    title: product ? `${product.title} - Meli Challange` : "Product Loading...",
    description: product
      ? `Learn more about ${product.title}`
      : "Product details are loading...",
    url: `https://www.localhost:3000/items/${id}`,
    image: product ? product.picture : "default-image-url",
    type: "product",
  });

  if (loading) return <SkeletonLoader />;
  if (error) return <ErrorComponent message="Error loading the product." />;

  return (
    <div className="grid-span">
      {helmet}

      {product && (
        <main>
          <Breadcrumb items={product.categories || []} />

          <ProductDetail product={product} />
        </main>
      )}
    </div>
  );
};

export default ProductDetailPage;
