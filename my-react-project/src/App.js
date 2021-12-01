
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

      <main>
          <section></section>
          <section className="headlines">
              <h2 className="block-title">Today’s Headlines</h2>
              <div className="block-content">
                  <Headlines thumbnail={img1} labelText="BBS NEWS" title="Hate speech vs free speech"/>
                  <Headlines thumbnail={img2} labelText="BBS NEWS" title="Ontario Liberal leadership"/>
                  <Headlines thumbnail={img3} labelText="BBS NEWS" title="Victim of Scarborough"/>
                  <Headlines thumbnail={img4} labelText="ABS NEWS" title="Mother who left her baby"/>
                  <Headlines thumbnail={img5} labelText="CW6 NEWS" title="Mother of Stefanie Rengel"/>
                  <Headlines thumbnail={img6} labelText="CNN NEWS" title="World   Cup: Popular items"/>
              </div>
                  
          </section>
          <section></section>
      </main>
      
    </div>
  );
}

export default App;
