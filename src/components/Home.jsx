import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black w-100">
                <p className="text-white text-xl font-semibold">Mini Projects Using React and Tailwind</p>
            </div>
            <Link>Project 1</Link>
            <Link>Project 2</Link>
        </>
    )
}

export default Home;