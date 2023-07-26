import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useNutritionsContext } from '../hooks/useNutritionsContext'
import NutritionDetails from '../components/NutritionDetails'

const Home = () => {
  const { workouts, workoutdispatch } = useWorkoutsContext()
  const { nutritions, dispatch } = useNutritionsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: { Authorization: `Bearer ${user.token}` }
      })
      const json = await response.json()

      if (response.ok) {
        workoutdispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }
    const fetchNutritions = async () => {
      const response = await fetch('/api/nutrition', {
        headers: { Authorization: `Bearer ${user.token}` }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_NUTRITIONS', payload: json })
      }
    }
    if (user) {
      fetchWorkouts()
      fetchNutritions()
    }
  }, [dispatch, workoutdispatch, user])

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <div className="nutritions">
        {nutritions &&
          nutritions.map((nutrition) => (
            <NutritionDetails key={nutrition._id} nutrition={nutrition} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
