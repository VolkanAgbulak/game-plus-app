import React, { useEffect, useState } from "react";

const SidebarComponent = ({
  response,
  gameCategoryItem,
  updateList,
  setsearchState,
}) => {
  const [statusItem, setCheckedStatus] = useState("");
  const [genreItem, setCheckedGenre] = useState(gameCategoryItem);
  let filterResponse = {};

  function handleState(e) {
    setCheckedStatus(e.target.value);
  }

  function handleCheckbox(index, e) {
    genreItem[index].checked = e.target.checked;
    setCheckedGenre([...genreItem]);
  }

  function filterData() {
    const genreItemCE = [];
    const allFilteredResponse = [];
    genreItem.forEach((element) => {
      if (element.checked) {
        genreItemCE.push(element.category);
      }
    });

    if (statusItem !== "") {
      filterResponse = response.filter((x) => x.status == statusItem);
    } else {
      filterResponse = response;
    }
    for (let index = 0; index < filterResponse.length; index++) {
      if (genreItemCE.length > 0) {
        for (let i = 0; i < genreItemCE.length; i++) {
          if (filterResponse[index].genres.find((x) => x == genreItemCE[i])) {
            allFilteredResponse.push(filterResponse[index]);
            break;
          }
        }
      } else {
        allFilteredResponse.push(filterResponse[index]);
      }
    }
    updateList(allFilteredResponse);

    setsearchState(false);
  }
  useEffect(() => {
    filterData();
  }, [statusItem, genreItem]);

  return (
    <div>
      <div className="filter-capsule">
        <div className="filter-title">State Filters</div>
        <ul>
          <li>
            <input
              type="radio"
              name="vehicle2"
              value="AVAILABLE"
              onChange={(e) => handleState(e)}
            />
            <label for="vehicle2">Available</label>
          </li>
          <li>
            <input
              type="radio"
              name="vehicle2"
              value="PATCHING"
              onChange={(e) => handleState(e)}
            />
            <label for="vehicle2">Patching</label>
          </li>
          <li>
            <input
              type="radio"
              name="vehicle2"
              value="MAINTENANCE"
              onChange={(e) => handleState(e)}
            />
            <label for="vehicle2">Maintenance</label>
          </li>
        </ul>
      </div>
      <div className="filter-capsule">
        <div className="filter-title">Genre Filters</div>
        {genreItem.map((item, index) => (
          <ul>
            <li key={Math.random()}>
              <input
                onChange={(e) => handleCheckbox(index, e)}
                type="checkbox"
                checked={item.checked}
                name={item.category}
                value={item.category}
              />
              <label for={item.category}> {item.category}</label>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
