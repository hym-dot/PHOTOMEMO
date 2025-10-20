import React from 'react'

import { useNavigate ,NavLink,Link } from 'react-router-dom'
const Header = ({
    isAuthed,
    user,
    onLogout
}) => {

    const navigate = useNavigate()
    const handleLogout=async()=>{
        if(!window.confirm('정말 로그아웃 하시겠어요?')) return

        try {
            await onLogout()
        } catch (error) {
            
        }
    }

  return (
    <header className='site-header'>
      <div className="inner">
        <h1 className='logo'>
          Photomemo
        </h1>
        <div className="auth-area">
          {isAuthed?(
            <span className='welcome'>{user?.displayName  }</span>
            <></>
          ):(<Link className='btn login' to='/admin/login'>
            
          </Link>)}
        </div>
      </div>
        <button className='btn logout' onClick={handleLogout}>로그아웃</button>
    </header>
  )
}

export default Header