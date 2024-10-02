import Header from "./components/Header";
import Hero from "./components/Hero";
import QuemSomos from "./components/QuemSomos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <QuemSomos />
    </div>
  );
}
