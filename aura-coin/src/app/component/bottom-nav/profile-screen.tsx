'use client'

import { useContext, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { User, Wallet, History, Eye, EyeOff, Award } from 'lucide-react'
import WebApp from '@twa-dev/sdk'
import { UserContext } from "../main/userContexProvider";



export default function ProfileScreen() {
  const [isProfileVisible, setIsProfileVisible] = useState(true)


  const [id, setId] = useContext(UserContext);
  const [userId, setUserId] = useContext(UserContext);
  const [username, setUsername] = useContext(UserContext);
  const [firstName, setFirstName] = useContext(UserContext);
  const [lastName, setLastName] = useContext(UserContext);
  const [isPremium, setIsPremium] = useContext(UserContext);
  const [isBot, setIsBot] = useContext(UserContext);
  const [userPhotoUrl, setUserPhotoUrl] = useContext(UserContext);

  
 const fetchUserId = async () => {
  try {
    const _userId = new String(WebApp.initDataUnsafe.user);
      setUserId(_userId.toString); // Set the fetched user ID
      
  } catch (error) {
  console.log("error at fetchUserID from telegram SDK")
  } 
 }
  fetchUserId;

  //ui
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8">
      <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
              <p className="text-sm text-gray-400">@{userId}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <Button className="w-full mb-6 bg-green-600 hover:bg-green-700">
            <Award className="mr-2 h-4 w-4" /> Update Badge
          </Button>
          {isProfileVisible && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-400">Rank</p>
                  <p className="text-2xl font-bold">None</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-400">Balance</p>
                  <p className="text-2xl font-bold">$00.00</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-400">Posts</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Wallet className="mr-2 h-4 w-4" /> Wallet
                </Button>
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <History className="mr-2 h-4 w-4" /> History
                </Button>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2">
          <div className="flex items-center justify-between w-full p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Hide Profile</span>
              {isProfileVisible ? <Eye className="w-4 h-4 text-gray-400" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
            </div>
            <Switch
              checked={isProfileVisible}
              onCheckedChange={setIsProfileVisible}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
          <p className="text-xs text-gray-500 px-4">
            Enable this option to hide your Telegram profile from other users.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
  }