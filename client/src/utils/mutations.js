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
  ) {
    editUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phone: $phone
      bio: $bio
    ) {
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
`;

//addReservation
export const ADD_RESERVATION = gql`
  mutation addReservation(
    $totalPrice: Float!
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
          location
          description
          price
          owner {
            firstName
            lastName
            email
            phone
          }
        }
      }
    }
  }
`;
//deleteReservation
export const DELETE_RESERVATION = gql`
  mutation deleteReservation($_id: ID!) {
    deleteReservation(_id: $_id) {
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
          location
          description
          price
          owner {
            firstName
            lastName
            email
            phone
          }
        }
      }
    }
  }
`;

//addCampsite
export const ADD_CAMPSITE = gql`
  mutation addCampsite(
    $name: String!
    $location: String!
    $description: String!
    $price: Int!
  ) {
    addCampsite(
      name: $name
      location: $location
      description: $description
      price: $price
    ) {
      _id
      name
      location
      description
      price
      active
      owner {
        _id
        username
        firstName
        lastName
        phone
        email
      }
    }
  }
`;
//addAmenities
export const ADD_AMENITIES = gql`
  mutation addAmenities(
    $campsiteID: ID!
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
      campsiteID: $campsiteID
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
      location
      description
      price
      active
      owner {
        _id
        username
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
    }
  }
`;
//addActivities
export const ADD_ACTIVITIES = gql`
  mutation addActivities(
    $campsiteID: ID!
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
      campsiteID: $campsiteID
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
      location
      description
      price
      active
      owner {
        _id
        username
        firstName
        lastName
        phone
        email
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
    }
  }
`;
//addTerrain
export const ADD_TERRAIN = gql`
  mutation addTerrain(
    $campsiteID: ID!
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
      campsiteID: $campsiteID
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
      location
      description
      price
      active
      owner {
        _id
        username
        firstName
        lastName
        phone
        email
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
//editCampsite
export const EDIT_CAMPSITE = gql`
  mutation editCampsite(
    $_id: ID!
    $name: String
    $location: String
    $description: String
    $price: Int
    $active: Boolean
  ) {
    editCampsite(
      _id: $_id
      name: $name
      location: $location
      description: $description
      price: $price
      active: $active
    ) {
      _id
      name
      location
      description
      price
      active
      owner {
        _id
        username
        firstName
        lastName
        phone
        email
      }
    }
  }
`;
//deleteCampsite
export const DELETE_CAMPSITE = gql`
  mutation deleteCampsite($_id: ID!) {
    deleteCampsite(_id: $_id) {
      _id
      username
      firstName
      lastName
      campsiteListings {
        _id
        name
        location
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
    $campsiteID: ID!
    $rating: Int
    $reviewText: String!
    $username: String
  ) {
    addCampsiteReview(
      campsiteID: $campsiteID
      rating: $rating
      reviewText: $reviewText
      username: $username
    ) {
      _id
      name
      location
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