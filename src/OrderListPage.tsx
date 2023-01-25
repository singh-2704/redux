import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOrdersAction, ordersLoadedAction } from "./action/order";
import { loadOrderSelector, orderSelector } from "./selector/order";
import { Link } from "react-router-dom";
import OrderDetailPage from "./OrderDetailPage";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = (props) => {
  const dispatch = useDispatch();
  const loadOrder = useSelector(loadOrderSelector);
  const orderLoaded = useSelector(orderSelector);
  
  
  useEffect(() => {
    dispatch(loadOrdersAction());
    axios
      .get("https://dummyjson.com/carts")
      .then((response) => dispatch(ordersLoadedAction(response.data.carts)));
      console.log('total orders list called')
  }, []);
  if (loadOrder) {
    return <div className="bg-red-500">...Loading</div>;
  }

  return (
    <div>
      {orderLoaded.map((o) => {
        return (
          <div key={o.id}>
            <Link to={"/orders/" + o.id} className="text-indigo-500">
              order Number {o.id}
            </Link>{" "}
            total: {o.total} totalProducts: {o.totalProducts}
          </div>
        );
      })}
      ;
    </div>
  );
};

OrderListPage.defaultProps = {};

export default memo(OrderListPage);
