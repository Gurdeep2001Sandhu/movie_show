import React from "react";
import Home from "./pages/Home";
import Show from "./pages/Show";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Book from '../src/components/Book'
import BookTicket from "./pages/BookTicket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/bookticket/:name" element={<BookTicket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
