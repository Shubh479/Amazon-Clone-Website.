import React from "react";
import "./Orders.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Orders() {
  const [{ basket }, dispatch] = useStateValue();
  //   const [orders, setOrders] = useState();
  return (
    <>
      <div className="orders">
        <div className="orders__payment">
          <h1>Your Payment Successful...!!!</h1>
        </div>
        <h1 className="orders__order">Your Orders</h1>
      </div>
      <div className="orders__id">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="orders__total">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="orders__totals">
                Order Total ({basket.length} items): <strong>{value}</strong>
              </p>
              {/* <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                      </small> */}
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType="text"
          thousandSeparator={true}
          prefix="$"
        />
      </div>
    </>
  );
}
export default Orders;
