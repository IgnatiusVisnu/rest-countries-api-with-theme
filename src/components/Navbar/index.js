"use client"

import { useTheme } from "next-themes"
import { Moon } from "@phosphor-icons/react"

const Navbar = () => {
    const {theme, setTheme} = useTheme()
    return (
        <div className="navbar flex justify-between items-center p-5 px-16 shadow-xl">
            <h1 className="font-bold text-2xl">Where in the world</h1>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex gap-2">
            <Moon size={20} />Dark mode
            </button>
        </div>
    )
}

export default Navbar