// import { OmitProps } from "antd/lib/transfer/ListBody";
// import React, { useEffect, useState } from "react";
// import api from "./api";

// export const Post = (body, URL) => {

//     const [value, setValue] = useState();

//     useEffect(() => {
//         api
//             .post("https://api-libweb-v3.herokuapp.com/api/" + URL, body)
//             .then((response) => setValue(response.data))
//             .catch((err) => {
//                 console.error("ops! ocorreu um erro" + err);
//             });
//     }, []);
// };