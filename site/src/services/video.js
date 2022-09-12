import { postResource, getResource } from "./api";

export const postVideo = (body) => postResource("/videos", body);

export const getVideo = () => getResource("/videos");
