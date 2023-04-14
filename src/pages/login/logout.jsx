// import { useContext } from "react";
// import { auth } from "../../firbase";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       dispatch({ type: "LOGOUT" }); // Cập nhật trạng thái đăng nhập trong AuthContext
//       navigate("/login"); // Đưa người dùng về trang đăng nhập
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// };

// export default Logout;