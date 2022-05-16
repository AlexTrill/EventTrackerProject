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
  `piece_color` VARCHAR(45) NOT NULL,
  `tutorial_link` VARCHAR(2000) NULL,
  `type` VARCHAR(45) NULL,
  `image_url` VARCHAR(2000) NULL,
  `common` TINYINT NULL,
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
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (1, 'Sicilian', 'Black', 'https://www.youtube.com/watch?v=qM4e7g2RukI&ab_channel=GothamChess', 'Semi-Open', 'https://i0.wp.com/chesspathways.com/wp-content/uploads/2019/08/2e-300x300.png?ssl=1', 1);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (2, 'French Defense', 'Black', 'https://www.youtube.com/watch?v=5pec-u6PSvA&ab_channel=GothamChess', 'Semi-Open', 'https://i2.wp.com/chesspathways.com/wp-content/uploads/2019/08/9d-300x300.png?ssl=1', 1);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (3, 'Caro-Kann Defense', 'Black', 'https://www.youtube.com/watch?v=rmbU97iftC8&ab_channel=GothamChess', 'Semi-Open', 'https://www.ichess.net/wp-content/uploads/2019/02/caro-kann-3-595x600-1.jpg', 1);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (4, 'Queens Gambit', 'White', 'https://www.youtube.com/watch?v=kGBubryqi3s&ab_channel=AnnaCramling', 'Gambit', 'https://i.ytimg.com/vi/HdHWAuQRG7E/hqdefault.jpg', 1);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (5, 'Ruy Lopez', 'White', 'https://www.youtube.com/watch?v=41rPFNY_CAY&t=14s&ab_channel=thechesswebsite', 'Kings Pawn', 'https://www.ichess.net/wp-content/uploads/2020/09/ruy-lopez.jpg', 1);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (6, 'Kings Pawn', 'White', 'https://www.youtube.com/watch?v=Qdyik5UwBtM&t=15s&ab_channel=GothamChess', 'Open', 'https://i1.wp.com/chesspathways.com/wp-content/uploads/2019/08/2a-300x300.png?ssl=1', 1);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (7, 'London System', 'White', 'https://www.youtube.com/watch?v=49H728S_VjM&ab_channel=GothamChess', 'System', 'https://i0.wp.com/chesspathways.com/wp-content/uploads/2019/09/26a-300x300.png?ssl=1', 1);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (8, 'Budapest Gambit', 'Black', 'https://www.youtube.com/watch?v=urITvqQleUE&ab_channel=thechesswebsite', 'Gambit', 'https://www.thechesswebsite.com/wp-content/uploads/2012/07/budapest_big.jpg', 0);
INSERT INTO `Opening` (`id`, `name`, `piece_color`, `tutorial_link`, `type`, `image_url`, `common`) VALUES (9, 'Alekhine Defence', 'Black', NULL, 'Hyper modern', 'https://i.ytimg.com/vi/G0ctAe7bGzs/hqdefault.jpg', 0);

COMMIT;

