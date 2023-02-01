SELECT purchases.id AS purchase_id, products.title AS product_name, SUM(count) AS count, users.email AS buyer_email FROM purchases
LEFT JOIN users ON users.id = purchases.buyer
LEFT JOIN products ON products.id = purchases.product
WHERE users.star = true
GROUP BY purchases.id, products.title, users.email;
