import React, { useEffect, useState } from "react";

import axios from "axios";
import "./assets/style/App.scss";
import SidebarComponent from "./components/templateComponent/SidebarComponent";
import HeaderComponent from "./components/templateComponent/HeaderComponent";
import LoadingComponent from "./components/templateComponent/LoadingComponent";
import BannerComponent from "./components/bannerComponent/BannerComponent";
import PageHeadComponent from "./components/templateComponent/PageHeadComponent";
import GameCardComponent from "./components/gameListComponent/GameCardComponent";
import FooterComponent from './components/templateComponent/FooterComponent';

function App() {
  const [loading, setLoading] = useState(true);
  const [searchState, setsearchState] = useState(false);
  const [searchList, setsearchList] = useState([]);
  const [gameItems, setGameList] = useState([]);
  const [response, setResponse] = useState([]);
  const [gameCategoryItem, setGameCategoryList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [orderType, setOrderType] = useState(true);

  const fetchData = async () => {
    const { data: response } = await axios.get("./data.json");
    const { data: category } = await axios.get("./category.json");
    let newGenresCategoryList = [];
    category.forEach(function (item, index) {
      newGenresCategoryList.push({ category: item.category, checked: false });
    });
    setResponse(response);
    updateList(response, orderType);
    setGameCategoryList(newGenresCategoryList);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [orderType]);

  function updateList(resp, type) {
    let data = resp.reduce((r, e) => {
      let group = e.title[0];
      if (!r[group]) r[group] = { group, children: [e] };
      else r[group].children.push(e);
      return r;
    }, {});
    if (type) {
      let result = Object.values(data).sort((a, b) =>
        a.group.localeCompare(b.group)
      );
      setGameList(result);
    } else {
      let result = Object.values(data).reverse((a, b) =>
        a.group.localeCompare(b.group)
      );
      setGameList(result);
    }
    setFilteredList(resp.sort());
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
          orderType={orderType}
        />
        <div className="page-capsule">
          <div className="container">
            <PageHeadComponent
              setOrderType={setOrderType}
              orderType={orderType}
            />
            <div className="row">
              <div className="sidebar flex-box">
                <SidebarComponent
                  gameCategoryItem={gameCategoryItem}
                  response={response}
                  updateList={updateList}
                  setsearchState={setsearchState}
                  orderType={orderType}
                />
              </div>
              <div className="content flex-box">
                <GameCardComponent
                  gameItems={gameItems}
                  searchState={searchState}
                  searchList={searchList}
                  orderType={orderType}
                />
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
