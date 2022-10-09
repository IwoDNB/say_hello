import { Suspense, useState } from 'react'
import { React } from 'react'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import {Canvas} from '@react-three/fiber'
import InfoMsg from './components/InfoMsg'



import {Earth} from './components/Earth/Earth'


function App() {

  return (
    
      <div className='canvas-container'>
        <InfoMsg />
        <Header/>
        <Content/>
        <Canvas>
          <Suspense fallback={null}>
           <Earth/>

          </Suspense>
        </Canvas>

      </div>
    

   
   
  )
}

export default App
