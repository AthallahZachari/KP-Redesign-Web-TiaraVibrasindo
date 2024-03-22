function getAllCustomer() {
  return "SELECT customer_id, first_name, last_name, phone, address, city FROM customers";
}

function getAllProducts() {
  return "SELECT product_id, name, quantity_in_stock, unit_price FROM products";
}

function getAllOrderDetail() {
  return `SELECT o.order_id, c.customer_id, p.name, i.quantity,  c.first_name, c.last_name, c.phone, c.address, c.city
    FROM orders o 
    INNER JOIN order_items i ON o.order_id = i.order_id 
    INNER JOIN customers c ON o.customer_id = c.customer_id
    INNER JOIN products p ON  p.product_id = i.product_id`;
}

function deleteAllOrders(){
  return 'DELETE FROM order_items WHERE `order_items`.`order_id` = ?'
}

export { getAllCustomer, getAllOrderDetail, getAllProducts, deleteAllOrders };
