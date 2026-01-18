import Banner from "@/components/Banner";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import SpecialOffer from "@/components/Home/SpecialOffer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Hero></Hero>
      <Categories></Categories>
      <SpecialOffer></SpecialOffer>
    </div>
  );
}
