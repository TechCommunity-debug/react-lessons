import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <p>Go to <Link to='/products'>the list of products</Link></p>
    </div>
  );
}

export default HomePage;
