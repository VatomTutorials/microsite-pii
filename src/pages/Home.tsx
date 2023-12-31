import React from "react";
import { useNavigate } from "react-router-dom";
import { useExperience, useUser } from "@vatom/experience-sdk";
import { AddPiiForm, AddPiiFormData } from "../components/AddPiiForm"
import { FetchPiiForm } from "../components/FetchPiiForm"
import { Button } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import './Common.css';


interface PiiObject {
	[key: string]: string;
}


const HomePage = () => {
  const [recentFetch, setRecentFetch] = React.useState<string>("");
	const navigate = useNavigate();
	const { navigateToWallet } = useExperience();
  const { campaignUserInfo, updateUserCampaignInfo } = useUser();


	const addItem = (item: AddPiiFormData) => {
		var newPii: PiiObject = {};
		
		newPii[ item.piiKey ] = item.piiValue;
		console.log("Adding:", item, newPii);
		
    //statusText = `Recently added( ${item.piiKey}: ${item.piiValue} )`;
    //console.log(statusText);

    updateUserCampaignInfo( newPii );
	}// addItem()


	const fetchItemByKey = (key: string) => {
		const info = campaignUserInfo as PiiObject;
		
		if (! info){
			const displayMessage: string = "Fetch is only available under ExperienceProvider";
			console.log(displayMessage);
			setRecentFetch(displayMessage);
			return;
		}
		
		console.log("About to Fetch from key: ", key, info);
		
		const value = info[key];
		console.log("Fetch by key:", key, value);
		setRecentFetch(`Recently fetched( ${key}: ${value} )`);
	}// fetchItem()


	return (
		<div>
			<div className='border-box'>
				<AddPiiForm onSubmit={addItem} />
			</div>
			<br/>
			<div className='border-box'>
				<FetchPiiForm onSubmit={fetchItemByKey} />
				{recentFetch}
			</div>
			
			<h1>Micro-Site Home</h1>
			<Button
				color="cyan"
				appearance="primary"
				onClick={() => {
					navigate("/about");
				}}
			>
				About
			</Button>
			&nbsp;	&nbsp;	&nbsp;	&nbsp;
			<Button
				color="cyan"
				appearance="primary"
				onClick={() => {
					navigateToWallet();
				}}
			>
				Wallet
			</Button>
		</div>
	);
}
//
export default HomePage;
