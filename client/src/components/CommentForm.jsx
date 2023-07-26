import { useState } from 'react'
// import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'

const CommentForm = ({ id }) => {
  const { user } = useAuthContext()
  const [content, setContent] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    const comment = { content: content, userEmail: user.email, nutrition: id }

    const response = await fetch(`/api/nutrition/${id}`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    })

    // const comment = await axios.post(
    //   `http://localhost:3001/api/nutrition/${id}`,
    //   { content: content, userEmail: user.email, nutrition: id }
    // )
  }
  const handleChange = (e) => {
    setContent(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="make a comment"
          value={content}
        />
        <button type="submit">comment</button>
      </form>
    </div>
  )
}
export default CommentForm
