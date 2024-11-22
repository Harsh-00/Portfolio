import About from "./comp/About";
import Contact from "./comp/Contact";
import Experience from "./comp/Experience";
import Hero from "./comp/Hero";
import Navbar from "./comp/Navbar";
import Projects from "./comp/Projects";
import Skills from "./comp/Skills";
import SpaceCanvas from "./comp/Space";
const App = () => {
	return (
		<div className="relative h-full overflow-x-hidden ">
			<SpaceCanvas />
			<div className=" mx-auto ">
				<Navbar />
				<Hero />
				<About />
				<Skills /> 
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};

export default App;
