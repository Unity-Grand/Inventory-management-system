import React from "react";

import { Link, useLocation } from "react-router-dom";

import { FcDebt } from "react-icons/fc";
import { MdOutlineLogout } from "react-icons/md";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/consts/Navigation";
import classNames from "classnames";

const linkClasses =
  "flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sd text-base";
export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 flex flex-col text-white">
      <div className="flex items-center gap-2 py-3 px-10">
        <FcDebt fontSize={40} />
        <span className="text-neutarl-100 text-lg">Stocks Manager</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}

        <Link to="/login">
          <div
            className={classNames("text-red-500 cursor-pointer", linkClasses)}
          >
            <span className="text-xl">{<MdOutlineLogout />}</span>
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
