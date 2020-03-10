# The Lux Duck Shop

_Good things come in pairs_

Visit our [website here][heroku-website]

[heroku-website]: https://grace-shopper-great-gatsby.herokuapp.com/

## Introduction

The Lux Ducks shop is an ecommerce website where the luxurious premium ducks are just not an eye candy to you but you can make them your very own on purchasisng it! Happy Shopping! Have a nice duck!

## Features

The website allows guests and logge-in users to do the follwoing:
1) View the homepage and view all the ducks and each product with details.
2) Choose one or more items to add to cart.
3) Guests are requested to sign up and login for placing an order.
4) Logged-in users can place the order after adding their products to the cart.
5)The cart allows the users and guests to increase and decrease the quantity of the products they added to the cart.


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


sample sample sample sample sample sample sample sample sample sample sample sample sample sample
sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample

```

```

_**NOTE**_ that this sample text `sample` sample sample.

### Heroku Deployment Information (remove later)

Your local copy of the application can be pushed up to Heroku at will,
using Boilermaker's handy deployment script:

1.  Make sure that all your work is fully committed and merged into your
    master branch on Github.
2.  If you currently have an existing branch called "deploy", delete
    it now (`git branch -d deploy`). We will use a dummy branch
    with the name `deploy` (see below), so and the script below will error if a
    branch with that name already exists.
3.  `npm run deploy`
    _ this will cause the following commands to happen in order:
    _ `git checkout -b deploy`: checks out a new branch called
    `deploy`. Note that the name `deploy` here is not magical, but it needs
    to match the name of the branch we specify when we push to our `heroku`
    remote.
    _ `webpack -p`: webpack will run in "production mode"
    _ `git add -f public/bundle.js public/bundle.js.map`: "force" add
    these files which are listed in `.gitignore`.
    _ `git commit --allow-empty -m 'Deploying'`: create a commit, even
    if nothing changed
    _ `git push --force heroku deploy:master`: push your local
    `deploy` branch to the `master` branch on `heroku`
    _ `git checkout master`: return to your master branch
    _ `git branch -D deploy`: remove the deploy branch

Now, you should be deployed!

Why do all of these steps? The big reason is because we don't want our
production server to be cluttered up with dev dependencies like
`webpack`, but at the same time we don't want our development
git-tracking to be cluttered with production build files like
`bundle.js`! By doing these steps, we make sure our development and
production environments both stay nice and clean!
