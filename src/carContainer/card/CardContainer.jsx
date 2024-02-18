import React, { useEffect, useState } from "react";
import { CardDefault } from "./MyCard";
import { Input } from "@material-tailwind/react";
import { Loader} from "../../loader/loarder"

export const CardContainer = () => {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [someError, setSomeError] = useState(null);

  const maxCardToShow = 20;

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://epibooks.onrender.com/");
        const data = await response.json();
        setBooks(data);
        setFilteredData(data.slice(0, maxCardToShow));
      } catch (error) {
        setSomeError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [maxCardToShow]);

  const onChangeInput = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered.slice(0, maxCardToShow));
  };

  return (
    <div>
      <Input 
        name="name"
        label="Search"
        value={inputValue}
        onChange={onChangeInput}
      />
      {someError && <div>Ops...Somethinks Wrong</div>}

      {loading && !someError && <Loader />}

      {!loading && !someError && (
        <div className="flex justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10 py-10">
          {filteredData.map((book) => (
            <CardDefault
              key={book.asin}
              title={book.title}
              img={book.img}
              price={book.price}
              asin= {book.asin}
            />
          ))}
        </div>
      )}
    </div>
  );
};
