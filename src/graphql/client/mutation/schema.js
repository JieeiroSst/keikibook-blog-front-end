import { gql } from "@apollo/client";

export const createFeedBacks = gql(`
  mutation createFeedbacks($input: InputFeedBacks) {
    CreateFeebBack(input : $input){
      status
      message
    }
  }`);

export const createProfile = gql(`
mutation createProfile($input: InputProfile) {
    CreateProfile(input: $input){
      status
      message
    }
  }`);

export const updateProfile = gql(`
mutation updateProfile($input: InputProfile) {
    CreateProfile(input: $input) {
      status
      message
    }
  }
  `);
