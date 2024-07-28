import { useEffect } from "react";
import { Helmet } from "react-helmet";

const useSEO = ({ title, description, url, image, type = "website" }) => {
  useEffect(() => {}, [title, description, url, image, type]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

export default useSEO;
