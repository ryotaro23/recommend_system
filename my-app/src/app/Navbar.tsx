import { Link, Route, BrowserRouter as Router, Routes, } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Recommend System</h1>
        <Link to="/">トップに戻る</Link>
      </section>
      
    </nav>
    
  )
}
