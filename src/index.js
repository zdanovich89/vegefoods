import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { NavBar } from "./jsx/navBar";
import { Primary } from "./jsx/primary";
import { Nav } from "./jsx/nav";
import { ShopHeader } from "./jsx/shopHeader";
import { FtcoSection } from "./jsx/ftcoSection";
import { EmailSection } from "./jsx/emailSection";
import { Footer } from "./jsx/footer";
import { InputPhone } from "./jsx/inputPhone";

ReactDOM.render(
  <div>
    <Primary />
    <NavBar>
      <Nav />
    </NavBar>
    <ShopHeader />
    <FtcoSection />
    <EmailSection />
    <Footer />
    <InputPhone />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
