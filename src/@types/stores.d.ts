declare interface ExercisesStore {
  exercises: FirebaseFirestoreTypes.DocumentData
  fetchExercises(): Promise<void>
}
