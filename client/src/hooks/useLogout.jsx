import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { workoutdispatch: workoutsDis } = useWorkoutsContext()

  const logout = () => {
    localStorage.removeItem('user')

    dispatch({ type: 'LOGOUT' })
    workoutsDis({ type: 'SET_WORKOUTS', payload: null })
  }
  return { logout }
}
