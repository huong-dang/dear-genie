// import logo from "./logo.svg";
// import { Button } from "shards-react";
// import react from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Component } from "react";
import { format } from "date-fns";
// import airpods from "./airpods.jpg";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardLink,
    CardFooter,
    Button,
    Container,
    Col,
    Row,
} from "shards-react";
const columnStyle = {
    paddingBottom: "10px",
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numWishes: 11,
            wishes: [],
        };
    }
    componentDidMount() {
        // const handler = (e) => this.setState({ matches: e.matches });
        // window.matchMedia("(min-width: 768px)").addListener(handler);
        let wishes = [];
        for (let i = 0; i < this.state.numWishes; i++) {
            wishes.push({ name: "Bike" + i });
        }
        this.setState({ wishes: wishes });
    }
    render() {
        let newArray = [];
        for (let i = 0; i < this.state.wishes.length; i++) {
            let last = newArray[newArray.length - 1];
            if (!last || last.length === 3) {
                newArray.push([this.state.wishes[i]]);
            } else {
                last.push(this.state.wishes[i]);
            }
        }

        console.log(newArray);

        return (
            <Container>
                {newArray.map((wishRow, id) => (
                    <WishRow wishes={wishRow} key={id} />
                ))}
            </Container>
        );
    }
}

function WishRow({ wishes }) {
    const myRow = wishes.map((wish, idx) => {
        return (
            <Col style={columnStyle} key={idx}>
                <BasicCardExample name={wish.name} />
            </Col>
        );
    });

    return <Row>{myRow}</Row>;
}

class BasicCardExample extends Component {
    render() {
        const today = format(new Date(), "dd/MM/yyyy hh:mm a");
        // 14 wishes

        return (
            <Card style={{ maxWidth: "300px" }}>
                <CardHeader>{this.props.name}</CardHeader>

                <CardImg
                    style={{ maxHeight: "200px" }}
                    src="https://avatars.githubusercontent.com/u/21274031?s=400&v=4"
                />
                <CardBody>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button>Purchase</Button>
                </CardBody>
                <CardFooter>
                    <p style={{ fontSize: "10px" }}>Updated: {today}</p>
                </CardFooter>
            </Card>
        );
    }
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
