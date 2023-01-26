# React e-cShop Website

## Image

![Alt Text](project-demo.gif)

## Link

## Setup

- npm create vite@latest
- npm i sass
- npm i react-router-dom

## Outline

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.

With this project you will practice how to:

- Fetch Data within a React App - [x]
- Use react-router-dom - [x]
- Use Firebase/Firestore - [x]

## MVP

At a minimum your e-shop website should have two pages:

- Home Page
  - This will contain:
    - A Grid of products - [x]
    - Carousel of featured products - [x]
    - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants - [x]
- All products should be stored in Firestore:
  - You should store the following information:
    - quantity - [x]
    - variants (could be colors, sizes, etc) - [x]
    - price per unit - [x]
    - name - [x]
    - image url - [x]
    - favourited or not (boolean) - [x]
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application - [x]

### Bonus - Required

Using Firestore and react, create a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

- List of products in cart

  - Ability to change quantity of products in cart - [x]
  - Ability to remove items from cart - [x]

- TIPS :

1. Make sure your site is scoped to one category of products -[x]

## Useful links

- [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Dummy JSON](https://dummyjson.com/)
- [Fake Store](https://fakestoreapi.com/)

## Approach

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

23/12/2022

- Cloud firebase was created.
  - Currently only 4 product items in the products collection. Keeping the collection small to focus on practice on fetching data from database.
  - We will need to create a new collection that stores data of shopping cart.
- Re-wrote code to utilise database information instead of an API.
- the Add to cart button will handle this logic:

  - when user clicks add to bag, stores the products collection id, size chosen and quantity in a shopping cart collection?
  - will also decrement available quantity in products collection.
  - shopping cart will contain shopping item components which will render name, image, size, quantity (value stored in shopping cart collection) and user will be able to update quantity (availability will be pulled from products collection) - attached to a button, another button that lets user delete item from shopping cart - doing so reverts the quantity count stored in products collection

  24/12/2022

  - Implementing setDoc to 'add to cart' button rather than addDoc:
    - This is because setDoc only adds to database if the document does not yet exist in the database. If it does, it simply overwrites the information.

25/12/2022

- Used a state counter that would trigger anytime the favourite button was clicked. Used the state as a dependency for useEffect in App.jsx so that once an item is favourited, counter state changes which causes the useEffect in App.jsx to trigger (fetches updated data from firestore) and re-renders the favourite button.
- Modified the addToCart code to id each cart item by name-size naming convention.
  - Allows user to have similar items in cart but different size.
  - We are still retaining the 5 quantity count.

26/12/2022

- Used state counter to update product page once product sells out.
- Implemented increment method from firestore to increment shopping cart quantity and decrement product quantity
- Implemented update cart button onto shopping cart.

28/12/2022

- Implemented a delete item feature via a button.
- Used the deleteDoc method provided by firestore.
- Added in a total price section of the HTML in Shoppingcartpage.
- Need to try and clean up code in firestore.js.
- Also will need to rename some functions and state variables to improve readability.
- Also try and implement some comments.

## Reflection

## Future Goals

- add a favourite button as a heart.
- add a favourites page
- add a search function

## Further Reading

## Stay in Touch

## Licence

## Contribution
