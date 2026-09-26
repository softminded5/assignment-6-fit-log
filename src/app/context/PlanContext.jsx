"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [savedExercises, setSavedExercises] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Load plan and saved exercises from localStorage
    useEffect(() => {
        const savedPlan = localStorage.getItem("fitlog-plan");
        const savedExercises = localStorage.getItem("fitlog-saved");

        if (savedPlan) {
            try {
                setPlan(JSON.parse(savedPlan));
            } catch (error) {
                console.error("Failed to load saved plan:", error);
            }
        }

        if (savedExercises) {
            try {
                setSavedExercises(JSON.parse(savedExercises));
            } catch (error) {
                console.error("Failed to load saved exercises:", error);
            }
        }

        setLoaded(true);
    }, []);

    // Save plan and saved exercises
    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(plan)
        );

        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(savedExercises)
        );
    }, [plan, savedExercises, loaded]);

    // Add exercise to today's plan
    const addToPlan = (exercise) => {
        setPlan((currentPlan) => {
            if (currentPlan.some((item) => item.id === exercise.id)) {
                return currentPlan;
            }

            if (currentPlan.length >= 5) {
                return currentPlan;
            }

            return [...currentPlan, exercise];
        });
    };

    // Remove exercise from today's plan
    const removeFromPlan = (id) => {
        setPlan((currentPlan) =>
            currentPlan.filter((exercise) => exercise.id !== id)
        );
    };

    // Mark exercise as done
    const markAsDone = (id) => {
        setPlan((currentPlan) =>
            currentPlan.filter((exercise) => exercise.id !== id)
        );
    };

    // Save exercise for later
    const saveExercise = (exercise) => {
        setSavedExercises((currentSaved) => {
            if (
                currentSaved.some(
                    (item) => item.id === exercise.id
                )
            ) {
                return currentSaved;
            }

            return [...currentSaved, exercise];
        });
    };

    // Remove exercise from Saved
    const removeSavedExercise = (id) => {
        setSavedExercises((currentSaved) =>
            currentSaved.filter(
                (exercise) => exercise.id !== id
            )
        );
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                addToPlan,
                removeFromPlan,
                markAsDone,
                savedExercises,
                saveExercise,
                removeSavedExercise,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    return useContext(PlanContext);
};
