"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface DashboardContextType {
  isFocusMode: boolean
  toggleFocusMode: () => void
  setFocusMode: (value: boolean) => void
  isNotificationPanelOpen: boolean
  toggleNotificationPanel: () => void
  setNotificationPanelOpen: (value: boolean) => void
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
  setMobileMenuOpen: (value: boolean) => void
  isMobileNotificationsOpen: boolean
  toggleMobileNotifications: () => void
  setMobileNotificationsOpen: (value: boolean) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [isFocusMode, setIsFocusMode] = useState(false)
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileNotificationsOpen, setIsMobileNotificationsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFocusMode = () => {
    setIsFocusMode((prev) => {
      const newState = !prev
      if (newState) {
        setIsNotificationPanelOpen(false)
        setIsMobileMenuOpen(false)
        setIsMobileNotificationsOpen(false)
      } else {
        setIsNotificationPanelOpen(true)
      }
      return newState
    })
  }

  const setFocusMode = (value: boolean) => {
    setIsFocusMode(value)
    if (value) {
      setIsNotificationPanelOpen(false)
      setIsMobileMenuOpen(false)
      setIsMobileNotificationsOpen(false)
    } else {
      setIsNotificationPanelOpen(true)
    }
  }

  const toggleNotificationPanel = () => setIsNotificationPanelOpen((prev) => !prev)
  const setNotificationPanelOpen = (value: boolean) => setIsNotificationPanelOpen(value)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const setMobileMenuOpen = (value: boolean) => setIsMobileMenuOpen(value)

  const toggleMobileNotifications = () => setIsMobileNotificationsOpen((prev) => !prev)
  const setMobileNotificationsOpen = (value: boolean) => setIsMobileNotificationsOpen(value)

  return (
    <DashboardContext.Provider
      value={{
        isFocusMode,
        toggleFocusMode,
        setFocusMode,
        isNotificationPanelOpen,
        toggleNotificationPanel,
        setNotificationPanelOpen,
        isMobileMenuOpen,
        toggleMobileMenu,
        setMobileMenuOpen,
        isMobileNotificationsOpen,
        toggleMobileNotifications,
        setMobileNotificationsOpen,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
