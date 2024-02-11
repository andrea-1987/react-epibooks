import { CardContainer } from "./carContainer/card/CardContainer";
import { FooterWithSitemap } from "./footer/MyFooter";
import { NavbarDefault } from "./navbar/MyNavbar";


function App() {
  return (
    <div className="App">
      <NavbarDefault></NavbarDefault>
      <CardContainer></CardContainer>
      <FooterWithSitemap></FooterWithSitemap>
    </div>
  );
}

export default App;
