import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AiOutlineDashboard, AiOutlineInfoCircle, AiOutlineFolder, AiOutlineAlert, AiOutlineRead, AiOutlineForm, AiOutlineTeam, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';




const DemoSideBar = () => {
    const usenavigate = useNavigate();


    return (
        <>
            <div>
                <List>
                    {[
                        { to: '/home', text: 'Home', icon: <AiOutlineDashboard className="flex-shrink-0 w-5 h-5 mr-4" /> },
                    ].map((link, index) => (
                        <div className="bg-white">
                            <div className="flex-col flex">
                                <div className="flex bg-gray-100 overflow-x-hidden">
                                    <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                                        <div className="flex-col pt-5 flex overflow-y-auto">
                                            <div className="h-full flex-col justify-between px-4 flex">
                                                <div className="space-y-4">
                                                    <div className="bg-top bg-cover space-y-1">
                                                        <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                                            key={index}
                                                            button
                                                            component={Link}
                                                            to={link.to}
                                                        >
                                                            <span><ListItemIcon>{link.icon}</ListItemIcon></span>
                                                            <span>{link.text}</span>
                                                        </div>

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
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default DemoSideBar;
