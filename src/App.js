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
    CardImg,
    CardBody,
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
            // Remember to add a max num of wishes people can see at a time
            numWishes: 12,
            wishes: [],
            size: 3,
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        // const handler = (e) => this.setState({ matches: e.matches });
        // window.matchMedia("(min-width: 768px)").addListener(handler);
        let wishes = [];
        for (let i = 0; i < this.state.numWishes; i++) {
            wishes.push({ name: "Bike" + i });
        }
        this.setState({ wishes: wishes });
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    computeRows() {
        let size = this.state.numWishes;
        // if (this.state.width <= 750) {
        //     size = 1;
        // } else if (this.state.width <= 650) {
        //     size = 2;
        // } else {
        //     size = 5;
        // }
        let newArray = [];
        for (let i = 0; i < this.state.wishes.length; i++) {
            let last = newArray[newArray.length - 1];
            if (!last || last.length === size) {
                newArray.push([this.state.wishes[i]]);
            } else {
                last.push(this.state.wishes[i]);
            }
        }
        console.log(newArray);
        return newArray;
    }
    render() {
        const newArray = this.computeRows();
        console.log(this.state.width);

        const headerStyle = {
            margin: 0,
            backgroundColor: "#CCCCFF",
            minHeight: "45vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        };

        const mainContainer = {
            margin: 0,
            padding: 0,
            maxWidth: "100%",
            backgroundColor: "#7C71AD",
        };
        const bodyStyle = {
            padding: "15px",
            display: "flex",
            backgroundColor: "#7C71AD",
            margin: "5vh 5vh 0 5vh",
        };

        const avatarText = {
            color: "#fff",
            fontFamily: "Helvetica Neue",
            sansSerif: 1,
            fontSize: "5vh",
            fontWeight: "bold",
            letterSpacing: "-1px",
            lineHeight: "1",
            textAlign: "center",
            textShadow: "2px 2px #000080",
        };
        let myRow;
        if (newArray.length > 0) {
            myRow = newArray[0].map((wish, idx) => {
                return (
                    <Col style={columnStyle} key={idx}>
                        <BasicCardExample name={wish.name} />
                    </Col>
                );
            });
        } else {
            myRow = newArray.map((wish, idx) => {
                return (
                    <Col style={columnStyle} key={idx}>
                        <BasicCardExample name={wish.name} />
                    </Col>
                );
            });
        }

        const link =
            "https://lh3.googleusercontent.com/0HBLF7SwC_b3YwLCOw_pHLROpOUSJd1ezPXxLRETgyYUMgWMojHtPRqkIhG__cGZWLlTxkM5W8vqyGAFkwMloi7A5w8S3U38f3Tog3o0N4xiU8vYC_v5IG1NH82bq89E5lZEV8mSsUvjeD7inoehaJK5GmBXOXu_rIbBCiLzyD0zYYqS8XA9VrreEU10_HmxNFQaLVcVhMREoQtKJTHDB4oLLpN5JDxixtJjWux9openfAdLabRHPRKQwEjyQOTMK8KLPiPE_f5sJvZ83UjO-k6yaEmpPAByhb34sqOQtWk7leJxWkoMmKPXqpGs70CxcCqWeAiBK964UtkLfPWpVIY4K4mqK6Z0rP2jRRX_q3tlpt8vGe-Xp8GIgg3vSbgnhaah-0z7y_RAP9aQsxVbF1wRn2iu58OAUu2DMPx3pqDZyg2bPaAETA6-AfbsbXNV7_umAuwlA52OOTlw2PYz_Rie2gowYTO5E5L9HcRtAzVpIFqsmMBKryDA6MQGX6mfKSCBlJFp-pPXSJdOI1cmXMfrHZwmy-1zZ5FTdMYtv_wD0QZq945iFVV6Onma1zdPKe39YgcsQWZdQQGbF6rhb2QjdjI-g6pjz3Vsm_ijskLTSuozrvjGqlzOqeE0bYPQOlcIKNC0fTM5tvM0irfT5N3F1hFIpQ5uJ0wcQ2fL53pbOR11-iVXvDuIh1UIew=w500-h504-no?authuser=0";
        return (
            <Container className="main" style={mainContainer}>
                <Row style={headerStyle}>
                    <div className="avatarContainer">
                        <a href="/" className="avatarLink">
                            <div
                                className="avatarIcon"
                                style={{
                                    backgroundImage: `url(${link})`,
                                    width: "15vh",
                                    height: "15vh",
                                    backgroundSize: "cover",
                                    backgroundPosition: "top center",
                                    borderRadius: "50%",
                                    boxShadow:
                                        "0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90, 97, 105, 0.5)",
                                }}
                            />
                        </a>
                    </div>
                    <div>
                        <p style={avatarText}>huong dang</p>
                    </div>
                </Row>
                <Row style={bodyStyle}>{myRow}</Row>
            </Container>
        );
    }
}

class BasicCardExample extends Component {
    render() {
        const today = format(new Date(), "dd/MM/yyyy hh:mm a");
        // 14 wishes

        return (
            <Card style={{ minWidth: "350px", maxWidth: "350px" }}>
                <CardHeader>{this.props.name}</CardHeader>
                <CardImg
                    style={{ maxHeight: "200px" }}
                    src="https://avatars.githubusercontent.com/u/21274031?s=400&v=4"
                />
                <CardBody>
                    <p>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
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
