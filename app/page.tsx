import Image from "next/image";

import logo from "../assets/logo.jpg";
import mainImage from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image className="h-20 w-44" src={logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-28 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi
            nulla expedita animi perspiciatis optio necessitatibus ratione
            porro! Vero dolorum consectetur optio maiores, repellendus adipisci
            incidunt dignissimos quia qui quis.
          </p>
          <Button asChild className="mt-8">
            <Link href="/addjob">
              Get Started
            </Link>
          </Button>
        </div>
        <Image className="hidden lg:block" src={mainImage} alt="logo" />
      </section>
    </main>
  );
}
