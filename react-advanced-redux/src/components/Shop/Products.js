import ProductItem from './ProductItem';
import classes from './Products.module.css';
import ITEMS_LIST from '../../utils/ITEMS_LIST';

const Products = (props) => {
  const getProductItem = () =>
    ITEMS_LIST.map((item) => (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{getProductItem()}</ul>
    </section>
  );
};

export default Products;
