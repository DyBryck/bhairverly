import Footer from "./components/Footer";
import HairdresserList from "./components/HairdresserList";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ServiceList from "./components/ServiceList";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Header />
      <Video />
      <div className="pt-prestations bg-transparent"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-transparent"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,192L60,202.7C120,213,240,235,360,250.7C480,267,600,277,720,266.7C840,256,960,224,1080,218.7C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-white">
        <ServiceList />
        <ProductList />
        <HairdresserList />
      </div>
      <Footer />
    </>
  );
}

export default App;
