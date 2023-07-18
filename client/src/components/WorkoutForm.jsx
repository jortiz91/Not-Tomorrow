import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()
  const [title, setTitle] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const [e, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!user) {
      setError('You must be logged in to create a workout')
      return
    }

    const workout = { title, weight, reps }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.e)
    }
    if (response.ok) {
      setTitle('')
      setWeight('')
      setReps('')
      setError(null)
      console.log('Workout created successfully!', json)
      dispatch({ type: 'CREATE_WORKOUT', payload: json })
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create a new Workout</h3>
      <label>Name of Exercise:</label>
      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <label>Weight (in lb):</label>
      <input
        type="number"
        onChange={(event) => setWeight(event.target.value)}
        value={weight}
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
