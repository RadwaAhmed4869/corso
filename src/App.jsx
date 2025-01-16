import Navbar from "./componenets/Navbar";
import Header from "./componenets/Header";
import Register from "./componenets/Register";
import Details from "./componenets/Details";
import Points from "./componenets/Points";
import Summary from "./componenets/Summary";
import Invitation from "./componenets/Invitation";
import Takeaways from "./componenets/Takeaways";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Register />
      <Details index={0} />
      <Points />
      <Summary />
      <Details index={1} />
      <Invitation />
      <Takeaways />
    </>
  );
}

export default App;
