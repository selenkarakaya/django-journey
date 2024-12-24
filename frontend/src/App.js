import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BookNow from "./pages/BookNow";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";
import Profile from "./pages/Profile";
import Tickets from "./pages/Tickets";
import SingleTicketItem from "./pages/SingleTicketItem";

function App() {
  return (
    <>
      <Router>
        <div className="container2">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookNow" element={<BookNow />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/Profile" element={<Profile />} />

            <Route path="/new-ticket" element={<NewTicket />} />

            <Route path="/tickets" element={<Tickets />} />

            <Route path="/ticket/:ticketId" element={<SingleTicketItem />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
