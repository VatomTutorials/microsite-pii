import { useNavigate } from "react-router-dom";
import { useExperience } from "@vatom/experience-sdk";
import './Common.css'


const AboutPage = () => {
  const navigate = useNavigate();
  const { navigateToExternalBrowser } = useExperience();

  return (
		<div>
			<h1>About page</h1>
			<h3>v 0.0.001</h3>
			
			<button
				onClick={() => {
					navigate("/home");
				}}
			>
				Home
			</button>
			---
			<button
				onClick={() => {
					navigateToExternalBrowser('https://github.com/VatomTutorials/microsite-pii');
				}}
			>
				Get source code
			</button>
		</div>
  );
}
//
export default AboutPage;