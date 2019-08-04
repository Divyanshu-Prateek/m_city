import React,{Component} from 'react';
import Featured from './featured';
import MatchesHome from './matches/index';
const Home=()=>{
    return (
        <div className='bck_blue'>
            <Featured/>
            <MatchesHome />
        </div>
    );
};

export default Home;