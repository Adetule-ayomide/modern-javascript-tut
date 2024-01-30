import { styleBody, addTitle, contact } from './dom';
import users, { getPremiumUser } from "./data";

const premiumUser = getPremiumUser(users);
console.log(users, premiumUser);
console.log("i am new here");