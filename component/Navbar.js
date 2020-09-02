import Link from "next/link";
import { Navbar } from "react-bootstrap";

import useUser from "../data/useUser";
import { logout } from "../requests/userApi";

const Nav = () => {
  const { loading, loggedIn, user, mutate } = useUser();

  const LoginOrInfo = () => {
    if (loading) return null;
    if (loggedIn)
      return (
        <>
          <Navbar.Text>Signed in as: {user.name}</Navbar.Text>
          <button
            className="btn btn-outline-danger"
            onClick={async () => {
              await logout();
              mutate();
            }}
          >
            {" "}
            Logout{" "}
          </button>
        </>
      );
    if (!loggedIn)
      return (
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/login">
              <a className="nav-link"> Login</a>
            </Link>
          </li>
        </ul>
      );
  };
  return (
    <Navbar>
      <Link href="/">
        <a className="navbar-brand">Nav</a>
      </Link>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <LoginOrInfo />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
