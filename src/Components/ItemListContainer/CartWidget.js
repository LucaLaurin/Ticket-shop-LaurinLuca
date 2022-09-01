import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";

export default function App() {
  
    console.log(iconList);
  
    return (
      <div>
        <h1></h1>
       <FontAwesomeIcon icon={ faCartShopping }/> 
      </div>
    );
}