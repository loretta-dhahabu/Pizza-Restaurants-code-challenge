import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import RestaurantList from './component/RestaurantList';
import PizzaList from './component/PizzaList';
import Restaurant from './component/Restaurant'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/restaurants" element={<RestaurantList />}></Route>
          <Route path="/pizzas" element={<PizzaList />}></Route>
          <Route path="/restaurants/:id" element={<Restaurant />}></Route>
          {/* <Route exact path="/meals/:id/edit" element="<Home/>" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
