import { ordersMapSelector } from "./selector/order";
import { ordersProductsSelector } from "./selector/order";
import { State } from "./store";
import { ordersDetailLoadedAction } from "./action/order";
import OrderDetailPage, {OrderDetailPageProps} from "./OrderDetailPage";
import { connect } from "react-redux";

function mapStateToProps(state: State,ownProps: Partial<OrderDetailPageProps>){
  const orderId: number = ownProps.orderId!;
  return{
    order: ordersMapSelector(state)[orderId],
    products: ordersProductsSelector(state)[orderId],
  }
}
const mapDispatchToProps = {
  orderDetailLoaded: ordersDetailLoadedAction
}
// export default memo(OrderDetailPage);

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailPage);
