import Single  from "../../components/single/Single"
import "./order.scss"
import { singleOrder } from "../../data"



 const Order = () => {
  return (
    <div className="order">
        <Single {...singleOrder}/>
    </div>
  )
}
 export default Order