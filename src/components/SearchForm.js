import React, { useState, useEffect } from "react";

export default function SearchForm({characters}) {

  const [inputText, setInputText] = useState('');
  const [filterResults, setFilterResults] = useState(characters);

  useEffect(() => {
    setFilterResults(
      characters.filter(person => inputText.includes(person.species))
    )
  }, [inputText]);

  const handleChange = e => {
    setInputText(e.target.value)
  }
 
  return (
    <section className="search-form">
     <form>
        <label>
          Search for a character by their Species!
          <input
            type="text"
            value={inputText}
            onChange={handleChange} 
          />
        </label>
     </form>

     {
      filterResults.map(person => {
        return (
         <div>
           <ul>
              <li>{person.name}</li>
            </ul>
         </div>
        )
      })
     }
    </section>
  );
}
