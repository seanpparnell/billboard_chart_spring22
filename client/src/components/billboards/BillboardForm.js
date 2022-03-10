import { useState, useEffect } from "react";

const BillboardForm = ({addBillboard, id, title, description, updateBillboard, setEdit}) => {
  const [billboard, setBillboard] = useState({ title: '', description: ''})

  useEffect( () => {
    if (id) {
      setBillboard({ title, description })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
      if (id) {
        updateBillboard(id, billboard)
        setEdit(false)
      } else {
        addBillboard(billboard)
      }
        setBillboard({ title: '', description: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={billboard.title}
          onChange={ (e) => setBillboard({ ...billboard, title: e.target.value })}
          placeholder="Title"
          required
        />
        <input
          name="description"
          value={billboard.description}
          onChange={ (e) => setBillboard({ ...billboard, description: e.target.value })}
          placeholder="Description"
          required
        />
        <button type="submit">Submit</button>

      </form>
    </>
  )
}

export default BillboardForm;