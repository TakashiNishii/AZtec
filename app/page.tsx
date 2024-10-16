import { Hero, QuemSomos } from "./components";
import OndeEstamos from "./components/OndeEstamos";
import Parceiros from "./components/Parceiros";
import Servicos from "./components/Servicos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuemSomos />
      <Servicos />
      <Parceiros />
      <div className="divider divider-primary w-full" />
      <OndeEstamos />
    </div>
  );
}
