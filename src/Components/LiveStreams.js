import React from 'react'
import featured01 from '@/assets/images/featured-01.jpg';
import featured02 from '@/assets/images/featured-02.jpg';
import featured03 from '@/assets/images/featured-03.jpg';
import avatar01 from '@/assets/images/avatar-01.jpg';
import avatar02 from '@/assets/images/avatar-02.jpg';
import avatar03 from '@/assets/images/avatar-03.jpg';
import avatar04 from '@/assets/images/avatar-04.jpg';
import Link from 'next/link';

const LiveStreams = () => {
    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="featured-games header-text">
                    <div className="heading-section">
                        <h4><em>Live</em> Streams</h4>
                    </div>
                    <div className="owl-features owl-carousel">
                        <div className="item">
                            <div className="thumb">
                                <img src={featured01.src} alt="" />
                                <div className="hover-effect">
                                    <h6>2.4K Streaming</h6>
                                </div>
                            </div>
                            <h4>CS-GO<br /><span>249K Downloads</span></h4>
                            <ul>
                                <li><i className="fa fa-star"></i> 4.8</li>
                                <li><i className="fa fa-download"></i> 2.3M</li>
                            </ul>
                        </div>
                        {/* Repeated items with appropriate image imports */}
                        <div className="item">
                            <div className="thumb">
                                <img src={featured02.src} alt="" />
                                <div className="hover-effect">
                                    <h6>2.4K Streaming</h6>
                                </div>
                            </div>
                            <h4>Gamezer<br /><span>249K Downloads</span></h4>
                            <ul>
                                <li><i className="fa fa-star"></i> 4.8</li>
                                <li><i className="fa fa-download"></i> 2.3M</li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="thumb">
                                <img src={featured03.src} alt="" />
                                <div className="hover-effect">
                                    <h6>2.4K Streaming</h6>
                                </div>
                            </div>
                            <h4>Island Rusty<br /><span>249K Downloads</span></h4>
                            <ul>
                                <li><i className="fa fa-star"></i> 4.8</li>
                                <li><i className="fa fa-download"></i> 2.3M</li>
                            </ul>
                        </div>
                        {/* Ensure other items are updated similarly */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="top-streamers">
                    <div className="heading-section">
                        <h4><em>Top</em> Streamers</h4>
                    </div>
                    <ul>
                        <li>
                            <span>01</span>
                            <img src={avatar01.src} alt="" style={{ maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                            <h6><i className="fa fa-check"></i> LahutaM</h6>
                            <div className="main-button">
                                <a href="#">Follow</a>
                            </div>
                        </li>
                        {/* Repeated items with appropriate image imports */}
                        <li>
                            <span>02</span>
                            <img src={avatar02.src} alt="" style={{ maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                            <h6><i className="fa fa-check"></i> Kengan</h6>
                            <div className="main-button">
                                <a href="#">Follow</a>
                            </div>
                        </li>
                        <li>
                            <span>03</span>
                            <img src={avatar03.src} alt="" style={{ maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                            <h6><i className="fa fa-check"></i> Areluwa</h6>
                            <div className="main-button">
                                <a href="#">Follow</a>
                            </div>
                        </li>
                        {/* Ensure other items are updated similarly */}
                    </ul>
                </div>
            </div>
            
        </div>)
}

export default LiveStreams