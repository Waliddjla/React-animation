# [walid-animation](https://walid-animation.netlify.app/)

This is a React web application called "walid-animation" that demonstrates various animations using popular React libraries such as `react-spring` and `react-waypoint`. The application includes a navbar with routing functionality and three sections: `liste`, `state`, and `scroll`, each showcasing different animation techniques.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/your-username/walid-animation.git
```

2. Navigate to the project directory:

```shell
cd walid-animation
```

3. Install the dependencies:

```shell
npm install
```

4. Start the development server:

```shell
npm start
```

The application will be running at `http://localhost:3000`.

## Features

### Navbar

The application includes a navbar that allows navigation between the different sections:

- **Liste**: An animated list of 9 cards using the `useTrail` and `animated` components from `react-spring`.
- **State**: A state-based animation where new elements are added to a list of favorite rappers. This animation utilizes the `useTransition` and `animated` components from `react-spring`.
- **Scroll**: An animation triggered by scrolling using the `useSpring` and `Waypoint` components. It animates a message in the middle of paragraphs.

### Dependencies

The application relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- React Spring: A spring-physics-based animation library for React.
- React Waypoint: A library that triggers functions when elements are scrolled to.

Make sure these dependencies are installed by running `npm install`.

## Usage

Once the application is running locally, you can access it through the browser at `http://localhost:3000`. The navbar will be displayed at the top of the page, allowing you to navigate between the different sections.

Feel free to explore the animations showcased in each section and observe the smooth and interactive effects created using the `react-spring` and `react-waypoint` libraries.

## Contributing

Contributions to `walid-animation` are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/Waliddjla/React-animation). Pull requests are also encouraged.

When contributing, please ensure that your code follows the established coding conventions and best practices.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You can find the details in the [LICENSE](https://github.com/your-username/walid-animation/blob/main/LICENSE) file.

## Acknowledgements

The animations in this project were made possible thanks to the incredible libraries and tools provided by the React community, particularly:

- [React](https://reactjs.org/)
- [React Spring](https://www.react-spring.io/)
- [React Router](https://reactrouter.com/)
- [React Waypoint](https://github.com/civiccc/react-waypoint)

Special thanks to the authors and contributors of these projects for their hard work and dedication.
