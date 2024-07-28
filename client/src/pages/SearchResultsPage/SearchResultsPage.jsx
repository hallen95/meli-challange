import React from "react";
import { useLocation } from "react-router-dom";

// components
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import SearchProduct from "../../components/SearchProduct/SearchProduct";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";
import NoDataComponent from "../../components/NoDataComponent/NoDataComponent";

// hooks
import useFetchProducts from "../../hooks/useFetchProduct";
import useSEO from "../../hooks/useSEO";

const SearchResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");
  const { data: products, loading, error } = useFetchProducts({ query });
  const helmet = useSEO({
    title: `Results for ${query} - Meli Challenge`,
    description: `Discover products related to ${query}.`,
    url: `https://localhost:3000/items?q=${encodeURIComponent(query)}`,
  });

  if (loading) return <SkeletonLoader />;
  if (error) return <ErrorComponent message="Error fetching products." />;
  if (!products || !products.items || products.items.length === 0) {
    return <NoDataComponent message="No products found." />;
  }

  return (
    <div className="grid-span">
      {helmet}
      <Breadcrumb items={products?.categories || []} />

      <SearchProduct products={products?.items || []} />
    </div>
  );
};

export default SearchResultsPage;
