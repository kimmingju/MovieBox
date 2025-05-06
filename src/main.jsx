
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail.jsx";
import { MyBoxProvider } from "./context/MyBoxContext.jsx"; // 추가
import MyBox from './pages/MyBox';
import { CartProvider } from "./context/CartContext.jsx";
import CartPage from "./pages/CartPage.jsx";
import { MyMovieProvider } from "./context/MyMovieContext";
import MyMovie from "./pages/MyMovie";
ReactDOM.createRoot(document.getElementById("root")).render(
 
 <BrowserRouter>
    <MyBoxProvider>
    <MyMovieProvider>
      <CartProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/mybox" element={<MyBox />} />
        <Route path="/mymovie" element={<MyMovie />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      </CartProvider>
      </MyMovieProvider>
    </MyBoxProvider>
  </BrowserRouter>
);
