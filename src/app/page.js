import CountryList from "@/components/CountryList"
import Header from "@/components/CountryList/Header"



const Page = async() => {
  // ambil API (link API ditaruh di satu file env)
  const response = await fetch(`${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/all`)
  // ambil data dari API 
  const countries = await response.json()

  return (
    <div className="">
          <Header/>
          <CountryList api={countries}/>
  
    </div>
  )
}

export default Page