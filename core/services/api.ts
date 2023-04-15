import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.imersaofx.danieldcs.com/",
  headers: {
    Authorization: "Bearer [cm1vdHRvbmlAZ21haWwuY29t]",
    "Access-Control-Allow-Origin": "*",
  },
});
