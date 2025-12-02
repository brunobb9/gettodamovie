import React from "react";

export default function Header() {
  return (
    <header className="headerGlobal">
      <div className="headerContainer">
        <h1 className="vhs" data-text="Get To Da Movie!" onClick={() => window.location.reload()} style={{cursor:"pointer"}}>
          Get To Da Movie!
        </h1>
        <h3 className="header2">Search for your favorite movies here</h3>
      </div>
    </header>
  );
}
