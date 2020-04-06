-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 06, 2020 at 12:24 PM
-- Server version: 5.7.25-0ubuntu0.16.04.2
-- PHP Version: 7.0.33-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `allgives`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `p_id` int(11) NOT NULL,
  `reg_name` varchar(100) NOT NULL,
  `reg_password` varchar(100) NOT NULL,
  `reg_email` varchar(100) NOT NULL,
  `reg_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `User_Id` int(3) UNSIGNED ZEROFILL NOT NULL,
  `User_FirstName` varchar(255) DEFAULT NULL,
  `User_LastName` varchar(255) DEFAULT NULL,
  `User_Email` varchar(255) DEFAULT NULL,
  `User_PhoneNo` varchar(255) DEFAULT NULL,
  `User_Password` varchar(255) DEFAULT NULL,
  `User_CreatedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`User_Id`, `User_FirstName`, `User_LastName`, `User_Email`, `User_PhoneNo`, `User_Password`, `User_CreatedDate`) VALUES
(019, 'vinod', 'kumar', 'cvk435@gmail.com', '8096695387', '123456', NULL),
(020, 'vinod', 'kumar', 'cvk435888@gmail.com', '8096695387', '123456', NULL),
(021, 'vinod', 'kumar', 'cvk43578787@gmail.com', '8096695387', '123456', NULL),
(022, 'vinod', 'kumar', 'cvk43578@gmail.com', '8096695387', '123456', NULL),
(023, 'vinod', 'kumar', 'cvk43578888@gmail.com', '8096695387', '123456', NULL),
(024, 'vinod', 'kumar', 'cvk4387@gmail.com', '8096695387', '123456', NULL),
(025, 'vinod', 'kumar', 'cvk43877777@gmail.com', '8096695387', '123456', NULL),
(026, 'vinod', 'kumar', 'cvk438977777@gmail.com', '8096695387', '123456', NULL),
(027, 'vinod', 'kumar', 'cvk4389777778@gmail.com', '8096695387', '123456', NULL),
(028, 'vinod', 'kumar', 'cvk495@gmail.com', '88888888888', '11233456+', NULL),
(029, 'vinod', 'kumar', 'cvk43@gmail.com', '8096695387', '123456', NULL),
(030, 'vinod', 'kumar', 'cvk433@gmail.com', '8096695387', '123456', NULL),
(031, 'vinod', 'kumar', 'cvk4339@gmail.com', '8096695387', '123456', NULL),
(032, 'vinod', 'kumar', 'cvk48339@gmail.com', '8096695387', '123456', NULL),
(033, 'vino', 'kumar', 'cvk43115@gmail.com', '8096695387', '123456', NULL),
(034, 'vino', 'kumar', 'cvk4311588@gmail.com', '8096695387', '123456', NULL),
(035, 'vino', 'kumar', 'cvk431158899@gmail.com', '8096695387', '123456', NULL),
(036, 'vino', 'kumar', 'cvk@gmail.com', '8096695387', '123456', NULL),
(037, 'vino', 'kumar', 'cvk778@gmail.com', '8096695387', '123456', NULL),
(038, 'vinod', 'kumar', 'cv77@gmail.com', '123456', '123456', NULL),
(039, 'undefined', 'undefined', 'vinod', 'undefined', 'dfsdfs', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`User_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `User_Id` int(3) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
