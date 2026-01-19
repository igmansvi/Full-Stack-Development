import React from "react";

export function LoginForm() {
  const [form, setForm] = React.useState({ email: "", password: "" });
  function handleSubmit() {
    if (!form.email || !form.password) {
      alert('missing fields');
    } else if (form.password.length < 8) {
      alert('minimum password length: 8 char');
    } else {
      alert('form submitted successfully');
    }
  }
  return (
    <form action={handleSubmit}>
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="enter your email"
      /> <br />
      <input
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="enter your password"
      /> <br />
      <input
        type="submit"
        value='Submit'
      />
    </form>
  )
}
  
export default function App() {
  return (
    <LoginForm />
  )
}