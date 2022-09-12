import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
    phoneNumber: $phoneNumber
    about: $about); {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CAMPSITE = gql`
  mutation addCampsite(
    $id: ID
    $name: String!
    $location: String!
    $description: String!
    $rate: Int!
    $owner: User!
  ) {
    addCampsite(
      ID: $_id
      location: $location
      owner: $username
      rate: $rate
      description: $description
    ) {
      _id
      name
      ammenities
      activities
      terrain
      campsiteReviews {
        _id
        reviewText
      }
    }
  }
`;

export const DELETE_CAMPSITE = `gql`
    mutation deleteCampsite(

    )