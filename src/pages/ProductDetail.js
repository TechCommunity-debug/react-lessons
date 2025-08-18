import { useParams, Link } from "react-router-dom";

function ProductsDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>ProductsDetailsPage</h1>
      <p>{params.productId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}

export default ProductsDetailsPage;
