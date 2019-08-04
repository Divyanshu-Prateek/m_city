import React,{Component} from 'react';
import Featured from './featured';
import MatchesHome from './matches/index';
import MeetPlayers from './meetPlayers'
const Home=()=>{
    return (
        <div className='bck_blue'>
            <Featured/>
            <MatchesHome />
            <MeetPlayers />
        </div>
    );
};

export default Home;