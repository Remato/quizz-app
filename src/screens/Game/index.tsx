import { useCallback, useEffect, useState } from 'react'
import { useExercises } from '../../stores'
import Game from './Game'

function GameContainer() {
  const [loading, setLoading] = useState(false)
  const { exercises, fetchExercises, currentExercise } = useExercises()

  const initialFetch = useCallback(async () => {
    setLoading(true)
    await fetchExercises()
    setLoading(false)
  }, [fetchExercises])

  useEffect(() => {
    initialFetch()
  }, [initialFetch])

  return (
    <Game exercises={exercises} current={currentExercise} loading={loading} />
  )
}

export default GameContainer
