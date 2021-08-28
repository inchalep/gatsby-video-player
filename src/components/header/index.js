import { Link } from "gatsby"
import React from "react"
import { HeaderWrapper,HeaderContainer,LogoLink } from "./header.style"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>
          <LogoLink to="/">DEEPIKA</LogoLink>
        </h1>
        </HeaderWrapper>  
    </HeaderContainer>
  )
}

export default Header
