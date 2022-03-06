import React, { useEffect, useState } from "react";

import GameCardItemComponent from "./GameCardItemComponent";

const GameCardComponent = ({
  gameItems,
  searchState,
  searchList,
  orderType,
}) => {
  function searchListOrder() {
    if (!orderType) {
       searchList.reverse();
    }
  }
  useEffect(() => {
    searchListOrder();
  }, [orderType]);

  return (
    <div>
      {(() => {
        if (searchState) {
          if (searchList.length > 0) {
            return (
              <div className="search-result-card">
                <div className="search-result-header">
                  <h2>Search Results</h2>
                  <h4>{searchList.length} Result</h4>
                </div>
                <div className="game-list">
                  {searchList.map((item) => (
                    <GameCardItemComponent key={Math.random()} item={item} />
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div className="no-result">
                Game is currently not supported on Game Plus
              </div>
            );
          }
        } else {
          return (
            <>
              {gameItems.map((option) => (
                <div className="game-group-card">
                  <div className="group-name">
                    <span className="group-name-l">{option.group}</span>
                    <span className="group-name-bg">&#x2B22;</span>
                  </div>
                  <div className="game-list">
                    {option.children.map((item) => (
                      <GameCardItemComponent item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </>
          );
        }
      })()}
    </div>
  );
};

export default GameCardComponent;
