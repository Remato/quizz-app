import { create } from 'zustand'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

const useExercises = create<ExercisesStore>((set) => ({
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
}))

export default useExercises
