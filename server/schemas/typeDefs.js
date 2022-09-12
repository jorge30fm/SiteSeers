import { gql } from "apollo-server-express";

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String!
		lastName: String!
		email: String!
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
		user: String
	}

	type Reservation {
		_id: ID
		totalPrice: Float
		campsite: Campsite
		active: Boolean
	}
	type Ammenities {
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
		name: String!
		location: String!
		description: String!
		rate: Int!
		owner: User!
		ammenities: Ammenities
		activities: Activities
		terrain: Terrain
		reviewCount: Int
		campsiteReviews: [Reviews]
	}

    type Query {
		me: User
		users: [User]
		user(_id: ID!): User
		campsites: [Campsite]
		campsite(_id: ID!): Campsite
	}
	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
	}
	type Auth {
		token: ID!
		user: User
	}
`;
export default typeDefs;