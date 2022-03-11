import { useState } from "react";
import BillboardForm from "./BillboardForm";
import Artists from '../artists/Artists';
import { Link } from 'react-router-dom';


const Billboard = ({ id, title, description, updateBillboard, deleteBillboard }) => {
  const [editing, setEdit] = useState(false)


  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {
        editing ?
        <>
          <BillboardForm
            id={id}
            title={title}
            description={description}
            updateBillboard={updateBillboard}
            setEdit={setEdit}
          />
          <button onClick={ () => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteBillboard(id)}>Delete</button>
          {/* <Artists billboardId={id} /> */}
          <Link 
            to={`/billboards/${id}/artists`}
            state={{ billboardId: id, billboardTitle: title }}
            >
            Artists
          </Link>
        </>
      }
    </>
  )
}

export default Billboard;