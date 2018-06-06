import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

class Result extends React.Component {
  render() {
    return (
      <article>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Result" />
          </ListItem>
        </List>
      </article>
    );
  }
}

export default Result;
