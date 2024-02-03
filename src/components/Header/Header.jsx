import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
      <Toolbar className={classes.toolbar}>
        <Box display="flex" marginLeft='60px'>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="여행지를 검색해보세요!" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
  );
};

export default Header;