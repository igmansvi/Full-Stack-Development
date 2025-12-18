import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const App = () => {
  const apiurl = 'https://69302966778bbf9e007019c4.mockapi.io/users'
  const searchRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [fetchData, setfetchData] = useState([]);

  const fetchApiData = () => {
    axios.get(apiurl).then((res) => setfetchData(res.data)).catch((err) => console.log(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      alert('name should have more than 2 characters')
    }
    else if (number.length != 10) {
      alert('number must be of 10 digits')
    }
    else if (password.length < 8) {
      alert('password should have more than 8 character length')
    }
    else if (!password.match('[a-z]')) {
      alert('password must have a lowercase letter')
    }
    else if (!password.match('[A-Z]')) {
      alert('password must have a uppercase letter')
    }
    else if (!password.match('[0-9]')) {
      alert('password must have a numeric digit')
    }
    else if (!password.match('[!@#$%^&*?]')) {
      alert('password must have a special character')
    }
    else {
      if (confirm('confirm submission')) {
        let userData = {
          name: name,
          email: email,
          number: number,
          password: password
        }
        axios.post(apiurl, userData).then((res) => setfetchData([...fetchData, res.data])).catch((err) => console.log(err));
        alert('submission successful');
      } else {
        alert('submission failed');
      }
    }
  }

  const handleEdit = (id) => {
    if (confirm(`confirm updation: item: ${id}\nNote: leave blank if no change needed`)) {
      const name = prompt('enter new name: ') || name;
      const email = prompt('enter new email: ') || email;
      const number = prompt('enter new number: ') || number;
      const password = prompt('enter new password: ') || password;
      const updateUrl = `${apiurl}/${id}`;
      let userData = {
        name: name,
        email: email,
        number: number,
        password: password
      }
      axios.put(updateUrl, userData).then(res => alert(`item: ${id} updated!`)).catch(err => alert(`update failed: error: ${err}`));
      fetchApiData();
    } else {
      alert('update cancelled');
    }
  }

  const handleDelete = (id) => {
    if (confirm(`confirm deletion: item: ${id}`)) {
      const deleteUrl = `${apiurl}/${id}`
      axios.delete(deleteUrl).then(res => alert(`item: ${id} deleted!`)).catch(err => alert(`deletion failed: error: ${err}`));
      fetchApiData()
    } else {
      alert('deletion cancelled');
    }
  }

  const handleSearchItem = (e) => {
    e.preventDefault();
    const searchData = fetchData.filter((obj, idx) => (
      obj.name.toLowerCase().includes(searchItem.toLowerCase()) || obj.email.toLowerCase().includes(searchItem.toLowerCase())
    ));
    setfetchData(searchData);
  }

  const handleResetSearch = (e) => {
    e.preventDefault();
    fetchApiData();
    searchRef.current.value = '';
  }

  useEffect(() => {
    fetchApiData();
  }, [])
  return (
    <div className='flex flex-col justify-item items-center'>
      <div className='border mx-auto p-4 mt-4 w-sm'>
        <form onSubmit={(e) => handleSubmit(e)} className='space-y-4'>
          <label htmlFor="">Name: </label>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder='enter your name' className='border px-2 w-full' required /> <br />
          <label htmlFor="">Email: </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter your email' className='border px-2 w-full' required /> <br />
          <label htmlFor="">Number: </label>
          <input onChange={(e) => setNumber(e.target.value)} type="tel" placeholder='enter your number' className='border px-2 w-full' required /> <br />
          <label htmlFor="">Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='enter your password' className='border px-2 w-full' required /> <br />
          <input type="submit" value="add" className='border px-2' />
        </form>
      </div>
      <div className='border p-4 mt-4'>
        <div className='mt-4 flex space-x-4'>
          <input ref={searchRef} onChange={(e) => setSearchItem(e.target.value)} type="text" className='border px-2 w-full' placeholder='search for item' />
          <button onClick={(e) => handleSearchItem(e)} className='border px-2'>search</button>
          <button onClick={(e) => handleResetSearch(e)} className='border px-2'>reset</button>
        </div>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          {
            fetchData ? (
              fetchData.map((item, index) => (
                <div className='border p-4 mt-4 w-sm' key={index}>
                  <div>
                    Name: {item.name} <br />
                    Email: {item.email} <br />
                    Number: {item.number} <br />
                    Password: {item.password} <br />
                  </div>
                  <div className='flex gap-2'>
                    <button className='border px-2' onClick={() => handleEdit(item.id)}>edit</button>
                    <button className='border px-2' onClick={() => handleDelete(item.id)}>delete</button>
                  </div>
                </div>
              ))
            ) : (
              <div className='font-bold'> please insert some data </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App