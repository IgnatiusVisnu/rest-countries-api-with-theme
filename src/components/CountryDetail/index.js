import Image from "next/image"

const Page = ({ api }) => {
    // const nativeCode = Object.keys(api[0].languages)[0]
    const nativeCode = Object.keys(api[0].name.nativeName)[0]
    const nativeCurrency = Object.keys(api[0].currencies)[0]
    const domainArray = Object.values(api[0].tld)
    const domain = domainArray.join(", ")
    const languagesArray = Object.values(api[0].languages)
    const languages = languagesArray.join(", ")
    console.log(nativeCode)
    return (
        <div className="flex w-full my-20 p-12 justify-center">
            <div className="flex flex-col lg:flex-row lg:justify-between singular-detail w-full mx-20 gap-5">
                <div className="flex justify-center">
                    <Image src={api[0].flags.svg} alt="" width={350} height={350} className="max-w-full"/>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <h1 className="font-bold text-3xl">{api[0].name.common}</h1>
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div>
                            <h1><a className="font-bold">Native name: </a>{api[0].name.nativeName[nativeCode].common}</h1>
                            <h1><a className="font-bold">Population: </a>{api[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                            <h1><a className="font-bold">Region: </a>{api[0].region}</h1>
                            <h1><a className="font-bold">Sub Region: </a>{api[0].subregion}</h1>
                            <h1><a className="font-bold">Capital: </a>{api[0].capital}</h1>
                        </div>
                        <div>
                            <h1><a className="font-bold">Top Level Domain: </a>{domain}</h1>
                            <h1><a className="font-bold">Currency: </a>{api[0].currencies[nativeCurrency].name}</h1>
                            <h1><a className="font-bold">Languages: </a>{languages}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    

}

export default Page