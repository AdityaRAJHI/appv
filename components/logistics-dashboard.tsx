'use client'

import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { MapPin, Package, Truck, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function LogisticsDashboardComponent() {
  // Mock data for the chart
  const deliveryData = [
    { day: 'Mon', deliveries: 120 },
    { day: 'Tue', deliveries: 140 },
    { day: 'Wed', deliveries: 110 },
    { day: 'Thu', deliveries: 135 },
    { day: 'Fri', deliveries: 150 },
    { day: 'Sat', deliveries: 90 },
    { day: 'Sun', deliveries: 75 },
  ]

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4 hidden md:block">
        <div className="flex items-center mb-6">
          <Truck className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
          <h1 className="text-xl font-bold">Rajinfo.inc</h1>
        </div>
        <nav>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Package className="mr-2 h-4 w-4" /> Deliveries
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Truck className="mr-2 h-4 w-4" /> Fleet
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Users className="mr-2 h-4 w-4" /> Drivers
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <MapPin className="mr-2 h-4 w-4" /> Routes
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Logistics Dashboard</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <p className="text-xs text-muted-foreground">+20% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trucks</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">3 in maintenance</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">On-Time Delivery</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9/5</div>
              <p className="text-xs text-muted-foreground">Based on 1,200 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Live Fleet Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <MapPin className="h-12 w-12 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Map View</span>
            </div>
          </CardContent>
        </Card>

        {/* Active Deliveries */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Active Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((delivery) => (
                <div key={delivery} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  <div className="flex-1">
                    <p className="font-medium">Order #{Math.floor(Math.random() * 10000)}</p>
                    <p className="text-sm text-muted-foreground">En route to Springfield Hardware Store</p>
                  </div>
                  <div className="text-sm text-muted-foreground">ETA: 2h 15m</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Delivery Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Delivery Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deliveryData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="deliveries" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}