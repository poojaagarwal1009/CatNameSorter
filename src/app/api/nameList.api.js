import BaseApi from "./base.api";

class NameListApi extends BaseApi {
  constructor() {
    super("NameListApi");
  }

  getOwnersAndPetsList() {
    const URL = "https://agl-developer-test.azurewebsites.net/people.json";
    return super.get(URL);
  }
}

export default new NameListApi();
