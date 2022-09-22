import { gql } from "@apollo/client";

//Login
export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
				firstName
				lastName
				createdAt
				bio
				email
				phone
			}
		}
	}
`;

//addUser
// $password: String! - CH 9/17 during office hours - commented out to get addUser mutation to work.
// 9/18 - CH - red herring about $password: String!.
// Added it back in but... removed it from the user {} part of the mutation, which I think was where the problem was.
export const ADD_USER = gql`
	mutation addUser(
		$username: String!
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
	) {
		addUser(
			username: $username
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
		) {
			token
			user {
				_id
				username
				firstName
				lastName
				email
			}
		}
	}
`;
//editUser
export const EDIT_USER = gql`
	mutation editUser(
		$username: String
		$firstName: String
		$lastName: String
		$email: String
		$password: String
		$phone: String
		$bio: String
		$profilePicture: String
	) {
		editUser(
			username: $username
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			phone: $phone
			bio: $bio
			profilePicture: $profilePicture
		) {
			_id
			username
			firstName
			lastName
			createdAt
			bio
			email
			phone
			profilePicture
		}
	}
`;

//addReservation
export const ADD_RESERVATION = gql`
	mutation addReservation(
		$totalPrice: Int!
		$campsite: ID!
		$reservationStartDate: String!
		$reservationEndDate: String!
		$numberOfCampers: Int
	) {
		addReservation(
			totalPrice: $totalPrice
			campsite: $campsite
			reservationStartDate: $reservationStartDate
			reservationEndDate: $reservationEndDate
			numberOfCampers: $numberOfCampers
		) {
			_id
			username
			firstName
			lastName
			reservationHistory {
				_id
				totalPrice
				createdAt
				reservationStartDate
				reservationEndDate
				numberOfCampers
				active
				campsite {
					_id
					name
					price
					streetAddress
					city
					state
					zipCode
					amenities {
						parking
						wheelchairAccessible
						petAllowed
						toilets
						campfire
						water
						showers
						trash
						hotTub
						picnicTable
						wifi
						cookingEquipment
					}
					activities {
						fishing
						paddling
						birdWatching
						wildlifeWatching
						biking
						boating
						offRoading
						climbing
						snowSports
						horsebackRiding
						surfing
						windSport
					}
					terrain {
						lake
						beach
						farm
						forest
						river
						hotSpring
						swimmingHole
						desert
						cave
					}
					description
					checkInInfo
					rules
					phone
					email
					hostBio
					reviewCount
					campsiteReviews {
						_id
						rating
						reviewText
						createdAt
						username
					}
					active
				}
			}
		}
	}
`;
//deleteReservation
export const DELETE_RESERVATION = gql`
	mutation deleteReservation($reservationID: ID!) {
		deleteReservation(reservationID: $reservationID) {
			_id
			username
			firstName
			lastName
			reservationHistory {
				_id
				totalPrice
				createdAt
				reservationStartDate
				reservationEndDate
				numberOfCampers
				active
				campsite {
					_id
					name
					streetAddress
					city
					state
					zipCode
					description
					price
					email
					phone
				}
			}
		}
	}
`;

//addCampsite
export const ADD_CAMPSITE = gql`
	mutation addCampsite($name: String!, $price: Int!) {
		addCampsite(name: $name, price: $price) {
			_id
			name
			price
		}
	}
`;
//addAmenities
export const ADD_AMENITIES = gql`
	mutation addAmenities(
		$ campID: ID!
		$parking: Boolean
		$wheelchairAccessible: Boolean
		$petAllowed: Boolean
		$toilets: Boolean
		$campfire: Boolean
		$water: Boolean
		$showers: Boolean
		$trash: Boolean
		$hotTub: Boolean
		$picnicTable: Boolean
		$wifi: Boolean
		$cookingEquipment: Boolean
	) {
		addAmenities(
			 campID: $ campID
			parking: $parking
			wheelchairAccessible: $wheelchairAccessible
			petAllowed: $petAllowed
			toilets: $toilets
			campfire: $campfire
			water: $water
			showers: $showers
			trash: $trash
			hotTub: $hotTub
			picnicTable: $picnicTable
			wifi: $wifi
			cookingEquipment: $cookingEquipment
		) {
			_id
			name
			price
			amenities {
				parking
				wheelchairAccessible
				petAllowed
				toilets
				campfire
				water
				showers
				trash
				hotTub
				picnicTable
				wifi
				cookingEquipment
			}
		}
	}
