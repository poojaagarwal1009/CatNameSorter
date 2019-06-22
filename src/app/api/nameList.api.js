import BaseApi from "./base.api";

class NameListApi extends BaseApi {
  constructor() {
    super("NameListApi");
  }

  getOwnersAndPetsList() {
    const URL = "people.json";
    return super.get(URL, { crossdomain: true });
  }
}

export default new NameListApi();
