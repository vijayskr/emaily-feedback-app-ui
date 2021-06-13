import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">Emaily Feedback</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {!auth && (
            <li>
              <a>Login with Google</a>
            </li>
          )}
          {auth && (
            <li>
              <a>Logout</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
