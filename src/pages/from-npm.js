import React from 'react'
import { useState } from '@jeetiss/module-that-breaks-hmr';

export default () => {
  const state = useState(0)
  
  return (
    <div>Hello world</div>
  )
}
