-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2021 at 07:38 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petservices`
--

-- --------------------------------------------------------

--
-- Table structure for table `dogwalkers`
--

CREATE TABLE `dogwalkers` (
  `id` int(11) NOT NULL,
  `full_name` varchar(250) NOT NULL,
  `age` int(2) NOT NULL,
  `served` int(11) NOT NULL,
  `rate` double NOT NULL,
  `status` varchar(250) NOT NULL,
  `phone_num` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dogwalkers`
--

INSERT INTO `dogwalkers` (`id`, `full_name`, `age`, `served`, `rate`, `status`, `phone_num`, `image`) VALUES
(1, 'Mohamad Alkadi', 28, 79, 4.6, 'Available', '71229382', '../assets/img/prof.jfif'),
(2, 'Maria Smith', 31, 63, 4.2, 'Available', '03827611', '../assets/img/prof2.jpg'),
(3, 'Ranim Hamzi', 29, 121, 3.9, 'Available', '769124332', '../assets/img/prof2.jpg'),
(4, 'Malak Yasser', 22, 15, 4.1, 'Offline', '81728192', '../assets/img/prof2.jpg'),
(5, 'Alex Ramil', 27, 39, 4.6, 'Available', '70712873', '../assets/img/prof.jfif'),
(6, 'Karim Karmit', 26, 125, 3.7, 'Available', '71817261', '../assets/img/prof.jfif'),
(7, 'Manal Jamila', 32, 251, 4.9, 'Available', '03872182', '../assets/img/prof2.jpg'),
(8, 'Fatima Mahzuz', 25, 59, 3.8, 'Offline', '70928273', '../assets/img/prof2.jpg'),
(9, 'Ahmad Falilo', 23, 74, 4.4, 'Availble', '81928632', '../assets/img/prof.jfif'),
(10, 'Sara Kassem', 20, 46, 4.9, 'Available', '70236553', '../assets/img/prof2.jpg'),
(11, 'Dana Hamoud', 21, 103, 4.2, 'Available', '761263722', '../assets/img/prof2.jpg'),
(12, 'Ali Khalifeh', 35, 263, 3.9, 'Available', '03918263', '../assets/img/prof.jfif'),
(13, 'Cerine Kanaan', 21, 32, 4.9, 'Available', '70231255', '../assets/img/prof2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `petsitters`
--

CREATE TABLE `petsitters` (
  `id` int(11) NOT NULL,
  `full_name` varchar(250) NOT NULL,
  `age` int(2) NOT NULL,
  `served` int(11) NOT NULL,
  `rate` double NOT NULL,
  `status` varchar(250) NOT NULL,
  `phone_num` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `petsitters`
--

INSERT INTO `petsitters` (`id`, `full_name`, `age`, `served`, `rate`, `status`, `phone_num`, `image`) VALUES
(1, 'Reina Bitar', 20, 53, 4.1, 'Available', '70712994', '../assets/img/prof2.jpg'),
(2, 'Rafah Badeeh', 36, 27, 4.8, 'Available', '70126262', '../assets/img/prof2.jpg'),
(3, 'Lana Rasmi', 28, 201, 4.5, 'Available', '03827222', '../assets/img/prof2.jpg'),
(4, 'Malik Hamadi', 34, 182, 4.1, 'Offline', '70790098', '../assets/img/prof.jfif'),
(5, 'Fadi Akkawi', 27, 43, 3.6, 'Available', '01237712', '../assets/img/prof.jfif'),
(6, 'Mirna Alameh', 20, 39, 4.7, 'Available', '76999821', '../assets/img/prof2.jpg'),
(7, 'Walid Salman', 23, 151, 4, 'Available', '71829133', '../assets/img/prof.jfif'),
(8, 'Jad Mchawrab', 22, 19, 4.9, 'Available', '70777238', '../assets/img/prof.jfif'),
(9, 'Rayan Mamlouk', 26, 234, 3.5, 'Offline', '03927111', '../assets/img/prof2.jpg'),
(10, 'Rania Jahidi', 21, 67, 4.6, 'Available', '70988998', '../assets/img/prof2.jpg'),
(11, 'Elvis Goerge', 44, 242, 4.2, 'Available', '03828772', '../assets/img/prof.jfif'),
(12, 'Mahmoud Yarkout', 34, 222, 3.6, 'Available', '78977332', '../assets/img/prof.jfif');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone_num` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `phone_num`, `username`, `password`, `address`) VALUES
(8, '70712994', 'raybae', 'b986162d9376812660a7723f7f3aa300cf1aa017a5e28a7b2180d830c160a684', 'Saida-Wastani'),
(9, '76545444', 'reiafaf', 'b986162d9376812660a7723f7f3aa300cf1aa017a5e28a7b2180d830c160a684', 'aley'),
(13, '79156118', 'karem', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'aley');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dogwalkers`
--
ALTER TABLE `dogwalkers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `petsitters`
--
ALTER TABLE `petsitters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dogwalkers`
--
ALTER TABLE `dogwalkers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `petsitters`
--
ALTER TABLE `petsitters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
