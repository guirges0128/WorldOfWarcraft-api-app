import {Outlet} from 'react-router-dom';
import StyledNav from './StyledNav';
const SharedLayout = () => {
    return (
        <>
            <StyledNav/>
            <Outlet/>
        </>
    )
}

export default SharedLayout;