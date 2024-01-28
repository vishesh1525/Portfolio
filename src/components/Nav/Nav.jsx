import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineMedicalServices } from "react-icons/md";
import { useState } from 'react';
import './Nav.css'
function Nav() {

   const [activenav,setactivenav]=useState('')
  return (
   <nav>
      <a href='#' onClick={()=>setactivenav('#')} className={activenav==='#'?'active':''}><IoMdHome /></a>
      <a href='#About' onClick={()=>setactivenav('#About')} className={activenav==='#About'?'active':''}><FaRegUserCircle /></a>
      <a href='#experince' onClick={()=>setactivenav('#experince')} className={activenav==='#experince'?'active':''}><CiBookmarkPlus /></a>
      <a href='#Contact' onClick={()=>setactivenav('#Contact')} className={activenav==='#Contact'?'active':''}><IoIosContacts /></a>
      <a href='#Services' onClick={()=>setactivenav('#Services')} className={activenav==='#Services'?'active':''}><MdOutlineMedicalServices /></a>
      </nav>
  )
}

export default Nav
