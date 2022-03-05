import React, { useEffect, useState } from "react";

const BannerComponent = ({ filteredList, searchListSet,searchState }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [input, setInput] = useState("");
  function handleSearch(e) {
    var result = filteredList.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setInput(e.target.value);
    setFilteredSuggestions(result);
  }
  function onClick(e) {
    var result = filteredList.filter((item) =>
      item.title.toLowerCase().includes(e.target.innerText.toLowerCase())
    );
    searchListSet(result);
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
  }

  function onKeyDown(e) {
    if (e.keyCode == 13) {
      var result = filteredList.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      searchListSet(result);
      setFilteredSuggestions([]);

    }
  }
  useEffect(() => {
    if(searchState){

      setInput("");
      setFilteredSuggestions([]);
    }
}, [searchState]);
  return (
    <div>
      BannerComponent
      <input
        type="text"
        className="search-input"
        value={input}
        onKeyDown={onKeyDown}
        onChange={(e) => handleSearch(e)}
      />
      {filteredSuggestions.length ? (
        <ul class="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            return (
              <li onClick={onClick} key={suggestion}>
                {suggestion.title}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default BannerComponent;
