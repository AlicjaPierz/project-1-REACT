import React from "react";

const Nav = () => {
  return (
    <nav>
      <div id="nav-bar">
        <div className="nav-left">
          <button className="nav-buttons">Firma</button>
        </div>
        <div className="nav-right">
          <button className="nav-buttons we-but" type="button">
            <a href="#about" className="new-anchor">
              O nas
            </a>
          </button>
          <button className="nav-buttons offer-but" type="button">
            <a href="#main-offer" className="new-anchor">
              Oferta
            </a>
          </button>
          <button className="nav-buttons contact-but" type="button">
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
