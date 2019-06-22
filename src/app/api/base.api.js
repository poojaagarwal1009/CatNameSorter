import axios from "axios";

export default axios.create({
  baseURL: "https://agl-developer-test.azurewebsites.net/people.json",
  responseType: "json"
});
// export const Http = axios.create({
//   headers: { "Cache-Control": "no-cache" },
//   adapter: throttleAdapterEnhancer(axios.defaults.adapter, 2 * 1000)
// });

// class BaseApi {
//   constructor(name) {
//     this.name = name;
//     this.http = Http;

//     this._log("ctor", name);
//   }

//   get(url) {
//     this._log("get", url);

//     return this.http
//       .get(url)
//       .then(response => {
//         this._log("get response", response);
//         return response.data;
//       })
//       .catch(error => {
//         console.log("Error : " + error);
//       });
//   }

//   _log(...message) {
//     console.log(`|BaseApi|${this.name}|`, ...message);
//   }

//   _warn(...msg) {
//     console.warn("|HttpError|", ...msg);
//   }
// }

// export default BaseApi;
