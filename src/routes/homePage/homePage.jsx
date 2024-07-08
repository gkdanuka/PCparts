import React from 'react'
import './homePage.scss'
import bg from '../../assets/bg.png'
import SearchBar from '../../components/searchBar/searchBar'

function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>
                Find Real Etate & Get Your Dream Place.
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                </p>
                <SearchBar/>
                <div className="boxes">
                  <div className="box">
                    <h1>16++</h1>
                    <h2>Years of Experience</h2>
                  </div>
                  <div className="box">
                    <h1>200</h1>
                    <h2>Awards gained</h2>
                  </div>
                  <div className="box">
                    <h1>2000+</h1>
                    <h2>Property ready</h2>
                  </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src={bg} />
        </div>
    </div>
  )
}

export default HomePage