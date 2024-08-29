import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [showCartdata, setshowCartdata] = useState([]);
  const [statusBtn, setstatusBtn] = useState(false);
  // const [quantity, setQuantity] = useState(1);
  const [first, setfirst] = useState(false);
  const [subtotal, setsubtotal] = useState()

  const navigate = useNavigate();

  const removeItem = (index) => {
    let copy = [...showCartdata];
    copy.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(copy));
    setstatusBtn(!statusBtn);
  };

  const decQuantity = (e, i) => {
    if (showCartdata[i].quantity > 1) {
      let copy = [...showCartdata];
      copy[i].quantity = copy[i].quantity - 1;
       
      localStorage.setItem("cart", JSON.stringify(copy));
      setfirst(!first);
    }
    
  };

  const incQuantity = (e, i) => {
    if (showCartdata[i].quantity < 10) {
      let copy = [...showCartdata];
      copy[i].quantity = e.quantity + 1;
      // setQuantity(quantity + 1)
      localStorage.setItem("cart", JSON.stringify(copy));
      setfirst(!first);
    }
    
  };


  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("login")) || {};
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let newCart = cart.filter((item) => item.username === user.username);
    // let newCart = JSON.parse(localStorage.getItem("cart")) || [];
    setshowCartdata(newCart);
  }, [statusBtn, first]);

  useEffect(() => {
    let total = showCartdata.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setsubtotal(total);
  }, [showCartdata]);

  return (
    <div className="container p-3">
      <div className="row">
        
      <div className="d-flex" onClick={() => navigate("/home")}>
        <span>
          <MdOutlineChevronLeft style={{ fontSize: "30px" }} />
        </span>
        <h4>Continue shopping</h4>
      </div>
      <hr />
      <h1 className="mt-3">SHOPPING CART</h1>
      <p>You have {showCartdata.length} items in your cart</p>

      <div>
        {showCartdata.map((e, i) => {
          return (
            <>
              <div
                className="shadow d-flex justify-content-around px-3 m-4 border"
                style={{ width: "1200px" }}
              >
                <img
                  src={e.image}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />

                <div className="pt-4">
                  <h2>{e.title}</h2>
                  <p>{e.category}</p>
                </div>

                <div className="d-flex mt-5">
                  <button
                    className="btn btn-primary text-center mx-1"
                    style={{ height: "30px" }}
                    onClick={() => decQuantity(e, i)}
                  >
                    -
                  </button>
                  <input
                    className="px-3 form-control"
                    max="10"
                    min="1"
                    readOnly
                    name="number"
                    value={e.quantity}
                    style={{ width: "50px", height: "30px", outline: "none" }}
                  />
                  <button
                    className="btn btn-primary text-center mx-1"
                    style={{ height: "30px" }}
                    onClick={() => incQuantity(e, i)}
                  >
                    +
                  </button>
                </div>

                <h2 className="pt-5">{e.price * e.quantity}</h2>
                <h3 className="pt-5" onClick={removeItem}>
                  <MdDelete style={{ color: "rgba(223, 10, 10, 0.867)" }} />
                </h3>
              </div>
            </>
          );
        })}
      </div>

      <div className="px-3 m-4" style={{background:"#ececec", width:"1220px"}}>
        <h5 className="m-3">PRICE DETAILS ({showCartdata.length} Items)</h5>
        <hr />

      <div>
        <div className="d-flex justify-content-between">
        <p className="px-3">Subtotal</p>
        <p className="mx-4">{subtotal}</p>
        </div>

        <div className="d-flex justify-content-between">
        <p className="px-3">Shipping Fee</p>
        <p className="mx-4">12</p>
        </div>

        <div className="d-flex justify-content-between">
        <p className="px-3">Total MRP(Incl. taxes)</p>
        <p className="mx-4">{subtotal + 12}</p>
        </div>


      </div>
      
      </div>
      <div className="d-grid ">
      <button className="btn px-2 m-2" style={{background:"#E6007E", color:"white", width:"1220px",height:"50px"}} type="button">Proceed to Pay</button>
      </div>
      {/* <div className="card mb-4 mb-lg-0 rounded px-3 m-4" style={{ width: "1200px" }}>
        <div className="card-body">
        <div>
          <h2>Card details</h2>
          <p>
            <strong>We accept</strong>
          </p>
          <img
            className="me-2"
            style={{ width: "45px", height: "28px" }}
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa"
          />
          <img
            className="me-2"
            style={{ width: "45px", height: "28px" }}
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express"
          />
          <img
            className="me-2"
            style={{ width: "45px", height: "28px" }}
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard"
          />
          <img
            className="me-2"
            style={{ width: "35px", height: "28px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
            alt="PayPal acceptance mark"
          />
          </div>
          <br />

        </div>
      </div> */}
      </div>

    </div>
  );
};

export default Cart;
