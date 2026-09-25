"use client";

import { usePlan } from "../context/PlanContext";
import { toast } from "sonner";

const PlanActions = ({ exercise }) => {
    const {
        plan,
        addToPlan,
        savedExercises,
        saveExercise,
        removeSavedExercise,
    } = usePlan();

    const alreadySaved = savedExercises.some(
        (item) => item.id === exercise.id
    );

    const handleSave = () => {
        if (alreadySaved) {
            removeSavedExercise(exercise.id);
            toast.info("Removed from saved.");
            return;
        }

        saveExercise(exercise);
        toast.success("Saved for later.");
    };

    const handleAdd = () => {
        if (plan.some((item) => item.id === exercise.id)) {
            toast.info("This exercise is already in today's plan.");
            return;
        }

        if (plan.length >= 5) {
            toast.error("Your plan is full. You can add up to 5 exercises.");
            return;
        }

        addToPlan(exercise);
        toast.success("Added to today's plan.");
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleAdd}
                className="mt-5 rounded-md bg-[#baff00] px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#ceea7f]"
            >
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                onClick={handleSave}
                className="mt-5 ml-5 rounded-md border px-5 py-3 text-sm font-bold uppercase transition hover:bg-[#ceea7f] hover:text-lime-400"
            >
                {alreadySaved ? "Remove from saved" : "Save for later"}
            </button>
        </div>
    );
};

export default PlanActions;
