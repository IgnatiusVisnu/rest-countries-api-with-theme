import Image from "next/image"
import Link from "next/link"

const Page = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-12 min-h-screen px-8 mx-5">
        {api.map((data) => {
            return (
                <div className="country rounded-lg shadow-xl">
                    <Link href={`/${data.name.common}`} className="cursor-pointer">
                    <Image src={data.flags.svg} alt="" width={200} height={100} className="w-full max-h-64 object-cover"/>
                    <h1 className=" p-5 font-bold">{data.name.common}</h1>
                    <div className="p-5">
                    <h1>Population: {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                    <h1>Region: {data.region}</h1>
                    <h1>Capital: {data.capital}</h1>
                    </div>
                    </Link>
                </div>
            )
        }
    )}
        </div>
    )
    

}

export default Page