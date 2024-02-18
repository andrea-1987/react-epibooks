import { useEffect, useState } from "react";
import { CardDefault } from "../carContainer/card/MyCard";
import { Loader } from "../loader/loarder";
import { useParams } from "react-router-dom";


export const DetailPage = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [someError, setSomeError] = useState(null);

  const { id } = useParams()
  
  useEffect(() => {
  const getDetailBook = async () => {
      setLoading(true);
      try {
          const response = await fetch(`https://epibooks.onrender.com/${id}`);
          const data = await response.json();
          setBook(data.at(0));
        } catch (error) {
            setSomeError(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    getDetailBook();
  }, [id]);

  return (
    <>
      {someError && <div>Ops.... Something went wrong</div>}
      {loading && !someError && (
        <div>
          <Loader /> Loading...
        </div>
      )}

        <CardDefault
     
          title={book && book.title}
          img={book && book.img}
          price={book && book.price}
        />
    </>
  );
};
