## Project Description:-
FitLog is a modern workout and exercise-tracking web application that helps users browse exercises, view detailed workout information, build a personalized daily workout plan, and save exercises for later. Users can add up to five exercises to their daily plan, track workout metrics such as duration and calories, mark exercises as completed, and manage saved exercises through a dedicated interface.


## Technologies Used:-

1. Next.js — App Router, dynamic routes, server-side data fetching
2. React.js — Reusable components and interactive UI
3. Tailwind CSS — Responsive styling and modern UI design
4. JavaScript (ES6+) — Application logic and data handling
5. Context API — Global state management for workout plans and saved exercises
6. localStorage — Persistent storage for plans and saved exercises
7. REST API / Fetch API — Fetching exercise data from the external API
8. Sonner — Toast notifications for user actions
9. Next.js Link — Client-side navigation between pages


## Key Features

1. Exercise Library
Browse a collection of exercises with images, muscle groups, equipment, difficulty, duration, calories, sets, reps, and ratings.

2. Exercise Details
Dynamic exercise pages provide detailed descriptions, workout instructions, equipment, difficulty, sets, reps, duration, calories, and ratings.

3. Today's Workout Plan
Users can create a personalized daily plan with a maximum of five exercises.

4. Saved Exercises
Users can save exercises for later and manage them separately from their daily workout plan.

5. Live Workout Metrics
The plan automatically calculates and displays the number of exercises, total workout minutes, and total calories.

6. Mark Exercises as Done
Users can mark completed exercises, removing them from the active daily plan.

7. Remove Exercises
Exercises can be removed from both the daily plan and saved list.

8. Persistent Data
Workout plans and saved exercises are stored in localStorage, allowing them to remain available after refreshing the page.

9. Toast Notifications
Users receive immediate feedback when adding, removing, saving, or completing exercises.

10. Dynamic Routing
Each exercise has its own dynamic URL, such as:
/exercises/1
/exercises/2

11. Responsive UI
The interface uses Tailwind CSS to adapt the workout cards, navigation, metrics, and layouts across different screen sizes.

12. Navbar Workout Counters
The navigation displays live counts for both My Plan and Saved exercises.

