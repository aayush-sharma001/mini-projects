import Navbar from "./Navbar";
import LinkButton from "./LinkButton";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
        <p className="text-white text-xl font-semibold mb-6">
          Mini Projects Using React and Tailwind
        </p>
        <LinkButton to="/project1">Project 1</LinkButton>
        <LinkButton to="/project2">Project 2</LinkButton>
        <LinkButton to="/project3">Project 3</LinkButton>
        <LinkButton to="/imageSlider">Gallery</LinkButton>

      </div>
    </>
  );
}

export default Home;
