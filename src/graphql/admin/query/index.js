import { useQuery } from "@apollo/client";
import * as types from "./shema";

export const tagList = () => {
  const { loading, error, data } = useQuery(types.tagList);
  return { loading, data, error };
};

export const tagById = ({ id }) => {
  const { loading, error, data } = useQuery(types.tagById, {
    variables: { id },
  });
  return { loading, data, error };
};

export const feedBacksList = () => {
  const { loading, error, data } = useQuery(types.feedBacksList);
  return { loading, data, error };
};

export const feedBacksById = ({ id }) => {
  const { loading, error, data } = useQuery(types.feedBacksById, {
    variables: { id },
  });
  return { loading, data, error };
};

export const newTagList = () => {
  const { loading, error, data } = useQuery(types.newTagList);
  return { loading, data, error };
};

export const newTagById = ({ id }) => {
  const { loading, error, data } = useQuery(types.newTagById, {
    variables: { id },
  });
  return { loading, data, error };
};

export const profileList = () => {
  const { loading, error, data } = useQuery(types.profileList);
  return { loading, data, error };
};

export const profileById = ({ id }) => {
  const { loading, error, data } = useQuery(types.profileById, {
    variables: { id },
  });
  return { loading, data, error };
};

export const newlist = () => {
  const { loading, error, data } = useQuery(types.newsList);
  return { loading, data, error };
};

export const newById = ({ id }) => {
  const { loading, error, data } = useQuery(types.newById, {
    variables: { id },
  });
  return { loading, data, error };
};
