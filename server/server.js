import express from "express";
import mysql from "mysql";
import cors from "cors";
import {
  deleteAllOrders,
  getAllCustomer,
  getAllOrderDetail,
  getAllProducts,
} from "./queries.js";

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "store_db",
});

app.use(cors());

app.get("/", (req, res) => {
  res.json("DB connected, ready to use...");
});

app.get("/customer", (req, res) => {
  const q = getAllCustomer();
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/order", (req, res) => {
  const q = getAllOrderDetail();
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/product", (req, res) => {
  const q = getAllProducts();
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/simpleorder", (req, res) => {
  const q = "SELECT * FROM orders";
  db.query(q, (err, data) => {
    if (err) return console.error(err, { message: "Failed to obtain data" });
    return res.json(data);
  });
});

app.delete("/simpleorder/:id", (req, res) => {
  const orderID = parseInt(req.params.id);
  console.log(orderID);
  const q = "DELETE FROM orders WHERE `orders`.`order_id` = ?";
  db.query(q, [orderID], (err, data) => {
    if (err) return console.error(err, { message: "Delete failed!" });
    return res.json({ message: "Data successfuly deleted" });
  });
});

app.delete("/order/:id", (req, res) => {
  const orderID = parseInt(req.params.id);
  console.log(orderID);

  const p = deleteAllOrders();
  db.query(p, [orderID], (err, data) => {
    if (err)
      return res.json(err, {
        message:
          "Failed, parameter is passed but there might be a problem in DB",
      });
    return res.json({ message: "Successfully deleted!!" });
  });
});

app.delete("/product/:id", (req, res) => {
  const productID = parseInt(req.params.id);
  console.log(productID);

  const q = "DELETE FROM products WHERE `products`.`product_id` = ?";
  db.query(q, [productID], (err, data) => {
    if (err)
      return res.json(err, {
        message:
          "Failed, parameter is passed but there might be a problem in DB",
      });
    return res.json({ message: "Successfully deleted!!" });
  });
});

app.listen(8081, () => {
  console.log("Connected to the server...");
});
