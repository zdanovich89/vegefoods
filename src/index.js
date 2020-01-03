import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./jsx/navBar";
import "./css/style.css";
import "./css/icomoon.css";
import { Primary } from "./jsx/primary";
import Nav from "./jsx/nav";
import HomeSlider from "./jsx/homeSlider";
import InputPhone from "./jsx/inputPhone";

ReactDOM.render(
  <div>
    <Primary />
    <NavBar>
      <Nav />
    </NavBar>
    <HomeSlider />
    {/* <InputPhone/> */}
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
