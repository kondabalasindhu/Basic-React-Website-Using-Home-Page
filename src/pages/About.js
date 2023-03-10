import React, { Component } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
function About() {
  return (
    <div>
      <Banner
        title="About Me!"
        subtitle="This page is all about me and my work!"
        sindhu="My Name is Sindhu"
      />
      <div className="container">
        <h2>About</h2>
        <p>
          One day, Molly the milkmaid had filled her pails with milk. Her job
          was to milk the cows, and then bring the milk to the market to sell.
          Molly loved to think about what to spend her money on. As she filled
          the pails with milk and went to market, she again thought of all the
          things she wanted to buy. As she walked along the road, she thought of
          buying a cake and a basket full of fresh strawberries. A little
          further down the road, she spotted a chicken. She thought, “With the
          money I get from today, I’m going to buy a chicken of my own. That
          chicken will lay eggs, then I will be able to sell milk and eggs and
          get more money!” She continued, “With more money, I will be able to
          buy a fancy dress and make all the other milkmaids jealous.” Out of
          excitement, Molly started skipping, forgetting about the milk in her
          pails. Soon, the milk started spilling over the edges, covering Molly.
          Drenched, Molly said to herself, “Oh no! I will never have enough
          money to buy a chicken now.” She went home with her empty pails. “Oh,
          my goodness! What happened to you?” Molly’s mother asked. “I was too
          busy dreaming about all the things I wanted to buy that I forgot about
          the pails,” she answered.
        </p>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem. Donec pretium lorem ipsum, at
          fermentum nibh consequat facilisis. Sed maximus massa est, vel porta
          diam placerat id. Vivamus imperdiet lorem eget dolor bibendum, eget
          gravida tellus interdum. Sed lectus odio, condimentum eu porttitor
          vel, euismod sit amet urna. Nam quis dui a nibh rhoncus aliquam vitae
          in metus. Nam sit amet semper turpis. Suspendisse eu malesuada tortor,
          vel lacinia nisl. Phasellus ultrices vehicula magna, sed tempor neque
          dapibus quis. Phasellus urna justo, sollicitudin ac odio eget,
          convallis varius nulla. Vivamus in lacinia lorem, at eleifend nulla.
          Nulla nec luctus purus. Integer id purus mauris. Phasellus finibus
          ultricies erat a tempus. Nulla luctus sem nec justo venenatis, eu
          faucibus purus congue.
        </p>
        <p>
          This story is about three brothers caught up in the horrific disaster
          that happened at Chernobyl on April 26, 1986. The startling
          consequences of the disaster make for a dramatic backdrop, as the
          brothers deal with the aftermath of the nuclear meltdown. “The Zero
          Meter Diving Team” is available for free, from BOMB magazine.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
