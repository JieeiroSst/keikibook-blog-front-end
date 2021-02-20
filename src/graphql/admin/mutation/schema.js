import { gql } from "@apollo/client";

export const createTag = gql(`
mutation createNews($input: InputTags!) {
    CreateTags(input: $input){
      status
      message
    }
  }
`);

export const updateTag = gql(`
mutation updateTags($input: InputTags!) {
    UpdateTags(input: $input){
      status
      message
    }
  }
  
`);

export const deleteTag = gql(`
mutation deleteTags($id: Int) {
    DeleteTags(id: $id){
      status
      message
    }
  }
`);

export const createFeedBacks = gql(
  `mutation createfeedbacks($input : InputFeedBacks) {
        CreateFeebBack(input: $input){
          status
          message
        }
      }
      `
);

export const updateFeedBacks = gql(
  `mutation updatefeedbacks($input : InputFeedBacks) {
        UpdateFeebBack(input: $input){
          status
          message
        }
      }
      `
);

export const deleteFeedBacks = gql(
  `mutation deletefeedbacks($id : Int) {
        DeleteFeebBack(id: $id){
          status
          message
        }
      }
      `
);

export const createNew = gql(
  `mutation createNews($input: InputNewTag!) {
        CreateNewTag(input: $input){
          status
          message
        }
      }
      `
);

export const updateNew = gql(
  `mutation createNew($input: InputNews) {
        UpdateNews(input : $input){
          status
          message
        }
      }`
);

export const deelteNew = gql(
  `mutation deleteNew($id: Int) {
        DeleteNews(id : $id){
          status
          message
        }
      }`
);

export const publicNew = gql(`
mutation publicNews($id:Int){
    PublicNew(id :$id){
      status
      message
    }
  }
`);
