import Home from "./home/page"

const  Page = async() => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  // const topAnime = await response.json()

  return (
    <>
    <section>
      <Home />
    </section>  
    </>
  )
}

export default Page
