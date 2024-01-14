import About from "@/components/Home/About"
import Home from "./home/page"
import HomeProject from "@/components/HomeProject"


const  Page = async() => {


  return (
    <>
    <section>
      <Home />
      <About />
      <HomeProject />
    </section>
    </>
  )
}

export default Page
