-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema openingsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `openingsdb` ;

-- -----------------------------------------------------
-- Schema openingsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `openingsdb` DEFAULT CHARACTER SET utf8 ;
USE `openingsdb` ;

-- -----------------------------------------------------
-- Table `Opening`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Opening` ;

CREATE TABLE IF NOT EXISTS `Opening` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS player@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'player'@'localhost' IDENTIFIED BY 'player';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'player'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Opening`
-- -----------------------------------------------------
START TRANSACTION;
USE `openingsdb`;
INSERT INTO `Opening` (`id`, `name`) VALUES (1, 'Sicilian');

COMMIT;

