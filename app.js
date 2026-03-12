const express = require("express");
// import express from "express";

// import router from "./routes/index.js";

// import { notFound, errorHandler } from "./middleware/error.middleware.js";

const app = express();

// --- 1. MIDDLEWARES BẢO MẬT & TIỆN ÍCH ---
app.use(express.json()); 
app.use(express.static("src"));

// --- 2. KẾT NỐI ROUTER ---
// Tất cả các API sẽ có tiền tố là /api (VD: http://localhost:4000/api/log)
// app.use("/api", router); 

// --- 3. MIDDLEWARE XỬ LÝ LỖI ---
// app.use(notFound);
// app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server Running 127.0.0.1:3000");
    
})