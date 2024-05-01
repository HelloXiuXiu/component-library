import { useContext } from 'react'

import { AnimContext } from '../../contexts/initial-states.jsx'


function getState() {
  const initialState = useContext(AnimContext).shuffleChars
  return initialState
}

export default getState
