import HeaderContainer from '../components/Header/HeaderContainer'
import Logo from '../components/Header/Logo'
import Menu from '../components/Header/Menu'
import Options from '../components/Header/Options'
import Search from '../components/Header/Search'

function Header() {
  return (
    <HeaderContainer>
      <Menu />
      <Logo />
      <Search />
      <Options />
    </HeaderContainer>
  )
}

export default Header
