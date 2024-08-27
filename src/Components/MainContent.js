import React from 'react';
// Importing images
import streamImage05 from '@/assets/images/stream-05.jpg';
import streamImage06 from '@/assets/images/stream-06.jpg';
import streamImage07 from '@/assets/images/stream-07.jpg';
import streamImage08 from '@/assets/images/stream-08.jpg';
import avatarImage01 from '@/assets/images/avatar-01.jpg';
import avatarImage02 from '@/assets/images/avatar-02.jpg';
import avatarImage03 from '@/assets/images/avatar-03.jpg';
import avatarImage04 from '@/assets/images/avatar-04.jpg';
import gameImage01 from '@/assets/images/game-01.jpg';
import gameImage02 from '@/assets/images/game-02.jpg';
import gameImage03 from '@/assets/images/game-03.jpg';
import Link from 'next/link';
// Live stream and gaming library data
const liveStreams = [
    { streamImg: streamImage05, avatarImg: avatarImage01, user: "g/Kengan Omeg", title: "Just Talking With Fans", game: "CS-GO", viewers: "1.2K" },
    { streamImg: streamImage06, avatarImg: avatarImage02, user: "LahutaMalc", title: "CS-GO 36 Hours Live Stream", game: "CS-GO", viewers: "1.2K" },
    { streamImg: streamImage07, avatarImg: avatarImage03, user: "Areluwa", title: "Maybe Nathej Allnight Chillin'", game: "CS-GO", viewers: "1.2K" },
    { streamImg: streamImage08, avatarImg: avatarImage04, user: "NewGangTeam", title: "Live Streaming Till Morning", game: "CS-GO", viewers: "1.2K" },
];

const games = [
    { gameImg: gameImage01, title: "Dota 2", genre: "Sandbox", dateAdded: "24/08/2036", views: "634", status: "Downloaded" },
    { gameImg: gameImage02, title: "Fortnite", genre: "Sandbox", dateAdded: "22/06/2036", views: "740", status: "Downloaded" },
    { gameImg: gameImage03, title: "CS-GO", genre: "Sandbox", dateAdded: "21/04/2036", views: "892", status: "Downloaded" },
];

const MainContent = ({children}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-content">
                       {children}

                        {/* Live Stream Start */}
                        <div className="live-stream">
                            <div className="col-lg-12">
                                <div className="heading-section">
                                    <h4><em>Most Popular</em> Live Stream</h4>
                                </div>
                            </div>
                            <div className="row">
                                {liveStreams.map((stream, index) => (
                                    <div className="col-lg-3 col-sm-6" key={index}>
                                        <div className="item">
                                            <div className="thumb">
                                                <img src={stream.streamImg.src} alt="" />
                                                <div className="hover-effect">
                                                    <div className="content">
                                                        <div className="live">
                                                            <Link href="#">Live</Link>
                                                        </div>
                                                        <ul>
                                                            <li><Link href="#"><i className="fa fa-eye"></i> {stream.viewers}</Link></li>
                                                            <li><Link href="#"><i className="fa fa-gamepad"></i> {stream.game}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="down-content">
                                                <div className="avatar">
                                                    <img src={stream.avatarImg.src} alt="" style={{ maxWidth: '46px', borderRadius: '50%', float: 'left' }} />
                                                </div>
                                                <span><Link href="/profile"><i className="fa fa-check"></i> {stream.user}</Link></span>
                                                <h4>{stream.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-lg-12">
                                    <div className="main-button">
                                        <Link href="streams">Load More Streams</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Live Stream End */}

                        {/* Gaming Library Start */}
                        <div className="gaming-library">
                            <div className="col-lg-12">
                                <div className="heading-section">
                                    <h4><em>Your Gaming</em> Library</h4>
                                </div>
                                {games.map((game, index) => (
                                    <div className="item" key={index}>
                                        <ul>
                                            <li><img src={game.gameImg.src} alt="" className="templatemo-item" /></li>
                                            <li>
                                                <h4>{game.title}</h4><span>{game.genre}</span>
                                            </li>
                                            <li>
                                                <h4>Date Added</h4><span>{game.dateAdded}</span>
                                            </li>
                                            <li>
                                                <h4>Views</h4><span>{game.views}</span>
                                            </li>
                                            <li>
                                                <h4>Currently</h4><span>{game.status}</span>
                                            </li>
                                            <li>
                                                <div className="main-border-button"><Link href="#">Join</Link></div>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                                <div className="col-lg-12">
                                    <div className="main-button">
                                        <Link href="profile">View Your Library</Link>
                                        <Link href="profile">Add a Group</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* Gaming Library End */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
