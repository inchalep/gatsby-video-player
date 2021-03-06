import styled from 'styled-components';
import {Link} from 'gatsby';
import { Wrapper } from '../../style/common.style';

export const HeaderContainer = styled.header`
  width:100%;  
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background-color:transparent; 
`
export const LogoLink = styled(Link)`
  padding: 20px;
  text-decoration:none;
  font-size: 40px;
  color:#21d6ff;
  text-shadow: 0 0 10px rgba(225,225,225,.5); 
`
export const HeaderWrapper = styled(Wrapper)`
  padding: 10px 0;
`