import React from 'react'

function Header() {
  return (
    <div>
      <section>
        <div className='rounded-md' style={{ backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(151,41,247,1) 0%, rgba(24,22,39,1) 90% )" }}>
          <div style={{ display: 'flex', justifyContent: "center", gap: 10 }} >
            <img width={60} src="./wired-gradient-2237-champagne-flutes-hover-pinch.gif" alt="" />
            <h1 className="neon-text-2 text-center md:text-4xl text-2xl py-2">CS Fresher’s Party</h1>
            <img width={60} src="./wired-gradient-2237-champagne-flutes-hover-pinch.gif" alt="" />
          </div>
          <p className="neon-text-2 text-center md:text-2xl text-xl py-2">2024-25</p>
        </div>
      </section>


{/*       
      <section class="about">
        <h2 class="neon-heading">About the Party</h2>
        <p class="neon-paragraph">Get ready to light up the night with fun, music, games, and lots of surprises!</p>
        <div class="activities">
          <div class="activity neon-icon">🎧 DJ Night</div>
          <div class="activity neon-icon">🎮 Games</div>
          <div class="activity neon-icon">📸 Photo Booth</div>
        </div>
      </section>
      <section class="registration">
        <h2 class="neon-heading">Register Now</h2>
        <form class="neon-form">
          <input type="text" placeholder="Name" class="neon-input" ></input>
          <input type="text" placeholder="Roll Number" class="neon-input" ></input>
          <input type="email" placeholder="Email" class="neon-input" ></input>
          <input type="tel" placeholder="Phone Number" class="neon-input" ></input>
          <button type="submit" class="neon-btn">Submit</button>
        </form>
      </section>
      <section class="gallery">
        <h2 class="neon-heading">Party Vibes</h2>
        <div class="neon-gallery">
          <img src="image1.jpg" alt="Party Image 1" class="neon-img"></img>
          <img src="image2.jpg" alt="Party Image 2" class="neon-img"></img>
          <img src="image3.jpg" alt="Party Image 3" class="neon-img"></img>
        </div>
      </section> */}

    </div>
  )
}

export default Header
