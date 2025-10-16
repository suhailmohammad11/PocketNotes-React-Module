import React from 'react';
import "./UserCardStyles.css"

const UserCard = ({groupName, color}) => {
    const getInitials=(name)=>{
    if(!name)return "";

    const words=name.trim().split(" ");
    const initials=words.map((w)=>w[0].toUpperCase()) 
    if(initials.length===1) return initials[0];
    const first=initials[0] //s
    const last=initials[initials.length-1] 
    return first+last;
  }
  return (
    <div className='user-details'>
        <div className='user-icon' style={{ backgroundColor: color }}>
            <p>{getInitials(groupName)}</p>
        </div>
        <p>{groupName}</p>
    </div>
  )
}

export default UserCard