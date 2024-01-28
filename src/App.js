import React, { useState } from 'react'
import NavBar from'./Components/NavBar.js'
import Card from './Components/LaundryCard/LaundryCard.js'
import TowerSelector from './Components/TowerSelection/TowerSelection.js'
import './App.css'
import LaundryPage from './Components/LaundryPage/LaundryPage.js'
import DryerPage from './Components/DryerPage/DryerPage.js'

function App() {

  const[screen,setScreen] = useState('Home')

  let washers = []
  for (let index1 = 0; index1 < 3; index1++) {
    for (let index2 = 1; index2 < 13; index2++) {
      const idcode = `${index1}${index2}`
      washers.push({
        id: idcode,
        endTime: null,
        broken: false
      })
  }}
  let dryers = []
  for (let index1 = 0; index1 < 3; index1++) {
    for (let index2 = 1; index2 < 13; index2++) {
      const idcode = `${index1}${index2}`
      dryers.push({
        id: idcode,
        endTime: null,
        broken: false
      })
  }}



  return (
    <div className='App'>
      <NavBar onclick={setScreen}/>
      {
        screen == 'Home' && 
        <div>
          <div className='Caballo'>
            <TowerSelector towerName='Caballo' backgroundColor='green' onclick={setScreen}/>
          </div>
          <div className='Mariposa'>
            <TowerSelector towerName='Mariposa' backgroundColor='orange'onclick={setScreen}/>
          </div>
          <div className='Playa'>
            <TowerSelector towerName='Playa' backgroundColor='blue'onclick={setScreen}/>
          </div>
        </div>
      }

      {
        screen == 'Caballo' && 
        <div className='LaundryPage'>
          <h1>Caballo</h1>
          <div style={{display:'flex'}}>
              <div style={{flex: 1}}>
              <LaundryPage washers = {washers.slice(12,24)} dryers = {dryers.slice(12,24)}/>
              </div>
              <div style={{flex:1}}>
              <DryerPage washers = {washers.slice(12,24)} dryers = {dryers.slice(12,24)}/>
              </div>
            </div>
        </div>
      }
      
      {
        screen == 'Mariposa' && 
        <div>
          <div className='LaundryPage'>
            <h1>Mariposa</h1>
            <div style={{display:'flex'}}>
              <div style={{flex: 1}}>
              <LaundryPage washers = {washers.slice(24,36)} dryers = {dryers.slice(24,36)}/>
              </div>
              <div style={{flex:1}}>
              <DryerPage washers = {washers.slice(24,36)} dryers = {dryers.slice(24,36)}/>
              </div>
            </div>
        </div>
        </div>
      }
      {
        screen == 'Playa' && 
        <div>
          <div className='LaundryPage'>
          <h1>Playa</h1>
          <div style={{display:'flex'}}>
              <div style={{flex: 1}}>
              <LaundryPage washers = {washers.slice(0,12)} dryers = {dryers.slice(0,12)}/>
              </div>
              <div style={{flex:1}}>
              <DryerPage washers = {washers.slice(0,12)} dryers = {dryers.slice(0,12)}/>
              </div>
            </div>
        </div>
        </div>
      }

    </div>
  )
}

export default App
