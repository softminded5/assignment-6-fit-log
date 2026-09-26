"use client";

import Link from "next/link";
import { useState } from "react";
import PlanWorkoutCard from "./PlanWorkoutCard";
import { usePlan } from "../context/PlanContext";
import { toast } from "sonner";




const MyPlan = () => {
    const {
        plan,
        removeFromPlan,
        markAsDone,
        savedExercises,
        removeSavedExercise,
    } = usePlan();


    const [activeTab, setActiveTab] = useState("today");

    const currentExercises =
        activeTab === "today" ? plan : savedExercises;

    const totalMinutes = currentExercises.reduce(
        (total, exercise) => total + exercise.duration,
        0
    );

    const totalCalories = currentExercises.reduce(
        (total, exercise) => total + exercise.caloriesBurned,
        0
    );

    const metrics = [
        {
            label: "Exercises",
            value: currentExercises.length,
        },
        {
            label: "Minutes",
            value: totalMinutes,
        },
        {
            label: "Calories",
            value: totalCalories,
        },
    ];



    return (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black tracking-tight">
                    MY PLAN
                </h1>

                <p className="mt-2 text-gray-300">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                    >
                        <p className="text-sm font-medium text-gray-500">
                            {metric.label}
                        </p>

                        <p className="mt-2 text-3xl font-black text-gray-900">
                            {metric.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="mt-10 border-b border-gray-200">
                <div className="flex gap-8">
                    <button
                        type="button"
                        onClick={() => setActiveTab("today")}
                        className={`border-b-2 pb-3 text-sm font-semibold transition ${activeTab === "today"
                            ? "border-lime-300 text-lime-300"
                            : "border-transparent text-gray-300 hover:text-lime-300"
                            }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("saved")}
                        className={`border-b-2 pb-3 text-sm font-semibold transition ${activeTab === "saved"
                            ? "border-lime-300 text-lime-300"
                            : "border-transparent text-gray-300 hover:text-lime-300"
                            }`}
                    >
                        Saved
                    </button>
                </div>
            </div>

            {/* Content */}


            <div className="mt-8">
                {activeTab === "today" ? (
                    // TODAY'S PLAN
                    plan.length === 0 ? (
                        <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 text-center">
                            <h2 className="text-2xl font-black tracking-tight text-gray-900">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-400"
                            >
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {plan.map((exercise) => (
                                <PlanWorkoutCard
                                    key={exercise.id}
                                    exercise={exercise}
                                    onRemove={(id) => {
                                        removeFromPlan(id);
                                        toast.info("Removed from today's plan.");
                                    }}
                                    onDone={(id) => {
                                        markAsDone(id);
                                        toast.success("Exercise marked as done.");
                                    }}
                                />
                            ))}
                        </div>
                    )
                ) : (
                    // SAVED
                    savedExercises.length === 0 ? (
                        <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 text-center">
                            <h2 className="text-2xl font-black tracking-tight text-gray-900">
                                NOTHING SAVED YET
                            </h2>

                            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                                Save an exercise for later and it will appear here.
                            </p>

                            <Link
                                href="/"
                                className="mt-6 rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-400"
                            >
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {savedExercises.map((exercise) => (
                                <PlanWorkoutCard
                                    key={exercise.id}
                                    exercise={exercise}
                                    isSaved={true}
                                    onRemove={(id) => {
                                        removeSavedExercise(id);
                                        toast.info("Removed from saved.");
                                    }}
                                    onDone={() => { }}
                                />

                            ))}
                        </div>
                    )
                )}
            </div>



        </main>
    );
};

export default MyPlan;
