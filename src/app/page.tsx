
import Link from "next/link";


export default function Home() {
  return (

   <main>
    <h1>Conhecça as Naves do Universo de Star Wars</h1>

    <p>
      <Link  className="btn" href={"/"}>Ver todas</Link>
    </p>
   </main>
  );
}
