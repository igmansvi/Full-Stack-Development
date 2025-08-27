import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env.local" });

const test_registration = async () => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}:${process.env.PORT}/users/register`,
      {
        username: "test",
        email: "test@user.in",
        password: "test@user",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(
      `status: ${response.status}\nresponse: ${JSON.stringify(response.data)}`
    );
  } catch (error) {
    console.error(`error: ${error}`);
  }
};

const test_users = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}:${process.env.PORT}/users/all`
    );
    console.log(
      `status: ${response.status}\nresponse: ${JSON.stringify(response.data)}`
    );
  } catch (error) {
    console.error(`error: ${error}`);
  }
};

const test_user = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}:${process.env.PORT}/users/${id}`
    );
    console.log(
      `status: ${response.status}\nresponse: ${JSON.stringify(response.data)}`
    );
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
// test_registration();
// test_users();
test_user("68909baa9b43d32ccc26947d");
