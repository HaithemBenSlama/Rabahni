import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import Step from "@/components/Step";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Step />
    </div>
  );
}
