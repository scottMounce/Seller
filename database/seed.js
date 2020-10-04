const db = require('./index.js');
const SellerTable = require('./Seller.js');
const FaqTable = require('./Faq.js');
const ItemTable = require('./Item.js');
const faker = require('faker');

// swquelize association between tables
SellerTable.hasMany(FaqTable);
FaqTable.belongsTo(SellerTable);

SellerTable.hasMany(ItemTable);
ItemTable.belongsTo(SellerTable);

//generate 10 sellers
let generateSellerData = function() {
  let data = [];

  for (let i = 1; i <= 10; i++) {
    let name = faker.name.firstName() +' ' + faker.name.lastName();
    let shippingSpeed = Math.floor(Math.random() * 8);
    let location = faker.address.city() + ', ' + faker.address.state()

    let params = {
      sellerName: name,
      storeName: faker.company.companyName(),
      shippingSpeedSlowest: shippingSpeed,
      shippingSpeedFastest: shippingSpeed + 5,
      sellerLocation: location,
      exchangePossibility: Math.random() >= 0.1, //90% probability of get "true"
      returnCancelPossibility: Math.random() >= 0.1
    }

    data.push(params)
  }
  return data
}

//generate 20 FAQs
let generateFaqData = function() {
  let data = [];

  for (let i = 1; i <= 20; i++) {
    //let randomQuestion = faker.lorem.sentence().substring(0, str.length - 1) + "?"

    let params = {
      question: faker.lorem.sentence(5, "?"),
      //question: randomQuestion,
      answer: faker.lorem.sentences(2),

      sellerID: Math.ceil(i/2)
    }

    data.push(params)
  }
  return data
}

//generate 100 items
let generateItemData = function() {
  let data = [];
  let materialList = ["Cotton", "Metal", "Glass", "Wood", "Felt", "Thread"]

  for(let i = 1; i <= 100; i++) {
    let randomMaterialIndex = Math.floor(Math.random() * materialList.length)

    let params = {
      handmade: Math.random() >= 0.1,
      materials: materialList[randomMaterialIndex],
      description:faker.lorem.paragraphs(3, "<br></br>"),

      sellerID: Math.ceil(i/10)
    }

    data.push(params)
  }
  return data
}

let insertData = function() {
  let sellerData = generateSellerData();
  let faqData = generateFaqData();
  let itemData = generateItemData();

  SellerTable.sync({force: true})
    .then(function() {
      SellerTable.bulkCreate(sellerData)
    })
    .then(function() {
      FaqTable.sync({force:true})
        .then(function() {
          FaqTable.bulkCreate(faqData)
        })
        .then(function() {
          ItemTable.sync({force: true})
            .then(function() {
              ItemTable.bulkCreate(itemData)
            })
            .catch(function(err) {
              console.log("Failed to insert into itemTable", err)
            })
        })
        .catch(function(err) {
          console.log("Failed to insert into faqTable", err)
        })
    })
    .catch(function(err) {
      console.log("Failed to insert into sellerTable", err)
    })
}

insertData();