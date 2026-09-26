import Banner from "./components/Banner";
import ExerciseList from "./components/ExerciseList";



const Page = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const exercises = await response.json();

  return (
    <div>
      <Banner />

      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default Page;
