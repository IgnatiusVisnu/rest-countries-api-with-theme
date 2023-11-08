import Link from "next/link"
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Link href={`/`} className="backbutton mx-5 my-5 shadow-xl"><i className="fa fa-long-arrow-left"></i> Back</Link>

        </>

        
    )
}

export default Header