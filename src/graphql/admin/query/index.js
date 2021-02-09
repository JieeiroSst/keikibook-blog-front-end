import { gql } from "@apollo/client";

export const tagList = gql(`
query {
    tags{
      id
      name
    }
  }`);

export const tagById = gql(`
query querytag($id: Int) {
    tag(id:$id){
      id 
      name 
    }
  }`);

export const feedBacksList = gql(`
query{
    feedbacks {
      id
      name 
      phone 
      email 
      address 
      content 
      createdAt
    }
  }`);

export const feedBacksById = gql(`
query queryFeedBacks($id: Int){
    feedback(id: $id) {
      id
      name 
      phone 
      email 
      address 
      content 
      createdAt
    }
  }`);

export const newTagList = gql(`
query {
    newTags {
      id
      tagId
      newId
    }
  }`);

export const newTagById = gql(`
  query queryNewTag($id:Int){
    newTag(id: $id) {
      id
      tagId
      newId
    }
  }`);

export const profileList = gql(`
query {
    profiles {
      id
      firstName
      lastName
      address 
      phone 
      createdAt 
    }
  }
`);

export const profileById = gql(`
query queryProfile($id :Int) {
    profileId(id : $id) {
      id
      firstName
      lastName
      address 
      phone 
      createdAt 
    }
  }
`);

export const newsList = gql(`
query{
    news{
      id
      title
      description
      image
      detail
      createdAt
      topHot
      viewCount
      content
      tagId
      active
    }
  }
`);

export const newById = gql(`
query queryNew($id: Int){
    new(id:$id){
      id
      title
      description
      image
      detail
      createdAt
      topHot
      viewCount
      content
      tagId
      active
    }
  }
`);
