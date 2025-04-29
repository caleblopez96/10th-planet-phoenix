import Button from "../Buttons/Button";

export default function CartLineItem() {
  return (
    <>
      <div>
        <img src="/products/10th-planet-phoenix-hoodie.webp" alt="img"></img>
        <p>
          product name <span>$70.00</span>
        </p>
        <p>product description</p>
        <p>size</p>
        // quantity picker
      </div>

      <div>
        <h3>Order Summary</h3>
        <div>
          <span>1 item</span>
          <span>$60.00</span>
        </div>
        <div>
          <span>Sales Tax</span>
          <span>$7.90</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>$4.99</span>
        </div>
        <div>
          <span>Total</span>
          <span>$85.00</span>
        </div>
        <Button content="Checkout" />
      </div>
    </>
  );
}
