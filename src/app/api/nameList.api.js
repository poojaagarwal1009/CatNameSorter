import BaseApi from "./base.api";

class NameListApi extends BaseApi {
  constructor() {
    super("NameListApi");
  }

  getOwnerAndPetList() {
    const URL = "http://agl-developer-test.azurewebsites.net/people.json";
    return super.get(URL);
  }
}

export default new NameListApi();
