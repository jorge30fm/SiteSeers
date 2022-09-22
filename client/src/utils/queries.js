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
          streetAddress
          city
          useState
          zipCode
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
        streetAddress
        city
        state
        zipCode
        price
        active
        images
      }
    }
  }
`;

export const QUERY_CAMPSITE = gql`
  query campsites(
    $name: String
    $streetAddress: String
    $city: String
    $state: String
    $zipCode: String
    $_id: ID
  ) {
    campsites(
      name: $name
      streetAddress: $streetAddress
      city: $city
      state: $state
      zipCode: $zipCode
      _id: $_id
    ) {
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
      images
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
`;
