import "./slideBar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
              {/* <Link to="/users" className="link"> */}
              <li className="sidebarListItem active">
                City
              </li>
            {/* </Link> */}
            <Link to="/hyderabad" className="link">
              <li className="sidebarListItem">
                Hyderabad
              </li>
            </Link>
            <Link to="/tanuku" className="link">
            <li className="sidebarListItem">
                Tanuku
              </li>
              </Link>
              <Link to="/bhimavaram" className="link">
              <li className="sidebarListItem">
               Bhimavaram
              </li>
              </Link>
              <Link to="/rajahmundry" className="link">
              <li className="sidebarListItem">
                Rajahmundry
              </li>
              </Link>
          </ul>
        </div>
      
        </div>
    </div>
  );
}