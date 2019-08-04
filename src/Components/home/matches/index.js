import React  from 'react';
import {Tag} from '../../ui/misc';
import Blocks from './blocks';
const MatchesHome= ()=>{
    return (
        <div className='home_matches_wrapper' >
            <div className='container'>
                <Tag
                    bck='#0e1731'
                    color='#ffffff'
                    size='50px'
                >
                Matches</Tag>
                <Blocks/>


                <Tag
                    bck='#fff'
                    color='#0e1731'
                    size='22px'
                    link='true'
                    linkTo='/the_team'
                >
                    See More Matches
                </Tag>
            </div>
        </div>
    );
}

export default MatchesHome;