declare interface ExercisesStore {
  currentExercise: number
  exercises: FirebaseFirestoreTypes.DocumentData
  fetchExercises(): Promise<void>
  getCurrentExercise(): Exercise
  nextExercise(): void
  previousExercise(): void
}
