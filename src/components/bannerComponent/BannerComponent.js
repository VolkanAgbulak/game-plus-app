import React, { useEffect, useState } from "react";

const BannerComponent = ({ filteredList, searchListSet, searchState }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
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
    if (e.keyCode == 27) {
      setInput("");
      setFilteredSuggestions([]);
    }
  }

  function onClose(e) {
    setInput("");
    setFilteredSuggestions([]);
  }

  useEffect(() => {
    if (searchState) {
      setInput("");
      setFilteredSuggestions([]);
    }
  }, [searchState]);
  return (
    <div className="banner-area">
      <div className="banner-capsule">
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <h3>
          With the Cloud Gaming, you can join, play, and share games online with
          anyone in the world. Play any game on any device!
        </h3>
        <div className="search-area">
          <span className="search-icon" />
          <input
            type="text"
            className="search-input"
            value={input}
            onKeyDown={onKeyDown}
            onChange={(e) => handleSearch(e)}
          />
          {filteredSuggestions.length ? (
            <>
              <span className="close-icon" onClick={onClose}></span>
              <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                  return (
                    <li onClick={onClick} key={suggestion}>
                      {suggestion.title}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
