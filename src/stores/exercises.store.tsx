import { create } from 'zustand'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

const useExercises = create<ExercisesStore>((set, get) => ({
  currentExercise: 0,

  exercises: [],

  fetchExercises: async (): Promise<void> => {
    const ex = await firestore()
      .collection('Exercises')
      .doc('en-de')
      .collection('colors')
      .get()

    const newExercises: FirebaseFirestoreTypes.DocumentData[] = []
    for (const exercise of ex.docs) {
      newExercises.push(exercise.data())
    }

    set(() => ({ exercises: newExercises }))
  },

  getCurrentExercise: () => {
    return get().exercises[get().currentExercise]
  },

  nextExercise: () => {
    if (get().currentExercise !== get().exercises.length - 1) {
      set((prevState) => ({ currentExercise: prevState.currentExercise + 1 }))
    }
  },

  previousExercise: () => {
    if (get().currentExercise !== 0) {
      set((prevState) => ({ currentExercise: prevState.currentExercise - 1 }))
    }
  },
}))

export default useExercises
