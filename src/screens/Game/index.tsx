import { useCallback, useEffect } from 'react'
import { useExercises } from '../../stores'
import Game from './Game'

function GameContainer() {
  const { exercises, fetchExercises } = useExercises()

  const initialFetch = useCallback(async () => {
    await fetchExercises()
  }, [fetchExercises])

  useEffect(() => {
    initialFetch()
  }, [initialFetch])

  return <Game exercises={exercises} />
}

export default GameContainer
