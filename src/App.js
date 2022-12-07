import './App.css';
import React, { useState } from "react";
import { Tooltip } from 'primereact/tooltip';
import ReactTooltip from 'react-tooltip';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Main from './components/Main';


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
 
  const [code, setCode] = useState(
    `// SPDX-License-Identifier: MIT \n
    pragma solidity >= 0.4.0 < 0.7.0;\n
    \n`


  );

  const [s, sets] = useState('');  
  const [s1, sets1] = useState(false);  
  const [s2, sets2] = useState(false);  
  const [s3, sets3] = useState(false);  
  const [s4, sets4] = useState(false);  
  const [s5, sets5] = useState(false);
    

  

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
    setCode( editedText + ` \n contract Sum { \n
              }`)
    
        sets1(true); //,............
        setshowIn(true);   

  }

  const addVariable = () => {

                                             
    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText + ` uint storedData; \n  `);
    setshowIn(true); // Hide and seek.......................

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
    setCode( editedText +  `bool False; \n `);//remember to add '}' which we removed before
                         
  }
  
  const addBoolTrueVariable = () => {

 
    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText +  `bool True; \n `);
               
  }

  
  const addStringVariable = () => {

    
    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText +  
        `string Data; \n `);

  }

  const addSetFunction = () => {

    
    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
   
    setCode(editedText + `  
              function set(uint x) public {\n
               x = 5;\n
               y = 6;\n
              }
            \n`);
            //setshowIn(true); // Hide and seek.......................
            sets5(true);

  }
  const addfirstFunction = () => {

    
    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    
    setCode(editedText + `
             function firstNoSet(uint _x) public \n
             {\n
             First_Number = _x; 
            
            }\n`);
           
            sets4(true); // ..........
  }


  const addGetFunction = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
    setEditor(true)
    
    setCode( editedText + 
             `
              function get() view public  returns (uint)\n
              {\n
                uint output = First_Number + Second_Number;\n
                return output;\n
              }\n
            }\n`)
            setshowBottom(true);
           
    sets5(true);  //.............


  }
  const addsecondfuction = () => {
 
  
    const prevState = code;
    const editedText = prevState.slice(0, -1)
  
    setEditor(true)
    setCode( editedText + 
             `
               function secondNoSet(uint _y) public 
              {
                Second_Number = _y;
              }
             
             
             \n`)
           
             sets5(true); // ..........
             //editor(true);
             setshowIn(true);
  }
  const add1V = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText + 
             ` 
             uint First_Number ; \n
             
            `)
          

            sets2(true);  //............

  }
  const add2V = () => {

    const prevState = code;
    const editedText = prevState.slice(0, -1)
   
    setEditor(true)
    setCode( editedText + 
             ` 
             uint Second_Number ; \n
             
            \n`)
          

            sets3(true);  //............

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

      
        <div className="split left"  >
           
          <div className="centered">

          </div>
          <div class="container" >
          <div className='multi-button2'>

         
         
          <br></br>
          {filename ? <Button  tooltip="Startes with Contract Header as Class start" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="Header" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "365px"}}  onClick={addTemplate} />
            : ''}<ReactTooltip /><br></br>

          
            <br></br>
            {s1 ? <Button  tooltip="Add  First Variable " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="1st variable" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "260px"}}  onClick={add1V} />
            : ''}<ReactTooltip /> 
            {s2 ? <Button  tooltip="Add  Second Variable " tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="2nd Variable" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "60px"}}  onClick={add2V} />
            : ''}<ReactTooltip /><br></br>

          
            <br></br>
            {s3 ? <Button  tooltip="Gives your First variable Setter Function" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="First Setter Fucntion" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "320px"}}  onClick={addfirstFunction} />
            : ''}<ReactTooltip /><br></br>

       
            <br></br>
            {s4 ? <Button  tooltip="Gives your Second variable Setter Function" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="Second Setter Function" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "310px"}}  onClick={addsecondfuction} />
            : ''}<ReactTooltip /><br></br>

            <br></br>

            {s5 ? <Button  tooltip="Give Back Function" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} className='p-button-sm'   label="Getter Function" iconPos="right" style={{backgroundColor: '#2c3c60' , marginLeft: "335px"}}  onClick={addGetFunction} />
            : ''}<ReactTooltip /><br></br>

          
            <br></br>
            <br></br>

          
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
                  
                  backgroundColor: "#151B54",
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
