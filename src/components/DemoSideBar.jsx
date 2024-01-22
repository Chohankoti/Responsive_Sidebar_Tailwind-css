import React, { useState, useEffect } from 'react';
import logo from './ohlogo.png';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CategoryIcon from '@mui/icons-material/Category';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import { Message } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        backgroundColor: 'black',
        color: 'white',
    },
}));

const SidebarItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'white',
    },
    '&:hover .MuiListItemText-primary': {
        color: 'black',
    },
}));

const iconStyle = {
    color: 'white', // Set the icon color to white
};

const logoStyle = {
    width: '200px',
    height: '200px',
    backgroundSize: 'cover',
};


const DemoSideBar = () => {
    const usenavigate = useNavigate();
    let username;


    const [open, setOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Hidden mdUp>
                <IconButton onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
            </Hidden>
            <Sidebar
                variant="temporary"
                open={open}
                onClose={toggleSidebar}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <List>
                    {[
                        { to: 'dashboard', text: 'Dashboard', icon: <DashboardIcon style={iconStyle} /> },
                        { to: 'managehotel', text: 'Manage Owners', icon: <ManageAccountsIcon style={iconStyle} /> },
                        { to: 'addfacility', text: 'Managefacility', icon: <CategoryIcon style={iconStyle} /> },
                        { to: 'managecustomer', text: 'Manage Customer', icon: <PersonSearchRoundedIcon style={iconStyle} /> },
                        { to: 'feedback', text: 'Feedback', icon: <MessageTwoToneIcon style={iconStyle} /> },
                        { to: 'sendmessage', text: 'Send message', icon: <Message style={iconStyle} /> },
                        { to: 'login', text: 'Logout', icon: <Logout style={iconStyle} /> },
                    ].map((link, index) => (
                        <div className="bg-white">
                            <div className="flex-col flex">
                                <div className="flex bg-gray-100 overflow-x-hidden">
                                    <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                                        <div className="flex-col pt-5 flex overflow-y-auto">
                                            <div className="h-full flex-col justify-between px-4 flex">
                                                <div className="space-y-4">
                                                    <div className="bg-top bg-cover space-y-1">
                                                        <SidebarItem className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                                            key={index}
                                                            button
                                                            component={Link}
                                                            to={link.to}
                                                            selected={location.pathname === link.to}
                                                            style={{ textAlign: link.alignRight ? 'right' : 'left' }}
                                                        >
                                                            <ListItemIcon>{link.icon}</ListItemIcon>
                                                            <ListItemText primary={link.text} />
                                                        </SidebarItem>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    ))}
                </List>
            </Sidebar>
            <Hidden smDown>
                <Sidebar variant="permanent" open>
                    <Box p={2}>
                        <Box p={2}>
                            <img src={logo} alt="Hotel Logo" style={logoStyle} />
                        </Box>
                        <Typography variant="h6" style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                            Admin Panel
                        </Typography>
                    </Box>
                    <List>
                        {[
                            { to: '/dashboard', text: 'Dashboard', icon: <DashboardIcon style={iconStyle} /> },
                            { to: '/managehotel', text: 'Manage Owners', icon: <ManageAccountsIcon style={iconStyle} /> },
                            { to: '/addfacility', text: 'Managefacility', icon: <CategoryIcon style={iconStyle} /> },
                            { to: '/managecustomer', text: 'Manage Customer', icon: <PersonSearchRoundedIcon style={iconStyle} /> },
                            { to: '/feedback', text: 'Feedback', icon: <MessageTwoToneIcon style={iconStyle} /> },
                            { to: '/sendmessage', text: 'Send message', icon: <Message style={iconStyle} /> },
                            { to: '/login', text: 'Logout', icon: <Logout style={iconStyle} /> },
                        ].map((link, index) => (
                            <div className="bg-white">
                            <div className="flex-col flex">
                                <div className="flex bg-gray-100 overflow-x-hidden">
                                    <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                                        <div className="flex-col pt-5 flex overflow-y-auto">
                                            <div className="h-full flex-col justify-between px-4 flex">
                                                <div className="space-y-4">
                                                    <div className="bg-top bg-cover space-y-1">
                                                        <SidebarItem className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                                            key={index}
                                                            button
                                                            component={Link}
                                                            to={link.to}
                                                            selected={location.pathname === link.to}
                                                            style={{ textAlign: link.alignRight ? 'right' : 'left' }}
                                                        >
                                                            <ListItemIcon>{link.icon}</ListItemIcon>
                                                            <ListItemText primary={link.text} />
                                                        </SidebarItem>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        ))}
                    </List>
                </Sidebar>
            </Hidden>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default DemoSideBar;
