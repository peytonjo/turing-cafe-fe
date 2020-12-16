import React from 'react'
import Card from '../Card/Card.js'
import { getAllUsers } from '../apiCalls'


const Users = (props) => {
  let usersDisplayed = [getAllUsers]

  const userCards = usersDisplayed.map(user => {
    return (
      <Card
          id={user.id}
          name={user.name}
          date={user.date}  
          time={user.time}
        />
    )
  })
  return (
    <section>
      {userCards}
    </section>
  )
}

export default Users;