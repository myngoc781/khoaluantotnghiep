import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { auth } from "../../firbase";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CreateProject from "../../pages/createproject/CreateProject";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch({ type: "LOGOUT" }); 
      navigate("/login"); 
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
  
          <span className="logo">UniClo Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">TRANG CHỦ</p>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Thống kê</span>
            </li>
          </Link>
          <p className="title">DANH MỤC</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng</span>
            </li>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Dự án</span>
            </li>
          </Link>
          
          <p className="title">NGƯỜI DÙNG</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Thông tin cá nhân</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>

      </div>
  
    </div>
  );
};

export default Sidebar;
