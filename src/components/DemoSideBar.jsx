import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AiOutlineDashboard, AiOutlineInfoCircle, AiOutlineFolder, AiOutlineAlert, AiOutlineRead, AiOutlineForm, AiOutlineTeam, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { LuListTodo } from "react-icons/lu";

const SidebarItem = styled(ListItem)(({ theme }) => ({

}));





const DemoSideBar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }} className="flex bg-gray-100 overflow-x-hidden">
            <div className="bg-white">
                <div className="flex-col flex">
                    <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                        <div className="flex-col pt-5 flex overflow-y-auto">
                            <div className="h-full flex-col justify-between px-4 flex">
                                <div className="space-y-2">
                                    <div>
                                        <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Analysis</p>
                                        <List className="bg-top bg-cover space-y-1">
                                            {[
                                                { to: '/dashboard', text: 'Dashboard', icon: <AiOutlineDashboard className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                                { to: '/home', text: 'Kanban', icon: <LuListTodo className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                            ].map((link, index) => (
                                                <SidebarItem className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex space-x-4
                                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                                    key={index}
                                                    button
                                                    component={Link}
                                                    to={link.to}
                                                >
                                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                        <span>{link.icon}</span>
                                                        <span>{link.text}</span>
                                                    </div>


                                                </SidebarItem>
                                            ))}
                                        </List>
                                    </div>

                                    <div>
                                        <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Data</p>
                                        <List className="bg-top bg-cover space-y-1">
                                            {[
                                                { to: '/home', text: 'Folder', icon: <AiOutlineFolder className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                                { to: '/contact', text: 'Alerts', icon: <AiOutlineAlert className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                                { to: '/contact', text: 'News', icon: <AiOutlineRead className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                            ].map((link, index) => (
                                                <SidebarItem className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                                    key={index}
                                                    button
                                                    component={Link}
                                                    to={link.to}
                                                    style={{ textAlign: link.alignRight ? 'right' : 'left' }}
                                                >
                                                    <span>{link.icon}</span>
                                                    <span>{link.text}</span>
                                                </SidebarItem>
                                            ))}
                                        </List>
                                    </div>
                                    <div>
                                        <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Contact</p>
                                        <List className="bg-top bg-cover space-y-1">
                                            {[
                                                { to: '/home', text: 'Forms', count: '5', icon: <AiOutlineForm className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                                { to: '/contact', text: 'Agent', count: '10', icon: <AiOutlineTeam className="mr-4" width="24" height="24" /> },
                                                { to: '/home', text: 'Customer', count: '20', icon: <AiOutlineUser className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                                { to: '/about', text: 'About', count: '0', icon: <AiOutlineInfoCircle className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                            ].map((link, index) => (
                                                <SidebarItem className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                                    key={index}
                                                    button
                                                    component={Link}
                                                    to={link.to}
                                                    style={{ textAlign: link.alignRight ? 'right' : 'left' }}
                                                >
                                                    <span>{link.icon}</span>
                                                    <span>{link.text}</span>
                                                    {link.count !== '0' && (
                                                        <span className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-gray-500 text-white
                rounded-full uppercase border border-transparent inline-flex">
                                                            {link.count}
                                                        </span>
                                                    )}
                                                </SidebarItem>
                                            ))}
                                        </List>
                                    </div>
                                </div>
                                <div className="mt-12 pb-4">
                                    <div className="bg-top bg-cover space-y-1">
                                        <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Others</p>
                                        <List className="bg-top bg-cover space-y-1">
                                            {[
                                                { to: '/home', text: 'Profile', icon: <AiOutlineUser className="flex-shrink-0 w-5 h-5 mr-4" /> },
                                            ].map((link, index) => (
                                                <SidebarItem className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                                    key={index}
                                                    button
                                                    component={Link}
                                                    to={link.to}
                                                    style={{ textAlign: link.alignRight ? 'right' : 'left' }}
                                                >
                                                    <span>{link.icon}</span>
                                                    <span>{link.text}</span>
                                                </SidebarItem>
                                            ))}
                                        </List>
                                        <Link to='/login' className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                            <AiOutlineLogout className="mr-4" width="24" height="24" />
                                            <span>Logout</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default DemoSideBar;
