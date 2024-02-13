import { CardContainer } from "./carContainer/card/CardContainer";
import { FooterWithSitemap } from "./footer/MyFooter";
import { NavbarWithSearch } from "./navbar/MyNavbar";


function App() {
  return (
    <div className="App">
      <NavbarWithSearch></NavbarWithSearch>
      <CardContainer></CardContainer>
      <FooterWithSitemap></FooterWithSitemap>
    </div>
  );
}

export default App;
