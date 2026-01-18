import Banner from "@/components/Banner";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import SpecialOffer from "@/components/Home/SpecialOffer";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10 mx-auto pb-20 max-w-7xl">
      {/* <Banner></Banner> */}
      <Hero></Hero>
      <Categories></Categories>
      <SpecialOffer></SpecialOffer>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
}
