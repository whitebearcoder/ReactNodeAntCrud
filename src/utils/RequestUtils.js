import "cross-fetch/polyfill";
import axios from "axios";
import CONFIG from "../config";
const qs = require("qs");

class RequestHelper {
  constructor() {}

  makeHeader = (method: string) => {
    let headers = {
      Authorization: "",
      "Content-Type": "",
    };
    if (method === "POST") headers["Content-Type"] = "application/json";
    return headers;
  };

  querify = (url: string, queryObject: object) => {
    let newUrl = url;
    if (!queryObject) return newUrl;
    newUrl += "?" + qs.stringify(queryObject);
    return newUrl;
  };

  get = async (URL: string, queryObject: object) => {
    const urlWithQuery = this.querify(CONFIG["API_URL"] + URL, queryObject);
    const res = await axios.request({
      url: urlWithQuery,
      method: "get",
      headers: this.makeHeader("GET"),
    });
    return {
      headers: res.headers,
      json: async () => res.data,
      text: async () => res.data,
      data: res.data,
    };
  };

  post = async (URL: string, bodyObject: object) => {
    const res = await axios.request({
      url: CONFIG["API_URL"] + URL,
      method: "post",
      headers: this.makeHeader("POST"),
      data: JSON.stringify(bodyObject),
    });
    return {
      headers: res.headers,
      json: async () => res.data,
      text: async () => res.data,
      data: res.data,
    };
  };
}

export default new RequestHelper();
