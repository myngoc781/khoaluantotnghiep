// import "./table.scss";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const List = () => {
//   const rows = [
//     {
//       id: 1143155,
//       product: "Acer Nitro 5",
//       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 785,
//       method: "Cash on Delivery",
//       status: "Approved",
//     },
//     {
//       id: 2235235,
//       product: "Playstation 5",
//       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Michael Doe",
//       date: "1 March",
//       amount: 900,
//       method: "Online Payment",
//       status: "Pending",
//     },
//     {
//       id: 2342353,
//       product: "Redragon S101",
//       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 35,
//       method: "Cash on Delivery",
//       status: "Pending",
//     },
//     {
//       id: 2357741,
//       product: "Razer Blade 15",
//       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Jane Smith",
//       date: "1 March",
//       amount: 920,
//       method: "Online",
//       status: "Approved",
//     },
//     {
//       id: 2342355,
//       product: "ASUS ROG Strix",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Harold Carol",
//       date: "1 March",
//       amount: 2000,
//       method: "Online",
//       status: "Pending",
//     },
//   ];
//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">Tracking ID</TableCell>
//             <TableCell className="tableCell">Product</TableCell>
//             <TableCell className="tableCell">Customer</TableCell>
//             <TableCell className="tableCell">Date</TableCell>
//             <TableCell className="tableCell">Amount</TableCell>
//             <TableCell className="tableCell">Payment Method</TableCell>
//             <TableCell className="tableCell">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell">
//                 <div className="cellWrapper">
//                   <img src={row.img} alt="" className="image" />
//                   {row.product}
//                 </div>
//               </TableCell>
//               <TableCell className="tableCell">{row.customer}</TableCell>
//               <TableCell className="tableCell">{row.date}</TableCell>
//               <TableCell className="tableCell">{row.amount}</TableCell>
//               <TableCell className="tableCell">{row.method}</TableCell>
//               <TableCell className="tableCell">
//                 <span className={`status ${row.status}`}>{row.status}</span>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;
import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { projectColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firbase";
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, } from "firebase/firestore";

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "projects"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  console.log(data);
  const handleDelete = (id) => {
    const docRef = doc(db, "projects", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document successfully deleted!");
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/projects/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách dự án
        <Link to="/projects/createproject" className="link">
          Tạo mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={projectColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
