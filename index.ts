import User from "./src/User";
import Company from "./src/Company";

// const map = document.getElementById("map") as HTMLElement ; // bunday hato bersa => as HTMLElement qoshib qoyiladi
// new google.maps.Map(map, {
//   zoom: 1,
//   center : {
//     lat: 0,
//     lng : 0
//   },
//   clickableIcons : true,
//   fullscreenControl : true
// });

import { CustomMap } from "./src/CustomMap";

const user = new User()
const company = new Company()
const customMap = new CustomMap()
customMap.addMarker(user)
customMap.addMarker(company)