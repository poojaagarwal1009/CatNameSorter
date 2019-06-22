import axios from "axios";

export default axios.create({
  baseURL: "https://agl-developer-test.azurewebsites.net/people.json",
  responseType: "json"
});
