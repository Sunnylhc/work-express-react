-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: finalproject
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pet`
--

DROP TABLE IF EXISTS `pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pet` (
  `id` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `name` varchar(45) NOT NULL,
  `sex` varchar(45) NOT NULL,
  `birthday` datetime NOT NULL,
  `weight` int(11) DEFAULT NULL,
  `ligation` varchar(45) DEFAULT NULL,
  `vaccine` varchar(45) DEFAULT NULL,
  `feederId` varchar(10) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`date`),
  UNIQUE KEY `晶片號碼_UNIQUE` (`id`),
  KEY `date_idx` (`date`),
  KEY `fid_idx` (`feederId`),
  CONSTRAINT `fid` FOREIGN KEY (`feederId`) REFERENCES `feeder` (`feederid`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet`
--

LOCK TABLES `pet` WRITE;
/*!40000 ALTER TABLE `pet` DISABLE KEYS */;
INSERT INTO `pet` VALUES ('A064','柯基','可可','母','1995-12-31 00:00:00',5,'Y','Y','F122335412','2000-05-05 20:10:07'),('A008','柴犬','老大','母','1996-11-25 00:50:01',6,'Y','Y','A123568879','2000-06-15 14:06:00'),('A004','a','w','w','1991-12-31 00:00:00',NULL,NULL,NULL,'E236659985','2001-02-02 00:00:00'),('A009','拉不拉多犬','拉拉','母','1991-12-31 00:00:00',10,'Y','N','R132974412','2001-02-02 12:05:05'),('A005','a','w','w','1992-12-31 00:00:00',NULL,NULL,NULL,'E236659985','2002-03-03 00:00:00'),('A044','博美犬','小犬','母','1992-12-31 00:00:00',10,'Y','N','G468513354','2002-03-03 12:20:06'),('A002','w','w','w','1994-12-31 00:00:00',2,'Y','N','E236659985','2003-04-04 00:00:00'),('A034','台灣土狗','居居','公','1994-12-31 00:00:00',15,'Y','Y','G132469958','2003-04-04 15:20:04'),('A001','aw','wa','se','1995-12-31 00:00:00',1,'Y','N','F122335412','2010-05-05 00:00:00');
/*!40000 ALTER TABLE `pet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-04  0:45:49
