import { postResource, getResource } from "./api";

export const postVideo = (body) => {
  console.log(body);
  //postResource("/videos", body);
};
export const getVideo = () => getResource("/videos");
