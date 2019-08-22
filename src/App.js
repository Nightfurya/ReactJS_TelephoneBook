import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideList from "./Components/SideList/SideList";
import DetailedInfo from "./Components/DetailedInfo/DetailedInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <div className="sidebar-list">
          <SideList />
        </div>
        <DetailedInfo />
      </section>
    </div>
  );
}

export default App;
