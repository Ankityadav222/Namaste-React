/* 
Created a Server
HMR -- > Hot Module Reloading
It track's all the files in the sysytem and also tracks and save if we
change anything in the file
IT is built by using  the c++ algorithm or written in c++
Zero-config Blunder
minify
blunding
Cleaning our code
Dev aand production Build
Super fast build Algorithm
Image optimization
Caching while development
Compressiion
Compatible with older version of browser
Https on module
port number
consistent hashing problem
Treee Shaking-->Remove unwanted code
React Fragment:-



HW
Optional Chaning =?





*/



//Confrict driven UI


import React from "react";
import ReactDOM from "react-dom/client";
//Default impot
import Header from "./Heaader";
// Named imports
import { Title } from "./Heaader";
import Body from "./Body";
import Footer from "./Footer";
//import { IMG_CDN_URL } from "./constants"; 









//Config Driven UI

/*
const config = [
    {
        type:"carousel",
        cards:[
            {
                offer:"50% OFF"
            },
            {
                offer:"No Delivery Charges"
            }
        ]
    },
    {
        type:"Restaurent",
        cards:[
            {
                name:"BurgerKing",
                image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/2/60a9d34a-4e5c-4559-8a5c-a249688ca10b_5ca53821-538c-490a-b218-ee41ac31f964.jpg",
                cusines:["Burger","American"],
                rating:4.2
        
        },
              {
                name:"KFC",
                image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/2/60a9d34a-4e5c-4559-8a5c-a249688ca10b_5ca53821-538c-490a-b218-ee41ac31f964.jpg",
                cusines:["Burger","American"],
                rating:4.2
        
        }
        ]
    }
]
*/







//Optiional Chaning













const AppLayout = () =>{
    return (
      <>
        <Header />
        <Body />
        <Footer />
        </>
    );
}
/*
//Inline styling in react 
const styleobj = {
    backgroundColor:"red",
};


const jsx = (
    <div style={styleobj}>
    <h1>JSX</h1>
    <h2>Seconf jsx</h2>
    </div>
)
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

