import React from "react";
// Components
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Offer from './components/Offer';
import Marketplace from "./components/Marketplace";
import Portfolio from  './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import BuildPage from './components/BuildPage';
import ArrowTop from './components/ArrowTop';
import AlertBox from "./components/AlertBox";
// Imgs 
import Icon3D from './assets/3d-icon.svg';
import IdeaIcon from './assets/idea-icon.svg';
import SketchIcon from './assets/sketch-icon.svg';
import AboutImg from './assets/about_image.jpeg';
import Choinka from './assets/products/choinka.jpg';
import Napis from './assets/products/druk_napis.jpg';
import Lopatka from './assets/products/lopatka_turbiny.jpg';
import Pierscionki from './assets/products/pierscionki.jpg';
import Serduszka from './assets/products/serduszka.jpg';
import Smiglo from './assets/products/smiglo.jpg';
import BombkaImie from './assets/products/bombka_imie.jpg';
import DzwoneczkiKomplet1 from './assets/products/dzwoneczki_komplet_1.jpg';
import DzwoneczkiKomplet2 from './assets/products/dzwoneczki_komplet_2.jpg';
import Dzwoneczek from './assets/products/dzwoneczek1.jpg';
import ZawieszkaNarodzenie from './assets/products/zawieszka_narodzenie.jpg';

