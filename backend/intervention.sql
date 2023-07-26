
-- -----------------------------------------------------
-- Schema happyhealth
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `happyhealth` DEFAULT CHARACTER SET utf8 ;
USE `happyhealth` ;


CREATE TABLE IF NOT EXISTS `happyhealth`.`intervention` (
  `id_intervention` INT NOT NULL AUTO_INCREMENT,
  `intervention_name` VARCHAR(255) NOT NULL ,
  `date` DATE NULL,
  `id_doc` INT NULL,
  `id_patient` INT NULL,
  `id_office` INT NULL,
  PRIMARY KEY (`id_intervention`))
ENGINE = InnoDB;