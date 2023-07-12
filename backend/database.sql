-- -----------------------------------------------------
-- Schema happyhealth
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `happyhealth` DEFAULT CHARACTER SET utf8 ;
USE `happyhealth` ;

-- -----------------------------------------------------
-- Table `happyhealth`.`doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`doctor` (
  `iddoctor` INT NOT NULL AUTO_INCREMENT,
  `speciality` INT NOT NULL COMMENT '0=chirurgien 1=anesthésiste 2=psychologue 3=kinesithérapeute 4=infirmiere',
  `languages` VARCHAR(45) NULL,
  `biography` VARCHAR(255) NULL,
  `diploma` VARCHAR(45) NULL,
  `experiences` VARCHAR(45) NULL,
  `publications` VARCHAR(45) NULL,
  PRIMARY KEY (`iddoctor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`patient` (
  `idpatient` INT NOT NULL AUTO_INCREMENT,
  `users_iduser` INT NOT NULL,
  `users_doctor_iddoctor` INT NOT NULL,
  `users_admin_form_idadmin_form` INT NOT NULL,
  PRIMARY KEY (`idpatient`, `users_iduser`, `users_doctor_iddoctor`, `users_admin_form_idadmin_form`),
  INDEX `fk_patient_users1_idx` (`users_iduser` ASC, `users_doctor_iddoctor` ASC, `users_admin_form_idadmin_form` ASC) VISIBLE,
  CONSTRAINT `fk_patient_users1`
    FOREIGN KEY (`users_iduser` , `users_doctor_iddoctor` , `users_admin_form_idadmin_form`)
    REFERENCES `happyhealth`.`user` (`iduser` , `doctor_iddoctor` , `ADMIN FORM_idADMIN FORM`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `happyhealth`.`admin_form`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`admin_form` (
  `idADMIN FORM` INT NOT NULL AUTO_INCREMENT,
  `gender` INT NOT NULL COMMENT '0=sansnonbinary 1=homme 2=femme\n\n',
  `civility` INT NOT NULL COMMENT '0=mademoiselle 1= monsieur 2=madame 3=sans\n',
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `birthDate` DATE NOT NULL,
  `family_situation` INT NOT NULL COMMENT '0=célibataire 1=marié 2=divorcé 3=veuf veuve\n',
  `professional_status` INT NOT NULL COMMENT '0=sans emploi 1=salarié 2=indépendant\n',
  `profession` VARCHAR(45) NOT NULL,
  `number_children` INT NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `street_number` VARCHAR(45) NOT NULL,
  `zip_code` VARCHAR(10) NOT NULL,
  `town` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NULL,
  `mobile_phone_number` VARCHAR(45) NULL,
  `email` VARCHAR(45) CHARACTER SET 'armscii8' NOT NULL,
  `patient_idpatient` INT NOT NULL,
  PRIMARY KEY (`idADMIN FORM`),
  INDEX `fk_ADMIN FORM_patient1_idx` (`patient_idpatient` ASC) VISIBLE,
  CONSTRAINT `fk_ADMIN FORM_patient1`
    FOREIGN KEY (`patient_idpatient`)
    REFERENCES `happyhealth`.`patient` (`idpatient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `password` VARCHAR(250) NOT NULL,
  `roles` JSON NOT NULL,
  `doctor_iddoctor` INT NOT NULL,
  `admin_form_idadmin_form` INT NOT NULL,
  PRIMARY KEY (`iduser`, `doctor_iddoctor`, `admin_form_idadmin_form`),
  INDEX `fk_users_doctor1_idx` (`doctor_iddoctor` ASC) VISIBLE,
  INDEX `fk_users_admin_form1_idx` (`admin_form_idadmin_form` ASC) VISIBLE,
  CONSTRAINT `fk_users_doctor1`
    FOREIGN KEY (`doctor_iddoctor`)
    REFERENCES `happyhealth`.`doctor` (`iddoctor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_admin_form1`
    FOREIGN KEY (`admin_form_idadmin_form`)
    REFERENCES `happyhealth`.`admin_form` (`idadmin_form`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`office`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`office` (
  `idoffice` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `doc_name` VARCHAR(45) NOT NULL,
  `street_number` VARCHAR(45) NOT NULL,
  `street_name` VARCHAR(45) NOT NULL,
  `zip_code` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `free_parking` TINYINT NULL,
  `disabled` TINYINT NULL,
  `open_hours` VARCHAR(45) NULL,
  `speciality` INT NOT NULL,
  PRIMARY KEY (`idoffice`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`intervention`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`intervention` (
  `idinterventions` INT NOT NULL AUTO_INCREMENT,
  `name_spec` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  `quotation` VARCHAR(45) NOT NULL,
  `number_done` VARCHAR(45) NULL,
  `patient_idpatient` INT NOT NULL,
  `office_idoffice` INT NOT NULL,
  PRIMARY KEY (`idinterventions`),
  INDEX `fk_interventions_patient_idx` (`patient_idpatient` ASC) VISIBLE,
  INDEX `fk_interventions_office1_idx` (`office_idoffice` ASC) VISIBLE,
  CONSTRAINT `fk_interventions_patient`
    FOREIGN KEY (`patient_idpatient`)
    REFERENCES `happyhealth`.`patient` (`idpatient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_interventions_office1`
    FOREIGN KEY (`office_idoffice`)
    REFERENCES `happyhealth`.`office` (`idoffice`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`document`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`document` (
  `iddocuments` INT NOT NULL,
  `informed_consent` VARCHAR(45) NOT NULL,
  `quotation` VARCHAR(45) NOT NULL,
  `prescription` VARCHAR(45) NOT NULL,
  `trust_person` VARCHAR(45) NOT NULL,
  `health_insurance` VARCHAR(45) NOT NULL,
  `patient_idpatient` INT NOT NULL,
  `interventions_idinterventions` INT NOT NULL,
  PRIMARY KEY (`iddocuments`),
  INDEX `fk_documents_patient1_idx` (`patient_idpatient` ASC) VISIBLE,
  INDEX `fk_documents_interventions1_idx` (`interventions_idinterventions` ASC) VISIBLE,
  CONSTRAINT `fk_documents_patient1`
    FOREIGN KEY (`patient_idpatient`)
    REFERENCES `happyhealth`.`patient` (`idpatient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_documents_interventions1`
    FOREIGN KEY (`interventions_idinterventions`)
    REFERENCES `happyhealth`.`intervention` (`idinterventions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`doctor_has_patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`doctor_has_patient` (
  `doctor_iddoctor` INT NOT NULL,
  `patient_idpatient` INT NOT NULL,
  PRIMARY KEY (`doctor_iddoctor`, `patient_idpatient`),
  INDEX `fk_doctor_has_patient_patient1_idx` (`patient_idpatient` ASC) VISIBLE,
  INDEX `fk_doctor_has_patient_doctor1_idx` (`doctor_iddoctor` ASC) VISIBLE,
  CONSTRAINT `fk_doctor_has_patient_doctor1`
    FOREIGN KEY (`doctor_iddoctor`)
    REFERENCES `happyhealth`.`doctor` (`iddoctor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_doctor_has_patient_patient1`
    FOREIGN KEY (`patient_idpatient`)
    REFERENCES `happyhealth`.`patient` (`idpatient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`doctor_has_office`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`doctor_has_office` (
  `doctor_iddoctor` INT NOT NULL,
  `office_idoffice` INT NOT NULL,
  PRIMARY KEY (`doctor_iddoctor`, `office_idoffice`),
  INDEX `fk_doctor_has_office_office1_idx` (`office_idoffice` ASC) VISIBLE,
  INDEX `fk_doctor_has_office_doctor1_idx` (`doctor_iddoctor` ASC) VISIBLE,
  CONSTRAINT `fk_doctor_has_office_doctor1`
    FOREIGN KEY (`doctor_iddoctor`)
    REFERENCES `happyhealth`.`doctor` (`iddoctor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_doctor_has_office_office1`
    FOREIGN KEY (`office_idoffice`)
    REFERENCES `happyhealth`.`office` (`idoffice`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`appointment` (
  `idappointment` INT NOT NULL AUTO_INCREMENT,
  `date_time` DATETIME NOT NULL,
  `patient_idpatient` INT NOT NULL,
  `interventions_idinterventions` INT NOT NULL,
  `office_idoffice` INT NOT NULL,
  PRIMARY KEY (`idappointment`),
  INDEX `fk_appointment_patient1_idx` (`patient_idpatient` ASC) VISIBLE,
  INDEX `fk_appointment_interventions1_idx` (`interventions_idinterventions` ASC) VISIBLE,
  INDEX `fk_appointment_office1_idx` (`office_idoffice` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_patient1`
    FOREIGN KEY (`patient_idpatient`)
    REFERENCES `happyhealth`.`patient` (`idpatient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_interventions1`
    FOREIGN KEY (`interventions_idinterventions`)
    REFERENCES `happyhealth`.`intervention` (`idinterventions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_office1`
    FOREIGN KEY (`office_idoffice`)
    REFERENCES `happyhealth`.`office` (`idoffice`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`patient_has_office`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`patient_has_office` (
  `patient_idpatient` INT NOT NULL,
  `office_idoffice` INT NOT NULL,
  PRIMARY KEY (`patient_idpatient`, `office_idoffice`),
  INDEX `fk_patient_has_office_office1_idx` (`office_idoffice` ASC) VISIBLE,
  INDEX `fk_patient_has_office_patient1_idx` (`patient_idpatient` ASC) VISIBLE,
  CONSTRAINT `fk_patient_has_office_patient1`
    FOREIGN KEY (`patient_idpatient`)
    REFERENCES `happyhealth`.`patient` (`idpatient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_office_office1`
    FOREIGN KEY (`office_idoffice`)
    REFERENCES `happyhealth`.`office` (`idoffice`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`doctor_has_intervention`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`doctor_has_intervention` (
  `doctor_iddoctor` INT NOT NULL,
  `interventions_idinterventions` INT NOT NULL,
  PRIMARY KEY (`doctor_iddoctor`, `interventions_idinterventions`),
  INDEX `fk_doctor_has_interventions_interventions1_idx` (`interventions_idinterventions` ASC) VISIBLE,
  INDEX `fk_doctor_has_interventions_doctor1_idx` (`doctor_iddoctor` ASC) VISIBLE,
  CONSTRAINT `fk_doctor_has_interventions_doctor1`
    FOREIGN KEY (`doctor_iddoctor`)
    REFERENCES `happyhealth`.`doctor` (`iddoctor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_doctor_has_interventions_interventions1`
    FOREIGN KEY (`interventions_idinterventions`)
    REFERENCES `happyhealth`.`intervention` (`idinterventions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`appointment_has_doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`appointment_has_doctor` (
  `appointment_idappointment` INT NOT NULL,
  `doctor_iddoctor` INT NOT NULL,
  PRIMARY KEY (`appointment_idappointment`, `doctor_iddoctor`),
  INDEX `fk_appointment_has_doctor_doctor1_idx` (`doctor_iddoctor` ASC) VISIBLE,
  INDEX `fk_appointment_has_doctor_appointment1_idx` (`appointment_idappointment` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_has_doctor_appointment1`
    FOREIGN KEY (`appointment_idappointment`)
    REFERENCES `happyhealth`.`appointment` (`idappointment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_has_doctor_doctor1`
    FOREIGN KEY (`doctor_iddoctor`)
    REFERENCES `happyhealth`.`doctor` (`iddoctor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `happyhealth`.`document_has_appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhealth`.`document_has_appointment` (
  `documents_iddocuments` INT NOT NULL,
  `appointment_idappointment` INT NOT NULL,
  PRIMARY KEY (`documents_iddocuments`, `appointment_idappointment`),
  INDEX `fk_documents_has_appointment_appointment1_idx` (`appointment_idappointment` ASC) VISIBLE,
  INDEX `fk_documents_has_appointment_documents1_idx` (`documents_iddocuments` ASC) VISIBLE,
  CONSTRAINT `fk_documents_has_appointment_documents1`
    FOREIGN KEY (`documents_iddocuments`)
    REFERENCES `happyhealth`.`document` (`iddocuments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_documents_has_appointment_appointment1`
    FOREIGN KEY (`appointment_idappointment`)
    REFERENCES `happyhealth`.`appointment` (`idappointment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;