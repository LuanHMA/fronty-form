'use client'

import * as Popover from '@radix-ui/react-popover'
import { SignOut, User } from '@phosphor-icons/react'
import Link from 'next/link'
import { useAuth } from '@/context/auth/provider'

export default function UserMenu() {
  const { user, logout } = useAuth()

  if (user) {
    return (
      <Popover.Root>
        <Popover.Trigger
          className="border rounded-full w-10 h-10 flex justify-center items-center bg-neutral-50"
          asChild
        >
          <button className="relative cursor-pointer">
            <User
              size={20}
              className="hover:text-minera-dark-500 "
            />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className="mr-6 w-72 rounded-lg border border-neutral-100 bg-neutral-0 p-[2px] data-[state=closed]:animate-close data-[state=open]:animate-open "
            sideOffset={5}
          >

            <ul className="flex flex-col gap-4 d">
              <li className="pt-4 px-6">
                <Link
                  className="flex w-full items-center gap-3 text-sm text-neutral-900"
                  href={`/app/profile`}
                >
                  <User
                    className="text-neutral-600"
                    size={18}
                  />
                  Minha Conta
                </Link>
              </li>
              <li className="pb-4 border-t px-6 pt-4 ">
                <button
                  className="flex w-full items-center gap-3 text-sm text-neutral-900  hover:text-danger-dark"
                  onClick={logout}
                >
                  <SignOut
                    className="  text-danger-dark"
                    size={18}
                  />
                  Deslogar
                </button>
              </li>
            </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    )
  }
}
