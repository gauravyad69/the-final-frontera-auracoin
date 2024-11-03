'use client'

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import WebApp from '@twa-dev/sdk'

export const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [isBot, setIsBot] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState("");


  const telegramUser = WebApp.initDataUnsafe?.user;



  const [balance, setBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [tapBalance, setTapBalance] = useState(0);
  const [level, setLevel] = useState({ id: 1, name: "Bronze", imgUrl: '/bronze.webp' }); // Initial level as an object with id and name
  const [tapValue, setTapValue] = useState({level: 1, value: 1});
  const [timeRefill, setTimeRefill] = useState({level: 1, duration: 10, step: 600});

  const [loading, setLoading] = useState(true);
  const [energy, setEnergy] = useState(500);
  const [battery, setBattery] = useState({level: 1, energy: 500});
  const [initialized, setInitialized] = useState(false);
  const [refBonus, SetRefBonus] = useState(0);
  const [manualTasks, setManualTasks] = useState([]);
  const [userManualTasks, setUserManualTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]); // State to hold completed tasks
  const [claimedMilestones, setClaimedMilestones] = useState([]);
  const [claimedReferralRewards, setClaimedReferralRewards] = useState([]);
  const [referrals, setReferrals] = useState([]); // State to hold referrals
  const [refiller, setRefiller] = useState(0);
  const [count, setCount] = useState(0);
  const [tapGuru, setTapGuru] = useState(false);
  const [mainTap, setMainTap] = useState(true);
  const [time, setTime] = useState(22);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [freeGuru, setFreeGuru] = useState(3);
  const [fullTank, setFullTank] = useState(3);
  const [timeSta, setTimeSta] = useState(null);
  const [timeStaTank, setTimeStaTank] = useState(null);
  // eslint-disable-next-line
  const [idme, setIdme] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [dividedCount, setDividedCount] = useState(0);
  const [users, setUsers] = useState(0);
  const [dividedUsers, setDividedUsers] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskCompleted2, setTaskCompleted2] = useState(false);

  const refillIntervalRef = useRef(null);
  const accumulatedEnergyRef = useRef(energy);
  const [isRefilling, setIsRefilling] = useState(false);
  const refillDuration = timeRefill.duration * 60 * 1000; // 2 minutes in milliseconds
  const refillSteps = timeRefill.step; // Number of increments
  const incrementValue = refiller / refillSteps; // Amount to increment each step
  const defaultEnergy = refiller; // Default energy value
  
 

  return (
    <UserContext.Provider 
    value={{ balance, battery, freeGuru, fullTank, taskCompleted, setTaskCompleted, taskCompleted2, setTaskCompleted2, setFullTank, timeStaTank, setTimeStaTank, timeSta, setFreeGuru, time, setTime, startTimer, tapGuru, setTapGuru, mainTap, setMainTap, timeRefill, setTimeRefill, refiller, setRefiller, count, setCount, isRefilling, setIsRefilling, refillIntervalRef, setBattery, refillEnergy, tapValue, setTapValue, tapBalance, setTapBalance, level, energy, setEnergy, setBalance, setLevel, loading, setLoading, id, setId, sendUserData, initialized, setInitialized, refBonus, SetRefBonus, manualTasks, setManualTasks, userManualTasks, setUserManualTasks, tasks, setTasks, completedTasks, setCompletedTasks, claimedMilestones, setClaimedMilestones, referrals, claimedReferralRewards, setClaimedReferralRewards, idme, setIdme, totalCount, setTotalCount, dividedCount, setDividedCount, users, setUsers, dividedUsers, setDividedUsers, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};