`;
//addActivities
export const ADD_ACTIVITIES = gql`
	mutation addActivities(
		$ campID: ID!
		$fishing: Boolean
		$paddling: Boolean
		$birdWatching: Boolean
		$wildlifeWatching: Boolean
		$biking: Boolean
		$boating: Boolean
		$offRoading: Boolean
		$climbing: Boolean
		$snowSports: Boolean
		$horsebackRiding: Boolean
		$surfing: Boolean
		$windSport: Boolean
	) {
		addActivities(
			 campID: $ campID
			fishing: $fishing
			paddling: $paddling
			birdWatching: $birdWatching
			wildlifeWatching: $wildlifeWatching
			biking: $biking
			boating: $boating
			offRoading: $offRoading
			climbing: $climbing
			snowSports: $snowSports
			horsebackRiding: $horsebackRiding
			surfing: $surfing
			windSport: $windSport
		) {
			_id
			name
			price
			activities {
				fishing
				paddling
				birdWatching
				wildlifeWatching
				biking
				boating
				offRoading
				climbing
				snowSports
				horsebackRiding
				surfing
				windSport
			}
		}
	}
`;
//addTerrain
export const ADD_TERRAIN = gql`
	mutation addTerrain(
		$campID: ID!
		$lake: Boolean
		$beach: Boolean
		$farm: Boolean
		$forest: Boolean
		$river: Boolean
		$hotSpring: Boolean
		$swimmingHole: Boolean
		$desert: Boolean
		$cave: Boolean
	) {
		addTerrain(
			campID: $campID
			lake: $lake
			beach: $beach
			farm: $farm
			forest: $forest
			river: $river
			hotSpring: $hotSpring
			swimmingHole: $swimmingHole
			desert: $desert
			cave: $cave
		) {
			_id
			name
			price
			terrain {
				lake
				beach
				farm
				forest
				river
				hotSpring
				swimmingHole
				desert
				cave
			}
		}
	}
`;
//editCampsite
export const EDIT_CAMPSITE = gql`
	mutation editCampsite(
		$campID: ID!
		$name: String
		$price: Int
		$streetAddress: String
		$city: String
		$state: String
		$zipCode: String
		$description: String
		$checkInInfo: String
		$rules: String
		$images: [String]
		$phone: String
		$email: String
		$hostBio: String
		$active: Boolean
	) {
		editCampsite(
			campID: $campID
			name: $name
			price: $price
			streetAddress: $streetAddress
			city: $city
			state: $state
			zipCode: $zipCode
			description: $description
			checkInInfo: $checkInInfo
			rules: $rules
			images: $images
			phone: $phone
			email: $email
			hostBio: $hostBio
			active: $active
		) {
			_id
			name
			price
			streetAddress
			city
			state
			zipCode
			description
			checkInInfo
			rules
			images
			phone
			email
			hostBio
			active
			reviewCount
			campsiteReviews {
				_id
				rating
				reviewText
				createdAt
				username
			}
		}
	}
`;
//deleteCampsite
export const DELETE_CAMPSITE = gql`
	mutation deleteCampsite($campID: ID!) {
		deleteCampsite( campID: $ campID) {
			_id
			username
			firstName
			lastName
			campsiteListings {
				_id
				name
				streetAddress
				city
				state
				zipCode
				description
				price
			}
		}
	}
`;

//addUserReview
export const ADD_USER_REVIEW = gql`
	mutation addUserReview(
		$userID: ID!
		$rating: Int
		$reviewText: String!
		$username: String
	) {
		addUserReview(
			userID: $userID
			rating: $rating
			reviewText: $reviewText
			username: $username
		) {
			_id
			firstName
			lastName
			username
			userReviews {
				_id
				createdAt
				rating
				reviewText
				username
			}
		}
	}
`;
//addCampsiteReview
export const ADD_CAMPSITE_REVIEW = gql`
	mutation addCampsiteReview(
		$ campID: ID!
		$rating: Int
		$reviewText: String!
		$username: String
	) {
		addCampsiteReview(
			 campID: $campID
			rating: $rating
			reviewText: $reviewText
			username: $username
		) {
			_id
			name
			streetAddress
			city
			state
			zipCode
			price
			description
			campsiteReviews {
				_id
				createdAt
				rating
				reviewText
				username
			}
		}
	}
`;
