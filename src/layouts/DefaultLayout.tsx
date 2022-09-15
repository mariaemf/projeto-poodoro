import { Outlet } from "react-router-dom";
import { Header } from "../assets/Header";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
