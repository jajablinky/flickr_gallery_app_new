import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Nav = ( {fetchData} ) => {
  return (

      /* All navlinks when clicked on fetches the relevant data */

    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="lol" onClick={() => fetchData('lol')}>Lol</NavLink>
        </li>
        <li>
          <NavLink to="bebe" onClick={() => fetchData('bebe')}>Bebe</NavLink>
        </li>
        <li>
          <NavLink to="sdfsdf" onClick={() => fetchData('sdfsdf')}>sdfsdf</NavLink>
        </li>
        <li>
          <NavLink to="neopets" onClick={() => fetchData('neopets')}>Neopets</NavLink>
        </li>
        <li>
          <NavLink to="elon" onClick={() => fetchData('elon')}>Elon</NavLink>
        </li>
        <li>
          <NavLink to="bratz" onClick={() => fetchData('bratz')}>Bratz</NavLink>
        </li>
        <li>
        <NavLink to="meme" onClick={() => fetchData('meme')}>Meme</NavLink>
        </li>
        <li>
        <NavLink to="millenium" onClick={() => fetchData('millenium')}>Millenium</NavLink>
        </li>
        <Outlet />
      </ul>
    </nav>
  );
};

export default Nav;