import { gql } from "@apollo/client";

export const QUERY_USER_INFO = gql`
	{
		me {
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

export const QUERY_USER_RESERVATIONS = gql`
	{
		me {
			reservationHistory {
				_id
				totalPrice
				reservationStartDate
				reservationEndDate
				active
				campsite {
					_id
					price
					name
					location
				}
			}
		}
	}
`;

export const QUERY_USER_LISTINGS_BASIC = gql`
	{
		me {
			campsiteListings {
				_id
				name
				location
				price
				active
			}
		}
	}
`;

export const QUERY_CAMPSITE = gql`
   query campsites($name: String, $location: String, $_id: ID) {
        campsite( name:$name, location: $location, _id: $_id ){
                _id
                name
                location
                price
                active
                description
                reviewCount
                campsiteReviews {
                    _id
                    rating
                    reviewText
                    createdAt
					username
                }
				reviewCount
                owner {
                    firstName
                    lastName
                    phone
                    email
                }
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
            }
        }
`;
