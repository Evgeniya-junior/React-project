
import './App.css';
import Headlines from './componens/headlines/Headlines';
import img1 from "./assets/images/image 1.jpg";
import img2 from "./assets/images/image 2.jpg";
import img3 from "./assets/images/image 3.jpg";
import img4 from "./assets/images/image 4.jpg";
import img5 from "./assets/images/image 5.jpg";
import img6 from "./assets/images/image 6.jpg";

function App() {
  return (
    <div className="App">
      <Headlines thumbnail={img1} labelText="BBS NEWS" title="Hate speech vs free speech"/>
      <Headlines thumbnail={img2} labelText="BBS NEWS" title="Ontario Liberal leadership"/>
      <Headlines thumbnail={img3} labelText="BBS NEWS" title="Victim of Scarborough"/>
      <Headlines thumbnail={img4} labelText="ABS NEWS" title="Mother who left her baby"/>
      <Headlines thumbnail={img5} labelText="CW6 NEWS" title="Mother of Stefanie Rengel"/>
      <Headlines thumbnail={img6} labelText="CNN NEWS" title="World   Cup: Popular items"/>
    </div>
  );
}

export default App;
