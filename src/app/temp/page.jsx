import Link from 'next/link';



export default function temp() {
  return (
    <div>
       <h1>Acesso a telas</h1>
       <Link href={ '/sobre'}>Sobre</Link>
       <Link href={ '/contato'}>Contato</Link>
    </div>
    );

}