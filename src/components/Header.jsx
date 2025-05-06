import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
    <h1 className="logo">🎬 MovieBox</h1>
    <nav style={{ 
      position: 'absolute', 
      right: '40px' 
      }}>
        <Link to="/mymovie"
        style={{
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '25px',
          marginRight:'16px' 
        }}
        >🎥 MyMovie</Link>
        <Link to="/cart" 
        style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '25px',
          marginRight:'16px' 
          }}>
          🛒 MyCart
        </Link>
        
        <Link to="/mybox" 
        style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '25px' }}>
          ❤️ MyBox
        </Link>
      </nav>
  </header>
  );
}

export default Header;