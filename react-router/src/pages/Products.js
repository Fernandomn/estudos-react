import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Produtos</h1>
      <ul>
        <li>
          <Link to="/products/p1">Produto 1</Link>
        </li>
        <li>
          <Link to="/products/p2">Produto 2</Link>
        </li>
        <li>
          <Link to="/products/p3">Produto 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
