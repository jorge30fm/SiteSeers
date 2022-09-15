const siteData = [
	{
		"name": "Waterston",
		"location": "Chapel Hill",
		"description": "Eaque veritatis nisi error illum.",
		"price": "11",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "East Samantamouth",
		"location": "Chapel Hill",
		"description": "Et eveniet et ea dolorum.",
		"price": "37",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: false",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "North Dovie",
		"location": "Raleigh",
		"description": "Iusto et veniam non quo.",
		"price": "3",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: false",
			"trash: false",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: false",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Hackensack",
		"location": "Miami",
		"description": "Dolores odit molestiae repudiandae dolor.",
		"price": "33",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: false",
			"campfire: true",
			"water: false",
			"showers: false",
			"trash: true",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "West Bryceview",
		"location": "Durham",
		"description": "Voluptatem unde mollitia quo recusandae.",
		"price": "23",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: false",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: false",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: false"
		]
	},
	{
		"name": "Ilafort",
		"location": "Chapel Hill",
		"description": "Accusantium fuga ut quam est.",
		"price": "38",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: false",
			"campfire: true",
			"water: false",
			"showers: false",
			"trash: false",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: false",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Fort Amy",
		"location": "Lynchburg",
		"description": "Vel assumenda et iure ullam.",
		"price": "41",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "North Mariaborough",
		"location": "Dallas",
		"description": "Voluptatem eum eaque fugit id.",
		"price": "7",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: false",
			"trash: false",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Caitlynfield",
		"location": "Los Angeles",
		"description": "Et quo repellendus commodi officiis.",
		"price": "20",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: false",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: false",
			"boating: false",
			"offRoading: false",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Barnstable Town",
		"location": "Atlanta",
		"description": "Placeat molestiae necessitatibus hic laudantium.",
		"price": "3",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: true",
			"hotTub: false",
			"picnicTable: false",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Namebury",
		"location": "Charlotte",
		"description": "Consequatur rerum voluptatem nostrum exercitationem.",
		"price": "17",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: false",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: true",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "O'Connerburgh",
		"location":  "Austin",
		"description": "Quas culpa itaque omnis fuga.",
		"price": "31",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: true",
			"offRoading: true",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Lewisville",
		"location": "Arlington",
		"description": "Magni quo corrupti rerum fuga.",
		"price": "6",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: false",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "East Salvatore",
		"location": "Alexandria",
		"description": "Nihil assumenda hic porro fuga.",
		"price": "29",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: false",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: false",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Raynorville",
		"location": "Alexandria",
		"description": "Ut dicta esse molestiae dolore.",
		"price": "29",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: false",
			"campfire: false",
			"water: false",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: false",
			"boating: false",
			"offRoading: false",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Kristianmouth",
		"location": "Raleigh",
		"description": "Minus quam aut omnis cumque.",
		"price": "22",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: false",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: false"
		]
	},
	{
		"name": "Port Joesph",
		"location": "Raleigh",
		"description": "Omnis quaerat consequatur libero sunt.",
		"price": "34",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: false",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "East Minerva",
		"location":"Chapel Hill",
		"description": "Quos sed qui est maxime.",
		"price": "4",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: true",
			"hotTub: false",
			"picnicTable: false",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: true",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Port Carson",
		"location": "Chapel Hill",
		"description": "Accusantium maxime eligendi aut quis.",
		"price": "9",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: false",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Amarimouth",
		"location":"Chapel Hill",
		"description": "Esse minima animi ab magni.",
		"price": "37",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: false",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "East Cordie",
		"location":"Chapel Hill",
		"description": "Optio non aperiam quos vitae.",
		"price": "6",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: false",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: false",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "Ankundingstead",
		"location": "Chapel Hill",
		"description": "Dolorum modi voluptatem ea officiis.",
		"price": "39",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: false",
			"wildlifeWatching: false",
			"biking: false",
			"boating: true",
			"offRoading: true",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "New Orleans",
		"location":"Chapel Hill",
		"description": "Placeat amet consequatur doloribus illo.",
		"price": "8",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: false",
			"showers: true",
			"trash: false",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Nienowland",
		"location": "Chapel Hill",
		"description": "Ut voluptas ad et ipsum.",
		"price": "37",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: false"
		]
	},
	{
		"name": "East Carleybury",
		"location": "Chapel Hill",
		"description": "Nemo quis amet facilis eum.",
		"price": "22",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: false",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: false",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: false",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "Fort Joshuah",
		"location": "Charlotte",
		"description": "Velit maiores quo eaque perferendis.",
		"price": "33",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: false",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: false",
			"boating: true",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Jabariboro",
		"location": "Charlotte",
		"description": "In sed nobis vel quis.",
		"price": "27",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: false",
			"campfire: false",
			"water: true",
			"showers: false",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Koelpinstad",
		"location": "Charlotte",
		"description": "Numquam dolor corrupti architecto dolorem.",
		"price": "19",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: true",
			"offRoading: true",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Mayaguez",
		"location":"Charlotte",
		"description": "Inventore exercitationem non soluta atque.",
		"price": "47",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: false",
			"offRoading: false",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Lake Reynold",
		"location": "Charlotte",
		"description": "Natus voluptas quod dolorem autem.",
		"price": "20",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: false"
		]
	},
	{
		"name": "Bartolettiland",
		"location": "Mount Airy",
		"description": "Aspernatur sit hic quas voluptatem.",
		"price": "12",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "Trompstad",
		"location":"Mount Airy",
		"description": "Blanditiis atque incidunt enim ea.",
		"price": "38",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: true",
			"picnicTable: false",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: false",
			"biking: false",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Ileneview",
		"location": "Mount Airy",
		"description": "Repellendus qui culpa tempora molestiae.",
		"price": "18",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: false",
			"showers: false",
			"trash: false",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: false",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "New Emilio",
		"location": "Greensboro",
		"description": "Sequi sed quo nemo minus.",
		"price": "48",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: false",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "South Eltonton",
		"location": "Greensboro",
		"description": "Fugiat quas aut error necessitatibus.",
		"price": "19",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "Fairfield",
		"location": "Greensboro",
		"description": "Accusamus numquam quas totam facilis.",
		"price": "20",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: true",
			"trash: true",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Stamford",
		"location": "Greensboro",
		"description": "Vero et ex vel repellendus.",
		"price": "15",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: false",
			"campfire: false",
			"water: false",
			"showers: false",
			"trash: false",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Lake Morton",
		"location": "Greensboro",
		"description": "Quia aut quaerat praesentium velit.",
		"price": "46",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Port Paigeside",
		"location": "Tampa",
		"description": "Et dolores molestias eos sequi.",
		"price": "46",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: false",
			"campfire: true",
			"water: false",
			"showers: false",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "East Orvillestead",
		"location": "Tampa",
		"description": "Numquam consequatur eos praesentium natus.",
		"price": "32",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: false",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "Bothell",
		"location": "Tampa",
		"description": "Omnis omnis quis autem delectus.",
		"price": "28",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: true",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Altoona",
		"location": "Tampa",
		"description": "Eum quibusdam quas delectus repellendus.",
		"price": "30",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: false",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: false",
			"showers: false",
			"trash: true",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: false",
			"wildlifeWatching: false",
			"biking: false",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: false",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Pasadena",
		"location": "Orlando",
		"description": "Voluptate excepturi dolorum placeat sunt.",
		"price": "45",
		"amenities": [
			"parking: false",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: false",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: false"
		]
	},
	{
		"name": "Florissant",
		"location": "Orlando",
		"description": "Ut qui est voluptatum eos.",
		"price": "30",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: true",
			"water: false",
			"showers: false",
			"trash: false",
			"hotTub: false",
			"picnicTable: false",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: false",
			"wildlifeWatching: false",
			"biking: true",
			"boating: false",
			"offRoading: false",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "Aniyaport",
		"location": "Orlando",
		"description": "Qui molestias nemo et odit.",
		"price": "30",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: false",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: false",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: true",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: true",
			"windSport: true"
		]
	},
	{
		"name": "Stephenside",
		"location": "Orlando",
		"description": "Autem eum alias quas enim.",
		"price": "20",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: false",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: false",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: false",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Linniefurt",
		"location":  "Chapel Hill",
		"description": "Non aut autem molestias officia.",
		"price": "38",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: false",
			"toilets: true",
			"campfire: false",
			"water: true",
			"showers: false",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: false",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: true",
			"paddling: true",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: false",
			"boating: false",
			"offRoading: false",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: false",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Fort Jordi",
		"location":  "Chapel Hill",
		"description": "Ipsam placeat ut aspernatur corporis.",
		"price": "40",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: false",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: true",
			"hotTub: true",
			"picnicTable: true",
			"wifi: true",
			"cookingEquipment: false"
		],
		"activities": [
			"fishing: false",
			"paddling: false",
			"birdWatching: true",
			"wildlifeWatching: false",
			"biking: true",
			"boating: false",
			"offRoading: true",
			"climbing: false",
			"snowSports: false",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	},
	{
		"name": "Lake Tommie",
		"location":  "Chapel Hill",
		"description": "Iure omnis reiciendis reprehenderit alias.",
		"price": "9",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: false",
			"petAllowed: true",
			"toilets: true",
			"campfire: true",
			"water: true",
			"showers: false",
			"trash: false",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: true",
			"paddling: false",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: false",
			"boating: true",
			"offRoading: true",
			"climbing: false",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: true"
		]
	},
	{
		"name": "Lemkefort",
		"location":  "Chapel Hill",
		"description": "Quia magni possimus sint dolores.",
		"price": "27",
		"amenities": [
			"parking: true",
			"wheelchairAccessible: true",
			"petAllowed: true",
			"toilets: false",
			"campfire: true",
			"water: true",
			"showers: true",
			"trash: false",
			"hotTub: true",
			"picnicTable: false",
			"wifi: true",
			"cookingEquipment: true"
		],
		"activities": [
			"fishing: false",
			"paddling: true",
			"birdWatching: false",
			"wildlifeWatching: true",
			"biking: true",
			"boating: true",
			"offRoading: true",
			"climbing: true",
			"snowSports: true",
			"horsebackRiding: true",
			"surfing: false",
			"windSport: false"
		]
	}
]

export default siteData;