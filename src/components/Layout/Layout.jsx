import { Link } from "react-router-dom"
import "./Layout.css"

const Layout = (props) => {
  return (
    <>
      <header>
        <img src="./src/components/Layout/logo.png" alt="imagen de logo ArteIn" />
        <h5>The birds don't sing because it's dawn, they sing so that it's dawn🕊🌅</h5>

        <nav>
        <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/PROJECT">PROJECT</Link></li>
        <li><Link to="/CONTACT">CONTACT</Link></li>
        </ul>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
     
      <footer>
        <p>Website developed by MBM-DESIGN*2025</p>
      </footer>
    </>
  )
}
export {Layout}