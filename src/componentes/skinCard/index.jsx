import Image from 'next/image';
import styles from './index.module.css';

export default function SkinCard({ nome, preco, img }) {
  return (
    <div className={styles.card}>
      <Image src={img} alt={nome} width={120} height={80} />
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
    </div>
  );
}