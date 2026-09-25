import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({ exercises }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex-col justify-items-start mb-5" >
        <h2 className="text-3xl font-bold ">
        THE LIBRARY
        </h2>

        <p className="mt-2 text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </section>
  );
};

export default ExerciseList;
