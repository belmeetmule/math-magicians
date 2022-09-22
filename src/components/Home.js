const homeStyle = {
  padding: '3rem',
  fontSize: '1.5rem',
};

const listStyle = {
  paddingLeft: '4rem',
};
const Home = () => (
  <div style={homeStyle}>
    <h1>Are you a math magician?</h1>
    <br />
    <p>
      Well! You might or might not be the one! But here you can do basic
      mathematical operations using a simple calculator.
    </p>
    <br />
    <p>
      This project is an educational web application made by React to
      learn and practice some key concepts such as the followings:
    </p>
    <br />
    <ul style={listStyle}>
      <li>Create a basic react app</li>
      <li>Work with states and props</li>
      <li>Handle events</li>
      <li>Use router</li>
      <li>Styling in React projects</li>
    </ul>
    <br />
    <p>
      Use the navigation menu to explore the app. If you like the app,
      show your support by adding a star to the project on
      {' '}
      <a href="https://github.com/belmeetmule/react-todo-app">GitHub</a>
      .
    </p>
  </div>
);

export default Home;
