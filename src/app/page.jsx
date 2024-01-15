import About from "@/components/Home/About";
import Home from "./home/page";
import HomeProject from "@/components/HomeProject";
import SuccessProject from "@/components/SuccessProject";

const Page = async () => {
  return (
    <>
      <section >
        <Home />
        <About />
        <HomeProject />
        <SuccessProject />
      </section>
    </>
  );
};

export default Page;
