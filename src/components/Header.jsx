import React from "react";

const Header = () => {
  return (
    <div id="header" className="site-banner">
      <div className="banner-text">
        <h1 className="banner-t">
          Nasza firma oferuje najwyższej jakości produkty.
        </h1>
        <p className="banner-t">Nie wierz nam na słowo - sprawdź</p>
        <a href="#main-offer" className="new-anchor">
          <button className="offer-button" type="button">
            Oferta
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
