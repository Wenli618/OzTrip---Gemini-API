import notFound from '../assets/notFound.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FiHome } from 'react-icons/fi'

function NotFound() {
  return (
    <div className='notFound'>
      <img src={notFound} alt="not found image" style={{ width: "40%" }} />
      <Button as={Link} to="/" className='px-5 py-3 fs-4 mt-5'>
          Back to Home
        </Button>

    </div>
  )
}

export default NotFound