import { useNavigate } from "react-router-dom";
import { useExperience, useUser } from "@vatom/experience-sdk";
import { AddPiiForm, AddPiiFormData } from "../components/AddPiiForm"
import { FetchPiiForm } from "../components/FetchPiiForm"
import './Common.css'


interface PiiObject {
	[key: string]: string;
}


const HomePage = () => {
	const navigate = useNavigate();
	const { navigateToWallet } = useExperience();
  const { campaignUserInfo, updateUserCampaignInfo } = useUser();


	const addItem = (item: AddPiiFormData) => {
		var newPii: PiiObject = {};
		
		newPii[ item.piiKey ] = item.piiValue;
		console.log("Adding:", item, newPii);
		
    updateUserCampaignInfo( newPii );
	}// addItem()


	const fetchItemByKey = (key: string) => {
		const info = campaignUserInfo as PiiObject;
		const value = info[key];
		console.log("Fetch by key:", key, value);
	}// fetchItem()


	return (
		<div>
			<AddPiiForm onSubmit={addItem} />
			<br/>
			<FetchPiiForm onSubmit={fetchItemByKey} />
			
			<h1>Micro-Site Home</h1>
			<button
				onClick={() => {
					navigate("/about");
				}}
			>
				About
			</button>
			---
			<button
				onClick={() => {
					navigateToWallet();
				}}
			>
				Wallet
			</button>
		</div>
	);
}
//
export default HomePage;
