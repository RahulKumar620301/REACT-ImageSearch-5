import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <p className='text-end py-2 bg-dark'>
      <Link to="" className='btn btn-dark btn-sm me-3'>Images</Link>
      <Link to="/videos" className='btn btn-dark btn-sm me-3'>Videos</Link>

    </p>
    <Outlet/>
    </>
  )
}

export default App
