import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink to='/' className='me-2'></NavLink>
            <NavLink to='/' className='me-2'>Home</NavLink>
            <NavLink to='/class' className='me-2'>Classes</NavLink>
            <NavLink to='/talents' className='me-2'>Talents</NavLink>
        </nav>
    )
}

export default Navbar;