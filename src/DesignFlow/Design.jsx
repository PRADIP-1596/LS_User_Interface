import React from "react";
import  nature from "./nature.jpg";
import './Design.css'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
// import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
// import Paper from '@material-ui/core/Paper';
// import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Button } from 'react-bootstrap';
// import './ForgotPassword';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function Design() {
  const classes = useStyles();
  return (
      <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+nature+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
          <div class="circle"><b>LS</b>
          
           </div>
        
        <p class="declaredspacede">
            
            <b>BUY  SELL</b></p>
            <div class="buttonname">
        
 <Button variant="contained" color="primary">
  <b>MY LANDSELL</b>
 {/* <a href="ReactScreen"></a> */}
</Button>
</div>
<div class ="nametitlem">
<h4><b>The World's Marketplace for land</b></h4>
</div>
<div class="land">
  <h1><b>LandSeller</b></h1>
  <h3><b>The World's Marketplace for land</b></h3>
</div>

<div class ="DetailsofThe">
      </div>

        

<div class="name">
<p class="space"><b>ABOUT CONTACT PRIVACY TERMS</b></p>
</div>
<div class="wrap">
   <div class="search">
      <div type="text" class="searchTerm" placeholder="What are you looking for?">
      <button type="submit" class="searchnamebutton">
          <SearchIcon/>
     
     </button>
   </div>
</div>
</div>
<div class="wrappermame">
   <div class="search" placeholder="What are you looking for?">

   <div type="text" class="searchTerm" placeholder="What are you looking for?">
    
      <button type="submit" class="searchButtonname" placeholder="What are you looking for?">
      <ArrowDropDownIcon/>
     
     </button>
   </div>
</div>
</div>

<div class="container">
   <div class="searchbox">
       
    
   </div>
</div>


      </div>
  );
}

export default Design;