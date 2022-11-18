import React from "react";
import Banner from "../Banner/Banner";
import Loadcars from "../Loadcars/Loadcars";
import Reviews from "../Reviews/Reviews";
import WhatAChieve from "../WhatAChieve/WhatAChieve";
import Limitedoffer from "../Limitedoffer/Limitedoffer";
import Whyus from "../Whyus/Whyus";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Limitedoffer></Limitedoffer>
      <Whyus></Whyus>
      <WhatAChieve></WhatAChieve>
      <Loadcars></Loadcars>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
