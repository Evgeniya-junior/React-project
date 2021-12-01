
import './App.css';
import Headlines from './componens/headlines/Headlines';
import img1 from "./assets/images/image 1.jpg";
import img2 from "./assets/images/image 2.jpg";
import img3 from "./assets/images/image 3.jpg";
import img4 from "./assets/images/image 4.jpg";
import img5 from "./assets/images/image 5.jpg";
import img6 from "./assets/images/image 6.jpg";
import iconLocation from "./assets/images/Location.png";
import iconAnalysis from "./assets/images/iconAnalysis.png";
import iconMonithly from "./assets/images/calendar (1) 1.png";
import MenuItems from './componens/menuItem/MenuItems';
import iconBtn from "./assets/images/headerButton.png";
import headerImg from "./assets/images/headerImg.jpg";
import iconSearth from "./assets/images/Search.png";
import Title from './componens/title/Title';
import fox from "./assets/images/fox.png";
import cw6 from "./assets/images/cw6.png";
import abc from "./assets/images/abc.png";
import al from "./assets/images/aljazeera.png";
import bbc from "./assets/images/bbc.png";
import cnn from "./assets/images/cnn.png";
import Card from './componens/card/Card';
import news1 from "./assets/images/news1.jpg";
import news2 from "./assets/images/news2.jpg";
import news3 from "./assets/images/news3.jpg";
import Subtitle from './componens/subtitle/Subtitle';
import News from "../src/componens/news/News";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-wrapper">
          <div className="menu">
            <MenuItems thumbnail={iconLocation} title="San Francisco, California" />
            <MenuItems thumbnail={iconAnalysis} title="Analysis" />
            <MenuItems thumbnail={iconMonithly} title="Monthly" />
          </div>
          <div className="searchInput">
            <input className="header-input "type="text" placeholder="Search for anything…">
            </input>
            <button className="headerBtn">
              <img className="iconBtn" src={iconBtn} alt="icon button"></img>
            </button>
            <img className="headerImg" src={headerImg} alt="Avatar"></img>
          </div>
        </div>
      </header>

      <asside className="sidebar">Sidebar
      </asside>

      <main className="main">
        <div className="main-wrapper">
          <section className="explore">
            <Title title="Explore Channels"/>
            <div className="explore-channels">
                <Card thumbnail={fox} title="FOX NEWS"/>
                <Card thumbnail={cw6} title="CW6 NEWS"/>
                <Card thumbnail={abc} title="ABC NEWS"/>
                <Card thumbnail={al} title="AL JAZEERA"/>
                <Card thumbnail={bbc} title="BBC NEWS"/>
                <Card thumbnail={cnn} title="CNN NEWS"/>
            </div>
          </section>


          <section className="headlines">
              <Title title="Today’s Headlines"/>
              <div className="block-content">
                  <Headlines thumbnail={img1} labelText="BBS NEWS" title="Hate speech vs free speech"/>
                  <Headlines thumbnail={img2} labelText="BBS NEWS" title="Ontario Liberal leadership"/>
                  <Headlines thumbnail={img3} labelText="BBS NEWS" title="Victim of Scarborough"/>
                  <Headlines thumbnail={img4} labelText="ABS NEWS" title="Mother who left her baby"/>
                  <Headlines thumbnail={img5} labelText="CW6 NEWS" title="Mother of Stefanie Rengel"/>
                  <Headlines thumbnail={img6} labelText="CNN NEWS" title="World   Cup: Popular items"/>
              </div>                 
          </section>

              
          <section className="featured">
            <Title title="Featured News"/>
              <div className="news-content">
                <News title="Travellers to pay more than $2K, Trudeau says" thumbnail={news1} labelText="FOX NEWS"/>
                <News title="Myanmar’s military seizes control of country ov  er..." thumbnail={news2} labelText="CNN NEWS"/>
                <News title="Pressure builds for Biden to cancel other pipeline..." thumbnail={news3} labelText="BBC NEWS"/>
              </div>
          </section>
        </div>
        
      </main>
      
    </div>
  );
}

export default App;
