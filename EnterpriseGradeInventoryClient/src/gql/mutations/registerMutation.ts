import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      id
      firstname
      lastname
      email
    }
  }
`;
