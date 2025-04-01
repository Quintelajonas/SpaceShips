
import Link from "next/link";


export default function Home() {
  return (

   <main>
    <h1>Conhecça as Naves do Universo de Star Wars</h1>

    <p>
      Projeto desenvolvido durante o treinamento de Next.js da OneBitCode
    </p>

    <p>Tecnologias Utilizadas</p>
    <li>Next.js</li>
    <li>TypeScript</li>
    <li>Vercel</li>




    <p>

      <Link  className="btn" href={"/"}>Ver todas</Link>
    </p>
   </main>
  );
}
