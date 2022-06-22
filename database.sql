CREATE SCHEMA `backend_crud` ;

CREATE TABLE `backend_crud`.`users_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `postcode` VARCHAR(50) NOT NULL,
  `contact_phone_number` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

  INSERT INTO users_table (first_name, last_name, address, postcode, contact_phone_number, email, username, password) VALUES ('Philip Deniel', 'Follero', 'Sariaya, Quezon', '4322', '+639663470640', 'nielfollero0420@gmail.com', 'nielfollero', 'Password@123');
  INSERT INTO users_table (first_name, last_name, address, postcode, contact_phone_number, email, username, password) VALUES ('Eileen', 'Dover', 'Quezon City', 'WU412', '+639661234123', 'eileendover@gmail.com', 'eileendover', 'Password@1');
  INSERT INTO users_table (first_name, last_name, address, postcode, contact_phone_number, email, username, password) VALUES ('Sylvia', 'Trench', 'Lanao del Norte', 'ZS523', '+639661858882', 'sylviatrench0420@gmail.com', 'sylviatrench', 'Password@2');
  INSERT INTO users_table (first_name, last_name, address, postcode, contact_phone_number, email, username, password) VALUES ('Lois', 'Lane', 'Negros Oriental', '52SE3', '+639665829385', 'loislane@gmail.com', 'loislane', 'Password@3');
  INSERT INTO users_table (first_name, last_name, address, postcode, contact_phone_number, email, username, password) VALUES ('Penelope', 'Smallbone', 'Caloocan City', '42RW3', '+639669682734', 'penelope@gmail.com', 'penelope', 'Password@4');