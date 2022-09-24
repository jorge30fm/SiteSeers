import React, { useState } from "react";
import "./ListingForm.css";
import Step1 from "./Steps/Step1.js";
import Step2 from "./Steps/Step2.js";
import Step3 from "./Steps/Step3.js";
import Step4 from "./Steps/Step4.js";
import Step5 from "./Steps/Step5.js";
import Step6 from "./Steps/Step6.js";
import Step7 from "./Steps/Step7.js";
import Step8 from "./Steps/Step8.js";

const ListingForm = () => {
	const [step, setStep] = useState(1);
	const [campID, setCampID] = useState("");

	const handleClick = () => {
		setStep(step + 1);
	};
	return (
		<div className="margin-top">
			{step === 1 && (
				<Step1 step={step} setStep={setStep} setCampID={setCampID} />
			)}
			{step === 2 &&
        <Step2 step={step} setStep={setStep} campID={campID}/>
      }
			{step === 3 && <Step3 step={step} setStep={setStep} campID={campID} />}
			{step === 4 && <Step4 step={step} setStep={setStep} campID={campID}/>}
			{step === 5 && <Step5 step={step} setStep={setStep} campID={campID} />}
			{step === 6 && <Step6 step={step} setStep={setStep} campID={campID}/>}
			{step === 7 && <Step7 step={step} setStep={setStep} campID={campID}/>}
			{step === 8 && <Step8 step={step} setStep={setStep} campID={campID}/>}

		</div>
	);
};

export default ListingForm;
