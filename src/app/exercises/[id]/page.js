const ExerciseDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercise");
  }

  const exercise = await response.json();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src={exercise.image}
            alt={exercise.name}
            className="h-full max-h-[600px] w-full object-cover"
          />
        </div>

        {/* Information */}
        <div>
          

          <h1 className="text-4xl font-bold ">
            {exercise.name}
          </h1>

          <p className="mt-6 leading-7 text-gray-600">
            {exercise.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-300 px-3 py-1 text-sm font-semibold text-black "
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xl font-bold">
                {exercise.duration}
              </p>
              <p className="text-sm text-gray-500">
                Minutes
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xl font-bold">
                {exercise.caloriesBurned}
              </p>
              <p className="text-sm text-gray-500">
                Calories
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xl font-bold">
                {exercise.sets}
              </p>
              <p className="text-sm text-gray-500">
                Sets
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xl font-bold">
                {exercise.reps}
              </p>
              <p className="text-sm text-gray-500">
                Reps
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-600"
                >
                  <span className="font-bold text-green-600">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetails;
