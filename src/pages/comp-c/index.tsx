import { Outlet } from "react-router-dom";

function User() {
  return (
    <div>
      UserPage
      <Outlet></Outlet>
    </div>
  );
}

export default User;
