import './App.css';
import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Main from './components/Main';
import { Tooltip } from 'primereact/tooltip';
// On button click open pop up
// 1: Enter file name
// 2: Ok code comes left side
// 3: close button


function App() {
  const [modal, setModal] = useState(false);
  const [filename, setFileName] = useState('');
  const [editor, setEditor] = useState(false);
  const [showIn, setshowIn] = useState(false);           // Hide and seek ....................
  const [showBottom, setshowBottom] = useState(false);           // Hide and seek ....................
  const [showBool, setshowBool] = useState(false);           // Hide and seek ....................
  const newLocal = <a href='http://localhost:3001/' className='cv-btn'> Let's Start</a>;
  const [code, setCode] = useState(
    `// SPDX-License-Identifier: MIT \n
    pragma solidity >= 0.4.0 < 0.7.0;\n`
  );

  const toggleModal = () => {
    setModal(!modal);
  };
   
  

  const saveFileName = () => {
    if (filename !== '') {
      setEditor(true)
    }
  }

  const closeModal = () => {
    toggleModal(false)
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  function onChange(newValue) {
    console.log("change", newValue);
  }


  const addTemplate = () => {
    
    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    setCode( editedText + `\n
              contract Contract_Name { \n
              }`)
                             

  }

  const addVariable = () => {

                                             
    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText + 
        `\n uint storedData; \n  `);
         setshowIn(true); // Hide and seek.......................
         setshowBottom(true);
        
  }
  const addBool= () => {

                                             
  
        setshowBool(true);// Hide and seek.......................

  }
  const addBoolfalseVariable = () => {

    // this will get all code that is already printed on screen
    const prevState = code;
    const editedText = prevState.slice(0, -1)// remove last curly brace
    // this will add the new line of code with the previous lines
    setEditor(true)
    setCode( editedText +  
        `bool False; \n `);//remember to add '}' which we removed before
                         
  }
  
  const addBoolTrueVariable = () => {

 
    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText +  `   bool True; \n `);
    setshowBottom(true);
               
  }
  

  
  const addStringVariable = () => {
    
    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText +  `   string Data; \n `);
    setshowBottom(true);
        

  }

  const addSetFunction = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    setCode(editedText + `
              uint storedData; \n
              function set(uint x) public {\n
              storedData = x;\n
              }
            }\n`);
            setshowIn(true); // Hide and seek.

  }
  const addConstructorFunction = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    setCode(editedText + `
             constructor() public { \n
             storedData = x; 
            }\n`);
 

  }


  const addTemplate1 = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    setCode(editedText + `
              
              contract Shipping { \n
              // Our predefined values for shipping listed as enums \n
              enum ShippingStatus { Pending, Shipped, Delivered }  \n
              // Save enum ShippingStatus in variable status \n
              ShippingStatus private status; \n
              // Event to launch when package has arrived\n
              event LogNewAlert(string description);\n
              // This initializes our contract state (sets enum to Pending once the program starts) \n
              constructor() public {\n
              status = ShippingStatus.Pending;\n
              }\n
              //Function to change to Shipped\n
              function Shipped() public {\n
              status = ShippingStatus.Shipped;\n
              emit LogNewAlert("Your package has been shipped");\n
               }\n
               // Function to change to Delivered\n
               function Delivered() public {\n
                status = ShippingStatus.Delivered; \n
                emit LogNewAlert("Your package has arrived"); \n
              }\n
              // Function to get the status of the shipping\n
              function getStatus(ShippingStatus _status) internal pure returns (string memory) {\n
              // Check the current status and return the correct name\n
              if (ShippingStatus.Pending == _status) return "Pending";\n
              if (ShippingStatus.Shipped == _status) return "Shipped";\n
              if (ShippingStatus.Delivered == _status) return "Delivered";\n
              // Get status of your shipped item \n
              function Status() public view returns (string memory) {\n  
                ShippingStatus _status = status; \n
                return getStatus(_status);\n
             
            }\n

          }\n`);
 

  }



  const addGetFunction = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    setCode( editedText + ` function get() public view returns
              (uint){\n
              return storedData;\n
              }\n
            }\n`)
            setshowBottom(true);

  }

  const addconditionFunction = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    setCode( editedText + 
             ` if() \n
                   {    }\n
              else
                  {    }\n
            }\n`)
            setshowBottom(true);

  }


  
  
  return (
    <>
   
    
      {modal ? <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <div style={{ marginLeft: '90%' }}>
            <Button className='p-button-danger ' icon='pi pi-times' onClick={closeModal} />
          </div>
          <h2>Enter File Name</h2>
          {/* <input type="text" placeholder='Enter File Name'></input> */}
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-file"></i>
            </span>
            <InputText placeholder="Enter File Name" onChange={(e) => setFileName(e.target.value)} />
          </div>
          <br></br>
          <div style={{ marginLeft: '100px' }}>
            <Button label='Save' onClick={(e) => {
              saveFileName()
              toggleModal(false)
            }} />
            
          </div>
        </div>
      </div> : <><div className='page'>
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            {/* Link around dots-wrapper added after tutorial video */}
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot" />
              <div id="dot-2" className="browser-dot" />
              <div id="dot-3" className="browser-dot" />
            </div>
          </div>
        </div>
      </div>
   
      <h2 >Create Smart Contract</h2>

      <div className='multi-button'>
      
  <Button className="button"  label="Create Project"  icon="pi pi-plus" style={{marginRight: '1000px'}} onClick={toggleModal}/>
  <a href="https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.jsgle.com" target="_blank" rel="noreferrer">
  <Button className="button"  tooltip="Remix IDE, is a no-setup tool with a GUI for developing smart contracts." tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} label="Remix"  icon="pi pi-plus" />
  </a>

 
</div>


        <div className="split left" >
        
          
          
          <div className="centered">

          </div>
          <div class="container" >
          <div className='multi-button2'>
         
         
        
             {filename ? <Button  tooltip="Contract starts with Header" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}  className='p-button-sm'   label="Header"  iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "50px" }}  onClick={addTemplate} />
            : ''}<ReactTooltip />
            
             {filename ? <Button  tooltip="shipping Contract - It tracks your skipment and show your updated status. " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="Template 2" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "400px"}}  onClick={addTemplate1} />
            : ''}<ReactTooltip /><br></br>
          
            {filename ? <Button  tooltip=" Adds a Basic Function" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="Function"  icon="pi pi-plus" iconPos="right"   style={{backgroundColor: '#2c3c60' , marginLeft: "50px"}}  onClick={addSetFunction} />
            : ''}<ReactTooltip /><br></br>

           
            {showIn ? <Button  tooltip=" Adds a String Data Type Variable " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}    className='p-button-sm'  label="String Variables"  iconPos="right"  style={{backgroundColor: '#2c3c60' , marginLeft: "195px"}}  onClick={{addStringVariable} } />
            : ''}<ReactTooltip />
           
            {showIn ? <Button  tooltip="Adds a Integer Data Type Variable " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}   className='p-button-sm'  label="int Variables"  iconPos="right"  style={{backgroundColor: '#2c3c60'}}   onClick={addVariable} />
            : ''}<ReactTooltip />
             {showIn ? <Button   tooltip="Adds a Boolean Data Type Variable " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}   className='p-button-sm'  label="Boolions"   iconPos="right"  style={{backgroundColor: '#2c3c60'}}   onClick={addBool} />
            : ''}<ReactTooltip /><br></br>

            {showBool ? <Button tooltip="Adds True Boolean " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}   className='p-button-sm'   label="Set Bool True"  iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "250px"}}  onClick={addBoolTrueVariable} />
            : ''}<ReactTooltip />
            {showBool ? <Button  tooltip="Adds False Boolean " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}  className='p-button-sm'   label="Set Bool False"  iconPos="right" style={{backgroundColor: '#2c3c60'}}  onClick={addBoolfalseVariable} />
            : ''}<ReactTooltip /><br></br>
            <br></br>
            {showBottom ? <Button  tooltip="Add Constructor" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}   className='p-button-sm'   label="Constructor"  icon="fas fa-caret-down"  iconPos="right"  style={{backgroundColor: '#2c3c60' , marginLeft: "310px"}}  onClick={addConstructorFunction} />
            : ''}<ReactTooltip /><br></br>
             {showBottom ? <Button tooltip="It Sets the Function " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}  className='p-button-sm'   label="Set Function" icon="pi pi-plus" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "305px"}}    onClick={addSetFunction} />
            : ''}<ReactTooltip /><br></br>
            
              {showBottom ? <Button  tooltip="It Gives If and Else Condition" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }}   className='p-button-sm'   label="Add Condtions"  iconPos="right"  style={{backgroundColor: '#2c3c60' , marginLeft: "310px"}}   onClick={addconditionFunction} />
            : ''}<ReactTooltip /><br></br>
               {showBottom ? <Button  tooltip="Give back Functions" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="Get Function"  icon="pi pi-plus" iconPos="right" style={{backgroundColor: '#2c3c60', marginLeft: "305px"}}   onClick={addGetFunction} />
            : ''}<ReactTooltip /><br></br>

        
          </div>
         </div>
         </div>
        <div className="split right" class="vl">
          <div style={{ overflow: 'auto', resize: 'both', height: '100%', width: '100%' }}>
            {filename ? <>
            <div style={{backgroundColor: '#2c3c60', paddingBottom: '15px', paddingTop: '5px'}}>
            <h1 style={{paddingLeft: '23%' , color : '#c9c5c5'}}>Code</h1>
            </div>
              <CodeEditor
                value={code}
                language="js"
                placeholder="Please enter JS code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                  fontSize: 12,
                  
                  backgroundColor: "#2C3539",
                  fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
                
              /> </>: ''


            }
            
          </div>
          <div className="centered">
          </div>
        </div> </>}
      
       


    </>
  );
}

const rootElement = document.getElementById("root");
export default App;