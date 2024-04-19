import { getRepoDetails } from "./repoDetail.js";
import { getUserDetails } from "./userDetail.js";

const search = document.querySelector(".search");

async function searchUser() {
  const userName = search.value;
  await getMain(userName);
}

function getMain(userName) {
  getUserDetails(userName);
  getRepoDetails(userName);
}

search.addEventListener("change", searchUser);
