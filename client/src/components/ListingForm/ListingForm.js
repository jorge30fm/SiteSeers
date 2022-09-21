import React, { useState } from "react";
import "./ListingForm.css";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";

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
			{step === 4 && <Step4 />}
			{step === 5 && <Step5 />}
			{step === 6 && <Step6 />}
			{step === 7 && <Step7 />}
			{step === 8 && <Step8 />}

			{step === 8 && <button className="btn">Submit</button>}
			<button onClick={handleClick}>Next page</button>
		</div>
	);
};

export default ListingForm;
