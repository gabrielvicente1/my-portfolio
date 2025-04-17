import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {

    const StyledToolBar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly'
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolBar>
            <MenuItem>Sobre mim</MenuItem>
            <MenuItem>Habilidades</MenuItem>
            <MenuItem>Projetos</MenuItem>
            </StyledToolBar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  