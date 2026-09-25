
import PlanActions from "../../components/PlanActions";



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
            <div className="grid gap-10 md:grid-cols-2 py-20">
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

                    <p className="my-3 leading-7 text-sm text-gray-400">
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
                    <div className="grid-cols-1 rounded-2xl mt-10 border border-gray-600">

                        <div className="flex flex-row-reverse justify-between px-5">
                            <p className="text-sm font-bold text-gray-400">
                                {exercise.equipment}
                            </p>
                            <p className="text-xs text-gray-400">
                                EQUIPMENT
                            </p>
                        </div>
                        <hr className="border border-gray-600"></hr>


                        <div className="flex flex-row-reverse justify-between px-5">
                            <p className="text-sm font-bold text-gray-400">
                                {exercise.difficulty}
                            </p>
                            <p className="text-xs text-gray-400">
                                DIFFICULTY
                            </p>
                        </div> <hr className="border border-gray-600"></hr>

                        <div className="flex flex-row-reverse justify-between px-5">
                            <p className="text-sm font-bold text-gray-400">
                                {exercise.sets}
                            </p>
                            <p className="text-xs text-gray-400">
                                SETS
                            </p>
                        </div> <hr className="border border-gray-600"></hr>

                        <div className="flex flex-row-reverse justify-between px-5">
                            <p className="text-sm font-bold text-gray-400">
                                {exercise.reps}
                            </p>
                            <p className="text-xs text-gray-400">
                                REPS
                            </p>
                        </div> <hr className="border border-gray-600"></hr>

                        <div className="flex flex-row-reverse justify-between px-5">
                            <p className="text-sm font-bold text-gray-400">
                                {exercise.duration}
                            </p>
                            <p className="text-xs text-gray-400">
                                DURATION
                            </p>
                        </div> <hr className="border border-gray-600"></hr>

                        <div className="flex flex-row-reverse justify-between px-5">
                            <p className="text-sm font-bold text-gray-400">
                                {exercise.caloriesBurned}
                            </p>
                            <p className="text-xs text-gray-400">
                                CALORIES
                            </p>
                        </div> <hr className="border border-gray-600"></hr>

                        <div className="flex flex-row-reverse justify-between px-5">
                            <p className="text-sm font-bold text-gray-400">
                                {exercise.rating}
                            </p>
                            <p className="text-xs text-gray-400">
                                RATING
                            </p>
                        </div>


                    </div>

                    {/* Instructions */}
                    <div className="mt-10">
                        <h2 className="text-2xl">
                            Instructions
                        </h2>

                        <ol>
                            {exercise.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 my-1 leading-7 text-sm text-gray-400"
                                >
                                    <span className="font-bold text-dark-500">
                                        {index + 1}.
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>

                        <PlanActions exercise={exercise} />
                    </div>

                </div>
            </div>
        </main>
    );
};

export default ExerciseDetails;
