import { postResource, getResource } from "./api";

export const postUsuario = body => postResource('/usuarios', body);
// export const getUsuario = id => getResource(`/usuarios/${id}`);
export const getUsuario = (email, senha) => getResource(`/logar/${email}/${senha}`);

