# JS Band Store.

This application is online book shop.

[Link to app Homepage](https://antonlazurko.github.io/js-band-book-online-shop "JS Band Book online shop")
 
## Description

JS Band store have four screens: "Login", “Catalog”, “Book details”, and "Cart";

### "Login"

On this screen user can log in with username than system redirects user to the Book catalog.

### "Catalog"

On this screen user can see the list of books, search by book name and filter list by the price(dropdown options: 0 < price < 15, 15 < price < 30, price > 30). If user clicking on View button system navigate user to the specific "Book details" screen;

### “Book details”

On this screen user can choose the needed count of books, sees the total price, and adds the book to the "Cart". Then User can navigate back to the "Catalog" or go forward to the "Cart".

### "Cart"

On this screen user can see order list and press 'Purchase' button to buying ordered books.
System place order, show a modal window with ordered items and successful message, and clear the cart;

### "Appbar"

When user authorized at the top of app show bar with name of current user and "Sign out" button. User can unlogged clicking button "Sign out" then  system redirects the user to the "Login" screen.

## "Installation and run application"

- Clone the reprository: https://github.com/antonlazurko/js-band-book-online-shop

- npm install

- npm run start

- npm run test (testing app)

- npm run test:coverege (app testing coverege)


## "Using technologies"

- React JS

- Create React App (tool for creation React applications)

- Webpack (module bundler)

- Redux (state management)

- React-Bootstrap (stylization)

- React-Toastify (stylization)

- Axios (CRUD)

- GH-Pages (deploy)

- Jest (unit-tests)

- ESLint (code linted with eslint-config-airbnb)
