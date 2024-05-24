import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import AddBus from "./pages/DashboardPage/AddBus";
import AddCategory from "./Components/AddCategory";
import AddCounter from "./Components/AddCounter";
import AddEmployee from "./pages/DashboardPage/AddEmployee";
import AddServices from "./pages/DashboardPage/AddServices";
import Bus from "./pages/DashboardPage/Bus";
import Category from "./Components/Category";
import Counter from "./Components/Counter";
import Dashboard from "./pages/DashboardPage/Dashboard";
import EditEmployee from "./Components/EditEmployee";
import Employee from "./pages/DashboardPage/Employee";
import EmployeeDetail from "./Components/EmployeeDetail";
import EmployeeLogin from "./pages/LoginPage/EmployeeLogin";
import Home from "./pages/DashboardPage/Home";
import AdminLogin from "./pages/LoginPage/AdminLogin";
import Passenger from "./pages/DashboardPage/Passenger";
import PassengerDetails from "./pages/PassengerDetailsPage/PassengerDetails";
import PrivateRoute from "./Components/PrivateRoute";
import SeatBooking from "./pages/SeatBookingPage/SeatBooking";
import Services from "./pages/DashboardPage/Services";
import ServiceSelection from "./pages/ServiceSelectionPage/ServiceSelection";
import Start from "./Components/Start";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServiceSelection />}></Route>
        <Route path="/seatbooking" element={<SeatBooking />}></Route>
        <Route path="/seatbooking/passengerdetails" element={<PassengerDetails />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/employee_login" element={<EmployeeLogin />}></Route>
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}></Route>

        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/category" element={<Category />}></Route>
          <Route path="/dashboard/bus" element={<Bus />}></Route>
          <Route path="/dashboard/services" element={<Services />}></Route>
          <Route path="/dashboard/counter" element={<Counter />}></Route>
          <Route path="/dashboard/passenger" element={<Passenger />}></Route>
          <Route path="/dashboard/ticket" element={<Ticket />}></Route>
          <Route path="/dashboard/add_category" element={<AddCategory />}></Route>
          <Route path="/dashboard/add_employee" element={<AddEmployee />}></Route>
          <Route path="/dashboard/add_bus" element={<AddBus />}></Route>
          <Route path="/dashboard/add_services" element={<AddServices />}></Route>
          <Route path="/dashboard/add_counter" element={<AddCounter />}></Route>
          <Route path="/dashboard/edit_employee/:id" element={<EditEmployee />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
