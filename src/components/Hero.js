import { Heading } from "@chakra-ui/react";
import React from "react";
import LazyHero from "react-lazy-hero";

function Hero() {
  return (
    <div>
      <LazyHero
        imageSrc="https://t3.ftcdn.net/jpg/02/54/20/88/360_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg"
        minHeight="75vh"
      >
        <Heading size="4xl" color="#000000">
          FoodAdd
        </Heading>
      </LazyHero>

      {/* ... */}
    </div>
  );
}

export default Hero;
