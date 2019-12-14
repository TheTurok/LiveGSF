import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
      <nav>
        <div className="nav-wrapper yellow accent-4" >
          <a style={{color:'purple', fontWeight: 'bold', margin:'10px', fontSize: '22px'}}> Golden Sunflower </a>
          <ul className="right">
            <li>
              <a> Inventory </a>
            </li>
            <li>
              <a> Tracker </a>
            </li>
            <li>
              <a> Google Login </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
 export default Header;
