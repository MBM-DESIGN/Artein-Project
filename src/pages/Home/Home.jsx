import React, { useState, useEffect } from 'react';
import { Layout } from "../../components/Layout/Layout"
import "./Home.css"
import Carousel from "../../components/Carousel/Carousel"
import { Container } from 'react-bootstrap';
const HOME = () => {

  return (
    <Layout>
      <h2> We paint for the dawn🖌️🎨🌅</h2>
      <h4>This is how ArteIn Project began</h4>
      <h3>My name is MBM. I love simple things: the sea, music and books. My children are my greatest and purest love.I love colors and painting everything. I think colors turn our lives on and off. I began painting out of a desire to perpetuate the transience of human existence. I pay tribute to my grandparents. Especially to my grandmother Inés, who showed me the treasures we painted. She taught me that when we color them, we give them wings and put together the puzzle that we have broken into. Painting is a way of reviving, of treasuring the looks that reached the essence of things. Things that are more than things when we are painting them.</h3>
      <div className="cont-img-paintings">   
        {HOME && <h3><img src="/public//images//MontCervin.jpg" alt="" /></h3>}
      </div>
      <h2> We paint for the dawn🖌️🎨🌅</h2>
      <div className="cont-img-paintings">   
        {HOME && <h3><img src="/public/images//Matterhorn.jpg" alt="" /></h3>}
      
      </div>
      <div className="cont-img-paintings m-6 p-6">
      <h2>Artworks from Metropolitan Art Museum  of New York</h2>
      <Carousel></Carousel>
    </div>
    </Layout>
)
}

export { HOME }
