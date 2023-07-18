import { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <button className="log2">Sign Up</button>
    </form>
  )
}

export default Signup
