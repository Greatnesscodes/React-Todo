import React from 'react'
import ReactTimeAgo from 'react-time-ago'


const LastSeen = () => {
  return (
    <div>POSTED: <ReactTimeAgo date={date} locale='en-US' timeStyle="twitter"/> </div>
  )
}

export default LastSeen