import { NutritionsContext } from '../context/NutritionsContext'
import { useContext } from 'react'

export const useNutritionsContext = () => {
  const context = useContext(NutritionsContext)

  if (!context) {
    throw Error(
      'useNutritionscontext must be used inside an NutritionContextProvider'
    )
  }

  return context
}
