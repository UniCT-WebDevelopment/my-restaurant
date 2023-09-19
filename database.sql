-- Struttura della tabella `chats`
CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `messages`
CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `chat_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `testo` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `orders`
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `stato` varchar(255) DEFAULT NULL,
  `indirizzo` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `order_product`
CREATE TABLE `order_product` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `products`
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `ingredienti` text NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `percorso_img` varchar(255) NOT NULL,
  `prezzo` decimal(10,2) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `slides`
CREATE TABLE `slides` (
  `id` int(11) NOT NULL,
  `titolo` varchar(255) NOT NULL,
  `immagine` varchar(255) DEFAULT NULL,
  `testo` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `is_used` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Struttura della tabella `users`
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL,
  `eta` int(11) DEFAULT NULL,
  `n_telefono` varchar(15) DEFAULT NULL,
  `indirizzo` varchar(100) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `tipo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Inserimento dell'utente con tipo = amministratore
INSERT INTO `users` (`id`, `nome`, `cognome`, `eta`, `n_telefono`, `indirizzo`, `username`, `password`, `tipo`) VALUES
(17, 'administrator', 'administrator', 99, '1111111111', 'root', 'admin@admin.com', 'b3aca92c793ee0e9b1a9b0a5f5fc044e05140df3', 'administrator');
