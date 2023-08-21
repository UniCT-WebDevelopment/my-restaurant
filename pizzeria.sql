-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ago 20, 2023 alle 17:21
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizzeria`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `chats`
--

INSERT INTO `chats` (`id`, `created_at`, `updated_at`) VALUES
(2, '2023-08-10 08:49:50', '2023-08-19 10:36:34'),
(3, '2023-08-12 14:54:27', '2023-08-13 10:37:50'),
(4, '2023-08-17 10:11:45', '2023-08-17 11:01:54');

-- --------------------------------------------------------

--
-- Struttura della tabella `messages`
--

CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `chat_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `testo` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `messages`
--

INSERT INTO `messages` (`id`, `chat_id`, `user_id`, `testo`, `created_at`) VALUES
(1, 2, 15, 'ciao bro', '2023-08-10 10:49:50'),
(2, 2, 15, 'uassap bro', '2023-08-10 10:50:45'),
(3, 2, 15, 'ciao bro', '2023-08-11 14:38:52'),
(4, 2, 15, 'allah akbar', '2023-08-11 14:39:04'),
(5, 2, 15, 'cosa facciamo sta sera?', '2023-08-11 15:32:34'),
(6, 2, 15, 'un altro messaggio', '2023-08-11 15:34:36'),
(7, 2, 15, 'L\'ultimo per vedere se funziona', '2023-08-11 15:59:26'),
(8, 2, 15, 'un ultimo ancora', '2023-08-11 16:00:21'),
(9, 2, 15, 'spero che funzioni', '2023-08-11 16:05:19'),
(10, 2, 15, 'Mi sa che funziona, ultima prova', '2023-08-11 16:06:09'),
(11, 3, 19, 'Ciao da mario rossi', '2023-08-12 14:54:27'),
(12, 2, 17, 'se invia sto messaggio funziona', '2023-08-13 09:49:45'),
(13, 2, 15, 'funziona bro', '2023-08-13 10:16:01'),
(14, 2, 15, 'invio un messaggio', '2023-08-13 10:22:15'),
(15, 2, 15, 'e io rispondo', '2023-08-13 10:33:06'),
(16, 2, 17, 'ciao', '2023-08-13 10:35:40'),
(17, 2, 17, 'Messaggio dall\'admin', '2023-08-13 10:36:07'),
(18, 2, 15, 'messaggio dall\'user', '2023-08-13 10:37:00'),
(19, 3, 17, 'ciao dall\'admin', '2023-08-13 10:37:50'),
(20, 2, 17, 'Per sicurezza facciamo un\'altra prova', '2023-08-13 10:41:13'),
(21, 4, 20, 'Ciao sono alessandro', '2023-08-17 10:11:45'),
(23, 4, 17, 'Ciao alessandro, ben venuto', '2023-08-17 11:01:54'),
(24, 2, 15, 'Funziona tutto', '2023-08-19 10:36:34');

-- --------------------------------------------------------

--
-- Struttura della tabella `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `stato` varchar(255) DEFAULT NULL,
  `indirizzo` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `orders`
--

INSERT INTO `orders` (`id`, `stato`, `indirizzo`, `tipo`, `created_at`, `updated_at`, `user_id`) VALUES
(12, 'Pronto', 'Via Scipione l\'Africano, 13, Belvedere, SR, Italia', 'consegna', '2023-08-17 16:27:43', '2023-08-17 16:43:13', 20),
(13, 'Pronto', 'Via Bologna, Città Giardino, SR, Italia', 'consegna', '2023-08-17 16:33:31', '2023-08-18 09:43:59', 15),
(14, 'In preparazione', 'Strada Tremmilia, 28, Siracusa, SR, Italia', 'consegna', '2023-08-18 16:10:52', '2023-08-20 10:15:37', 19);

-- --------------------------------------------------------

--
-- Struttura della tabella `order_product`
--

CREATE TABLE `order_product` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `order_product`
--

INSERT INTO `order_product` (`id`, `order_id`, `product_id`) VALUES
(28, 12, 1),
(29, 12, 1),
(30, 12, 2),
(31, 12, 14),
(32, 13, 5),
(33, 13, 6),
(34, 13, 14),
(35, 14, 1),
(36, 14, 11),
(37, 14, 15);

-- --------------------------------------------------------

--
-- Struttura della tabella `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `ingredienti` text NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `percorso_img` varchar(255) NOT NULL,
  `prezzo` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `products`
--

