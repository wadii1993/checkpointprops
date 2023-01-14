import "./App.css";
import DetailProfil from "./profil/profile/DetailProfil";

const persone = {
  id: Math.random(),
  fullName: "wadii",
  Bio: "sportif",
  profession: "kawarji",
};
function App() {
  return (
    <div className="App">
      <DetailProfil >
        <img
          style={{ width: "100px", height: "100px" }}
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
          alt="logo"
        ></img>
      </DetailProfil>
    </div>
  );
}

export default App;
