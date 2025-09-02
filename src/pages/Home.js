import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="main container center">
            <h1>Projetos com react</h1>
            <ul>
                <li><Link to="/dropdown" className="link">Dropdown</Link></li>
                <li><Link to="/teste" className="link">404</Link></li>
            </ul>
        </div>
    )
}