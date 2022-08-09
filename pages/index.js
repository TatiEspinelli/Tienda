import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import { getLatestItems } from "../services/itemService";
import Product from "../components/Product";
import styleProduct from "../styles/product.module.css";

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={styles.containerHome}>
      <div className={styles.banner}  >
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h2>Shop the Summer 2022 Collection</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
        </div>
      </div>

      <h3> Latest Products </h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
