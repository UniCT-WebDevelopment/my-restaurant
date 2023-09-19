-- Struttura della tabella `chats`
CREATE TABLE `chats` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `messages`
CREATE TABLE `messages` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `chat_id` INT DEFAULT NULL,
  `user_id` INT DEFAULT NULL,
  `testo` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `orders`
CREATE TABLE `orders` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `stato` VARCHAR(255) DEFAULT NULL,
  `indirizzo` VARCHAR(255) DEFAULT NULL,
  `tipo` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `user_id` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `order_product`
CREATE TABLE `order_product` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_id` INT DEFAULT NULL,
  `product_id` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `products`
CREATE TABLE `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(255) NOT NULL,
  `ingredienti` TEXT NOT NULL,
  `categoria` VARCHAR(100) NOT NULL,
  `percorso_img` VARCHAR(255) NOT NULL,
  `prezzo` DECIMAL(10,2) DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `slides`
CREATE TABLE `slides` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `titolo` VARCHAR(255) NOT NULL,
  `immagine` VARCHAR(255) DEFAULT NULL,
  `testo` TEXT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `is_used` TINYINT(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `users`
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(50) NOT NULL,
  `cognome` VARCHAR(50) NOT NULL,
  `eta` INT DEFAULT NULL,
  `n_telefono` VARCHAR(15) DEFAULT NULL,
  `indirizzo` VARCHAR(100) DEFAULT NULL,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `tipo` VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Inserimento dell'utente con tipo = amministratore
INSERT INTO `users` (`id`, `nome`, `cognome`, `eta`, `n_telefono`, `indirizzo`, `username`, `password`, `tipo`) VALUES
(NULL, 'administrator', 'administrator', 99, '1111111111', 'root', 'admin@admin.com', 'b3aca92c793ee0e9b1a9b0a5f5fc044e05140df3', 'administrator');
