# Compatability Test
The *Compatibility Test* is a Node.js, Express app that allows a user to answer some questions and get matched with a compatible friend from the saved list of friends.


Find your compatible "soul mate" in a group of others who've taken the quiz



# Buy, by Bon

*Buy, by Bon* is a Node.js and SQL command line app with an Amazon-like storefront and separate customer, manager and executive facing applications. The app uses a database of products and takes in orders from customers, which depletes stock from the store's inventory. Managers and executives can add more products to different departments and track profit.

 You can find the source files at [https://github.com/mathfour/buy-by-bon](https://github.com/mathfour/buy-by-bon)

## Dependencies
"body-parser": "^1.17.2",
    "express": "^4.15.3",
    "fs": "^0.0.1-security",
    "http": "^0.0.0",
    "jQuery": "^1.7.4",
    "jquery": "^3.2.1",
    "jsdom": "^11.0.0"
- [body-parser](https://www.npmjs.com/package/body-parser)


- [express](https://www.npmjs.com/package/express)

- [fs](https://www.npmjs.com/package/fs)

- [http](https://www.npmjs.com/package/http)

## Set Up

Clone this repo to your desktop and change to the `buy-by-bon` directory. (If it's your first time to clone, check out the instructions [here](https://help.github.com/articles/cloning-a-repository/). Run `npm install` to install its 4 dependencies.

Then run the following code in the command line to create the *Buy, by Bon* database and the *products* table: `mysql -u root -p < buy-by-bon.sql`

Then use your text editor of choice to update `buy-by-bon.js` and `manager-view-bbb.js` with your mysql password, if you use one.

## Customer Use

- Run `node buy-by-bon.js` to start the customer facing *Buy, by Bon* app.

- Customers are shown the catalog and may choose a product to purchase by its ID. If a product has no inventory, it **_will_** be shown in the catalog, but **_will not_** come up as an option to purchase.

![choose-item-to-order](images/choose-item-to-order.png)

- If there isn't sufficient inventory to fulfil the order, the customer is notified.

![not-enough-inventory](images/not-enough-inventory.png)

- Customers are shown the total cost (after it's calculated) and are asked to confirm their purchase. After the purchase, the catalog is updated in the mysql database to reflect new stock quantities.

![complete-order](images/complete-order.png)

- Regardless of order status, customers are prompted to exit or attempt another purchase.

## Manager Use

- Run `node manager-view-bbb.js` to start the manager facing *Buy, by Bon* app.

- Managers are give a list of options:

![manager-options](images/manager-options.png)

#### View Catalog of Products

Like the customer app, this shows the full catalog of products - including those that are at zero inventory. Unlike the customer app, though, managers get to view department and inventory.

![manager-catalog](images/manager-catalog.png)

#### Run Report of Low Inventory

This option lists items that are designated as "low" in inventory. Currently low is defined as 5 or fewer units in stock.

![low-inventory](images/low-inventory.png)

#### Add to the Inventory

A manager may add inventory to any product already in the database with this option.

![add-to-inventory](images/add-to-inventory.png)

The manager will be asked to choose the unique product ID and then prompted for the additional inventory to be added.

![add-to-inventory-confirmation](images/add-to-inventory-confirmation.png)

![add-to-inventory-before](images/add-to-inventory-before.png)
*Before*

![add-to-inventory-after](images/add-to-inventory-after.png)
*After*

#### Create a New Product

This option is still in development. When finished, the manager's inputs of unique ID, name of the product, price, department and quantity will be added into the database and available for purchase by customers. Right now, the app only takes in the information and parses it in the proper format to be added to the database's table.

![add-a-product](images/add-a-product.png)

## Next Steps

In addition to completing the manager app (the "Create a New Product" option), the supervisor app can be written.

## Needed Improvements & Commentary

I completed the customer app with a serious lack of DRY. So I started the manager app with the idea that I would consolidate many of the methods into the `modules-bbb.js` file. This went well until I attempted to adjust the customer app `buy-by-bon.js` to utilize the export functions.

I got lost in trying to figure out how much to modularize. Things seemed to be fine until I started trying to work out the variety of callbacks. You can see how messy this got by looking at the file `buy-by-bon-with-mods.js` in the `non-working-and-test-files` folder, or click [here](https://github.com/mathfour/buy-by-bon/blob/master/non-working-and-test-files/buy-by-bon-with-mods.js).

## Acknowledgements

A big thanks to the following folks:
- [Stephanie Orpilla](https://github.com/stephorpilla) whose `README.md` helped me create this one.
- [Erick Rivas](https://github.com/charmeleon) whose patience with me regarding callback functions is approaching infinity.
- [Seth Gibson](https://github.com/sgibson53) who considers my questions quietly while I formulate my own answers before he even needs to speak.

# Flashcard Study Center
Flashcard Generator - Homework 9

Submitted by Bon Crowder

### How to run the application:

Install appropriate packages (info found in `package.json`) and save `flashcard.js` and `flashcards.json` to the same directory.
 Type `node flashcard.js` at the command line and press enter. You will be prompted to choose `Create a Flashcard` or `Study from Flashcards`.

 ![initial prompt](https://github.com/mathfour/flashcard-generator/blob/master/images/Screen%20Shot%202017-05-21%20at%207.40.47%20PM.png?raw=true)

#### If you Create a Flashcard
  1. You'll be prompted with `What type of flashcard would you like to create?`
  2. If you choose `Question & Answer`, you'll be asked to enter the front of the card (the question). Press `enter` when you've finished and you will be promted to enter the back (the answer).
  3. If you choose `Fill-in-the-Blank`, you'll be prompted for the full statement then the part that goes in the blank. Press enter after each.
        * For example, if your fill-in-the-blank statement is *Weird Al Yankovik was born in ______, California*, you would enter:

            ``` cli
            ? What is the full statement? Weird Al Yankovic was born in Lynwood, California.
            ? What part should be in the blank? Lynwood
            ```
![create a flashcard](https://github.com/mathfour/flashcard-generator/blob/master/images/Screen%20Shot%202017-05-21%20at%207.46.17%20PM.png?raw=true)

####  If you choose to Study from Flashcards
  1. You'll be prompted with `What type of flashcard would you like to view?`
  2. If you choose `Question & Answer`, you'll be given a random front and back of a Question/Answer card.
  3. If you choose `Fill-in-the-Blank`, you'll be given a random front and back of a Fill-in-the-Blank card.

![viewing flashcards](https://github.com/mathfour/flashcard-generator/blob/master/images/Screen%20Shot%202017-05-21%20at%207.46.35%20PM.png?raw=true)

### Start from scratch

To create your own set of flashcards, start a blank `*.json` file with the following inside:
``` json
[
  {
    "type": "starter file"
  }
]
```

Note: there are **NO** spaces after the final square bracket.

In the `flashcard.js` file, change the name of the `flashcardJsonFile` variable on line 5 from `flashcards.json` to the name of your new `*.json` file.

### Known Bugs

Seems that if the randomizer chooses a question that isn't the right type, you get a weird glitchy error.
![glitch](https://github.com/mathfour/flashcard-generator/blob/master/images/Screen%20Shot%202017-05-21%20at%207.45.24%20PM.png?raw=true)

### What's next

You may have noticed that it's kinda lame to see **both** the question and the answer at the same time. The next step is to separate these so you can actually study.

Also, it'd be swell if the app didn't just stop after saving or showing a flashcard.


### Copyright and License

Like it? Use it and say where you got it.

Have courage and be kind.

![Bon's Signature](http://mathfour.com/wp-content/uploads/2015/06/SignatureBon.png "Bon Crowder")
