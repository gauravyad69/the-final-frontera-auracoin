export interface TelegramUser {
    userInfo: UserInfo;
    balanceInfo: BalanceInfo;
    upgradesInfo: UpgradesInfo;
    taskInfo: TaskInfo;
  }
  
  export interface UserInfo {
    userId: string;
    username: string;
    firstName: string;
    lastName?: string;
    refereeId?: string;
    referrals: Referral[];
  }
  
  export interface BalanceInfo {
    totalBalance: number;
    balance: number;
    tapBalance: number;
    refBonus: number;
    energy: number;
  }
  
  export interface TaskInfo {
    tasksCompleted: string[];
    manualTasks: string[];
  }
  
  export interface UpgradesInfo {
    freeGuru: number;
    fullTank: number;
    timeSta: number | null;
    timeStaTank: number | null;
    tapValue: TapValue;
    timeRefill: TimeRefill;
    level: Level;
    battery: Battery;
  }
  
  export interface TapValue {
    level: number;
    value: number;
  }
  
  export interface TimeRefill {
    level: number;
    duration: number;
    step: number;
  }
  
  export interface Level {
    id: number;
    name: string;
    imgUrl: string;
  }
  
  export interface Battery {
    level: number;
    energy: number;
  }
  
  export interface Referral {
    userId: string;
    username: string;
    balance: number;
    level: Level;
  }
  
  
  export interface Task {
    // Define task properties here
    id: string;
    title: string;
    // Add other properties as needed
  }
  
  export interface Milestone {
    // Define milestone properties here
    id: string;
    title: string;
    // Add other properties as needed
  }
  
  export interface Reward {
    // Define reward properties here
    id: string;
    title: string;
    // Add other properties as needed
  }