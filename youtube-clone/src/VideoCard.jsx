import React from 'react'
import "./VideoCard.css"
import { Avatar } from '@mui/material';

function VideoCard({image, channel, channelImage, title, views, timestamp, channelprofile }) {
  return (
    <div className='videoCard'>
        <img className='videoCard__thumbnail' src={image} alt="Video" />
        <div className="video__info">
        <Avatar className='videoCard__avatar' alt={channelprofile} src={channelImage} />
        <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views} . {timestamp}
            </p>
        </div>

        </div>
    </div>
  )
}

export default VideoCard