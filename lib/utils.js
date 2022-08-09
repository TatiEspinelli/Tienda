import { getItemes, getItems } from "../services/itemService";

export async function getPathsFromIds() {
  const items = await getItems();

  const ids = items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });

  return ids;
} //para que nuestras rutas sean dinámicas usamos params y
//dentro vamos a colocarle el id (que es el mismo que le colocamos en id.js)

export async function getItemData(id) {
  const items = await getItems();

  const product = items.find((item) => convertToPath(item.title) === id);

  return {
    id: id,
    data: product,
  };
} //esto me debe regresar el primer elemento que encuentre en donde el id que estoy colocando como parámetro
//sea alguno de los que tengo en el arreglo. Si eso sucede, en id.js puedo mandar a llamar a getItemData.

/* getItemData va a ser llamado en id.js, entonces product
va a tener la información en forma de objeto tanto del id
como de la información propia del producto. En productInfo es
donde va a caer esto y donde lo vamos a extraer de los props de
nuestro componente.*/

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
