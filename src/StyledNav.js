import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink
                to='/'
                className='me-2'
                style={({isActive}) => {return {color:isActive? 'green':'white', textDecoration: 'none'}}}
                ></NavLink>
            <NavLink
                to='/'
                className='me-2'
                style={({isActive}) => {return {color:isActive? '#0d6efd':'white', textDecoration: 'none'}}}
                 >Home</NavLink>
            <NavLink
                to='/class'
                className='me-2'
                style={({isActive}) => {return {color:isActive? '#0d6efd':'white', textDecoration: 'none'}}}
                >Classes</NavLink>
            <NavLink
                to='/talents'
                className='me-2'
                style={({isActive}) => {return {color:isActive? '#0d6efd':'white', textDecoration: 'none'}}}
                >Talents</NavLink>
        </nav>
    )
}

export default Navbar;