import CountryList from "@/components/CountryList"
import Header from "@/components/CountryList/Header"



const Page = async({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    // ambil API (link API ditaruh di satu file env)
    const response = await fetch(`${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/name/${decodeKeyword}`)
  // ambil data dari API 
  const countries = await response.json()

  countries.map((data) => console.log(data.name.common))
  return (
    <div className="">
          <Header/>
          <CountryList api={countries}/>
  
    </div>
  )
}

export default Page