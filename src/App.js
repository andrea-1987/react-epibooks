import { CardContainer } from "./carContainer/card/CardContainer";
import { FooterWithSitemap } from "./footer/MyFooter";
import { NavbarWithSearch } from "./navbar/MyNavbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { DetailPage } from "./details/details";

function App() {
  return (
 
      <BrowserRouter>
      <NavbarWithSearch/>
        <Routes>
      <Route path="/" element={<CardContainer/>}/>
     <Route path="/book/:id" element={<DetailPage/>}/>
      </Routes>
      <FooterWithSitemap/>
      </BrowserRouter>
 
  );
}

export default App;

