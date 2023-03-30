import React from 'react';

import './AboutUs.css';

//import SliderAbout from "../../components/SliderAbout/SliderAbout";

function App(props) {
    // eslint-disable-next-line react/prop-types
    const {assets} = props.data || '';
  return (
        <div id="custom-container" className="about">
            <header className="header">
                <div className="container">
                    <div className="wrapper">
                        <div className="img">
                            <img src={assets + '/images/about/header-img.png'}/>
                        </div>
                        <div className="text">
                            <div>
                                <h1>About us</h1>
                                <div className="img-mobile">
                                    <img src={assets + '/images/about/header-img.png'} alt=""/>
                                </div>
                                <p>Welcome to the future of real estate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="making">
                <div className="container">
                    <div className="text">
                        <div className="top">
                            <h2>Making homebuying <br/> better for everyone</h2>
                            <p>Localize is revolutionizing the industry by harnessing the power of artificial and human
                                intelligence. Our concierge texting service Hunter by Localize™ is tech-powered and
                                supported by expert homebuying advisors. Hunter qualifies leads, cultivates home
                                searches, and connects buyers to agents once they’re ready to see properties in
                                person.</p>
                        </div>
                                <div className="for">
                                    <div className="wrapper">
                                        <div className="block" id="for-buyers">
                                            <h3>For buyers</h3>
                                            <p>We democratize data and streamline the house-hunting journey to find a place to
                                                love long after moving day.</p>
                                            <a className="about-button" href="/">start a home search</a>
                                        </div>
                                    </div>
                                    <div className="wrapper-end">
                                        <div className="block" id="for-agents">
                                            <h3>For agents</h3>
                                            <p>We’re an all-in-one cultivation solution that profiles, qualifies, nurtures, and
                                                smart-matches leads thanks to high-tech and high-touch engagement.</p>
                                            <a className="about-button" href="/agents">partner with us</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className="bg">
                     <div className="center">
                          <div className="bottom"></div>
                     </div>
                </div>
                <div className="circle" id="circle-bg">
                    <img src={assets + '/images/about/circle.png'} alt=""/>
                </div>

            </section>
            <section className="photo">
                <div className="container">
                    <div className="top">
                        <div className="wrapper">
                            <div className="item">
                                <div className="img-wrap">
                                    <img src={assets + '/images/about/photo/block-2012.svg'} alt=""/>
                                    <div className="animate-arrow-wrapper">
                                        <div className="arrow">
                                            <img src={assets + '/images/about/arrows/arrow-anim.svg'} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text">2012</h1>
                            </div>
                            <picture>
                                <img
                                    className="img-1"
                                    src={assets + '/images/about/photo/photo-1.jpg'}
                                    srcSet={assets + '/images/about/photo/photo-1.jpg' + ` 1x,` + assets + '/images/about/photo/photo-1@2x.jpg' + ` 2x`}
                                />
                            </picture>
                            <div className="prompt">Founded in<br/>Tel Aviv</div>
                            <picture>
                                <img
                                    className="img-2"
                                    src={assets + '/images/about/photo/photo-2.jpg'}
                                    srcSet={assets + '/images/about/photo/photo-2.jpg' + ` 1x,` + assets + '/images/about/photo/photo-2@2x.jpg' + ` 2x`}
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="center">
                        <div className="item">
                            <div className="img-wrap">
                                <div className="animate-arrow-wrapper">
                                    <div className="arrow">
                                        <img src={assets + '/images/about/arrows/arrow-anim.svg'} alt=""/>
                                    </div>
                                </div>
                                <img src={assets + '/images/about/photo/block-2018.svg'} alt=""/>
                            </div>
                            <h1 className="text">2018</h1>
                        </div>
                        <div className="wrapper">
                            <picture>
                                <img
                                    className="img-3"
                                    src={assets + '/images/about/photo/photo-3.jpg'}
                                    srcSet={assets + '/images/about/photo/photo-3.jpg' + ` 1x,` + assets + '/images/about/photo/photo-3@2x.jpg' + ` 2x`}
                                />
                            </picture>
                            <div className="prompt">Expanded<br/>to NYC</div>
                            <picture>
                                <img
                                    className="img-4"
                                    src={assets + '/images/about/photo/photo-4.jpg'}
                                    srcSet={assets + '/images/about/photo/photo-4.jpg' + ` 1x,` + assets + '/images/about/photo/photo-4@2x.jpg' + ` 2x`}
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="item">
                            <div className="animate-arrow-wrapper">
                                <div className="arrow">
                                    <img src={assets + '/images/about/arrows/arrow-anim.svg'} alt=""/>
                                </div>
                            </div>
                            <img className="hunter" src={assets + '/images/about/photo/block-2020.svg'} alt=""/>
                            <h1 className="text">2020</h1>
                        </div>
                        <div className="wrapper">
                            <div className="prompt">Introduced Hunter<br/>by Localize™</div>
                            <picture>
                                <img
                                    className="img-5"
                                    src={assets + '/images/about/photo/photo-5.png'}
                                    srcSet={assets + '/images/about/photo/photo-5.png' + ` 1x,` + assets + '/images/about/photo/photo-5@2x.png' + ` 2x`}
                                />
                            </picture>
                        </div>
                    </div>
                    <a className="about-button" href="#">curious? See how Hunter works</a>
                </div>
            </section>
            <section className="photo-mobile">
                <div id="photo-mobile-slider">
                    <div className="slide-wrapper">
                        <div className="slide1">
                            <div style={{paddingLeft: '120px'}}>
                                <img src={assets + '/images/about/photo/block-2012.svg'} alt=""/>
                                <div>2012</div>
                            </div>
                            <div className="animate-arrow-wrapper">
                                <div className="arrow">
                                    <img src={assets + '/images/about/arrows/arrow-anim.svg'} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="slide2">
                            <picture>
                                <img
                                    className="img-3"
                                    src={assets + '/images/about/photo/photo-1-mobile.jpg'}
                                    srcSet={assets + '/images/about/photo/photo-1-mobile.jpg' + ` 1x,` + assets + '/images/about/photo/photo-1-mobile@2x.jpg' + ` 2x`}
                                />
                            </picture>
                            <div className="promt">Founded in<br/>Tel Aviv</div>
                        </div>
                        <div className="slide3">
                            <picture>
                                <img
                                    className="img-3"
                                    src={assets + '/images/about/photo/photo-2-mobile.jpg'}
                                    srcSet={assets + '/images/about/photo/photo-2-mobile.jpg' + ` 1x,` + assets + '/images/about/photo/photo-2-mobile@2x.jpg' + ` 2x`}
                                />
                            </picture>
                        </div>
                        <div className="slide4">
                            <div className="animate-arrow-wrapper">
                                <div className="arrow">
                                    <img src={assets + '/images/about/arrows/arrow-anim.svg'} alt=""/>
                                </div>
                            </div>
                            <div style={{paddingRight: '120px'}}>
                                <img src={assets + '/images/about/photo/block-2018.svg'} alt=""/>
                                <div>2018</div>
                            </div>
                        </div>
                        <div className="slide5">
                            <picture>
                                <img
                                    className="img-3"
                                    src={assets + '/images/about/photo/photo-3-mobile.jpg'}
                                    srcSet={assets + '/images/about/photo/photo-3-mobile.jpg' + ` 1x,` + assets + '/images/about/photo/photo-3-mobile@2x.jpg' + ` 2x`}
                                />
                            </picture>
                            <div className="promt">Expanded<br/>to NYC</div>
                        </div>
                        <div className="slide6">
                            <div className="animate-arrow-wrapper">
                                <div className="arrow">
                                    <img src={assets + '/images/about/arrows/arrow-anim.svg'} alt=""/>
                                </div>
                            </div>
                            <div style={{paddingRight: '120px'}}>
                                <img src={assets + '/images/about/photo/block-2020.svg'} alt=""/>
                                <div>2020</div>
                            </div>
                        </div>
                        <div className="slide7">
                            <h1><img
                                className="img-5"
                                src={assets+'/images/about/photo/photo-5.png'}
                                srcSet={assets+'/images/about/photo/photo-5.png' + ` 1x,` + assets+'/images/about/photo/photo-5@2x.png' + ` 2x`}
                            /></h1>
                        </div>
                        <div className="slide8">
                            <div>
                                <a className="about-button" href="#">curious? See how Hunter works</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-stats">
                <div className="container">
                    <h3>OUR STATS</h3>
                    <div className="wrapper">
                        <div className="item">
                            <div className="img">
                                <img src={assets+'/images/about/item-1.svg'} alt=""/>
                            </div>
                            <h4>$70M</h4>
                            <p>raised</p>
                        </div>

                        <div className="item">
                            <div className="img">
                                <img src={assets+'/images/about/item-2.svg'} alt=""/>
                            </div>
                            <h4>50,000+</h4>
                            <p>buyers engaged</p>
                            <p>with Hunter</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={assets+'/images/about/item-3.svg'} alt=""/>
                            </div>
                            <h4>380+</h4>
                            <p>buyers matched</p>
                            <p>with homes</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={assets+'/images/about/item-4.svg'} alt=""/>
                            </div>
                            <h4>20+</h4>
                            <p>homes sold</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="text-wrapper">
                    <h2>Leadership Team</h2>
                    <p>Serial entrepreneurs experienced in building products and services on a global scale helm the
                        Localize team. We’ve led algorithm and software development at Taboola (the world’s largest
                        content discovery engine)<br/> and Trusteer (acquired by IBM for $700M), and strategy at Via
                            (transformative transit tech).</p>
                </div>
                {
                    /*
                    <SliderAbout/>
                    */
                }

            </section>
            <section className="sign">
                <h2>Sign up in 30 seconds</h2>
                <div className="btn-block">
                    <a className="about-button" href="/">homebuyers</a>
                    <a className="about-button" href="/agents">agents</a>
                </div>
            </section>
            <section className="join">
                <h2>Join us to revolutionize real estate</h2>
                <a className="about-button" href="/careers">apply for our open positions</a>
            </section>
        </div>
  );
}

export default App;
