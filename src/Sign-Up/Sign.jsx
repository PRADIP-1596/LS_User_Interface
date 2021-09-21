import React, { Component } from 'react'
import './Sign.css';
import TextField from "@material-ui/core/TextField";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
export class Screenname extends Component {

   render() {
       return (

        <>

<div class="card">
 
 <div class="">
 <p class="c"><b>LandSeller</b> Buy  Sell </p>
 </div>

 <div class="headlinedetails">
<h4><b>MYLANDSELL</b></h4>
 </div>
</div>

              <div className="first-container"> 
         <form className="form">
           <div class="headingname">
             <h1><b>Sign Up</b></h1>
             </div>
           <h4 className="headingclassnamedetail">Track Favourite Create Your Own Listing</h4>
           
           <div className="name">
             
             
           <FormControl sx={{ width: '25ch' }} placeholder="name">
        <OutlinedInput placeholder="First-Name" />
        {/* <MyFormHelperText /> */}
      </FormControl>
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Last-Name" />
        {/* <MyFormHelperText /> */}
      </FormControl>
           </div>
           <div className="email1">
           <FormControl sx={{ width: '55ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        {/* <MyFormHelperText /> */}
      </FormControl>
             <br></br>
             <br></br>
           </div>
          
            <div className="name">
        
           <FormControl sx={{ width: '25ch' }} placeholder="name">
        <OutlinedInput placeholder="Password" />
        {/* <MyFormHelperText /> */}
      </FormControl>
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Confirm Password" />
        {/* <MyFormHelperText /> */}
      </FormControl>
           </div>
           {/* </div> */}
           <br></br>
           <div class="CreateAccountField">
           <FormControl sx={{ width: '35ch' }}>
        <OutlinedInput placeholder="Create An Account" />
        {/* <MyFormHelperText /> */}
      </FormControl>
          </div>
          <div class="EndLine">
            <h2><b>LandSeller</b></h2>
          </div>
          <p class="b">About Contact Privacy Terms</p>
         </form> 
         </div>
         </>
   );
   }
}

export default   Screenname