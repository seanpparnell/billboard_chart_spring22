
import { useState, useEffect } from 'react';
import axios from 'axios';
import BillboardForm from './BillboardForm';
import BillboardList from './BillboardList';



const Billboards = () => {
  const [billboards, setBillboards] = useState([])

  useEffect( () => {
    axios.get('/api/billboards')
      .then( res => {
        setBillboards(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addBillboard = (billboard) => {
    axios.post('/api/billboards', { billboard })
      .then( res => {
        setBillboards([...billboards, res.data])
      })
      .catch( err => {
        console.log(err)
        alert(err.errors)
      })
  }

  const updateBillboard = (id, billboard) => {
    axios.put(`/api/billboards/${id}`, {billboard})
      .then( res => {
        const newUpdatedBillboards = billboards.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b 
        })
        setBillboards(newUpdatedBillboards)
      })
      .catch( err => {
        console.log(err)
        alert(err.errors)
      })
  }
  
  const deleteBillboard = (id) => {
    axios.delete(`/api/billboards/${id}`)
     .then(res => {
       setBillboards(billboards.filter( b => b.id !== id))
       alert(res.data.message)
     })
     .catch( err => console.log(err))
  }
  
  
  return (
   <>
    <h1>Billboards</h1>
    <BillboardForm addBillboard={addBillboard} />
    <BillboardList
      billboards={billboards}
      updateBillboard={updateBillboard}
      deleteBillboard={deleteBillboard} 
      />
   </>
  )
}

export default Billboards;