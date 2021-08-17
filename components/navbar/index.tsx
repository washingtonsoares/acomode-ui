import {
  LogoContainer,
  LogoText,
  MenuContainer,
  MenuItem,
  NavbarContainer,
  UserDropDown,
  MenuItemLink
} from './styled';
import Image from 'next/image';

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Image src="/logo.svg" alt="Acomode logo" width={30} height={31} />
        <LogoText>ACOMODE</LogoText>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          <MenuItemLink isActive href="link.com">
            Acomodações
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="link.com">Minhas Acomodações</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="link.com">Minhas Reservas</MenuItemLink>
        </MenuItem>
      </MenuContainer>
      <UserDropDown>
        <Image
          src="/default-avatar.svg"
          alt="Avatar do usuário"
          width={40}
          height={40}
        />
      </UserDropDown>
    </NavbarContainer>
  );
}

export default Navbar;
