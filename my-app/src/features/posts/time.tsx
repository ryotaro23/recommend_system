import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'


export const TimeAgo = ({ timestamp}:{timestamp: string}) => {
  let timeAgo = ''
  if (timestamp) {
    const date :Date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date,{ locale: ja })
    timeAgo = `${timePeriod} 前`
  }

  return (
    <span title={timestamp}>
     <i>{timeAgo}</i>
    </span>
  )
}