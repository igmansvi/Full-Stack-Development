import React, { useState } from 'react'
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState([]);
  function addData(obj) {
    setData((data) => [...data, obj]);
  }
  function deleteData(index) {
    setData((old) => old.filter((_, i) => i !== index));
  }
  return (
    <div>
      <Navbar />
      <StudentForm addData={addData} />
      <StudentList data={data} deleteData={deleteData} />
      <Footer />
    </div>
  )
}

export default App