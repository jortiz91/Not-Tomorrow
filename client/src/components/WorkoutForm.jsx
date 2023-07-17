import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [e, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const workout = { title, load, reps }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.e)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      console.log('Workout created successfully!', json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create a new Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <label>Load (in lb):</label>
      <input
        type="number"
        onChange={(event) => setLoad(event.target.value)}
        value={load}
      />
      <label>Reps:</label>
      <input
        type="number"
        onChange={(event) => setReps(event.target.value)}
        value={reps}
      />
      <button>Create Workout</button>
      {e && <div className="error">{e}</div>}
    </form>
  )
}

export default WorkoutForm
