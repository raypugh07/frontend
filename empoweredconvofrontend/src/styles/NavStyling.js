/* NOLAN: Decided to switch to styled components since its more efficient; Raymond agreed/approved. */
import styled from 'styled-components';
import medEcLogo from '../assets/Medium/EmpoweredConversation-Logo-Md-RGB.png';

export const NavHeader = styled.header`
  display: flex;
  background-color: #ffffff;
`;

export const Nav = styled.nav`
  height: 69px;
  width: 1409px;
  margin:10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoDiv = styled.div`
  margin: 5px 0 5px 25px;
  display: flex;
  flex-direction: column;
  color: #2E2F38;
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

export const NavBarLogo = styled.img.attrs({
  alt: "Empowered Conversations clickable medium logo.",
  src: `${medEcLogo}`
})`
  height: 54px;
  width: auto;
  cursor: pointer;
`;

export const linkDec = {
  height: '25px',
  width: '70px',
  margin: '0 15px',
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
  margin: '0 15px',
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