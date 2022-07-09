import React, { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import {
   BsCameraVideo,
   BsThreeDotsVertical,
   BsChatLeftTextFill
} from 'react-icons/bs'
import { MdClosedCaptionOff, MdCallEnd } from 'react-icons/md'
import { RiUpload2Fill } from 'react-icons/ri'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import Sidebar from './Sidebar'
import MsgBox from './MsgBox'

const UsersPage = () => {
   const [sidebar, setSidebar] = useState(false)
   const [msgBox, setMsgBox] = useState(false)

   const showSidebar = () => {
      setSidebar(!sidebar)
      setMsgBox(false)
   }
   const showMsgBox = () => {
      setMsgBox(!msgBox)
      setSidebar(false)
   }
   console.log(msgBox)
   return (
      <>
         <div className="users-container container">
            <div className="row  gy-2 gx-2" style={{ padding: '0px 40px' }}>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ">
                  <div>
                     <div className="user-card">
                        <img
                           src={require('../img/user.jpg')}
                           alt=""
                           className="user-img"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="buttons-container ">
            <div>
               <span style={{ color: 'white' }}>abc-xyz-pqr</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
               <div>
                  <FaMicrophone className="icon" />
               </div>
               <div>
                  <BsCameraVideo className="icon" />
               </div>
               <div>
                  <MdClosedCaptionOff className="icon" />
               </div>
               <div>
                  <RiUpload2Fill className="icon" />
               </div>
               <div>
                  <BsThreeDotsVertical className="icon" />
               </div>
               <div>
                  <MdCallEnd
                     className="icon"
                     style={{ backgroundColor: 'red' }}
                  />
               </div>
            </div>
            <div style={{ display: 'flex', gap: '25px', padding: '0px 20px' }}>
               <AiOutlineInfoCircle className="icon2" />
               <FiUsers className="icon2" onClick={showSidebar} />
               <BsChatLeftTextFill className="icon2" onClick={showMsgBox} />
               <div>
                  <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                     <Sidebar setSidebar={setSidebar} />
                  </div>
                  <div className={msgBox ? 'msgbox active' : 'msgbox'}>
                     <MsgBox setMsgBox={setMsgBox} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default UsersPage
