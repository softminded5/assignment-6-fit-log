import Link from "next/link";

const ExerciseCard = ({ exercise }) => {

    return (
        <Link href={`/exercises/${exercise.id}`}>
            <div className="group overflow-hidden rounded-3xl border border-[#252830] bg-[#262d3de2] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
                    <p className="mt-4 line-clamp-2 text-xs leading-6 text-gray-300">
                        {exercise.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                        <div>
                            <p className="mt-4 line-clamp-2 text-xs leading-6 text-gray-300">
                                {exercise.duration} min
                            </p>
                        </div>

                        <div>
                            <p className="mt-4 line-clamp-2 text-xs leading-6 text-gray-300">
                                {exercise.caloriesBurned} Kcal
                            </p>

                        </div>

                        <div>
                            <p className="mt-4 line-clamp-2 text-xs leading-6 text-gray-300">
                                {exercise.sets} × {exercise.reps}      Sets / Reps
                            </p>

                        </div>
                    </div>

                    {/* <button
                        type="button"
                        onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            onAdd(exercise);
                        }}
                        className="mt-5 w-full rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                    >
                        Add to Plan
                    </button> */}


                </div>
            </div>
        </Link>
    );
};

export default ExerciseCard;
