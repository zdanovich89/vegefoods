import React from "react";
import { ProductCategory } from "./productCategory";
import { ProductBlock } from "./productBlock";
import { Pagination } from "./pagination";

export function FtcoSection() {
  return (
    <section className="ftco-section">
      <div className="container">
        <ProductCategory />
        <ProductBlock />
        <Pagination />
      </div>
    </section>
  );
}
