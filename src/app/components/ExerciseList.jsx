"use client";

import ExerciseCard from "./ExerciseCard";
import { usePlan } from "../context/PlanContext";

const ExerciseList = ({ exercises }) => {
  const { addToPlan } = usePlan();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex-col justify-items-start mb-5" >
        <h2 className="text-3xl font-bold ">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-gray-300">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onAdd={addToPlan}
          />
        ))}
      </div>
    </section>
  );
};

export default ExerciseList;
