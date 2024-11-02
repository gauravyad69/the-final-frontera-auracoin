'use client'

import React from 'react';
import { useState, useEffect } from 'react'
import { HomeIcon, ClipboardListIcon, UsersIcon, PuzzleIcon, UserIcon } from 'lucide-react'
import HomeScreen from './home-screen.tsx'
import TasksScreen from './tasks-screen.tsx'
import FrensScreen from './frens-screen.tsx'
import GamesScreen from './games-screen.tsx'
import ProfileScreen from './profile-screen.tsx'

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('home')
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false })

  const tabs = [
    { id: 'home', label: 'Home', icon: HomeIcon, component: HomeScreen },
    { id: 'tasks', label: 'Tasks', icon: ClipboardListIcon, component: TasksScreen },
    { id: 'frens', label: 'Frens', icon: UsersIcon, component: FrensScreen },
    { id: 'games', label: 'Games', icon: PuzzleIcon, component: GamesScreen },
    { id: 'profile', label: 'Profile', icon: UserIcon, component: ProfileScreen },
  ]

  const handleTabClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setRipple({ x, y, active: true })
    setActiveTab(id)

    setTimeout(() => setRipple({ x: 0, y: 0, active: false }), 500)
  }

  const ActiveScreen = tabs.find(tab => tab.id === activeTab)?.component || HomeScreen

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <ActiveScreen />
      </div>

      <nav className="bg-gray-800 text-gray-300 fixed bottom-0 w-full">
        <ul className="flex justify-between items-center px-4 py-2">
          {tabs.map((tab) => (
            <li key={tab.id} className="flex-1">
              <button
                onClick={(e) => handleTabClick(tab.id, e)}
                className={`relative flex flex-col items-center justify-center w-full py-2 overflow-hidden ${
                  activeTab === tab.id ? 'text-blue-400' : 'hover:text-gray-100'
                }`}
              >
                <tab.icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{tab.label}</span>
                {ripple.active && activeTab === tab.id && (
                  <span
                    className="absolute bg-white opacity-25 rounded-full animate-ripple"
                    style={{
                      width: 200,
                      height: 200,
                      left: ripple.x - 100,
                      top: ripple.y - 100,
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}