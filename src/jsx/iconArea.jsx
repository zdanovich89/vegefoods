import React from "react";

export function IconArea() {
  return (
    <div className="bottom-area d-flex px-3">
      <div className="m-auto d-flex">
        <a
          href="#"
          className="add-to-cart d-flex justify-content-center align-items-center text-center"
        >
          <span>
            <i className="ion-ios-menu"></i>
          </span>
        </a>
        <a
          href="#"
          className="buy-now d-flex justify-content-center align-items-center mx-1"
        >
          <span>
            <i className="ion-ios-cart"></i>
          </span>
        </a>
        <a
          href="#"
          className="heart d-flex justify-content-center align-items-center "
        >
          <span>
            <i className="ion-ios-heart"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
