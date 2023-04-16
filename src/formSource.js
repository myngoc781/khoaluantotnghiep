const $ = window.$;
export const userInputs = [
    {
      id: "userName",
      label: "Tên người dùng",
      type: "text",
      placeholder: "vd: myngoc",
    },
    {
      id: "displayName",
      label: "Họ và tên",
      type: "text",
      placeholder: "vd: Tran Thi My Ngoc",
    },
    {
      id: "email",
      label: "Email",
      type: "mail",
      placeholder: "vd: myngoc@gmail.com",
    },
    {
      id: "phoneNumber",
      label: "Số điện thoại",
      type: "text",
      placeholder: "vd: 0935143494",
    },
    {
      id: "password",
      label: "Mật khẩu",
      type: "password",
    },
    
    {
      id: "position",
      label: "Vị trí làm việc",
       options: [
      { value: "designer", label: "Designer" },
      { value: "developer", label: "Developer" },
      { value: "manager", label: "Manager" },
      { value: "marketing", label: "Marketing" },
    ],
    },
    {
      id: "address",
      label: "Địa chỉ",
      type: "text",
      placeholder: "vd: 23 Le Loi",
    },
   
  ];
  
//   $("#position").replaceWith('<select id="position" name="position" class="ProductDetailsQuantityTextBox">' +
//   '<option value="1">1</option>' +
//   '<option value="2">2</option>' +
//   '<option value="3">3</option>' +
//   '<option value="4">4</option>' +
//   '<option value="5">5</option>' +
// '</select>');
  export const projectInputs = [
    {
      id: "projectName",
      label: "Tên dự án",
      type: "text",
      placeholder: "",
    },
    {
      id: "projectDetails",
      label: "Mô tả",
      type: "text",
      placeholder: "",
    },
    {
      id: "projectManager",
      label: "Người quản lý",
      type: "text",
      placeholder: "",
    },
    {
      id:"startDate",
      label: "Ngày bắt đầu",
      type: "date",
      placeholder: "",
    },
    {
      id: "dueDate",
      label: "Ngày đến hạn",
      type: "text",
      placeholder: "",
    },
    {
      id: "status",
      label: "Trạng thái",
      type: "date",
      placeholder: "",
    },
  ];
  