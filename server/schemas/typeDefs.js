import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Auth {
		token: ID!
		user: User
	}
	type User {
		_id: ID
		username: String
		firstName: String
		lastName: String
		email: String
		createdAt: String
		phone: String
		bio: String
		reservationHistory: [Reservation]
		campsiteListings: [Campsite]
		reviewCount: Int
		userReviews: [Reviews]
	}

	type Reviews {
		_id: ID
		rating: Int
		reviewText: String
		createdAt: String
		username: String
	}

	type Reservation {
		_id: ID
		totalPrice: Float
		createdAt: String
		reservationStartDate: String
		reservationEndDate: String
		campsite: Campsite
		numberOfCampers: Int
		active: Boolean
	}

	type Amenities {
		parking: Boolean
		wheelchairAccessible: Boolean
		petAllowed: Boolean
		toilets: Boolean
		campfire: Boolean
		water: Boolean
		showers: Boolean
		trash: Boolean
		hotTub: Boolean
		picnicTable: Boolean
		wifi: Boolean
		cookingEquipment: Boolean
	}

	type Activities {
		fishing: Boolean
		paddling: Boolean
		birdWatching: Boolean
		wildlifeWatching: Boolean
		biking: Boolean
		boating: Boolean
		offRoading: Boolean
		climbing: Boolean
		snowSports: Boolean
		horsebackRiding: Boolean
		surfing: Boolean
		windSport: Boolean
	}

	type Terrain {
		lake: Boolean
		beach: Boolean
		farm: Boolean
		forest: Boolean
		river: Boolean
		hotSpring: Boolean
		swimmingHole: Boolean
		desert: Boolean
		cave: Boolean
	}

	type Campsite {
		_id: ID
		name: String
		location: String
		description: String
		price: Int
		owner: User
		amenities: Amenities
		activities: Activities
		terrain: Terrain
		reviewCount: Int
		campsiteReviews: [Reviews]
		active: Boolean
	}

	type Query {
		me: User
		users: [User]
		user(_id: ID!): User
		campsite(_id: ID!): Campsite
		campsites(name: String, location: String, _id: ID): [Campsite]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(
			username: String!
			firstName: String!
			lastName: String!
			email: String!
			password: String!
		): Auth
		editUser(
			username: String
			firstName: String
			lastName: String
			email: String
			password: String
			phone: String
			bio: String
		): User
		addReservation(
			totalPrice: Float!
			campsite: ID!
			reservationStartDate: String!
			reservationEndDate: String!
			numberOfCampers: Int
			active: Boolean
		): User
		deleteReservation(_id: ID!): User
		addCampsite(
			name: String!
			location: String!
			description: String!
			price: Int!
			active: Boolean
		): Campsite
		addAmenities(
			campsiteID: ID!
			parking: Boolean
			wheelchairAccessible: Boolean
			petAllowed: Boolean
			toilets: Boolean
			campfire: Boolean
			water: Boolean
			showers: Boolean
			trash: Boolean
			hotTub: Boolean
			picnicTable: Boolean
			wifi: Boolean
			cookingEquipment: Boolean
		): Campsite
		addActivities(
			campsiteID: ID!
			fishing: Boolean
			paddling: Boolean
			birdWatching: Boolean
			wildlifeWatching: Boolean
			biking: Boolean
			boating: Boolean
			offRoading: Boolean
			climbing: Boolean
			snowSports: Boolean
			horsebackRiding: Boolean
			surfing: Boolean
			windSport: Boolean
		): Campsite
		addTerrain(
			campsiteID: ID!
			lake: Boolean
			beach: Boolean
			farm: Boolean
			forest: Boolean
			river: Boolean
			hotSpring: Boolean
			swimmingHole: Boolean
			desert: Boolean
			cave: Boolean
		): Campsite
		editCampsite(
			_id: ID!
			name: String
			location: String
			description: String
			price: Int
			active: Boolean
		): Campsite
		deleteCampsite(_id: ID!): User
		addUserReview(
			userID: ID!
			rating: Int
			reviewText: String!
			username: String
		): User
		addCampsiteReview(
			campsiteID: ID!
			rating: Int
			reviewText: String!
			username: String
		): Campsite
	}
`;
export default typeDefs;
