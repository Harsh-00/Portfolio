import About from "./comp/About";
import Hero from "./comp/Hero";
import Navbar from "./comp/Navbar";
import Projects from "./comp/Projects";
import Skills from "./comp/Skills";
import SpaceCanvas from "./comp/Space";
const App = () => {
	return (
		<div className="relative h-full ">
			<SpaceCanvas />
			<div className="max-w-7xl mx-auto ">
				<Navbar />
				<Hero />
				<About />
				<Skills />
				<Projects />
			</div>
		</div>
	);
};

export default App;
