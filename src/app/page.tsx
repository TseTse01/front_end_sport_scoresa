"use client";
import "./styles/index.scss"
import Navbar from "./components/Navbar";
import HeaderContainer from "./components/HeaderContainer"


export default function Home() {
  return (
    <div className="appContainer">
      <div className="home">
        <Navbar />
        <HeaderContainer />
      </div>
    </div>
  )
}
