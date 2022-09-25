import cookies from "react-cookies";

function Header({ x, loggedin }) {
  return (
    <div className="head">
      <h1>posts and comments</h1>
      {loggedin && (
        <div className="logee">
          <p>Welcome Back {cookies.load("name")}</p>
          <button onClick={x}>LogOut</button>
        </div>
      )}
    </div>
  );
}

export default Header;