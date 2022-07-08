import styled from 'styled-components';
import { AiOutlineHome, AiFillHome, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { RiUserLine, RiUserFill } from 'react-icons/ri';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { fadeIn } from '@styles/animation';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: stretch;
  min-height: 60px;
  border-top: 1px solid rgba(120,120,120,1.0);
  background-color: rgba(255, 255, 255, 1);
  z-index: 100;
  a {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(120,120,120,1.0);
  }
  a:nth-child(1), a:nth-child(2) {
    border-right: 1px solid rgba(120,120,120,1.0);
  }
  .selected::after{
    ${fadeIn({time: '0.25s'})};
    content: ".";
    position: absolute;
    bottom: 0;
    font-size: 34px;
  }
`

export default function BottomNav() {
  const router = useRouter()
  const { pathname } = router
  return (
    <Nav>
      <Link href="/">
        
          { pathname === '/' 
            ? <a className="selected" ><AiFillHome size="32px" /></a>
            : <a><AiOutlineHome size={32} /></a>
          }
        
      </Link>
      <Link href="/favs">
        { pathname === '/favs'
          ? <a className="selected" ><AiFillHeart size="32px" /></a>
          : <a><AiOutlineHeart size={32} /></a>
        }
      </Link>
      <Link href="/user">
        { pathname === '/user'
          ? <a className="selected" ><RiUserFill size="32px" className="selected" /></a>
          : <a><RiUserLine size={32} /></a>
        }
      </Link>
    </Nav>
  )
}