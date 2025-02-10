import { useState, useEffect } from 'react'
import './css/App.css'
import { FetchUser } from '@/components/FetchUser.jsx'
import { UserList } from '@/components/UserList.jsx'

function App() {


  return (
    <>
      <div>
        <UserList />
      </div>
    </>
  )
}

export default App
