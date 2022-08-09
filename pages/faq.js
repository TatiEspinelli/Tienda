import Layout from "../components/Layout";
import style from "../styles/faq.module.css";

export default function FAQ() {
  return (
    <Layout>
      <div className={style.faq}>
        <h2>FAQ</h2>

        <div>
          <h3>Do you ship internationally?</h3>
          <p>
            Yes, we ship internationally. Make sure to enter your entire
            international address in English characters. Don't forget the Postal
            Code!
          </p>
        </div>
      </div>
    </Layout>
  );
}
