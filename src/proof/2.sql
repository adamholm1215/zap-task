SELECT users.email FROM purchases
LEFT JOIN users ON users.id = purchases.buyer
LEFT JOIN products ON products.id = purchases.product
WHERE products.title = 'iPhone 14'
AND purchases.count >= 1
GROUP BY users.email;
