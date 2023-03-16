import ResultsSummary from "./components/ResultsSummary/ResultsSummary";
import dataJSON from "./data.json";

const App = () => {
  dataJSON.results.forEach((element) => {
    element.id = Math.random();
  });

  return (
    <div>
      <ResultsSummary data={dataJSON} />
    </div>
  );
};

export default App;
