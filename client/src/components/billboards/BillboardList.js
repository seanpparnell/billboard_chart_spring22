import Billboard from "./Billboard";

const BillboardList = ({billboards, updateBillboard, deleteBillboard}) => (
  <>
    { billboards.map( b =>
      <Billboard 
        key={b.id} 
        {...b} 
        updateBillboard={updateBillboard} 
        deleteBillboard={deleteBillboard}
      />
    )}
  </>
)

export default BillboardList;