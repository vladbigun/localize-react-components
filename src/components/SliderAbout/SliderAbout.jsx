import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team1 from '../../assets/images/about/team/team-1.jpg';
import team1_2x from '../../assets/images/about/team/team-1@2x.jpg';
import team2 from '../../assets/images/about/team/team-2.jpg';
import team2_2x from '../../assets/images/about/team/team-2@2x.jpg';
import team3 from '../../assets/images/about/team/team-3.jpg';
import team3_2x from '../../assets/images/about/team/team-3@2x.jpg';
import team4 from '../../assets/images/about/team/team-4.jpg';
import team4_2x from '../../assets/images/about/team/team-4@2x.jpg';
import team5 from '../../assets/images/about/team/team-5.jpg';
import team5_2x from '../../assets/images/about/team/team-5@2x.jpg';
import team6 from '../../assets/images/about/team/team-6.jpg';
import team6_2x from '../../assets/images/about/team/team-6@2x.jpg';
import team7 from '../../assets/images/about/team/team-7.jpg';
import team7_2x from '../../assets/images/about/team/team-7@2x.jpg';
import team8 from '../../assets/images/about/team/team-8.jpg';
import team8_2x from '../../assets/images/about/team/team-8@2x.jpg';

export default class SliderAbout extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1128,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: true
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team1}
                                        srcSet={team1 +  ` 1x,` + team1_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text" style={{border: "2px solid #FFD6C2"}}>
                                <h3>Asaf Rubin</h3>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team2}
                                        srcSet={team2 +  ` 1x,` + team2_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text">
                                <h3>Omer Granot</h3>
                                <p>President & COO</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team3}
                                        srcSet={team3 +  ` 1x,` + team3_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text">
                                <h3>Ilan Fraiman</h3>
                                <p>CTO</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team1}
                                        srcSet={team4 +  ` 1x,` + team4_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text">
                                <h3>Jeff Elias</h3>
                                <p>Sales Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team5}
                                        srcSet={team5 +  ` 1x,` + team5_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text">
                                <h3>Patrick Englert</h3>
                                <p>Account Executive</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team6}
                                        srcSet={team6 +  ` 1x,` + team6_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text">
                                <h3>Dani Cohen</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team7}
                                        srcSet={team7 +  ` 1x,` + team7_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text text-full">
                                <h3>Rinah Arzán</h3>
                                <p>Partner Relationship<br/>Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <picture>
                                    <img
                                        className="img"
                                        src={team8}
                                        srcSet={team8 +  ` 1x,` + team8_2x + ` 2x`}
                                    />
                                </picture>
                            </div>
                            <div className="text text-full">
                                <h3>Hadar Maissi</h3>
                                <p>Director of <br/> Human Resources</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}