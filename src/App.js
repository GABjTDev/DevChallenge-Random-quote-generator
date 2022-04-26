import Quote from "./components/Quote";
import Author from "./components/Author";
import { useState, useEffect } from "react";
import axios from "axios";
import Load from "./components/Load";

let authors = ['Bill Gates', 'Warren Beatty', 'Albert Camus', 'Johnny Ball', 'James Thurber', 'Pablo Picasso'];

function App() {

  const [author, setAuthor] = useState(authors[0]);
  const [quotes, setquotes] = useState([]);
  const [limit, setLimit] = useState(1)

  useEffect(() => {

    setquotes([]);

    axios(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=${limit}`)
      .then(res => {
        setquotes(res.data.data)
      })
      .catch(err => console.log(err))

  }, [author, limit])
  
  const handleRandom = () => {
    const random = Math.floor(Math.random() * authors.length);
    setAuthor(authors[random]);
    setLimit(1);
  }

  const handleLimit = () => {
    setLimit(3);
  }

  return (
    <>
      <div className="container">
        <p className="random" onClick={handleRandom}>
          random
          <span className="material-icons">
            autorenew
          </span>
        </p>

        {
          limit > 1 &&
          <h1>{author}</h1>
        }

        {
          quotes.length === 0 &&
          <Load />
        }

        {
          quotes.length >= 1 &&
          <>
              {
                  quotes.map((quote) => {
                    return <Quote key={quote._id} quote={quote.quoteText}/>
                  })
              }

              {
                limit === 1 &&
                <Author author={author} quotes={quotes} handleLimit={handleLimit} />
              }
          </>
        }
      </div>
      <footer>
        <p>Created by <a href="https://github.com/GABjTDev" target='_blank' rel="noreferrer">Gabriel Rea</a> - <a href="https://devchallenges.io/" target='_blank' rel="noreferrer">devChallenges.io</a></p>
      </footer>
    </>
  );
}

export default App;
