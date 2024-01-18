"use client";
import About from "@/components/Home/About";
import Home from "./home/page";
import HomeProject from "@/components/HomeProject";
import SuccessProject from "@/components/SuccessProject";
import FAQ from "@/components/FAQ";


const Page = () => {


  return (
    <>
      <section>
        <Home />
        <About />
        <HomeProject />
        <SuccessProject />
        <FAQ />
      </section>
    </>
  );
};

export default Page;
