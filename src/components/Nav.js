import { Link } from "react-router-dom"

export default function Nav(props) {
    return (
        <div className="nav">
            <Link className="text" to='/' >
                <div className="hover">Home</div>
            </Link>

            <Link className="text" to='/about' >
                <div className="hover">About</div>
            </Link>

            <Link className="text" to='/stocks' >
                <div className="hover">Dashboard</div>
            </Link>
        </div>
    )
}