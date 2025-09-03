import { Link } from 'react-router-dom'

export default function Back() {
    return (
        <Link to='/' style={{display: 'flex', justifyContent: 'center', color: 'brown', textDecoration: 'none'}}>Home</Link>
    )
}