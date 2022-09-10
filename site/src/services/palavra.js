import { postResource, getResource } from "./api";

export const postPalavra = body => postResource('/palavras', body);
export const getPalavra = () => getResource('/palavras');

