import React from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route> */}
          {/* <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/meals" element={<FoodsList />}></Route>
          <Route exact path="/meals/:id" element={<SingleMeal />}></Route> */}
          {/* <Route exact path="/meals/:id/edit" element="<Home/>" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
