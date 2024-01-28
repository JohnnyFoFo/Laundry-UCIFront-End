import React, { useState } from 'react'
import NavBar from'./Components/NavBar.js'
import Card from './Components/LaundryCard/LaundryCard.js'
import TowerSelector from './Components/TowerSelection/TowerSelection.js'
import './App.css'
import LaundryPage from './Components/LaundryPage/LaundryPage.js'
import DryerPage from './Components/DryerPage/DryerPage.js'
import Modal from './Components/Modal/Modal.js'

function App() {

  const[screen,setScreen] = useState('Home')
  const[modal,setModal] = useState(false)
  const[modalinfo,setModalinfo] = useState('')


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

  function home(){
    setScreen('Home')
    setModal(false)
  }
  function changeModal(washer,tower, machineNumber ){
    setModal(true)
    setModalinfo([washer,tower,machineNumber] )
  }
  function getMachine(){
    let returnString = ''
    if (modalinfo[1] == '0'){
      returnString += 'Playa '
    }
    else if(modalinfo[1] == '1'){
      returnString += 'Caballo '
    }
    else{
      returnString += 'Mariposa '
    }
    if (modalinfo[0] == true){
      returnString += 'Washing Machine'
    }
    else{
      returnString += 'Dryer'
    }
    returnString += ' # '
    returnString += modalinfo[2]
    return returnString
  }

  return (
    <div className='App'>
      <NavBar onclick={home}/>
      {
        screen == 'Home' && 
        <div className='TowerSelectors'>
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
        <div>

          {
            modal == true && <div>
              
              <Modal machine={getMachine()}/>
            </div>
          }
        
        <div className={modal == true? 'blurryLaundryPage':'LaundryPage'}>
          <h1 style={{textAlign:'center'}}>Caballo</h1>
          <div style={{display:'flex', justifyContent: 'space-between'}}>


              <div style={{flex: 1}}>
              <LaundryPage washers = {washers.slice(12,24)} dryers = {dryers.slice(12,24)} onclick ={changeModal} modal_state={modal}/>
              </div>


              <div style={{flex:1}}>
              <DryerPage washers = {washers.slice(12,24)} dryers = {dryers.slice(12,24)} onclick ={changeModal} modal_state={modal}/>
              </div>

          </div>

        </div>
        </div>
      }
      
      {
        screen == 'Mariposa' && 

        <div>
           {
            modal == true && <div>
              
              <Modal machine={getMachine()}/>
            </div>
          }

          <div className={modal == true? 'blurryLaundryPage':'LaundryPage'}>
            <h1 style={{textAlign:'center'}}>Mariposa</h1>
            <div style={{display:'flex'}}>


              <div style={{flex: 1}}>
              <LaundryPage washers = {washers.slice(24,36)} dryers = {dryers.slice(24,36)} onclick ={changeModal} modal_state={modal}/>
              </div>


              <div style={{flex:1}}>
              <DryerPage washers = {washers.slice(24,36)} dryers = {dryers.slice(24,36)} onclick ={changeModal} modal_state={modal}/>
              </div>


            </div>

          </div>

        </div>
      }
      {
        screen == 'Playa' && 
        <div>
           {
            modal == true && <div>
              
              <Modal machine={getMachine()}/>
            </div>
          }
          <div className={modal == true? 'blurryLaundryPage':'LaundryPage'}>
          <h1 style={{textAlign:'center'}}>Playa</h1>
          <div style={{display:'flex'}}>


              <div style={{flex: 1, marginLeft: '10%'}}>
              <LaundryPage washers = {washers.slice(0,12)} dryers = {dryers.slice(0,12)} onclick ={changeModal} modal_state={modal}/>
              </div>


              <div style={{flex:1, marginLeft: '50%'}}>
              <DryerPage washers = {washers.slice(0,12)} dryers = {dryers.slice(0,12)} onclick ={changeModal} modal_state={modal}/>
              </div>


            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default App
