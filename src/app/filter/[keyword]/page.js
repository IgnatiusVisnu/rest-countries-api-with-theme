import CountryList from "@/components/CountryList"
import Header from "@/components/CountryList/Header"
import FilterButton from '@/components/Utilities/FilterButton'


const Page = async({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    // ambil API (link API ditaruh di satu file env)
    const response = await fetch(`${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/region/${decodeKeyword}`)
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