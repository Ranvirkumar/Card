import React from "react";
import "./App.css";
import Card from "./components/Card";
import { Details } from "./Data"
function App() {

  return (
    <div className="App">
      <div className="App-Container">
        {Details.map((detail) => {
          return (
            <div className={detail.class}>
              <Card
                src={detail.src}
                tag={detail.tag}
                hastag={detail.hastag}
                title={detail.title}
                description={detail.description}
                name={detail.name}
                followers={detail.followers}
                image={detail.image}
                category={detail.category}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
