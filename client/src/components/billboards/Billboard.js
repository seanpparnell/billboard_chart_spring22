import { useState } from "react";
import BillboardForm from "./BillboardForm";
// import Artists from '../artists/Artists';
import { Link } from 'react-router-dom';


const Billboard = ({ id, title, description, updateBillboard, deleteBillboard }) => {
  const [editing, setEdit] = useState(false)


  return (
    <>
      <h2>{title}</h2>
      <h4>{description}</h4>
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
          
          <Link 
            to={`/billboards/${id}/artists`}
            state={{ billboardId: id, billboardTitle: title}}
          >
            Artists
          </Link>
        </>
      }
    </>
  )
}

export default Billboard;