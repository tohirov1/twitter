

import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Sidebar1 from './Sidebar1/Sidebar1'
import Sidebar2 from './Sidebar2/Sidebar2'

const Main = () => {
  return (       
    <main className="flex justify-center relative">
    <Sidebar/>
   <Sidebar1/>
    <Sidebar2/>
</main>

  )
}

export default Main