
import { FormControl, FormGroup, InputLabel ,Input, Typography, Button,styled} from '@mui/material'
import { useState } from 'react'

import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'


const Container =styled(FormGroup)`
width:50%;
margin: 5% auto;
& >div {
    margin-top:20px;
}
`

const initialvalue={
    name:"",
    username:"",
    email:"",
    phone:""
}

const Adduser = () => {

    const [user,setUser] = useState(initialvalue)
    const Navigate =useNavigate();

    const onvaluechange=(e)=>{
        // console.log(e.target.name,e.target.value)
        setUser({ ...user, [e.target.name]:e.target.value})
        console.log(user)
    } 


    const adduserdetail = async() =>{
      await  addUser(user);
      Navigate('/all')
    }

  return (
    <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="name" />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="phone"/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>adduserdetail()} variant='contained'>Adduser</Button>
        </FormControl>
    </Container>
  )
}

export default Adduser
