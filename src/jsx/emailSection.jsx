import React from "react";
import { EmailForm } from "./emailForm";

export function EmailSection() {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div className="container py-4">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-6">
            <h2 style={{ fontSize: 22 + "px" }} className="mb-0">
              Subcribe to our Newsletter
            </h2>
            <span>
              Get e-mail updates about our latest shops and special offers
            </span>
          </div>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
