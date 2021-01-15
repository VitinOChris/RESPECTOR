import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './style';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import { Divider, Typography } from '@material-ui/core';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { Drawer } from '@material-ui/core/';
import { IconButton } from '@material-ui/core/';
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';


function Header() {
  const classes = styles();

  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  };
   
  return (
    <div>
      <AppBar className={classes.appBar, {[classes.appBarShift]: open,}}>
        <Toolbar className={classes.root}>
          <Link href="/" underline='none'>
          <input type="button" value="RESPECTOR" className={classes.logo}/>
          </Link>

          <Button className={classes.categorys} 
          aria-controls="simple-menu" 
          aria-haspopup="true" 
          onClick={handleClick} 
          color='inherit'
          startIcon={<MenuOutlinedIcon color='inherit' />}>
            Todas as categorias
          </Button>
          
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <Typography 
            align='center'> Esportes </Typography>
            <Divider/>
            <Link underline='none' color='inherit'
            href='/Futebol'>
            <MenuItem onClick={handleClose}>Futebol</MenuItem>
            </Link>
            
            <Link underline='none' color='inherit'
            href='/Basquete'>
            <MenuItem onClick={handleClose}>Basquete</MenuItem>
            </Link>

            <Link underline='none' color='inherit'
            href='/Skateboarding'> 
            <MenuItem onClick={handleClose}>Skateboarding</MenuItem>
            </Link> 
            <Divider/>
            <Typography align='center'> Marcas </Typography>
            <Divider/>
            <Link underline='none' color='inherit'
            href='/Nike'>
            <MenuItem onClick={handleClose}>Nike</MenuItem>
            </Link>
            
            <Link underline='none' color='inherit'
            href='/Under Armour'>
            <MenuItem onClick={handleClose}>Under Armour</MenuItem>
            </Link>

            <Link underline='none' color='inherit'
            href='/Adidas'> 
            <MenuItem onClick={handleClose}>Adidas</MenuItem>
            </Link> 
            </Menu>
          
            {/*<div className={classes.grow} />
            <Link href="/Lista de desejos" underline='none' color='inherit'>
            <Button size="small" className={classes.icons} startIcon={<FavoriteIcon />} color='inherit'> Lista de desejos
            </Button>
            </Link>*/}

          <Link href="/login" underline='none' color='inherit'>
          <Button size="small" className={classes.icons} startIcon={<AccountCircleIcon />} color='inherit'> Fazer login
          </Button>
          </Link>
          
          <Button className={classes.merc}
          color='inherit'>
          <ShoppingCartIcon
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={(open && classes.hide)}
          ></ShoppingCartIcon>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>        
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
          <ClearIcon/>
          </IconButton>
        
        <List>
          <Typography align='center' variant='h5'> SUA LISTA ESTÁ VAZIA! </Typography>
          <IconButton onClick={handleDrawerClose}>
          <Button className={classes.contBuy}
          disableRipple variant='outlined' onCLick={handleDrawerClose}>
            Continuar busca!
          </Button>
          </IconButton>
        </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Header
