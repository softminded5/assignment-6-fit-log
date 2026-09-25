import React from 'react';
import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({ exercises }) => {
    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                />
            ))}
        </div>
    );
};

export default ExerciseList;