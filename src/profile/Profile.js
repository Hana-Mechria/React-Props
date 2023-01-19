import React from 'react';
import  PropTypes from 'prop-types';
const Profile = ({fullname,bio,profession,image, handleName}) => {
 

  
  return (
        <div>
  
            <h1 style={{fontSize:'40px', fontFamily:'sans-serif', color:'red'}}>{fullname}</h1> 
            
            <h2 style={{color:'green'}}>{profession}</h2>
            <h2 style={{color:'blue'}} >{bio}</h2>
           <img style={ { width: '200px',
    height: '200px',
    borderRadius: '50%'}} src={image} alt='msg'  /><br></br>
           <button style={{    width: '100px', marginTop:'20px',
    height: '30px',
    borderRadius: '10%', color:'red'}} onClick={()=> handleName(fullname)}>click</button>

        </div>
    );
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
}




export default Profile
