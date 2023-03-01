import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input } from "reactstrap";
import { useRef, useState } from "react";
import WeatherCard from "./WeatherCard";
import { Result } from "./types";

const citiesApiUrl = "https://search.reservamos.mx/api/v2/places";

function App() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const onSearch = async () => {
    try {
      setLoading(true);
      const inputValue = inputRef.current?.value;
      const response = await fetch(`${citiesApiUrl}?q=${inputValue}`);
      const data = await response.json();
      const filteredData = data.filter(
        (item: Result) => item.result_type === "city"
      );
      setResults(filteredData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-25">
          <Input
            type="text"
            innerRef={inputRef}
            placeholder="Type the city to search..."
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <Button color="primary" onClick={onSearch} disabled={loading}>
          Search
        </Button>
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        {loading && <div>Searching...</div>}
        {!loading &&
          results.map((result, i) => <WeatherCard result={result} key={i} />)}
      </div>
    </>
  );
}

export default App;
