import { getPathsFromIds } from "../../lib/utils";
import { getItemData } from "../../lib/utils";
import Layout from "../../components/Layout";
import Product from "../../components/Product";

export default function ProductPage({ productInfo }) {
  return (
    <Layout>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
  );
}

export async function getStaticPaths() {
  /* nos permite generar las rutas dinámicas para cada uno de los elementos*/
  const paths = await getPathsFromIds();

  return {
    paths: paths,
    fallback: false, //si una ruta no existe nos manda a una página 404 (para eso el false)
  };
}

export async function getStaticProps({ params }) {
  //el parámetro params va a tener información de la url que estamos visitando
  const id = params.id;
  const product = await getItemData(id.toString());

  return {
    props: {
      productInfo: product,
    },
  };
}
