CREATE DATABASE  IF NOT EXISTS `biblioteca_uas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `biblioteca_uas`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: biblioteca_uas
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cubiculos`
--

DROP TABLE IF EXISTS `cubiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cubiculos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cubiculos`
--

LOCK TABLES `cubiculos` WRITE;
/*!40000 ALTER TABLE `cubiculos` DISABLE KEYS */;
INSERT INTO `cubiculos` VALUES (3,'Cubiculo 3','2020-11-17 06:24:51','2020-11-17 06:24:51'),(4,'Cubiculo 3','2020-11-18 03:17:58','2020-11-18 03:17:58'),(5,'Cubiculo 4','2020-11-18 04:27:40','2020-11-18 04:27:40'),(6,'Cubiculo Nuevo','2020-11-18 04:28:19','2020-11-18 04:28:19');
/*!40000 ALTER TABLE `cubiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipos_computo`
--

DROP TABLE IF EXISTS `equipos_computo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipos_computo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `status` varchar(1) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipos_computo`
--

LOCK TABLES `equipos_computo` WRITE;
/*!40000 ALTER TABLE `equipos_computo` DISABLE KEYS */;
INSERT INTO `equipos_computo` VALUES (2,'Equipo 1','A','2020-11-17 07:23:39','2020-11-18 06:09:36'),(3,'Equipo 2','A','2020-11-18 03:58:07','2020-11-18 06:09:33');
/*!40000 ALTER TABLE `equipos_computo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instituciones`
--

DROP TABLE IF EXISTS `instituciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instituciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `abrev` varchar(20) DEFAULT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instituciones`
--

LOCK TABLES `instituciones` WRITE;
/*!40000 ALTER TABLE `instituciones` DISABLE KEYS */;
INSERT INTO `instituciones` VALUES (1,'Universidad Autónoma de Sinaloa','UAS','2020-11-18 03:39:26','2020-11-18 03:39:26');
/*!40000 ALTER TABLE `instituciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_cubiculos`
--

DROP TABLE IF EXISTS `reg_cubiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_cubiculos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ur` varchar(45) NOT NULL,
  `biblioteca` varchar(45) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_cubiculos`
--

LOCK TABLES `reg_cubiculos` WRITE;
/*!40000 ALTER TABLE `reg_cubiculos` DISABLE KEYS */;
INSERT INTO `reg_cubiculos` VALUES (2,'Prueba','Prueba','2020-11-18 05:36:39','2020-11-18 05:36:39');
/*!40000 ALTER TABLE `reg_cubiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_rec_elec`
--

DROP TABLE IF EXISTS `reg_rec_elec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_rec_elec` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `area` varchar(45) NOT NULL,
  `turno` varchar(1) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_rec_elec`
--

LOCK TABLES `reg_rec_elec` WRITE;
/*!40000 ALTER TABLE `reg_rec_elec` DISABLE KEYS */;
INSERT INTO `reg_rec_elec` VALUES (1,'Prueba','M','2020-11-18 06:23:50','2020-11-18 06:23:50');
/*!40000 ALTER TABLE `reg_rec_elec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registros`
--

DROP TABLE IF EXISTS `registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registros` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ur` varchar(45) NOT NULL,
  `area` varchar(45) NOT NULL,
  `turno` varchar(1) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (1,'Prueba','Prueba','M','2020-11-18 06:06:07','2020-11-18 06:06:07');
/*!40000 ALTER TABLE `registros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_reg_cubiculos`
--

DROP TABLE IF EXISTS `usuarios_reg_cubiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_reg_cubiculos` (
  `idRegistroCubiculo` bigint NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idInstitucion` int NOT NULL,
  `idCubiculo` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `terminadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`idRegistroCubiculo`),
  KEY `usregcub_institucion_idx` (`idInstitucion`),
  KEY `usergcub_cubiculo_idx` (`idCubiculo`),
  KEY `sdasd_idx` (`idRegistroCubiculo`),
  CONSTRAINT `usregcub_cubiculo` FOREIGN KEY (`idCubiculo`) REFERENCES `cubiculos` (`id`),
  CONSTRAINT `usregcub_institucion` FOREIGN KEY (`idInstitucion`) REFERENCES `instituciones` (`id`),
  CONSTRAINT `usregcub_regcub` FOREIGN KEY (`idRegistroCubiculo`) REFERENCES `reg_cubiculos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_reg_cubiculos`
--

LOCK TABLES `usuarios_reg_cubiculos` WRITE;
/*!40000 ALTER TABLE `usuarios_reg_cubiculos` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_reg_cubiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_reg_rec_elec`
--

DROP TABLE IF EXISTS `usuarios_reg_rec_elec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_reg_rec_elec` (
  `idRegRecElec` bigint NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idInstitucion` int NOT NULL,
  `idEquipoComputo` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `terminadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`idRegRecElec`),
  KEY `usregrecelec_usregrecelec_idx` (`idRegRecElec`),
  KEY `usregrecelec_institucion_idx` (`idInstitucion`),
  KEY `usregrecelec_equipocomputo_idx` (`idEquipoComputo`),
  CONSTRAINT `usregrecelec_equipocomputo` FOREIGN KEY (`idEquipoComputo`) REFERENCES `equipos_computo` (`id`),
  CONSTRAINT `usregrecelec_institucion` FOREIGN KEY (`idInstitucion`) REFERENCES `instituciones` (`id`),
  CONSTRAINT `usregrecelec_usregrecelec` FOREIGN KEY (`idRegRecElec`) REFERENCES `reg_rec_elec` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_reg_rec_elec`
--

LOCK TABLES `usuarios_reg_rec_elec` WRITE;
/*!40000 ALTER TABLE `usuarios_reg_rec_elec` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_reg_rec_elec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_registros`
--

DROP TABLE IF EXISTS `usuarios_registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_registros` (
  `idRegistro` bigint NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idInstitucion` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `tipo` varchar(1) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `terminadoEn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`idRegistro`),
  KEY `usuario_institucion_idx` (`idInstitucion`),
  KEY `usuario_registro` (`idRegistro`),
  CONSTRAINT `usuario_institucion` FOREIGN KEY (`idInstitucion`) REFERENCES `instituciones` (`id`),
  CONSTRAINT `usuario_registro` FOREIGN KEY (`idRegistro`) REFERENCES `registros` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_registros`
--

LOCK TABLES `usuarios_registros` WRITE;
/*!40000 ALTER TABLE `usuarios_registros` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_registros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'biblioteca_uas'
--

--
-- Dumping routines for database 'biblioteca_uas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-17 23:55:43
