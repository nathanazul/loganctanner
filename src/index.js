import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

import { Collapse } from 'react-bootstrap';


function Title() {
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

NOTES
* collapse from reactstrap
* need to have a single div w/ onClick() that toggles collapse showing 
  pages[1,2]. onClick() for [1,2] swaps their position w/ [0].

*/

class Menu extends Component {
  constructor(props) {
    super(props),
  }
}

/*
function Menu() {
  const pages = ["creator", "polymath", "gamer"];
  let p;

  const listPages = (
    p = pages.splice(1),
    p.map( (page) => (
        <div key={page} className={page + ' menu-item'} onClick={() => { select(page); toggle()}}>
          {page}
        </div>
      )
    )
  );

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  let pos;
  const select = (props) => (
    pos = pages.indexOf(props),
    [pages[0],pages[pos]] = [pages[pos],pages[0]]
  );

  let o;
  if(open === false) {
    o = 'closed'
  } else {
    o = 'open'
  }

  return(
    <React.StrictMode>
    <div className='menu'>
      <div className={pages[0] + ' menu-item'} onClick={toggle}>{pages[0]}</div>
      <Collapse in={open}>
        <div>
          {listPages}
        </div>
      </Collapse>
    </div>
    <div className='array'>{pages}</div>
    </React.StrictMode>
  )

}
*/


class Main extends Component {

  render() {
    return (
      <>
      <Title />
      <Menu />
      </>
    );
  }

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);