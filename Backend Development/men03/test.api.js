import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env.local" });

const url = `${process.env.API_URL}`;
const port = `${process.env.PORT}`;
const api_url = `${url}:${port}/auth`;

let token = "";

const test_registration = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${api_url}/register`,
      {
        username: username,
        email: email,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(
      `status: ${response.status}\nresponse: ${JSON.stringify(response.data)}`
    );
  } catch (error) {
    if (error.response) {
      console.log(
        `status: ${error.response.status}\nresponse: ${JSON.stringify(
          error.response.data
        )}`
      );
    } else {
      console.log(`error: ${error}`);
    }
  }
};

const test_login = async (email, password) => {
  try {
    const response = await axios.post(
      `${api_url}/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(
      `status: ${response.status}\nresponse: ${JSON.stringify(response.data)}`
    );
    return response.data.token;
  } catch (error) {
    if (error.response) {
      console.log(
        `status: ${error.response.status}\nresponse: ${JSON.stringify(
          error.response.data
        )}`
      );
    } else {
      console.log(`error: ${error}`);
    }
  }
};

const test_getUsers = async () => {
  try {
    const response = await axios.get(`${api_url}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(
      `status: ${response.status}\nresponse: ${JSON.stringify(response.data)}`
    );
  } catch (error) {
    if (error.response) {
      console.log(
        `status: ${error.response.status}\nresponse: ${JSON.stringify(
          error.response.data
        )}`
      );
    } else {
      console.log(`error: ${error}`);
    }
  }
};

const runTests = async () => {
  // await test_registration("auth", "test@auth.in", "test@auth");
  const loginToken = await test_login("test@auth.in", "test@auth");
  if (loginToken) {
    token = loginToken;
    await test_getUsers();
  }
};

runTests();
