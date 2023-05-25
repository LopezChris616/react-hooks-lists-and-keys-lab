import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkDisplay = links.map(link => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return (
    <nav>{linkDisplay}</nav>
  )
}

export default NavBar;
