import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const AccountButtons = () => {
  return (
    <div className="flex justify-center items-center border rounded-md shadow-sm overflow-hidden hover:bg-accent-foreground transition text-foreground/90 justify-self-start">
                    <SignedOut>
                        <SignInButton>
                            <div className="px-4 py-2 hover:cursor-pointer bg-background/40 font-medium text-sm">
                                Войти
                            </div>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <div className="px-4 py-2 flex justify-center items-center w-12 h-10 bg-background/40">
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
  )
}

export default AccountButtons