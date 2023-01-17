
import { FormControl, FormGroup, InputLabel ,Input, Typography, Button,styled} from '@mui/material'
import { useState ,useEffect } from 'react'

import { getUser ,editUser } from '../service/api'
import { useNavigate ,useParams} from 'react-router-dom'


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

const Edituser = () => {

    const [user,setUser] = useState(initialvalue)
    const Navigate =useNavigate();
    const {id} =useParams();

    const onvaluechange=(e)=>{
        // console.log(e.target.name,e.target.value)
        setUser({ ...user, [e.target.name]:e.target.value})
        console.log(user)
    } 

        useEffect( ()=>{
            getUserData();
        },[])

        const getUserData = async() =>{
          let response= await getUser(id);
          console.log(response);
          setUser(response.data)
        }

    const adduserdetail = async() =>{
      await  editUser(user,id);
      Navigate('/all')
    }

  return (
    <Container>
        <Typography variant="h4">Edit user</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="name" value={user.name} />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="username" value={user.username} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="email" value={user.email} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="phone" value={user.phone} />
        </FormControl>
        <FormControl>
            <Button onClick={()=>adduserdetail()} variant='contained'>Edituser</Button>
        </FormControl>
    </Container>
  )
}

export default Edituser
