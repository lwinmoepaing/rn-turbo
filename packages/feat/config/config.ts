const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export default {
  BASE_URL: process.env.BASE_URL || "http://localhost:8080/api/v1",
  JWT_SECRET: process.env.JWT_SECRET_KEY || "H3lloW0rlD",
  LOVE_LETTER_SECRET: process.env.LOVE_LETTER_SECRET_KEY || "l3TtER",

  requestOptions: {
    method: "GET",
    headers: myHeaders,
  },
};