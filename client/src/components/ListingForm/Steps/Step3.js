import React from "react";
import Select from "react-select";

const optionAmmenities = [
	{ value: "parking", label: "Parking" },
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
const Step3 = () => {
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
	return (
		<>
			<h1 className="margin-top col-12">
				Let's guests know what makes your campsite special!
			</h1>

			<form>
				<div className="flex-column margin-top">
					<label>Terrain:</label>
					<Select
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
						options={optionAmmenities}
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
			</form>
		</>
	);
};
export default Step3;
