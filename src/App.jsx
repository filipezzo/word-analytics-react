import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stats";
import Textarea from "./components/Textarea";
function App() {
  const [data, setData] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramChLeft: 280,
    facebookChLeft: 2200,
  });

  const updatingData = (newData) => {
    setData(newData);
  };
  return (
    <>
      <Header />
      <Main>
        <Textarea onUpdate={updatingData} />
        <Stats data={data} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
