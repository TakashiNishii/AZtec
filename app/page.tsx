import { Header, Hero, Principios, QuemSomos } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <QuemSomos />
      <Principios />
    </div>
  );
}
