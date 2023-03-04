import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersMapSelector, ordersProductsSelector } from "./selector/order";
import axios from "axios";
import { ordersDetailLoadedAction } from "./action/order";

type OrderDetailPageProps = {};
const OrderDetailPage: FC<OrderDetailPageProps> = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const orderId = +params.orderId!;
  const ordersMap = useSelector(ordersMapSelector);
  const order = ordersMap[orderId];
  const ordersProductsMap = useSelector(ordersProductsSelector);
  const orderProduct = ordersProductsMap[orderId];
  console.log("orderProduct", orderProduct);
 

  useEffect(() => {
    axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
      dispatch(ordersDetailLoadedAction(response.data));
      console.log("indivdual api called")
    });
  }, [orderId]);
  if(!order){
    return <div>...Loading</div>
  }
  

  
  return (
    <div>
      This is order detail page for {order.id}<br/>
     {order.total} {order.totalProducts}{order.totalQuantity}
     {orderProduct.map((item)=>
     <div key= {item.id}>{item.title}</div>
     )}
    </div>
  );
};
OrderDetailPage.defaultProps = {};
export default memo(OrderDetailPage);
