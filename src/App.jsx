import Price from "./components/Price";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App({ moduleData }) {
 // eslint-disable-next-line no-console
 console.log(
  'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
  moduleData,
);

return (
  <>
  <Navbar/>
  <Price moduleData={moduleData}/>
  <Footer/>
  </>
  )
}

export default App
