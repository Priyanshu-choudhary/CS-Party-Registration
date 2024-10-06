import React from 'react'

function HeroPage() {
    return (
        <div style={{width:"100%"}}>
            <section className='m-2'>
                <div class="card">
                    <p style={{ justifyContent: "space-around" }} className=" flex gap-10">
                       <p className='neon-text-4 md:text-4xl'> Let’s Glow Together ;)</p>
                        <div class="pyramid-loader pt-20">
                            <div class="wrapper">
                                <span class="side side1"></span>
                                <span class="side side2"></span>
                                <span class="side side3"></span>
                                <span class="side side4"></span>
                                <span class="shadow"></span>
                            </div>
                        </div>
                    </p>
                    <p className="neon-text ">Date: <span className='neon-text-3 ml-5'>8 OCT 2024</span></p>
                    <p className="neon-text ">Time: <span className='neon-text-3 ml-5'>11 A.M</span></p>
                    <p className="neon-text">Venue: <span className='neon-text-3 ml-5'>Brihaspati bhawan, CCSU</span></p>

                   </div>
            </section>
        </div>
    )
}

export default HeroPage
