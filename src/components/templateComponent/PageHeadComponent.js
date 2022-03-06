import React, { useEffect, useState } from "react";

const PageHeadComponent = ({ setOrderType, orderType }) => {
  const [order, setOrder] = useState("Title A-Z");
  const [open, setOpen] = useState(false);
  function handleOrder(e, type) {
    setOrder(e.target.textContent);
    setOpen((open) => !open);
    if (type == "asc") {
      setOrderType((orderType = true));
    } else {
      setOrderType((orderType = false));
    }
  }

  return (
    <div className="page-header">
      <h1>Browse Games</h1>
      <div className="capsul">

      <div className="filter-button">
        Filter
        <i className="filter-icon"></i>
      </div>
      <div className="short-list">
        <div className="order-button" onClick={() => setOpen((open) => !open)}>
          {order}
          <>
            {open ? (
              <>
                <i className="up-arrow"></i>
              </>
            ) : (
              <>
                <i className="down-arrow"></i>
              </>
            )}
          </>
        </div>
        {open && (
          <div className="order-list">
            <div className="order-item" onClick={(e) => handleOrder(e, "asc")}>
              Title A-Z
            </div>
            <div className="order-item" onClick={(e) => handleOrder(e, "desc")}>
              Title Z-A
            </div>
          </div>
        )}
      </div>
    
      </div></div>
  );
};

export default PageHeadComponent;
