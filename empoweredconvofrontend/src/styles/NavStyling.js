/* NOLAN: Decided to switch to styled components since its more efficient; Raymond agreed/approved. */
import styled from 'styled-components';
import medEcLogo from '../assets/Medium/EmpoweredConversation-Logo-Md-RGB.png';

/* NOLAN:
  Had to readjust size based off of percentage to make the navbar fit properly on my screen. Not sure
  if keeping a hard width is going to do well for those with smaller screens.
*/
export const NavHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

export const Nav = styled.nav`
  height: 69px;
  width: 36%;
  // margin: 0 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDiv = styled.div`
  height: 83px;
  width: 142px;
  margin: 5px 5px 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2E2F38;
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

export const NavBarLogo = styled.img.attrs({
  alt: "Empowered Conversations clickable logo; returns to homepage.",
  src: `${medEcLogo}`
})`
  height: 49px;
  width: 77px;
  cursor: pointer;
`;

export const linkDec = {
  height: '25px',
  // width: '70px',
  // margin: '0 15px',
  display: 'flex',
  justifyContent: 'center',
  color: '#2e2f38',
  fontFamily: 'Nunito', /* RAYMOND: Avenir font isn't free */
  fontSize: '15px',
  fontWeight: '300',
  lineHeight: '25px',
};

/* NOLAN: Removed 'position' because it was off-setting button alignment. */
export const navButton = {
  height: '25px',
  width: '142px',
  margin: '0 20px 0 0',
  bottom: '5px',
  color: '#FFFFFF',
  fontFamily: 'Nunito',
  fontSize: '15px',
  fontWeight: '300',
  lineHeight: '25px',
  cursor: 'pointer',
  backgroundColor: '#2E2F38',
  border: 'transparent',
  borderRadius: '5px',
};