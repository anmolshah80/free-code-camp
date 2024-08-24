# Free Code Camp Projects

## [Build 25 React Projects](https://www.youtube.com/watch?v=5ZdHfJVAY-s)

_Important Notes:_

- Add the `jsconfig.json` file whenever a new react project is created to always use **absolute paths** to import modules
- Restart your react server once this file is added to avoid compilation errors

### Project I - Accordion

- Implement single selection and multi selection accordion for a web page.
- Data created using FAQs from [Vihn Giang's Stage Academy](https://stageacademy.mykajabi.com/)

- Multi Selection Accordion Design

  ![Multi Selection Accordion Design](./StaticImages/multi-selection-project.png)

### Project II - Random Color Generator

- Work on the project to generate random HEX and RGB color codes.
- Random Color Generator Design

  ![Random Color Generator Design](./StaticImages/random-color-generator.png)

### Project III - Star Rating

- Implement star rating using the icon from [react-icons](https://www.npmjs.com/package/react-icons)
- Star Rating Design

  ![Star Rating Design](./StaticImages/star-rating-design.png)

### Project IV - Image Slider

- Implement image sliding using images from a [Picsum API](https://picsum.photos/v2/list?page=2&limit=10)
- Image Slider Design

  ![Image Slider Design](./StaticImages/image-slider-design.png)

### Project V - Load More Data

- Implement the feature to render data for infinite scorlling
- JSON data taken from [Dummy JSON API](https://dummyjson.com/products?limit=20&skip=20)
- Load More Data Design

  ![Infinite Scrolling Design](./StaticImages/load-more-data-design.png)

### Project VI - Recursive Navigation Menu

- Implement the feature to toggle the nested navigation menu options
- Recursive Navigation Menu Design

  ![Recursive Navigation Menu Design](./StaticImages/recursive-navigation-menu.png)

### Project VII - QR Code Generator

- Implement the feature to generate a QR code based on user's input
- QR code generated from the npm package [react-qr-code](https://www.npmjs.com/package/react-qr-code)
- QR Code Generator Design

  ![QR Code Generator Design](./StaticImages/qr-code-generator-design.png)

### Project VIII - Theme Switch

- Implement the feature to toggle between light and dark modes
- Add a custom hook `useLocalStorage` to set and update the value for theme and change the UI based on its value
- Theme Switch Design

  ![Theme Switch Design](./StaticImages/theme-switch-design.png)

### Project IX - Custom Linear Scroll Indicator

- Implement the feature to display the scroll indicator as the horizontol line at the top of the page as the page is scrolled down
- JSON data taken from [Dummy JSON API](https://dummyjson.com/products?limit=100)
- Custom Linear Scroll Indicator Design

  ![Custom Linear Scroll Indicator Design](./StaticImages/custom-linear-scroll-indicator-design.png)

### Project XI - Dynamic Tabs

- Implement the feature to display the content based on tabs
- Dynamic Tabs Design

  ![Dynamic Tabs Design](./StaticImages/dynamic-tabs-design.png)

### Project XII - Modal Popup

- Implement the feature to display the modal popup upon clicking a button
- Use `setTimeout` function to delay the opening of the modal once the `Try again` button is clicked to mock the behaviour of fetching the data from an API, and rendering a loading icon meanwhile
- Add animation to render the modal from the bottom of the page
- [Modal Popup Design](https://www.patternfly.org/components/modal/design-guidelines#error-dialogs)

  ![Modal Popup Design](./StaticImages/modal-popup-design.png)

### Project XIII - GitHub Profile Finder

- Implement the feature to fetch the GitHub Profile of a user based on their username
- Type the key `/` (forward slash) to focus the search box directly
  - Implementation Sources:
    - [iterative/dvc.org](https://github.com/iterative/dvc.org/pull/2478/files)
    - [flutter/website](https://github.com/flutter/website/pull/10515/files)
    - [React's useRef](https://react.dev/reference/react/useRef#examples-dom)
- Press `Enter` key to search for the _username_ typed without having to click the `Search` button manually
- GitHub Profile Finder Design

  ![GitHub Profile Finder Design](./StaticImages/github-profile-finder-design.png)

### Project XIV - Search Autocomplete

- Implement the feature to autocomplete the search when typing the user's _first or last name_
- Type the `/` (forward slash) key to focus on the search input bar automatically
- Click on the search results to render their profile details in a card below the search input bar
- Search Autocomplete Design

  ![Search Autocomplete Design](./StaticImages/search-autocomplete-design.png)

### Project XVI - Feature Flags

- Implement the feature to render the featured components from a dummy API based on each of its _enabled status_
- Feature Flags Design

  ![Feature Flags Design](./StaticImages/feature-flags-design.png)

### Project XVII - Custom Hooks

- Implement `useFetch`, `useOnClickOutside`, and `useWindowResize` custom hooks from scratch
- `useFetch` hook takes a `url` and an optional `options` arguments to fetch data from an API, and set the incoming data to a state variable and return that variable
- `useOnClickOutside` hook takes the main content element's ref i.e., `contentRef` and a callback function i.e., `hideContent` as arguments to render the content when the button is clicked and hide it from the page once the user clicks outside the content area
- `useWindowResize` hook takes no arguments and returns the window's _width_ and _height_ in real time whenever its resized
- Custom Hooks Design

  ![Custom Hooks Design](./StaticImages/custom-hooks-design.png)

### Project XVIII - Scroll to Section

- Implement the feature to _scroll to top_ and _scroll to bottom_ when clicking on the icons at the top and bottom of the page respectively
- Create a `useFetch` custom hook to get data from an API
- JSON data taken from [Dummy JSON API](https://dummyjson.com/products?limit=100)
- Scroll to Section Design

  ![Scroll to Top and Bottom Design](./StaticImages/scroll-to-top-and-bottom-design.png)
