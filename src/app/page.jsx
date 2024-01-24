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
        <About exact component={About} />
        <HomeProject exact component={HomeProject}/>
        <SuccessProject exact component={SuccessProject}/>
        <FAQ exact component={FAQ}/>
      </section>
    </>
  );
};

export default Page;
