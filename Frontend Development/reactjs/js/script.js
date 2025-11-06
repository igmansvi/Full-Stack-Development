const root = document.getElementById("root");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let data = [];

function saveValue() {
  let user = {
    name: name.value || "empty",
    email: email.value || "empty",
    phone: phone.value || "empty",
  };

  data.push(user);

  name.value = "";
  email.value = "";
  phone.value = "";

  root.innerHTML = `data saved successfull`;

  setTimeout(() => {
    root.innerHTML = ``;
  }, 1000);
}

function displayValue() {
  root.innerHTML = ``;

  if (data.length == 0) {
    root.innerHTML = `empty`;
  }

  data.forEach((user) => {
    const p = document.createElement("p");
    p.innerHTML = `
      <table class="border border-gray-300 border-collapse w-full">
      <tr>
        <th class="text-left border border-gray-300 px-2 py-1">User Name</th>
        <td class="border border-gray-300 px-2 py-1">${user.name}</td>
      </tr>
      <tr>
        <th class="text-left border border-gray-300 px-2 py-1">User Email</th>
        <td class="border border-gray-300 px-2 py-1">${user.email}</td>
      </tr>
      <tr>
        <th class="text-left border border-gray-300 px-2 py-1">User Phone</th>
        <td class="border border-gray-300 px-2 py-1">${user.phone}</td>
      </tr>
      </table>
      <hr class="my-2 border-gray-300">`;
    root.append(p);
  });
}

function resetValue() {
  data = [];

  root.innerHTML = `data reset successfull`;

  setTimeout(() => {
    root.innerHTML = ``;
  }, 1000);
}
