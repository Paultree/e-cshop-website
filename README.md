# React e-cShop Website

## Outline

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.

With this project you will practice how to:

- Fetch Data within a React App - [x]
- Use react-router-dom - []
- Use Firebase/Firestore - []

## MVP

At a minimum your e-shop website should have two pages:

- Home Page
  - This will contain:
    - A Grid of products - [x]
    - Carousel of featured products - [x]
    - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants - [x]
- All products should be stored in Firestore:
  - You should store the following information:
    - quantity - []
    - variants (could be colors, sizes, etc) - []
    - price per unit - []
    - name - []
    - image url - []
    - favourited or not (boolean) - []
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application - []

### Bonus - Required

Using Firestore and react, create a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

- List of products in cart

  - Ability to change quantity of products in cart
  - Ability to remove items from cart

- TIPS :

1. Make sure your site is scoped to one category of products -[x]

## Useful links

- [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Dummy JSON](https://dummyjson.com/)
- [Fake Store](https://fakestoreapi.com/)

20/12/2022

- The purpose of this project is to demonstrate my ability to utilise REST API's with React, use react-router-dom and to use firebase/firestore.
  - We are going to utilise a fake store API to generate product details on our e-commerce site.
  - We are going to use react-router-dom to simulate a multi-page website, mainly to navigate between our homepage, product page and a shopping cart page.
  - We are going to use firebase/firestore to assist with our shopping cart page but to also keep track of our inventory stock of each product.
    - For inventory, we'll have to use another message other than sold out.
- For our overall look, we will break it up with a navigation bar and a main page.
- Navbar will consist of HOME, CART, ABOUT US AND CONTACT PAGE? Last 2 pages will be optional for now.
  - Navbar will also be sticky..
- Our main page will consist of 3 pages:
  - Home page - A carousel of items and a grid of products.
  - Product page - Upon clicking on an item on the carousel or grid, a page with specific product details will appear. This is also where user can choose to add to cart/pick a size/pick a colour.
  - Shopping Cart - User can change quantity, delete item from cart, clear cart..
- At the bottom we can put in fine print information to give the site a more realistic look.

21/12/2022

- Created a basic homepage which includes: Carousel, grid of products.
  - Here, I was not concerned with how good it looked but rather I wanted to reinforce my learning of fetching API data and rendering it on a page with React.
  - I installed a library called react-responsive-carousel to create my carousel as it looked the nicest and easiest to use.
  - The home page that lists all the products from the fake store API utilises useState and useEffect (to grab the data from API).

22/12/2022

- Implemented react-router-dom into the project so user is able to navigate to different pages.
- Home page shows carousel and grid of products.
  - Product in grid are able to be clicked on and brings user to product page - implemented via react-router-dom
- Shopping cart page to be done.
- Firebase/Firestore to be done.
