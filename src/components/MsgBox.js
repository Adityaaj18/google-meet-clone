import React from 'react'
import { IoMdClose } from 'react-icons/io'

const MsgBox = ({ setMsgBox }) => {
   return (
      <div>
         <div className="sidebar-content">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <p
                  style={{
                     fontSize: '18px',
                     fontWeight: '500',
                     color: '#5f6368'
                  }}
               >
                  In-call messages
               </p>
               <IoMdClose className="close" onClick={() => setMsgBox(false)} />
            </div>

            <div
               style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
               <div>
                  <div className="msg-wrapper">
                     <span className="user-name">Aditya Jadhav</span>
                     <p>hello everyone</p>
                  </div>
               </div>
               <div>
                  <div className="msg-wrapper">
                     <span className="user-name">Gary Ven</span>
                     <p>hey guys</p>
                  </div>
               </div>
               <div>
                  <div className="msg-wrapper">
                     <span className="user-name">Billy Butcher</span>
                     <p>oi fellas, how are you?</p>
                  </div>
               </div>
               <div>
                  <div className="msg-wrapper">
                     <span className="user-name">Dan Bilzerian</span>
                     <p>nice to meet you guys</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MsgBox
