import React, { useEffect } from 'react'

import { appendComments } from '../helpers'

export const Comments = () => {
  useEffect(() => {
    appendComments()
  }, [])

  return <div id="append-comments-here" />
}