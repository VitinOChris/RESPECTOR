import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './style';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

function Header() {
  const classes = styles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  };
   
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.root}>
          <Link href="/" underline='none'>
          <input type="button" value="RESPECTOR" className={classes.logo}/>
          </Link>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
          </Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
        <MenuItem onClick={handleClose}>Chuteiras</MenuItem>
        <MenuItem onClick={handleClose}>Basquete</MenuItem>
        <MenuItem onClick={handleClose}>Skateboarding</MenuItem>
        </Menu>

        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
          </Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
        <MenuItem onClick={handleClose}>Nike</MenuItem>
        <MenuItem onClick={handleClose}>Adidas</MenuItem>
        <MenuItem onClick={handleClose}>Under Armour</MenuItem>
        </Menu>

          <div className={classes.grow} />
          <Button size="small" className={classes.icons} startIcon={<FavoriteIcon />} color='inherit'> Lista de desejos
          </Button>
          <Button size="small" className={classes.icons} startIcon={<AddShoppingCartIcon />} color='inherit'> Seu carrinho
          </Button>
          <Link href="/login" underline='none' color='inherit'>
          <Button size="small" className={classes.icons} startIcon={<AccountCircleIcon />} color='inherit'> Fazer login
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
