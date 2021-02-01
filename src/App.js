// import logo from "./logo.svg";
// import { Button } from "shards-react";
// import react from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    Container,
    Col,
    Row,
} from "shards-react";

function App() {
    const columnStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
    };
    return (
        <Container>
            <Row>
                <Col style={columnStyle}>
                    <BasicCardExample name="Air Fryer" />
                </Col>
                <Col style={columnStyle}>
                    <BasicCardExample name="Bike" />
                </Col>
                <Col style={columnStyle}>
                    <BasicCardExample name="Airpods" />
                </Col>
            </Row>
        </Container>
    );
}

function BasicCardExample({ name }) {
    return (
        <Card style={{ maxWidth: "300px" }}>
            <CardHeader>{name}</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
                <CardTitle>Lorem Ipsum</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button>Read more &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
        </Card>
    );
}
// function App() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 <Switch>
//                     <Route path="/about">
//                         <About />
//                     </Route>
//                     <Route path="/users">
//                         <Users />
//                     </Route>
//                     <Route path="/">
//                         <Home />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// function Home() {
//     return <h2>Home</h2>;
// }

// function About() {
//     return <h2>About</h2>;
// }

// function Users() {
//     return <h2>Users</h2>;
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
