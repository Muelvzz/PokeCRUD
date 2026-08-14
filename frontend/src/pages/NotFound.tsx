import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>

            <Link to="/">
                Browse Pokédex
            </Link>
        </>
    )
}

export default NotFound