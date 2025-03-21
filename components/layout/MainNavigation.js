import { useContext } from "react";
import Link from "next/link";

import classes from "./MainNavigation.module.css";
//import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  //const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
