-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2024 at 02:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS esputifai;
USE esputifai;  -- Seleccionar la base de datos

-- --------------------------------------------------------

--
-- Table structure for table compras
--

CREATE TABLE compras (
  id int(100) NOT NULL,
  monto int(255) NOT NULL,
  detalles varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table envio
--

CREATE TABLE envio (
  id int(10) NOT NULL,
  F_salida varchar(25) NOT NULL,
  F_llegada varchar(25) NOT NULL,
  empresa_T varchar(100) NOT NULL,
  estado varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table metodo de pago
--

CREATE TABLE metodo de pago (
  id int(10) NOT NULL,
  tipo varchar(20) NOT NULL,
  numero int(16) NOT NULL,
  vencimiento date NOT NULL,
  cvv int(5) NOT NULL,
  Nombre_D varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table producto
--

CREATE TABLE producto (
  id int(255) NOT NULL,
  nombre varchar(100) NOT NULL,
  descripcion mediumtext NOT NULL,
  precio int(255) NOT NULL,
  stock varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table usuario
--

CREATE TABLE usuario (
  Nombre varchar(30) NOT NULL,
  Direccion varchar(20) NOT NULL,
  Email varchar(100) NOT NULL,
  Contraseña varchar(255) NOT NULL,
  ID int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table envio
--
ALTER TABLE envio
  ADD PRIMARY KEY (id);

--
-- Indexes for table metodo de pago
--
ALTER TABLE metodo de pago
  ADD PRIMARY KEY (id);

--
-- Indexes for table producto
--
ALTER TABLE producto
  ADD PRIMARY KEY (id);

--
-- Indexes for table usuario
--
ALTER TABLE usuario
  ADD PRIMARY KEY (ID),
  ADD UNIQUE KEY Email (Email);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table envio
--
ALTER TABLE envio
  MODIFY id int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table metodo de pago
--
ALTER TABLE metodo de pago
  MODIFY id int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table producto
--
ALTER TABLE producto
  MODIFY id int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table usuario
--
ALTER TABLE usuario
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;