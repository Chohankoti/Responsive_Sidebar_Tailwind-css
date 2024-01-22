import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineInfoCircle, AiOutlineFolder, AiOutlineAlert, AiOutlineRead, AiOutlineForm, AiOutlineTeam, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';

function Sidebar({ onSidebarClick }) {
    return (
        <div>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0"></div>
            <div className="bg-white"></div>
            <div className="bg-white">
                <div className="flex-col flex">
                    <div className="w-full border-b-2 border-gray-200"></div>
                    <div className="flex bg-gray-100 overflow-x-hidden">
                        <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <Link
                                                to="/dashboard"
                                                onClick={() => onSidebarClick('/dashboard')}
                                                className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                            >
                                                <AiOutlineDashboard className="flex-shrink-0 w-5 h-5 mr-4" />
                                                <span>Dashboard</span>
                                            </Link>
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <AiOutlineInfoCircle className="flex-shrink-0 w-5 h-5 mr-4" />
                                                <span>About</span>
                                            </a>
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <AiOutlineInfoCircle className="flex-shrink-0 w-5 h-5 mr-4" />
                                                <span>About</span>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Data</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                    <AiOutlineFolder className="flex-shrink-0 w-5 h-5 mr-4" />
                                                    <span>Folder</span>
                                                </a>
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                    <AiOutlineAlert className="flex-shrink-0 w-5 h-5 mr-4" />
                                                    <span>Alert</span>
                                                </a>
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                    <AiOutlineRead className="flex-shrink-0 w-5 h-5 mr-4" />
                                                    <span>News</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Contact</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                    <AiOutlineForm className="flex-shrink-0 w-5 h-5 mr-4" />
                                                    <span>Forms</span>
                                                    <span className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-gray-500 text-white
                        rounded-full uppercase border border-transparent inline-flex">15</span>
                                                </a>
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer" >
                                                    <AiOutlineTeam className="mr-4" width="24" height="24" />
                                                    <span>Agents</span>
                                                </a>
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                      transition-all duration-200 hover-bg-gray-200 group cursor-pointer">
                                                    <AiOutlineUser className="flex-shrink-0 w-5 h-5 mr-4" />
                                                    <span>Customers</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 pb-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Others</p>
                                            <a href="Logout" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <AiOutlineLogout className="mr-4" width="24" height="24" />
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
