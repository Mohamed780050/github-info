import { Axios } from "./axios.js"
import { processEvent } from "./processEvent.js";
export async function fetchUserData(username:string) {
  try {
    const response = await Axios.get(`/users/${username}/events`);
    processEvent(response.data)
  } catch (err) {
    console.log(err)
  }
}