INSERT INTO `products` (`id`, `nome`, `ingredienti`, `categoria`, `percorso_img`, `prezzo`) VALUES
(1, 'Acciuga', 'salsa,mozzarella,acciughe,altro', 'pizze', 'img/pizze/Acciuga.png', 6.00),
(2, 'Bufala e Pomodorini Confit', 'salsa,mozzarella,bufala,pomodorini confit', 'pizze', 'img/pizze/Bufala e Pomodorini Confit.png', 8.50),
(5, 'Al Crudo', 'salsa,mozzarella,bufala,crudo', 'pizze', 'img/pizze/Al Crudo.png', 9.50),
(6, 'Dei Nebrodi', 'salsa,mozzarella,cinghiale dei nebrodi, bufala', 'pizze', 'img/pizze/Dei Nebrodi.png', 10.00),
(11, 'Vegetariana', 'verdure, altro', 'pizze', 'img/pizze/Vegetariana.png', 8.00),
(13, 'Margherita', 'salsa,mozzarella,olio,origano,basilico', 'pizze', 'img/pizze/Margherita.png', 5.00),
(14, 'Margherita Saporita', 'quelli della margherita, qualcos\'altro', 'pizze', 'img/pizze/Margherita Saporita.png', 6.00),
(15, 'Patate e Salsiccia', 'salsa,mozzarella,patate al forno,salsiccia', 'pizze', 'img/pizze/Patate e Salsiccia.png', 8.00),
(16, 'Verdure in pastella', 'Melanzane,Zucchine,Peperoni,altro...', 'antipasti', 'img/pizze/Verdure in pastella.png', 7.50),
(17, 'Cubetti di Pulled Pork', 'Pulled Pork,cheddar,cipolla caramellata', 'antipasti', 'img/pizze/Cubetti di Pulled Pork.png', 4.50),
(18, 'Tartare di tonno pinna gialla', 'Tartare di tonno,salsa yogurt con curcuma,capperi,limone,porri croccanti', 'antipasti', 'img/pizze/Tartare di tonno pinna gialla.png', 10.00),
(19, 'Patate Guanciale e fonduta di ragusano', 'patate al forno, guanciale, fonduta di ragusano', 'antipasti', 'img/pizze/Patate Guanciale e fonduta di ragusano.png', 6.00),
(21, 'Patate al forno con cipolla croccante', 'patate al forno, cipolla fritta croccante', 'antipasti', 'img/pizze/Patate al forno con cipolla croccante.png', 5.00),
(22, 'Tartare di manzo', 'Crudo di manzo al coltello con sale e pepe e olio evo', 'antipasti', 'img/pizze/Tartare di manzo.png', 10.00),
(23, 'Patatine cacio e pepe', 'patatine fritte, pecorino romano, pepe nero', 'antipasti', 'img/pizze/Patatine cacio e pepe.png', 5.50),
(24, 'Imbottita con mortadella stracchino e limone', 'base focaccia, mortadella, stracchino, zest di limone', 'antipasti', 'img/pizze/Imbottita con mortadella stracchino e limone.png', 11.00),
(25, 'Tiramisu', 'Quelli del tiramisù', 'dessert', 'img/pizze/Tiramisu.png', 5.50),
(26, 'Tortino al cioccolato', 'Tortino al cuore caldo ripieno di cioccolato, zucchero a velo', 'dessert', 'img/pizze/Tortino al cioccolato.png', 4.50),
(27, 'Cheescake al pistacchio', 'Cheescake con crema e granella di pistacchio', 'dessert', 'img/pizze/Cheescake al pistacchio.png', 5.00),
(28, 'Gelato artigianale al caramello salato', '...', 'dessert', 'img/pizze/Gelato artigianale al caramello salato.png', 4.00);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

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

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `nome`, `cognome`, `eta`, `n_telefono`, `indirizzo`, `username`, `password`, `tipo`) VALUES
(15, 'Giuseppe', 'Pisasale', 22, '3313111072', 'Via Siracusa 127', 'peppepisasale@gmail.com', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', 'utente'),
(17, 'administrator', 'administrator', 99, '1111111111', 'root', 'admin@admin.com', 'b3aca92c793ee0e9b1a9b0a5f5fc044e05140df3', 'administrator'),
(19, 'Mario', 'Rossi', 30, '3383134429', 'Via Siracusa 127', 'mariorossi@gmail.com', '88021eef61edd77a4d66b032e80fa5e7f2d145ae', 'user'),
(20, 'Alessandro', 'Genovese', 23, '3880712345', 'Via Scipione l\'Africano, 13, Belvedere, SR, Italia', 'sandrogenovese@gmail.com', '5afbb919b336445caf5f8314958dc99a90d55c8f', 'user');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `chat_id` (`chat_id`);

--
-- Indici per le tabelle `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_user` (`user_id`);

--
-- Indici per le tabelle `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indici per le tabelle `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`username`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT per la tabella `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT per la tabella `order_product`
--
ALTER TABLE `order_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT per la tabella `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Limiti per la tabella `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Limiti per la tabella `order_product`
--
ALTER TABLE `order_product`
  ADD CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
