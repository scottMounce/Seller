const Promise = require('bluebird');
const faker = require('faker');
const db = require('./db.js');

const database = 'sellerItemInfo'
const itemTable = 'itemTable';
const sellerTable = 'sellerTable';
const faqTable = 'faqTable';




const createSellerTable = `
CREATE TABLE IF NOT EXISTS ${sellerTable} (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `sellerName` VARCHAR(20) NOT NULL,
  `storeName` VARCHAR(20) NOT NULL,
  `shippingSpeedSlowest` INT NOT NULL DEFAULT 3,
  `shippingSpeedFastest` INT NOT NULL DEFAULT 8,
  `sellerLocation` VARCHAR(20) NOT NULL,
  `exchangePosibility` TINYINT NOT NULL DEFAULT 0,
  `returnCancelPossibility` TINYINT NOT NULL DEFAULT 0
);`

const createFaqTable = `
CREATE TABLE IF NOT EXISTS ${faqTable} (CREATE TABLE `faqTable` (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `question` VARCHAR(100) NOT NULL,
  `answer` VARCHAR(500) NOT NULL,
  `sellerID` INT(8),

  FOREIGN KEY(`SellerID`) REFERENCES SellerTable(`id`)
);`

const createItemTable = `
  CREATE TABLE IF NOT EXISTS ${itemTable} (
    `id` INT(8) AUTO_INCREMENT PRIMARY KEY,
    `handmade` TINYINT NOT NULL,
    `materials` VARCHAR(30) NOT NULL,
    `description` VARCHAR(800) NOT NULL,
    `sellerID` INT(8),

    FOREIGN KEY(`sellerID`) REFERENCES SellerTable(`id`)
  );`

const initialize = (db) => {

  db.connectAsync()
    .then(() => console.log(`Connecting to database ${database}`))
    .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
    .then(() => db.queryAsync(`USE ${database}`))

    //create table
    .then(() => db.queryAsync(createSellerTable))
    .then(() => db.queryAsync(createItemTable))
    .then(() => db.queryAsync(createFaqTable))

    //insert random data




}