import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }
  return (
    <div className="footer">
      <div className="footerContainer text-center">
        <p className="m-0">
        <b>OzTrip</b>
           &copy; All rights reserved {getCurrentYear()}
        </p>
        <div className="socialIcons">
          <a className='text-dark' href=""><FaFacebook size='1.5rem' style={{marginLeft:'1rem'}}/></a>
          <a className='text-dark' href=""><FaInstagram size='1.5rem' style={{marginLeft:'1rem'}}/></a>
          <a className='text-dark' href=""><FaTiktok size='1.5rem' style={{marginLeft:'1rem'}}/></a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer