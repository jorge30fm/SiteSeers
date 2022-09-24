import React from 'react';
import Grill from "@mui/icons-material/OutdoorGrill";
import Fire from "@mui/icons-material/Fireplace";
import Shower from "@mui/icons-material/Shower";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PetsIcon from "@mui/icons-material/Pets";
import WcIcon from "@mui/icons-material/Wc";
import WaterIcon from "@mui/icons-material/Water";
import DeleteIcon from "@mui/icons-material/Delete";
import HotTubIcon from "@mui/icons-material/HotTub";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import WifiIcon from "@mui/icons-material/Wifi";

const AmenitiesDisplay = ({campsite}) => {
return (
    <section className='margin-top'>
					<h3>Amenties</h3>
					<div>
						{campsite.amenities.parking && <LocalParkingIcon />}
						{campsite.amenities.wheelchairAccessible && <AccessibleIcon />}
						{campsite.amenities.petAllowed && <PetsIcon />}
						{campsite.amenities.toilets && <WcIcon />}
						{campsite.amenities.campfire && <Fire />}
						{campsite.amenities.water && <WaterIcon />}
						{campsite.amenities.showers && <Shower />}
						{campsite.amenities.trash && <DeleteIcon />}
						{campsite.amenities.hotTub && <HotTubIcon />}
						{campsite.amenities.picnicTable && <TableRestaurantIcon />}
						{campsite.amenities.wifi && <WifiIcon />}
						{campsite.amenities.cookingEquipment && <Grill />}
					</div>
				</section>
)
}

export default AmenitiesDisplay;
