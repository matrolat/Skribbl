import React,{useState} from 'react'
import './Home.css'
import Input from '@mui/joy/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {  styled } from '@mui/material';
import Button from '@mui/material/Button';

const StyledInput = styled(Input)(({ theme }) => ({
    backgroundColor:"white",
    minHeight:34,
    paddingLeft:10,
    margin:0,
    minWidth:"69%",
    borderRadius:3
    // [theme.breakpoints.down('lg')]: {
    //     width:"46%"
    // },
    // [theme.breakpoints.down('sm')]: {
    //     width:"48%"
    // },
}));
const StyledForm = styled(FormControl)(({ theme }) => ({
    
    minWidth:"100%"
}));


const StyledSelect = styled(Select)(({ theme }) => ({
    backgroundColor:"white",
    height:34,
    padding:0,
    margin:0,
    minWidth:"29%",
    borderRadius:3

}));
const StyledMenu = styled(MenuItem)(({ theme }) => ({
    backgroundColor:"white",
    height:34

}));
const Play = styled(Button)(({ theme }) => ({
    width:"100%",
    backgroundColor:"#38c41c",
    height:54

}));
const CreateRoom = styled(Button)(({ theme }) => ({
    width:"100%",
    backgroundColor:"#2c8de7",
    height:45,
    marginTop:10

}));


const Home = () => {
    const [lang, setLang] = useState('English');
    
        const handleChange = (event) => {
          setLang(event.target.value);
        };




  return (
    <div className='home-bg'>
    <div className="logo"></div>
    <div className="panel">
        <StyledForm>
            <div className="panel-top">

                <StyledInput
                 
                    color="neutral"
                    placeholder="Enter your name"
                    size="md"
                    variant="outlined"
                />
                <StyledSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lang}
                    // label="Language"
                    onChange={handleChange}
               
                >
                    <StyledMenu value={"English"}>English</StyledMenu>
                    <StyledMenu value={"French"}>French</StyledMenu>
                    <StyledMenu value={"German"}>German</StyledMenu>
                </StyledSelect>
            </div>
            <div className="select-avatar">

            </div>
            <div className="play-btn">
            <Play variant="contained"> <h2>Play</h2> </Play>
            <CreateRoom variant="contained"> <h4>Create Room Server</h4> </CreateRoom>
            </div>
        </StyledForm>

    </div>

</div>
  )
}

export default Home;