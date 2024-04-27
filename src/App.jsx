import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import TvShows from "./components/TvShows";
import TrendingCarousel from "./components/TrendingCarousel";
import WatchItCarousel from "./components/WatchItCarousel";
import NewRealeasesCarousel from "./components/NewReleasesCarousel";
import StarWarsCarouselServer from "./components/StarWarsCarouselServer";
import HarryPotterCarouselServer from "./components/HarryPotterCarouselServer";
import SpideManCarouselServer from "./components/SpideManCarouselServer";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
      </header>
      <main className="bg-dark">
        <TvShows />
        <TrendingCarousel />
        <WatchItCarousel />
        <NewRealeasesCarousel />
        <StarWarsCarouselServer />
        <HarryPotterCarouselServer />
        <SpideManCarouselServer />
        <MyFooter />
      </main>
    </div>
  );
}

export default App;
