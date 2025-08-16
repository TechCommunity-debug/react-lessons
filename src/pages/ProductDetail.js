import { useParams } from "react-router-dom";

function ProductsetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>ProductsetailsPage</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductsetailsPage;
