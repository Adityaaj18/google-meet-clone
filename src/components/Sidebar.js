import React from 'react'
import { BsMicMute, BsPin } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const Sidebar = ({ setSidebar }) => {
   return (
      <div className="sidebar-content">
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p
               style={{ fontSize: '18px', fontWeight: '500', color: '#5f6368' }}
            >
               People
            </p>
            <IoMdClose className="close" onClick={() => setSidebar(false)} />
         </div>

         <p style={{ fontSize: '14px', fontWeight: '500', color: '#5f6368' }}>
            In call
         </p>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Aditya Jadhav</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Ree Perera</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">John Doe</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Alex Xander</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Blue Hawk</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Billy Butcher</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Dan Bilzerian</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Gary ven</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
            <div className="user-wrapper">
               <div>
                  <img
                     className="incall-user"
                     src={require('../img/incall.png')}
                     alt=""
                  />
                  <span className="user-name">Megan Fox</span>
               </div>
               <div>
                  <BsMicMute className="mic" />
                  <BsPin className="pin" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
