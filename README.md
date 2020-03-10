# The Lux Duck Shop

_Good things come in pairs_

Visit our [website here][heroku-website]

[heroku-website]: https://grace-shopper-great-gatsby.herokuapp.com/

## Introduction

The Lux Ducks shop is an ecommerce website where the luxurious premium ducks are just not an eye candy to you but you can make them your very own on purchasing it! Happy Shopping! Have a nice duck!

## Features

The website allows guests and logged-in users to do the following:

1.  View the homepage and view all the ducks and each product with details.
2.  Users and guests can choose one or more items to add to cart.
3.  Guests are requested to sign up and login for placing an order.
4.  Logged-in users can place the order after adding their products to the cart.
5.  The cart allows the users and guests to increase and decrease the quantity of the products they added to the cart before placing an order.
6.  The cart of the logged-in user empties after checkout.
7.  The admin can view all users and products.
8.  The admin can add or delete or update information of the product.

## Getting started

Fork and clone this repo

```
npm install
```

Start the build process and your application with:

```
npm run start-dev;
```

If you're using Windows, you may need to execute npm run start-server and npm run build-watch separately (in their own terminal tabs)

Create the following postgres databases using the command:

```
createbd grace-shopper
create grace-shopper-test
```

Check out the starting seed file in seed.js - you can run it by executing

```
npm run seed
```

By default, regular development uses the database grace-shopper while grace-shopper-test is used when running the test using the following command :

```
npm test
```

## Deployment tools

```
Heroku
Travis
Travis CLI
```

## Project Status :

This project is still in progress.

## Project Members :

Mikayla Toffler, Laura Armfield-Perez, Tiffany Ma, Nadia Sultana

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
