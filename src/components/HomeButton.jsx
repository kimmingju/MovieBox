import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <div style={{ 
      textAlign:"center",
      padding: "20px" }}>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          border: "1px solid white",
          padding: "8px 12px",
          borderRadius: "5px",
        }}
      >
        ← 홈으로
      </Link>
    </div>
  );
}

export default HomeButton;
