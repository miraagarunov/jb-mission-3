-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 07:38 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetings`
--
CREATE DATABASE IF NOT EXISTS `meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `development_groups`
--

CREATE TABLE `development_groups` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Meetings`
--

CREATE TABLE `Meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `groupId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `startDatetime` datetime NOT NULL,
  `endDatetime` datetime NOT NULL,
  `meetingDescription` text COLLATE utf8mb4_general_ci,
  `meetingRoom` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `development_groups`
--
ALTER TABLE `development_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Meetings`
--
ALTER TABLE `Meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupId` (`groupId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Meetings`
--
ALTER TABLE `Meetings`
  ADD CONSTRAINT `Meetings_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `development_groups` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
