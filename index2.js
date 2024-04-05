// import express from "express";
// import axios from "axios";
// const PORT = 8000;
// const app = express();

// // Tạo một instance Axios với cấu hình cơ bản
// const instance = axios.create({
//   baseURL: "http://localhost:3000", // Địa chỉ của API
//   headers: {
//     "Content-Type": "application/json", // Đặt kiểu dữ liệu cho yêu cầu
//   },
// });

// // Sử dụng middleware để xử lý JSON body trong các yêu cầu
// app.use(express.json());

// // Xử lý GET '/products': Lấy danh sách sản phẩm từ API
// app.get("/products", async (req, res) => {
//   try {
//     const { data } = await instance.get("/products");

//     // Kiểm tra xem có sản phẩm nào không
//     if (data && data.length > 0) {
//       return res.status(200).json({
//         message: "Lấy danh sách sản phẩm thành công!",
//         data,
//       });
//     }

//     // Nếu không có sản phẩm, trả về mã lỗi 404
//     return res.status(404).json({ message: "Không có sản phẩm nào!" });
//   } catch (error) {
//     // Nếu có lỗi, trả về mã lỗi 500 và thông tin lỗi
//     return res.status(500).json({
//       name: error.name,
//       message: error.message,
//     });
//   }
// });

// // Xử lý POST '/products': Thêm một sản phẩm mới thông qua yêu cầu POST
// app.post("/products", async (req, res) => {
//   try {
//     const { data } = await instance.post("/products", req.body);

//     // Kiểm tra xem có dữ liệu trả về không
//     if (!data) {
//       // Nếu không có, trả về mã lỗi 400
//       return res.status(400).json({ message: "Thêm sản phẩm thất bại!" });
//     }

//     // Nếu thành công, trả về mã thành công 201 và thông tin sản phẩm mới
//     return res.status(201).json({
//       message: "Thêm sản phẩm thành công!",
//       data,
//     });
//   } catch (error) {
//     // Nếu có lỗi, trả về mã lỗi 500 và thông tin lỗi
//     return res.status(500).json({
//       name: error.name,
//       message: error.message,
//     });
//   }
// });

// // Xử lý GET '/products/:id': Lấy thông tin sản phẩm dựa trên ID
// app.get("/products/:id", async (req, res) => {
//   try {
//     const { data } = await instance.get(`/products/${req.params.id}`);

//     // Kiểm tra xem có dữ liệu trả về không
//     if (!data) {
//       // Nếu không có, trả về mã lỗi 400
//       return res.status(400).json({ message: "Lấy sản phẩm thất bại!" });
//     }

//     // Nếu thành công, trả về mã thành công 201 và thông tin sản phẩm
//     return res.status(201).json({
//       message: "Lấy sản phẩm thành công!",
//       data,
//     });
//   } catch (error) {
//     // Nếu có lỗi, trả về mã lỗi 500 và thông tin lỗi
//     return res.status(500).json({
//       name: error.name,
//       message: error.message,
//     });
//   }
// });

// // Xử lý PUT '/products/:id': Cập nhật thông tin sản phẩm dựa trên ID
// app.put("/products/:id", async (req, res) => {
//   try {
//     const { data } = await instance.put(`/products/${req.params.id}`, req.body);

//     // Kiểm tra xem có dữ liệu trả về không
//     if (!data) {
//       // Nếu không có, trả về mã lỗi 400
//       return res.status(400).json({ message: "Cập nhật sản phẩm thất bại!" });
//     }

//     // Nếu thành công, trả về mã thành công 201 và thông tin sản phẩm đã cập nhật
//     return res.status(201).json({
//       message: "Cập nhật sản phẩm thành công!",
//       data,
//     });
//   } catch (error) {
//     // Nếu có lỗi, trả về mã lỗi 500 và thông tin lỗi
//     return res.status(500).json({
//       name: error.name,
//       message: error.message,
//     });
//   }
// });

// // Xử lý DELETE '/products/:id': Xóa sản phẩm dựa trên ID
// app.delete("/products/:id", async (req, res) => {
//   try {
//     const { status } = await instance.delete(`/products/${req.params.id}`);

//     // Kiểm tra xem việc xóa sản phẩm thành công hay không
//     if (status !== 200) {
//       // Nếu không thành công, trả về mã lỗi 400
//       return res.status(400).json({ message: "Xóa sản phẩm thất bại!" });
//     }

//     // Nếu thành công, trả về mã thành công 200 và thông báo
//     return res.status(200).json({
//       message: "Xóa sản phẩm thành công!",
//     });
//   } catch (error) {
//     // Nếu có lỗi, trả về mã lỗi 500 và thông tin lỗi
//     return res.status(500).json({
//       name: error.name,
//       message: error.message,
//     });
//   }
// });

// // Khởi động Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
