import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
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
        <div>
          <Link to="/">
            <h1>Nutrition</h1>
          </Link>
        </div>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
