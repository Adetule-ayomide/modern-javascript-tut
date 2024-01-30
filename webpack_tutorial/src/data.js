const users = [
  { name: "mario", premium: true },
  { name: "luigi", premium: false },
  { name: "yoshi", premium: true },
  { name: "toad", premium: true },
  { name: "peach", premium: false },
];


const getPremiumUser = (user) => {
    return user.filter(user => user.premium)
};

// export default users;
export { getPremiumUser, users as default };