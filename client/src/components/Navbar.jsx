import { Link } from 'react-router-dom'

const Navbar = () => {
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
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
