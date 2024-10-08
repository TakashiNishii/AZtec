import { Header, Hero, Principios, QuemSomos } from "./components";
import Parceiros from "./components/Parceiros";
import Servicos from "./components/Servicos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <QuemSomos />
      <Principios />
      <Servicos />
      <Parceiros />
    </div>
  );
}
