import { FC, useEffect,memo } from "react";

import axios from "axios";
import {Order} from "./model/order";
import {Product} from "./model/product";

export type OrderDetailPageProps = {
  order: Order;
  products: Product[];
  orderDetailLoaded: (order: Order)=>void;
  orderId: number;
}
;
const OrderDetailPage: FC<OrderDetailPageProps> = ({
order, 
products,
orderDetailLoaded,
orderId,
}) => {
  

  // const order = ordersMap[orderId];
  // const products = ordersProductsMap[orderId];
  useEffect(() => {
    axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
     orderDetailLoaded(response.data)
     
    });
  }, [orderId]);
  if(!order){
    return <div>...Loading</div>
  }
  

  
  return (
    <div>
      This is order detail page for {order.id}<br/>
     {order.total} {order.totalProducts}{order.totalQuantity}
     {products.map((item)=>
     <div key= {item.id}>{item.title}</div>
     )}
    </div>
  );
};


OrderDetailPage.defaultProps = {};
// export default memo(OrderDetailPage);

export default memo(OrderDetailPage);
