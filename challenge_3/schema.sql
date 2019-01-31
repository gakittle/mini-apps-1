CREATE DATABASE orders;
USE orders;

CREATE TABLE orders(
  id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  email TEXT,
  password TEXT,
  address_1 TEXT,
  address_2 TEXT,
  city TEXT,
  state TEXT,
  zip_code INT,
  phone_num INT,
  credit_card_num INT,
  expiry_date DATE,
  cvv INT,
  billing_zip INT,
  created_at TIMESTAMP
);