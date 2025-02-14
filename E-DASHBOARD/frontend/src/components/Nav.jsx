import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate('/signup');
  }

  return (
    <div className='nav-first-div'>
      <ul className='nav-ul'>
        <li><Link to="/">Product</Link></li>
        <li><Link to="/add">Add product</Link></li>
        <li><Link to="/update">Update product</Link></li>
        {/* <li><Link to="/logout">Logout</Link></li> */}
        <li><Link to="/profile">Profile</Link></li>
        <li>{auth ? <Link onClick={logout} to="/signup">Logout</Link> :
        <Link to="/signup">SignUp</Link>}</li>

      </ul>
    </div>
  );
};

export default Nav;
