"use client"
import {useEffect} from 'react';
import { CaretDown } from "@phosphor-icons/react"

const FilterButton = () => {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it (wajib pake useEffect biar ga error undefined window nya)
  useEffect(() => {
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }, []);
  
  return (
    <div className="dropdown shadow-xl">
    <button onClick={myFunction} className="dropbtn flex justify-between items-center gap-10">
     
      Filter by Region <CaretDown size={15}/>
    
    </button>
      <div id="myDropdown" className="dropdown-content">
    <a href={`/filter/africa`}>Africa</a>
    <a href={`/filter/america`}>America</a>
    <a href={`/filter/asia`}>Asia</a>
    <a href={`/filter/europe`}>Europe</a>
    <a href={`/filter/oceania`}>Oceania</a>
      </div>
  </div>
  )
}

export default FilterButton