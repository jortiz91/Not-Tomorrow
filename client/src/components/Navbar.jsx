import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
const Navbar = () => {
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="wow">
            Train Today,
            <br /> Not Tomorrow
          </h1>
          <div className="bounce"></div>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
