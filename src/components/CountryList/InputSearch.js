"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (e) => {
        e.preventDefault()
        const keyword = searchRef.current.value
        if (!keyword) {
            return
        }
        router.push(`/search/${keyword}`)
    }
    return (
        <div className="relative form">
            <form onSubmit={handleSearch}>
                <input 
                    placeholder="" 
                    className="w-full p-2 rounded shadow-xl my-2"
                    ref={searchRef}
                />
            </form>
            <button className="absolute top-2 right-1" onClick={handleSearch}></button>
        </div>
    )
}

export default InputSearch