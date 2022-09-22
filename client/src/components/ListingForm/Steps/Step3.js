import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import {
	ADD_ACTIVITIES,
	ADD_TERRAIN,
	ADD_AMENITIES,
} from "../../../utils/mutations";
import { useMutation } from "@apollo/client";

const optionAmenities = [
	{ value: "parktrueing", label: "Parking" },
	{ value: "wheelchairAccessible", label: "Wheelchair Accessible" },
	{ value: "petAllowed", label: "Pets Allowed" },
	{ value: "toilets", label: "Toilets" },
	{ value: "campfire", label: "Campfire" },
	{ value: "water", label: "Water" },
	{ value: "showers", label: "Showers" },
	{ value: "trash", label: "Trash" },
	{ value: "hotTub", label: "Hot Tub" },
	{ value: "picnicTable", label: "Picnic Table" },
	{ value: "wifi", label: "Wifi" },
	{ value: "cookingEquipment", label: "Cooking Equipment" },
];
const optionActivities = [
	{ value: "fishing", label: "Fishing" },
	{ value: "paddling", label: "Paddling" },
	{ value: "birdWatching", label: "Bird Watching" },
	{ value: "wildlifeWatching", label: "Wildlife Watching" },
	{ value: "biking", label: "Biking" },
	{ value: "boating", label: "Boating" },
	{ value: "offRoading", label: "Off-Roading" },
	{ value: "climbing", label: "Climbing" },
	{ value: "snowSports", label: "Snow Sports" },
	{ value: "horsebackRiding", label: "Horseback Riding" },
	{ value: "surfing", label: "Surfing" },
	{ value: "windSport", label: "Wind Sport" },
];
const optionTerrain = [
	{ value: "lake", label: "Lake" },
	{ value: "beach", label: "Beach" },
	{ value: "farm", label: "Farm" },
	{ value: "forest", label: "Forest" },
	{ value: "river", label: "River" },
	{ value: "hotSpring", label: "Hot Spring" },
	{ value: "swimmingHole", label: "Swimming Hole" },
	{ value: "desert", label: "Desert" },
	{ value: "cave", label: "Cave" },
];

const Step3 = (props) => {
	const [addTerrain] = useMutation(ADD_TERRAIN);
	const [addActivities] = useMutation(ADD_ACTIVITIES);
	const [addAmenities] = useMutation(ADD_AMENITIES);
	const [selectedTerrain, setSelectedTerrain] = useState([]);
	const [selectedAmenity, setSelectedAmenity] = useState([]);
	const [selectedActivity, setSelectedActivity] = useState([]);
	function customTheme(theme) {
		return {
			...theme,
			borderRadius: 10,
			colors: {
				primary25: "#96a68d",
				neutral0: "field",
				neutral10: "#96a68d",
			},
		};
	}

	function handleTerrainChange(e) {
		setSelectedTerrain(Array.isArray(e) ? e.map((x) => x.value) : []);
	}
	function handleAmenityChange(e) {
		setSelectedAmenity(Array.isArray(e) ? e.map((x) => x.value) : []);
	}
	function handleActivityChange(e) {
		setSelectedActivity(Array.isArray(e) ? e.map((x) => x.value) : []);
	}

	let terrain = useRef({ campID: props.campID });
	let amenities = useRef({ campID: props.campID });
	let activities = useRef({ campID: props.campID });

	useEffect(() => {
		if (selectedTerrain.length) {
			terrain.current = Object.assign(
				...selectedTerrain.map((k) => ({ [k]: true }))
			);
			terrain.current.campID = props.campID;
		} else {
			terrain.current = { campID: props.campID };
		}
		if (selectedActivity.length) {
			activities.current = Object.assign(
				...selectedActivity.map((k) => ({ [k]: true }))
			);
			activities.current.campID = props.campID;
		} else {
			activities.current = { campID: props.campID };
		}
		if (selectedAmenity.length) {
			amenities.current = Object.assign(
				...selectedAmenity.map((k) => ({ [k]: true }))
			);
			amenities.current.campID = props.campID;
		} else {
			amenities.current = { campID: props.campID };
		}
	});

	const handleClick = async () => {
		try {
			await addTerrain({
				variables: terrain.current ,
			});
			await addActivities({
				variables: activities.current
			});
			await addAmenities({
				variables: amenities.current
			})
			props.setStep(4)
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<h1 className="margin-top col-12">
				Let guests know what makes your campsite special!
			</h1>

			<div>
				<div className="flex-column margin-top">
					<label>Terrain:</label>
					<Select
						value={optionTerrain.filter((obj) =>
							selectedTerrain.includes(obj.value)
						)}
						onChange={handleTerrainChange}
						options={optionTerrain}
						theme={customTheme}
						className="flex-column input-margin "
						placeholder="Select Terrain Types"
						isSearchable
						isMulti
						autoFocus
						noOptionsMessage={() => "No more terrains :("}
					/>
				</div>
				<div className="flex-column margin-top">
					<label>Amenities:</label>
					<Select
						value={optionAmenities.filter((obj) =>
							selectedAmenity.includes(obj.value)
						)}
						onChange={handleAmenityChange}
						options={optionAmenities}
						theme={customTheme}
						className="flex-column input-margin "
						placeholder="Select Amenities"
						isSearchable
						isMulti
						autoFocus
						noOptionsMessage={() => "No more amenities :("}
					/>
				</div>
				<div className="flex-column margin-top">
					<label>Activities:</label>
					<Select
						value={optionActivities.filter((obj) =>
							selectedActivity.includes(obj.value)
						)}
						onChange={handleActivityChange}
						options={optionActivities}
						theme={customTheme}
						className="flex-column input-margin "
						placeholder="Select Activities"
						isSearchable
						isMulti
						autoFocus
						noOptionsMessage={() => "No more activities :("}
					/>
				</div>
				<div className="flex-row justify-center">
				<button className="btn " onClick={handleClick}>
					Next
				</button>
				</div>
			</div>
		</>
	);
};
export default Step3;
