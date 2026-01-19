async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch("/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
}

async function loadAllUsers() {
  const res = await fetch("/users");
  const users = await res.json();
  document.getElementById("users").innerHTML = await users.map(
    (u) => `${u.name} and ${u.email} <br>`
  );
}

loadAllUsers();
