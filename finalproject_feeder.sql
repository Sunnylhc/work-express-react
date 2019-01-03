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
-- Table structure for table `feeder`
--

DROP TABLE IF EXISTS `feeder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `feeder` (
  `feederId` varchar(30) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`feederId`),
  UNIQUE KEY `身分證_UNIQUE` (`feederId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feeder`
--

LOCK TABLES `feeder` WRITE;
/*!40000 ALTER TABLE `feeder` DISABLE KEYS */;
INSERT INTO `feeder` VALUES ('A123568879','奧賽約瑟','男','中樞地帶',42571142,'NMA@joker.com'),('B123546854','多拉格尼爾','男','伊修加爾',11142457,'END@joker.com'),('C236578964','哈特菲莉亞','女','伊修加爾',45237457,'LUCY@joker.com'),('D254136978','史卡雷特','女','伊修加爾',12458965,'AULI@joker.com'),('E214568735','奈特沃卡','女','艾多拉斯',41527647,'LIGHT@joker.com'),('E236659985','蘇卡.極南','男','南極水域',12345678,'AAA@pokemon.com'),('F122335412','凱塔拉.極南','女','南極水域',23456789,'BBB@pokemon.com'),('G132469958','妲芙','女','大地國境',88465264,'CHAS@pokemon.com'),('G468513354','古桑','男','烈火國境',34567890,'CCC@pokemon.com'),('R132974412','安.終南山','男','終南山大氣寺',45678912,'DDD@pokemon.com');
/*!40000 ALTER TABLE `feeder` ENABLE KEYS */;
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
