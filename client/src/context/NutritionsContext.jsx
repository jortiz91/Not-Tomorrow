import { createContext, useReducer } from 'react'

export const NutritionsContext = createContext()

export const nutritionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUTRITIONS':
      return {
        nutritions: action.payload
      }
    case 'CREATE_NUTRITION':
      return {
        nutritions: [action.payload, ...state.nutritions]
      }
    case 'DELETE_NUTRITION':
      return {
        nutritions: state.nutritions.filter((n) => n._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const NutritionsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nutritionsReducer, { nutritions: null })

  return (
    <NutritionsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NutritionsContext.Provider>
  )
}
