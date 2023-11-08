import CountryList from "@/components/CountryList"
import InputSearch from "./InputSearch"
import FilterButton from "../Utilities/FilterButton"

const Header = () => {
    return (
        <div className="lg:flex lg:justify-between lg:items-center px-8 mx-5 my-5">
            <InputSearch/>
            <FilterButton/>
        </div>
    )
}

export default Header