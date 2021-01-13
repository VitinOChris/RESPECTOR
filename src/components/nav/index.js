import React from 'react';
import styles from './style'
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Nav() {
  const classes = styles();

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List className={classes.categori}>
            <Typography className={classes.typograf}>
              Todas as categorias   
            </Typography>
            {['Chuteiras', 'Basquete', 'Skateboarding', 'Treino & Academia'].map((text) => (
              <ListItem button key={'Chuteiras'}>
                <ListItemText primary={text} /> 
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={classes.categori2}>
            <Typography className={classes.typograf2}>
              Marcas
            </Typography>
            {['Nike', 'Adidas', 'Under Armour'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  );
}

export default Nav;
