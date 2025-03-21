-- MySQL Script generated by MySQL Workbench
-- Tue Mar 18 15:19:15 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_segula
-- -----------------------------------------------------

-- ------------------- MySQL Script generated by MySQL Workbench
-- Tue Mar 18 15:19:15 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_segula
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_segula
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_segula` DEFAULT CHARACTER SET utf8 ;
USE `db_segula` ;

-- -----------------------------------------------------
-- Table `db_segula`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_segula`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL,
  `name` VARCHAR(100) NULL,
  `surname` VARCHAR(100) NULL,
  `email` VARCHAR(150) NULL,
  `language` VARCHAR(3) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_segula`.`assistance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_segula`.`assistance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_check` DATE NULL,
  `timein` TIME NULL,
  `timeout` TIME NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_assistance_user_idx` (`user_id` ASC) ,
  CONSTRAINT `fk_assistance_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_segula`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
------------------------------------
-- Schema db_segula
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_segula` DEFAULT CHARACTER SET utf8 ;
USE `db_segula` ;

-- -----------------------------------------------------
-- Table `db_segula`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_segula`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL,
  `name` VARCHAR(100) NULL,
  `surname` VARCHAR(100) NULL,
  `email` VARCHAR(150) NULL,
  `language` VARCHAR(3) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_segula`.`assistance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_segula`.`assistance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_check` DATE NULL,
  `timein` TIME NULL,
  `timeout` TIME NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_assistance_user_idx` (`user_id` ASC) ,
  CONSTRAINT `fk_assistance_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_segula`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
