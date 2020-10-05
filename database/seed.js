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

  //put original website's info in as id 1
  let origianlParam = {
    sellerName: "Michelle Duni",
    storeName: "Ticketybootique",
    shippingSpeedSlowest: 9,
    shippingSpeedFastest: 7,
    sellerLocation: "Toledo, Ohio",
    exchangePossibility: 1,
    returnCancelPossibility: 0,
    profilePicture: "https://i.etsystatic.com/iusa/842395/69699441/iusa_75x75.69699441_3vwd.jpg?version=0"
  }
  data.push(origianlParam)

  //generate 9 more
  for (let i = 2; i <= 10; i++) {
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
      returnCancelPossibility: Math.random() >= 0.1,
      profilePicture: faker.image.avatar()
    }

    data.push(params)
  }
  return data
}

//generate 10 FAQs
let generateFaqData = function() {
  let data = [];

  //put original website's info in as id 1
  let origianlParam = {
    question: "Sizing details",
    answer: "My number one question I get is, what size for a certain lbs cat? Cats (and dogs for that matter!) are so amazing and varied by breed, both pedigree and domestic cuties. The best thing to do is get me a circumference (that's a full circle!) in inches just behind the eyes and under the chin.<br></br><br></br>Take a piece of string or shoe string! You can go to iruler.net which will conform to the size of your screen you are viewing the website on and then measure to that website. Then compare to my sizings listed for every item.<br></br><br></br>Not the right size? *Sometimes* I can do custom. It depends on how large! Contact me with your gathered size from your pet and we can go from there. Hope this helps!",
    sellerID: 1
  }
  data.push(origianlParam)

  //generate 9 more FAQs
  for (let i = 2; i <= 10; i++) {
    let params = {
      question: faker.lorem.sentence(5, "?"),
      //question: randomQuestion,
      answer: faker.lorem.sentences(2),

      sellerID: i
    }

    data.push(params)
  }
  return data
}

//generate 100 items
let generateItemData = function() {
  let data = [];
  let materialList = ["Cotton", "Metal", "Glass", "Wood", "Felt", "Thread"]

  //put original website's info in as id 1
  let origianlParam = {
    handmade : 1,
    materials: "Felt, Thread",
    description: `Pie...me oh my.\n\nA new favorite in the Ticketybootique, this pumpkin pie costume hat has us in stitches. Carefully sewn so it can be enjoyed for many seasons and fun occasions, what is sweeter than your furry friend's cute face peeping out of a slice of pie, with a little bit of whipped cream on top? We're not sure there is anything better!\n\nMade with soft brown felt, this hat features embellishments such as a scalloped stitch over the crust and a nice sized dollop of bright white whipped cream stitched securely onto the costume. Lightweight so that it's not cumbersome on your pet, this is part of the Easy Wear line for quick and simple photoshoots or costumed dress ups. Simply place the costume on your pet by gently easing their face through the costume hole.\n\n***Cat meowdel is a tiny 5.6 lb cat. Please measure your pets before purchasing***\nThis hat comes in three sizes:\n\nSmall 2.5" diameter (across the hole)\nnd ~8" circumference (around the entire edge of the hole opening)\n\nMedium 3" diameter (across the hole)\nand ~9.5" circumference (around the entire edge of the hole opening)\n\nLarge 3.5" diameter (across the hole)\nand 11" circumference (around the entire edge of the hole opening)\n\nFor an certain fit, feel free to contact the shop for a perfect sizing!`,
    sellerID: 1
  }
  data.push(origianlParam)

  //generate 99 more items
  for(let i = 2; i <= 100; i++) {
    let randomMaterialIndex = Math.floor(Math.random() * materialList.length)

    let params = {
      handmade: Math.random() >= 0.1,
      materials: materialList[randomMaterialIndex],
      description:faker.lorem.paragraphs(3, "\n"),

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