import { gql } from "@apollo/client";

export const newList = gql(`
    query {
        news {
        id
        title
        description 
        image 
        createdAt 
        viewCount 
        content 
        tagId 
        active 
        tags{
            id
            name 
        }
        }
    }
`);

export const newById = gql(`
    query ReadNew($id: Int!){
        new(id: $id) {
        id
        title
        description
        image
        createdAt
        viewCount
        content
        tagId
        active
        tags {
            id
            name
        }
        }
    }
`);

export const tagList = gql(`
    query {
        tags {
        id 
        name 
        }
    }
`);

export const tagById = gql(`
    query ReadTag($id : Int ) {
        tag(id : $id) {
        id 
        name 
        }
    }
`);

export const newTagList = gql(`
    query {
        newTags {
        id
        tagId 
        newId 
        tags {
            id
            name 
        }
        news {
            id
            title
            description 
            createdAt 
            active
        }
        }
    }
`);

export const newTagById = gql(`
query ReadNewTag($id : Int) {
    newTag(id : $id) {
      id
      tagId 
      newId 
      tags {
        id
        name 
      }
      news {
        id
        title
        description 
        createdAt 
        active
      }
    }
  }
`);
