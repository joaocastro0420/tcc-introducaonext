import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className={styles.tituloHome}>Título 1</h1>
      <h2>Título 2</h2>
      <h3>Título 3</h3>
      <p className="txtDestaque">Primeiro exemplo no Next</p>
      <p>Primeiro exemplo no Next</p>
      <small>Texto menor</small>
      <br />
      <div className="quadrado"></div>

    </div>
  );
}