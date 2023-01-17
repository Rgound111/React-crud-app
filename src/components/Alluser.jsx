import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material'

import { getUsers ,deleteUser } from '../service/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Alluser = () => {

  const StyledTable = styled(Table)`
  width:90%;
  margin:50px auto;
  `
  const Thead = styled(TableRow)`
    Background:#000;
    & > th {
      color:#fff;
      Font-size:20px;
    }
  `
  const Tbody = styled(TableRow)`
    & > td {
      Font-size:20px;
    }
  `

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetail();
  }, [])

  const getUserDetail = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
  }

  const deleteUserData = async (id)=>{
     await deleteUser(id);
     getUserDetail();
  }

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <Tbody>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained'  style={{ marginRight: 10 }} color='secondary' component={Link}   to={`/edit/${user.id}`}>Edit</Button>

                <Button variant='contained' onClick={()=>{deleteUserData(user.id)}} >Delete</Button>
                
              </TableCell>
            </Tbody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default Alluser
