'use client'


import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import WebApp from '@twa-dev/sdk'



export const UserSetter = ({children}) => {
  const [id, setId] = useContext(UserContext);
  const [userId, setUserId] = useContext(UserContext);
  const [username, setUsername] = useContext(UserContext);
  const [firstName, setFirstName] = useContext(UserContext);
  const [lastName, setLastName] = useContext(UserContext);
  const [isPremium, setIsPremium] = useContext(UserContext);
  const [isBot, setIsBot] = useContext(UserContext);
  const [userPhotoUrl, setUserPhotoUrl] = useContext(UserContext);


  const [balance, setBalance] = useContext(UserContext);
  const [totalBalance, setTotalBalance] = useContext(UserContext);
  const [tapBalance, setTapBalance] = useContext(UserContext);
  const [level, setLevel] = useContext(UserContext);
  const [tapValue, setTapValue] = useContext(UserContext);
  const [timeRefill, setTimeRefill] = useContext(UserContext);

  const [loading, setLoading] = useContext(UserContext);
  const [energy, setEnergy] = useContext(UserContext);
  const [battery, setBattery] = useContext(UserContext);
  const [initialized, setInitialized] = useContext(UserContext);
  const [refBonus, SetRefBonus] = useContext(UserContext);
  const [manualTasks, setManualTasks] = useContext(UserContext);
  const [userManualTasks, setUserManualTasks] = useContext(UserContext);
  const [tasks, setTasks] = useContext(UserContext);
  const [completedTasks, setCompletedTasks] = useContext(UserContext); // State to hold completed tasks
  const [claimedMilestones, setClaimedMilestones] = useContext(UserContext);
  const [claimedReferralRewards, setClaimedReferralRewards] = useContext(UserContext);
  const [referrals, setReferrals] = useContext(UserContext); // State to hold referrals
  const [refiller, setRefiller] = useContext(UserContext);
  const [count, setCount] = useContext(UserContext);
  const [tapGuru, setTapGuru] = useContext(UserContext);
  const [mainTap, setMainTap] = useContext(UserContext);
  const [time, setTime] = useContext(UserContext);
  const [isTimerRunning, setIsTimerRunning] = useContext(UserContext);
  const [freeGuru, setFreeGuru] = useContext(UserContext);
  const [fullTank, setFullTank] = useContext(UserContext);
  const [timeSta, setTimeSta] = useContext(UserContext);
  const [timeStaTank, setTimeStaTank] = useContext(UserContext);
  // eslint-disable-next-line
  const [idme, setIdme] = useContext(UserContext);
  const [totalCount, setTotalCount] = useContext(UserContext);
  const [dividedCount, setDividedCount] = useContext(UserContext);
  const [users, setUsers] = useContext(UserContext);
  const [dividedUsers, setDividedUsers] = useContext(UserContext);
  const [taskCompleted, setTaskCompleted] = useContext(UserContext);
  const [taskCompleted2, setTaskCompleted2] = useContext(UserContext);

  const refillIntervalRef = useRef(null);
  const accumulatedEnergyRef = useRef(energy);
  const [isRefilling, setIsRefilling] = useContext(UserContext);
  const refillDuration = timeRefill.duration * 60 * 1000; // 2 minutes in milliseconds
  const refillSteps = timeRefill.step; // Number of increments
  const incrementValue = refiller / refillSteps; // Amount to increment each step
  const defaultEnergy = refiller; // Default energy value
  
 

 
  const userDetails = () => {
    const telegramUser = WebApp.initDataUnsafe?.user;

    const _userId = telegramUser.userId
    const _username = telegramUser.username
    const _firstname = telegramUser.first_name
    const _lastname = telegramUser.first_name
    const _isPremium = telegramUser.is_premium
    const _photourl = telegramUser.photo_url


    setUsername(_username)
    setUserId(_userId)
    setFirstName(_firstname)
    setLastName(_lastname)
    setIsPremium(_isPremium)
    setUserPhotoUrl(_photourl)
console.log("completed setters")

  }

  useEffect(() => {
    userDetails;
    console.log("completed setters at useeffect")

  }, []);

  
  return children;
};