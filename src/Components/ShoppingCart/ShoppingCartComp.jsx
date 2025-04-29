import CartLineItem from "./CartLineItem";

export default function ShoppingCart() {
  return (
    <section>
      // maybe change this div to seomething more sematnic and the calssname is
      just a placeholder so i remmeber what its doing
      <div className="heading">
        <h2>Your Bag</h2>
        <p>Total: </p>
        <a>Conitnue Shopping</a>
      </div>
      {/* <CartLineItem /> */}
      <CartLineItem />
    </section>
  );
}
