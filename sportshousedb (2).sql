-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2022 a las 04:45:52
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sportshousedb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `category`, `description`, `image`) VALUES
(2, 'Nike 1', '1000', 50, 'visited', '', 'zapa 2.jpg'),
(3, 'Topper Max', '100000', 0, 'visited', '', 'zapa 3.jpg'),
(4, 'Salomon', '729', 25, 'visited', '', 'zapa 4.jpg'),
(5, 'Nike Air', '65', 35, 'in-sale', '', 'zapa 5.jpg'),
(6, 'Reebook Infinity', '5300', 20, 'in-sale', '', 'zapa 6.jpg'),
(7, 'Nike 300', '9999', 10, 'visited', '', 'zapa 7.jpg'),
(8, 'Adidas Top Court', '3580', 25, 'in-sale', '', 'zapa 8.jpg'),
(9, 'Adidas Classic', '4000', 2, 'in-sale', 'Indispensables para vida diaria', 'zapa 9.jpg'),
(10, 'Puma Legend', '11399', 25, 'in-sale', '', 'zapa 10.jpg'),
(17, 'Puma RS698', '50000', 25, 'visited', 'Confort en su máxima expresión ', 'product_image_1663788634835.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` int(11) NOT NULL,
  `password` varchar(200) NOT NULL,
  `avatar` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `phone`, `password`, `avatar`) VALUES
(6, 'César Franco', 'Chávez', 'cfranchavez@yahoo.co', 2147483647, '$2a$10$n1Qig51CvweehuCQiGOqyuJ.MHNR8FMlNLMCXTxQuZxMbRFHlYBmi', '1663780319389_img.png'),
(7, 'pep', 'guardiola', 'pep@mail.com', 1524756545, '$2a$10$h/NFua5Q6jlZaKA1rjotKujN8n3OL7O2/pXeeml6xYyULpfi4Ti/S', '1663781582116_img.png'),
(9, 'Lionel ', 'Messi', 'messi@mejorquemarado', 1111111, '$2a$10$XmlPx4QSw42clRrue8y3Ye2Yl9u1G6QHFiYZ9857v/lgh1VuPnqhi', '1663788943577_img.jpg'),
(10, 'federico', 'perz', 'fede@per.com', 155484556, '$2a$10$2/Gkcx0pNZhQQTF.lBrgD.CfWFz.crLSLW1HaaNRjIyKsETSgB9Du', '1663809473294_img.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
