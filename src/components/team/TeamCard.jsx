import React from "react";
import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val, index) => ( // Added index as the second parameter
        <div key={index} className='items shadow'> {/* Added key prop here */}
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TeamCard;
