import React, { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { Link, useLocation, useNavigate } from "react-router-dom";
import knm from "../assets/logo/knm.png";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { LucideRoute, Store, Menu, X } from 'lucide-react';

export default function SideBar({ children }) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  return (
    <div className="card flex justify-content-center">
      <div className="fixed top-0 z-[999] w-full bg-white">
        <div className="w-full h-13 shadow-md flex flex-row px-3 items-center">
          <Menu onClick={()=>setVisible(true)} className="cursor-pointer"/>
        </div>
      </div>
      <div className="mt-16 mb-2 mx-3 w-full">
        <Outlet/>
      </div>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ closeIconRef, hide }) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between w-full pt-3 flex-shrink-0 align-middle flex-row m-2 items-center">
                  <img src={knm} width="50px" height="50px"></img>
                  <span className="font-semibold text-xl text-primary">
                    Desa Leuwikidang
                  </span>
                  <X className="cursor-pointer"
                    onClick={() => setVisible(false)}/>
                </div>
                <div className="flex flex-col mx-5 mt-7">
                  <Link
                    to="/dashboard"
                    className={`flex flex-row gap-2 p-3 hover:bg-green-200  ${
                      location.pathname == "/dashboard" ? "bg-green-200" : ""
                    }`}
                  >
                    <LucideRoute color="gray"/>
                    <span>Home</span>
                  </Link>
                  <Link
                    to="umkm"
                    className={`flex flex-row gap-2 p-3 hover:bg-green-200 ${
                      location.pathname == "/dashboard/umkm"
                        ? "bg-green-200"
                        : ""
                    }`}
                  >
                    <Store color="gray"/> <span>UMKM</span>
                  </Link>
                </div>
                {/* <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a  className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div> */}
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
}
