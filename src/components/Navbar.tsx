'use client'      //'for ui manupulation or using react(this is now a clint side work place ) '

import React, { useState } from "react";
import {HoveredLink, Menu, MenuItem,  } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        {/* home section */}
        <Menu setActive={setActive}>
            <Link href={'/'}>
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            {/* courses section  */}
            <MenuItem setActive={setActive} active={active} item="our courses">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href={'/'}>All courses</HoveredLink>
                    <HoveredLink href={'/'}>Basic Music Theory</HoveredLink>
                    <HoveredLink href={'/'}>Advance Composdition</HoveredLink>
                    <HoveredLink href={'/'}>SongWritting</HoveredLink>
                    <HoveredLink href={'/'}>Music Production</HoveredLink>
                    <HoveredLink href={'/'}>Mixing</HoveredLink>
                </div>
            </MenuItem>
            {/* contact us section */}
            <Link href={'/contact'}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                    
                </MenuItem>
            </Link>

        </Menu>
        
        
        </div>
  )
}

export default Navbar