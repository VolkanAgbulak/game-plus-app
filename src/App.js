import React, { useEffect, useState } from "react";
import "https://cdn.skypack.dev/core-js/actual/array/group-by";

import axios from "axios";
import "./assets/style/App.scss";
import SidebarComponent from "./components/templateComponent/SidebarComponent";
import HeaderComponent from "./components/templateComponent/HeaderComponent";
import LoadingComponent from "./components/templateComponent/LoadingComponent";
import BannerComponent from "./components/bannerComponent/BannerComponent";
import PageHeadComponent from "./components/templateComponent/PageHeadComponent";
import GameCardComponent from "./components/gameListComponent/GameCardComponent";

function App() {
  const [loading, setLoading] = useState(true);
  const [searchState, setsearchState] = useState(false);
  const [searchList, setsearchList] = useState([]);
  const [gameItems, setGameList] = useState([]);
  const [response, setResponse] = useState([]);
  const [gameCategoryItem, setGameCategoryList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchData = async () => {
    const { data: response } = await axios.get("./data.json");
    const { data: category } = await axios.get("./category.json");
    let newGenresCategoryList = [];
    category.forEach(function (item, index) {
      newGenresCategoryList.push({ category: item.category, checked: false });
    });
    setResponse(response);
    updateList(response);
    setGameCategoryList(newGenresCategoryList);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function updateList(resp) {
    let data = resp.reduce((r, e) => {
      let group = e.title[0];
      if (!r[group]) r[group] = { group, children: [e] };
      else r[group].children.push(e);
      return r;
    }, {});
    let result = Object.values(data).sort((a, b) =>
      a.group.localeCompare(b.group)
    );
    setFilteredList(resp);
    setGameList(result);
  }

  function searchListSet(resp) {
    setsearchList(resp);
    setsearchState(true);
  }
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {}
      <div className="page-container">
        <HeaderComponent />
        <BannerComponent
          filteredList={filteredList}
          searchListSet={searchListSet}
          searchState={searchState}
        />
        <div className="page-capsule">
          <PageHeadComponent />
          <div className="page-left">
            <SidebarComponent
              gameCategoryItem={gameCategoryItem}
              response={response}
              updateList={updateList}
              setsearchState={setsearchState}
            />
          </div>
          <div className="page-right">
            <GameCardComponent
              gameItems={gameItems}
              searchState={searchState}
              searchList={searchList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
