-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: biblioteca_uas
-- ------------------------------------------------------
-- Server version	8.0.21
USE biblioteca_uas;

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cubiculos`
--

LOCK TABLES `cubiculos` WRITE;
/*!40000 ALTER TABLE `cubiculos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cubiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipos_computo`
--

DROP TABLE IF EXISTS `equipos_computo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipos_computo` (
  `id` int NOT NULL,
  `status` varchar(1) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipos_computo`
--

LOCK TABLES `equipos_computo` WRITE;
/*!40000 ALTER TABLE `equipos_computo` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipos_computo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instituciones`
--

DROP TABLE IF EXISTS `instituciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instituciones` (
  `id` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `abrev` varchar(20) DEFAULT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instituciones`
--

LOCK TABLES `instituciones` WRITE;
/*!40000 ALTER TABLE `instituciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `instituciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_cubiculos`
--

DROP TABLE IF EXISTS `reg_cubiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_cubiculos` (
  `id` bigint NOT NULL,
  `ur` varchar(45) NOT NULL,
  `biblioteca` varchar(45) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_cubiculos`
--

LOCK TABLES `reg_cubiculos` WRITE;
/*!40000 ALTER TABLE `reg_cubiculos` DISABLE KEYS */;
/*!40000 ALTER TABLE `reg_cubiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_rec_elec`
--

DROP TABLE IF EXISTS `reg_rec_elec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_rec_elec` (
  `id` bigint NOT NULL,
  `area` varchar(45) NOT NULL,
  `turno` varchar(1) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_rec_elec`
--

LOCK TABLES `reg_rec_elec` WRITE;
/*!40000 ALTER TABLE `reg_rec_elec` DISABLE KEYS */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
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
  `terminadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
  `terminadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-26 15:36:15
