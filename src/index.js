import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react';


function Tit() {
  return (
    <h1 className='lct'>
      LoganCTanner
    </h1>
  )
};

/*
MENU
description:
a menu selector which determines the page being viewed

TODO
* on page load:
** animation: fadeIn(loganCTanner), shrink && move to UL corner
** animation: creator->creator polymath->creator polymath gamer
** fade in offset
** shrinks && move to UR corner
** closeMenu()
* defaults to creator
* onClick(): show offset->expand down, revealing other options 
** (onClick(outsideMenu) || noAction(4sec)) ? closeMenu() : ''


*/
function Menu() {
  //const [isMenuExapnded, setIsMenuExpanded] = useState(false);
  const pages = ["creator", "polymath", "gamer"];

  const listPages = pages.map(
    (page) => <li key={page} className={page}>{page}</li>
  );

  return(
    <ul>{listPages}</ul>
  )

}

class Main extends Component {

  render() {
    return (
      <>
      <Tit />
      <Menu />
      </>
    );
  }

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Main />
);