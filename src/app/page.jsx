import Banner from "@/components/Banner";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Hero></Hero>
      <Categories></Categories>
    </div>
  );
}
