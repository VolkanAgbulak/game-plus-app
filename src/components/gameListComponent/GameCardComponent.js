import React, { useEffect, useState } from "react";

import GameCardItemComponent from "./GameCardItemComponent";

const GameCardComponent = ({ gameItems, searchState, searchList }) => {
  return (
    <div>
      {(() => {
        if (searchState) {
          if (searchList.length > 0) {
            return (
              <div>
								<div>{searchList.length } Result</div>
								
                {searchList.map((option) => (
                  <div>
                    <span key={Math.random()}>{option.title}</span>
                  </div>
                ))}
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
            <div>
              {gameItems.map((option) => (
                <div>
                  <span key={Math.random()}>{option.group}</span>
                  {option.children.map((item) => (
                    <div>
                      <span key={Math.random()}>{item.title}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        }
      })()}
    </div>

  );
};

export default GameCardComponent;
