import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Wrapper from './components/wrapper/Wrapper.jsx'
import Header from './components/header/Header.jsx'
import QuickAccessItem from './components/quickaccessitem/QuickAccessItem.jsx'
import QuickAccess from './components/quickaccess/QuickAccess.jsx'
import Area2 from './components/area2/Area.jsx'

import house from "./assets/house.svg"
import people from "./assets/people.svg"
import video from "./assets/video.svg"
import notif from "./assets/notif.svg"
import chat from "./assets/chat.svg"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wrapper>
      <Header/>
      
      <QuickAccess>
        <QuickAccessItem icone={house} />
        <QuickAccessItem icone={people}/>
        <QuickAccessItem icone={video}/>
        <QuickAccessItem icone={notif}/>
        <QuickAccessItem icone={chat}/>
      </QuickAccess>
      <Area2 />
      <p>Storys</p>
      <p>feed</p>
    </Wrapper>
  </StrictMode>,
)
