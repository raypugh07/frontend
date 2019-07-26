/* NOLAN: Decided to switch to styled components since its more efficient; Raymond agreed/approved. */
import styled from 'styled-components';
import medEcLogo from '../assets/Medium/EmpoweredConversation-Logo-Md-RGB.png';

export const NavHeader = styled.header`
  display: flex;
  @media (max-width: 676px) {
    padding-top:10px;
   }

`;

export const Nav = styled.nav`
  height: 69px;
  width: 1440px;
  margin:10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1250px) {
    height: 72px;
    width: 1250px;
  }
  @media (max-width: 1119px) {
    height: 72px;
    width: 1119px;
  }
  @media (max-width: 1000px) {
    height: 72px;
    width: 1000px;
  }
  @media (max-width: 800px) {
    height: 72px;
    width: 800px;
  }
  @media (max-width: 676px) {
   display:none;
  }
  
`;

export const MobNav=styled.nav`

	height: 25px;
	width: 53px;
	opacity: 0.5;
	color: #2E2F38;
  font-family: 'Nunito', sans-serif;
	font-size: 18px;
	font-weight: 300;
	letter-spacing: 1.5px;
  line-height: 25px;
  border:solid red;
  @media (min-width:678px){
    display:none;
  }
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
  width:200px;
  @media (max-width: 676px) {
    
      width: 100px;
      color: #2E2F38;
      font-family: 'Nunito', sans-serif;
      font-size: 8.69px;
      font-weight: 500;
      line-height: 11px;
    }
  
`;

export const NavBarLogo = styled.img.attrs({
  alt: "Empowered Conversations clickable medium logo.",
  src: `${medEcLogo}`
})`
  height: 54px;
  width:50%;
  margin:auto;
  cursor: pointer;
  @media (max-width: 676px) {
    
    width:75%;
  }
`;

export const linkDec = {
  height: '25px',
  width: '80px',
  margin: '0 15px',
  display: 'flex',
  justifyContent: 'center',
  color: '#2e2f38',
  fontFamily: 'Nunito,sans-serif' /* RAYMOND: Avenir font isn't free */,
  fontSize: '18px',
  fontWeight: '300',
  lineHeight: '25px',
};

/* NOLAN: Removed 'position' because it was off-setting button alignment. */
export const navButton = {
  height: '37px',
  width: '142px',
  margin: '0 15px',
  bottom: '5px',
  color: '#FFFFFF',
  fontFamily: 'Nunito',
  fontSize: '18px',
  fontWeight: '300',
  lineHeight: '25px',
  cursor: 'pointer',
  backgroundColor: '#2E2F38',
  border: 'transparent',
  borderRadius: '5px',
};

