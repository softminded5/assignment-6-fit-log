const ExerciseCard = ({ exercise }) => {
  return (
    <article className="group overflow-hidden rounded-3xl bg-gray-00 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-gray-900 backdrop-blur-sm">
          ⭐ {exercise.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-sm">
          {exercise.equipment}
        </p>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-xs leading-6 text-gray-300">
          {exercise.description}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
          <div>
            <p className="font-semibold text-gray-300">
              {exercise.duration} min
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-300">
              {exercise.caloriesBurned} Kcal
            </p>
          
          </div>

          <div>
            <p className="font-semibold text-gray-300">
              {exercise.sets} × {exercise.reps} Sets/Reps
            </p>
           
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExerciseCard;
