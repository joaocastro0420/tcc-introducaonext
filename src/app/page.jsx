import Image from 'next/image';

import styles from './page.module.css';

import Temp from './temp/page';

export default function Home() {
  return(
    <div className="container">
      <h1 className={styles.tituloHome}>Hello World</h1>
      <h2>Texto 2</h2>
      <h3>Texto 3</h3>
      <p className="txtDestaque">Primeiro Exemplo Next</p>
    <p>Primeiro exemplo no Next</p>
    <small>Texto Menor</small>

    <div className="quadrado"></div>

    <Image 
    src='/temp/arvore.jpg'
    alt="Arvore"
    width={130}
    height={90}
    />

    <Image 
    src='/temp/arvore.jpg'
    alt="Arvore Pequena"
    width={1300}
    height={900}
    />

    

    </div>
  );
}