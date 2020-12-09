import React from 'react'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const Destinations = () => {
    return (
        <>
          <section className="grid">
              <h3>We are currently in 46 countries!</h3>

              <div className="grid-items">
                  <div>
                      <img src={image2} alt=""/>
                      <h4>Fly to Aruba</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  </div>

                  <div>
                      <img src={image3} alt=""/>
                      <h4>Experience Mombasa</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  </div>

                  <div>
                      <img src={image4} alt=""/>
                      <h4>Savour Hawai</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  </div>
              </div>
          </section>
        </>
    )
}

export default Destinations
