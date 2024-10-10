import { Hero, QuemSomos } from "./components";
import Parceiros from "./components/Parceiros";
import Servicos from "./components/Servicos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuemSomos />
      <Servicos />
      <Parceiros />
    </div>
  );
}
