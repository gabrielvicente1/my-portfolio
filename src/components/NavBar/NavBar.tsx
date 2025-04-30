import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
};

const NavBar = () => {

    const StyledToolBar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly'
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolBar>
            <MenuItem onClick={() => scrollToSection('About')}>Sobre mim</MenuItem>
            <MenuItem onClick={() => scrollToSection('Skills')}>Habilidades</MenuItem>
            <MenuItem onClick={() => scrollToSection('Projects')}>Projetos</MenuItem>
            </StyledToolBar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  