// Routers
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const links = [`Studio`, `Oferta`, `Realizacje`, `Sklep`, `Kontakt`];

  const homeTitles = {
    "title1" : "Nasze możliwości",
    "title2" : "Produkty",
    "title3" : "Przykładowy model"
  }

  const about = [
    {
      "title" : "Słowem wstępu",
      "content" : [
        {
          "subtitle" : "Profil działalności",
          "text" : `
            Jesteśmy małym studiem projektowym, 
            stworzonym przez dwóch młodych i ambitnych pasjonatów technologii. 
            Zajmujemy się zarówno drukiem (mniejszych elementów, w mało- i wielkoseryjnej produkcji), jak i prototypowaniem 3D oraz projektowaniem modeli w programach CAD. 
            Korzystamy z profesjonalnego oprogramowania firmy Autodesk, w naszej pracy wykorzystujemy również Blendera, 
            dającego multum możliwości w projektowaniu zarówno prostych, jak i bardziej złożonych modeli i komponentów.
            Jeśli masz ciekawy pomysł do zrealizowania, chciałbyś wytworzyć prototyp konkretnego produktu, bądź chcesz komuś sprawić oryginalny i wyjątkowy prezent – zapraszamy serdecznie do skorzystania z naszej oferty.
          `,
        },
        {
          "subtitle" : "Czym jest druk 3D",
          "text" : ` 
            Drukowanie 3D, AM (ang. Additive Manufacturing - produkcja przyrostowa) jest innowacyjną metodą wytwarzania produktów, gdzie materiał jest układany, warstwa po warstwie,
            finalnie tworząc gotowy wyrób, niemal idealnie odwzorowany z modelu wysłanego na drukarkę 3D z komputera.
            Technologia ta świetnie się sprawdza w przypadku realizacji produktów o bardziej skomplikowanych geometriach, ale również takich, 
            których wytworzenie wymaga większej precyzji, niż przy standardowych metodach produkcji. Pozwala także na wytwarzanie komponentów znacznie lżejszych, trwalszych,
            i co równie ważne - tańszych.
          `,
        },
        {
          "subtitle" : "Wykorzystywane materiały, czas realizacji",
          "text" : `
            W procesie produkcji wykorzystujemy najlepsze filamenty dostępne na rynku, przeważnie drukujemy komponenty z materiałów takich jak PLA i ABS, które cechują się wyjątkowo dobrymi parametrami (większa wytrzymałość mechaniczna, wytrzymałość na niektóre odczynniki chemiczne).
            Czas realizacji jest bardzo rozbieżny, w zależności od skomplikowania projektu, wynosi między 1-4 dni roboczych. Zazwyczaj małe elementy powstają w ciągu 0.5 do 3 godzin, natomiast te większe potrafią w ciągu kilku dni.
            Jeśli chodzi o dostawy, wykonany model pakujemy natychmiast po zakończeniu procesu druku i finalnej obróbce. Po nadaniu paczki np. do paczkomatu InPost, przesyłka powinna dotrzeć w miejsce docelowe w przeciągu 1-3 dni roboczych.
          `,
        }
      ],
    },
    {
      "title" : "Przykładowy przebieg zlecenia",
      "content" : "",
    },
    {
      "title" : "Nasza wizja oraz cele",
      "content" : `Nieustannie zależy nam na naszym rozwoju i przez to większym zadowoleniu naszych klientów z bogatej i różnorodnej oferty, 
      więc w najbliższej przyszłości planujemy rozbudowę naszej linii produkcyjnej, powiększając ją o kilka kolejnych drukarek, 
      przede wszystkim mających pole robocze o większych wymiarach, aby sprostać bardziej nietypowym wymaganiom, 
      czyli docelowo druku modeli o większych gabarytach.`,
    },
  ]

  const offers = [
    {
        "title" : "Druk 3D",
        "img" : `${Icon3D}`,
        "text" : `Wydruk modeli o maksymalnych wymiarach 330 x 330 x 400 mm. Materiały, z których mogą zostać wykonane elementy: PLA, ABS, PETG, WOOD, TPU, FIXABLE.`
    },
    {
        "title" : "Realizacja projektów",
        "img" : `${IdeaIcon}`,
        "text" : `Konsultacja oraz wstępna analiza projektu (pomysłu) dostarczonego przez klienta, następnie jego wdrożenie i realizacja.`
    },
    {
        "title" : "Projektowanie 3D",
        "img" : `${SketchIcon}`,
        "text" : `Profesjonalne wykonywanie szkiców, makiet oraz modeli w programach CAD (Inventor, AutoCAD, Blender), oraz ich ewentualny wydruk, na życzenie klienta. Możliwość dostarczenia wyeksportowanych modeli w wersji elektronicznej (np. w formatach takich jak: .stl, .obj, .glb, .glts)`
    },
]

  const products = [
    {
        "id" : "1",
        "name" : "Okrągła bombka z napisem",
        "description" : "Płaska bombka o średnicy 8 cm i głębokości 0.5 cm, z ręcznie wykonanym napisem i wzorkami",
        "img" : `${BombkaImie}`,
        "price" : "20 zł",
        "link" : "https://allegro.pl/oferta/bombka-choinkowa-z-imieniem-13003347381",
    },
    {
        "id" : "2",
        "name" : "Bombka w kształcie choinki",
        "description" : "Płaska bombka o kształcie choinki, z możliwością wykonania odręcznego napisu, według wzoru podanego przez klienta",
        "img" : `${Choinka}`,
        "price" : "7.99 zł",
        "link" : "",
    },
    {
        "id" : "3",
        "name" : "Dzwoneczek",
        "description" : "Mały dzwoneczek",
        "img" : `${Dzwoneczek}`,
        "price" : "5 zł",
        "link" : "",
    },
    {
        "id" : "4",
        "name" : "Dzwonki komplet 2 szt.",
        "description" : "Dzwonki",
        "img" : `${DzwoneczkiKomplet1}`,
        "price" : "10 zł",
        "link" : "",
    },
    {
        "id" : "5",
        "name" : "Dzwonki komplet 2 szt.",
        "description" : "Dzwonki",
        "img" : `${DzwoneczkiKomplet2}`,
        "price" : "12.99 zł",
        "link" : "https://allegro.pl/oferta/dzwonki-komplet-2-szt-13003593769",
    },
    {
        "id" : "6",
        "name" : "Bombka w kształcie aniołka (z odręcznym napisem) ",
        "description" : "Bombka w kształcie aniołka (z odręcznym napisem)",
        "img" : `${Icon3D}`,
        "price" : "10 zł",
        "link" : "",
    },
    {
        "id" : "7",
        "name" : "Serduszka naszyjniki komplet 2 sztuk",
        "description" : "Serduszka naszyjniki",
        "img" : `${Serduszka}`,
        "price" : "20 zł",
        "link" : "",
    },
    {
      "id" : "8",
      "name" : "Branzoletki z napisem komplet 2 sztuk",
      "description" : "Branzoletki z napisem komplet 2 sztuk",
      "img" : `${Icon3D}`,
      "price" : "20 zł",
      "link" : "",
    },
    {
      "id" : "9",
      "name" : "Case na telefon z personalizowanym wzorem",
      "description" : "Case na telefon, z personalizowanym wzorem, wszystkie modele",
      "img" : `${Icon3D}`,
      "price" : "50 zł",
      "link" : "",
    },
    {
      "id" : "10",
      "name" : "Bombka ze sceną Narodzenia Pańskiego",
      "description" : "Bombka ze sceną Narodzenia Pańskiego",
      "img" : `${ZawieszkaNarodzenie}`,
      "price" : "6.99 zł",
      "link" : "https://allegro.pl/oferta/plaska-bombka-ze-scena-narodzenia-panskiego-1-szt-13004832399",
    },
  ];

  const images = [
    {
      "id" : "1",
      "link" : `${Choinka}`,
    },
    {
      "id" : "2",
      "link" : `${Napis}`,
    },
    {
      "id" : "3",
      "link" : `${Smiglo}`,
    },
    {
      "id" : "4",
      "link" : `${Lopatka}`,
    },
    {
      "id" : "5",
      "link" : `${Pierscionki}`,
    },
    {
      "id" : "6",
      "link" : `${Serduszka}`,
    },
    {
      "id" : "7",
      "link" : `${BombkaImie}`,
    },
    {
      "id" : "8",
      "link" : `${ZawieszkaNarodzenie}`,
    },
    {
      "id" : "9",
      "link" : `${Dzwoneczek}`,
    },
    {
      "id" : "10",
      "link" : `${DzwoneczkiKomplet1}`,
    },
    {
      "id" : "11",
      "link" : `${DzwoneczkiKomplet2}`,
    },
  ];

  return (
    <Router>
      <Header links={links} />
      <Routes>
        <Route
          path='/'
          element={
            <Home 
              title1={homeTitles.title1}
              title2={homeTitles.title2}
              title3={homeTitles.title3}
              products={products}
              offers={offers}
            />
        }/>
        <Route
          path='/studio'
          element={<About
            title1={about[0].title}
            title2={about[1].title}
            title3={about[2].title}
            content={about[0].content}
            content3={about[2].content}
          />}
        />
        <Route
          path='/oferta'
          element={<Offer offers={offers}/>}
        />
        <Route
          path='/realizacje'
          element={
          <Portfolio
            title='Nasze przykładowe realizacje'
            imgs={images}
          />}
        />
        <Route
          path='/sklep'
          element={<Marketplace products={products}/>}
        />
        <Route
          path='/kontakt'
          element={<Contact/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <ArrowTop />
      <Footer />
      <GlobalStyle />
    </Router>
  );
};

export default App;
