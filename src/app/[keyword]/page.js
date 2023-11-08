import Header from "@/components/CountryDetail/Header"
import CountryDetail from "@/components/CountryDetail"



const Page = async({ params }) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  // ambil API (link API ditaruh di satu file env)
  const response = await fetch(`${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/name/${decodeKeyword}`)
  // ambil data dari API 
  const country = await response.json()

  return (
    <>
      <section>
      <Header />
      <CountryDetail api={country}/>
      </section>
    </>
  )
}

export default Page
