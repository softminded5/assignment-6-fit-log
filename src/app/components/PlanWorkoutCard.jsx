import Link from "next/link";


const PlanWorkoutCard = ({ exercise, onRemove, onDone, isSaved }) => {

    return (
        <article className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
            {/* Thumbnail */}
            <img
                src={exercise.image}
                alt={exercise.name}
                className="h-32 w-full rounded-xl object-cover sm:h-24 sm:w-32"
            />

            {/* Main content */}
            <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                    {exercise.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    {exercise.equipment}
                </p>

                {/* Stats */}
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>
                        ⏱ {exercise.duration} min
                    </span>

                    <span>
                        🔥 {exercise.caloriesBurned} kcal
                    </span>

                    <span>
                        ⭐ {exercise.rating}
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2 sm:flex-col lg:flex-row">
                <Link
                    href={`/exercises/${exercise.id}`}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#678c02]"
                >
                    View Details
                </Link>


                {!isSaved && (
                    <button
                        type="button"
                        onClick={() => onDone(exercise.id)}
                        className="rounded-lg bg-[#baff00] px-3 py-2 text-sm font-semibold text-black transition hover:bg-[#678c02]"
                    >
                       ✔︎ Mark as Done
                    </button>
                )}


                <button
                    type="button"
                    onClick={() => onRemove(exercise.id)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    aria-label={`Remove ${exercise.name}`}
                >
                    X
                </button>
            </div>
        </article>
    );
};

export default PlanWorkoutCard;
