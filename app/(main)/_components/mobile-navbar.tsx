// import { checkRole } from '@/app/utils/check-role'
import AccountButtons from '@/components/account-buttons'
import NavbarRoutes from '@/components/navbar-routes'
import RoleButton from '@/components/role-button'
import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { LucideShieldAlert, Pencil, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileNavbar = ({
    children
}: {
    children: React.ReactNode
}) => {

  return (
    <div className='h-[65px] flex justify-end items-center px-3 bg-background rounded-s-xl gap-1.5'>
        <NavbarRoutes>
            {children}
        </NavbarRoutes>
        <SheetClose>
            <div className='p-2 hover:bg-red-500 active:bg-red-400 rounded-md transition-colors'>
                <X className='w-6 h-6'/>
            </div>
        </SheetClose>
    </div>
  )
}

export default MobileNavbar