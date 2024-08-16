import { NavBar } from "../navbar/Navbar";
import logo from '../../assets/Logo.png'


export function Header() {
  return (
    <header className="max-w-7xl flex items-center justify-between p-4">
      <img className="w-44" src={logo} alt="logo" />
      <NavBar />
    </header>
  )
}
