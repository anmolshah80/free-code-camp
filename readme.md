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

  ![Recursive Navigation Menu](./StaticImages/recursive-navigation-menu.png)

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

  ![Dynamic Tabs](./StaticImages/dynamic-tabs-design.png)

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
