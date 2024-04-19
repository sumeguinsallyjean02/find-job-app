import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Header } from '../Common/Header';
import { Body } from '../Body';
import { JobLists } from '../Jobs/JobLists';
import { AddJob } from '../Jobs/AddJob';

const drawerWidth = 240;

interface IMenuProps {
    menu: String[]
}

export const Home = () => {
  const [isJobClicked, setIsJobsClicked] = React.useState(true)
  const [isCreateJobClicked, setIsCreateJobClicked] = React.useState(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Header></Header>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                  setIsJobsClicked(true)
                  setIsCreateJobClicked(false)

                }}>
                  <ListItemText primary={'Jobs'} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                  setIsCreateJobClicked(true)
                  setIsJobsClicked(false)

                }}>
                <ListItemText primary={'Create Jobs'} />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        { isJobClicked && <JobLists></JobLists>}
        { isCreateJobClicked && <AddJob></AddJob>}
      </Box>
    </Box>
  );
}
