import { Outlet } from "react-router-dom";
import { Header } from "../../assets/Header";
import { LayoutContainer } from "./styles";
import Timer from "../../componentes/Timer.svg";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
