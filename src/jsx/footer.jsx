import React from "react";
import { PageUp } from "./pageUp";
import { SocialNetworks } from "./footerSocialNetworks";
import { FooterMenu } from "./footerMenu";
import { FooterHelp } from "./footerHelp";
import { FooterContacts } from "./footerContacts";

export function Footer() {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <PageUp />
        <div className="row mb-5">
          <SocialNetworks />
          <FooterMenu />
          <FooterHelp />
          <FooterContacts />
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i class="icon-heart color-danger" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
