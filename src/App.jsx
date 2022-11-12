import React, { useState } from 'react';
import data from './data';

function App() {
  const [value, setValue] = useState(0);
  const [lorems, setLorem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value < 0) setValue(0);
    if (value > data.length - 1) setValue(data.length - 1);

    setLorem(data.slice(0, value));
  };

  return (
    <section className="section-center">
      <h3>generate lorem imsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {lorems.map((lorem, index) => {
          return <p key={index}>{lorem}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
