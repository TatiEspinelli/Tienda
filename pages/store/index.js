import Layout from "../../components/Layout";
import { getItems } from "../../services/itemService";
import Image from "next/image";
import Product from "../../components/Product";
import styleItems from "../../styles/product.module.css";
import styles from '../../styles/Home.module.css'

export default function Index({ products }) {
  return (
    <Layout>
      <div className={styles.containerHome}>
      <h1>Store</h1>

      <div className={styleItems.items}>
        {products &&
          products.map((item) => (
            <Product key={item.id} item={item} showAs="Default" />
          ))}
      </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      products: res,
    },
  };
}
