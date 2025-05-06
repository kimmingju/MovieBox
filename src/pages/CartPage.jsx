import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div style={{
      padding: "30px", 
      color: "white" }}>
      <h2>🛒 장바구니</h2>

      {cartItems.length === 0 ? (
        <p sty>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((movie) => (
              <li key={movie.id} style={{ marginBottom: "20px" }}>
                🎬 {movie.title} - {movie.price.toLocaleString()}원
                <button
                  onClick={() => removeFromCart(movie.id)}
                  style={{ marginLeft: "10px" }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>

          <h3>총 합계: {getTotalPrice().toLocaleString()}원</h3>
          <button
            onClick={() => alert("결제가 완료되었습니다!")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4b50a3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            💳 결제하기
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
