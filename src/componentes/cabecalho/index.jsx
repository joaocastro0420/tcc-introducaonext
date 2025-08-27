import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaUser, FaShoppingCart, FaGift, FaStar } from 'react-icons/fa';
import styles from './index.module.css';

export default function Cabecalho() {
  return (
    <nav className={styles.menuGrande}>
      <Link href="/">
        <Image src="/logo.png" alt="CS Lotus" width={48} height={48} className={styles.logo} />
      </Link>
      <div className={styles.links}>
        <Link href='/' className={styles.link}>
          <FaHome /> Home
        </Link>
        <Link href='/perfil' className={styles.link}>
          <FaUser /> Perfil
        </Link>
        <Link href='/venda' className={styles.link}>
          <FaShoppingCart /> Venda Particular
        </Link>
        <Link href='/sorteio' className={styles.link}>
          <FaGift /> Sorteio
        </Link>
        <Link href='/lota' className={styles.link}>
          <FaStar /> Lota Normal
        </Link>
      </div>
    </nav>
  );
}