import React from "react";
import "./cars.css";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";

const fetchcars = async () => {
  const res = await fetch(
    "https://portalapi.partscheck.com.au/api.php?class=Access&method=fetchExtensionQuoteDetails&hash=DDD123456xx"
  );

  return res.json();
};

const Cars = () => {
  const { data, status } = useQuery("cars", fetchcars);

  //console.log(data.packet.suppliers);

  if (!data) {
    return <div>Loading!</div>;
  }

  else{
    return (
      <div>
        <h1>PartsCheck OEM Suppliers</h1>

        {data.packet.suppliers.map((suppliers) => {
          return (
            <>
              <div className="carpartlist">
                <div className="left">
                  <div className="Suppliername">{suppliers.name}</div>
                  <div className="stars">Rating: {suppliers.rating}</div>
                  <div className="vehiclemake">Vehicle brands: {suppliers.vehicleMakeId}</div>
                </div>
                <div className="right">{suppliers.stateId}</div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
};


export default Cars;
