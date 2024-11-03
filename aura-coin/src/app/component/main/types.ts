// import { Dispatch, SetStateAction, MutableRefObject } from 'react';

// export interface TelegramUser {
//   userInfo: UserInfo;
//   balanceInfo: BalanceInfo;
//   upgradesInfo: UpgradesInfo;
//   taskInfo: TaskInfo;
// }

// export interface UserInfo {
//   userId: string;
//   username: string;
//   firstName: string;
//   lastName?: string;
//   refereeId?: string;
//   referrals: Referral[];
// }

// export interface BalanceInfo {
//   totalBalance: number;
//   balance: number;
//   tapBalance: number;
//   refBonus: number;
//   energy: number;
// }

// export interface TaskInfo {
//   tasksCompleted: string[];
//   manualTasks: string[];
// }

// export interface UpgradesInfo {
//   freeGuru: number;
//   fullTank: number;
//   timeSta: number | null;
//   timeStaTank: number | null;
//   tapValue: TapValue;
//   timeRefill: TimeRefill;
//   level: Level;
//   battery: Battery;
// }

// export interface TapValue {
//   level: number;
//   value: number;
// }

// export interface TimeRefill {
//   level: number;
//   duration: number;
//   step: number;
// }

// export interface Level {
//   id: number;
//   name: string;
//   imgUrl: string;
// }

// export interface Battery {
//   level: number;
//   energy: number;
// }

// export interface Referral {
//   userId: string;
//   username: string;
//   balance: number;
//   level: Level;
// }


// export interface Task {
//   // Define task properties here
//   id: string;
//   title: string;
//   // Add other properties as needed
// }

// export interface Milestone {
//   // Define milestone properties here
//   id: string;
//   title: string;
//   // Add other properties as needed
// }

// export interface Reward {
//   // Define reward properties here
//   id: string;
//   title: string;
//   // Add other properties as needed
// }

// export interface UserContextProps {
//   balance: number;
//   battery: Battery;
//   freeGuru: number;
//   fullTank: number;
//   taskCompleted: boolean;
//   taskCompleted2: boolean;
//   timeStaTank: Date | null;
//   timeSta: Date | null;
//   time: number;
//   tapGuru: boolean;
//   mainTap: boolean;
//   timeRefill: TimeRefill;
//   refiller: number;
//   count: number;
//   isRefilling: boolean;
//   refillIntervalRef: MutableRefObject<NodeJS.Timeout | null>;
//   tapValue: TapValue;
//   tapBalance: number;
//   level: Level;
//   energy: number;
//   loading: boolean;
//   id: string;
//   initialized: boolean;
//   refBonus: number;
//   manualTasks: Task[];
//   userManualTasks: Task[];
//   tasks: Task[];
//   completedTasks: Task[];
//   claimedMilestones: Milestone[];
//   referrals: Referral[];
//   claimedReferralRewards: Reward[];
//   idme: string;
//   totalCount: number;
//   dividedCount: number;
//   users: number;
//   dividedUsers: number;
//   username: string;

//   setBalance: Dispatch<SetStateAction<number>>;
//   setBattery: Dispatch<SetStateAction<Battery>>;
//   setFreeGuru: Dispatch<SetStateAction<number>>;
//   setFullTank: Dispatch<SetStateAction<number>>;
//   setTaskCompleted: Dispatch<SetStateAction<boolean>>;
//   setTaskCompleted2: Dispatch<SetStateAction<boolean>>;
//   setTimeStaTank: Dispatch<SetStateAction<Date | null>>;
//   setTimeSta: Dispatch<SetStateAction<Date | null>>;
//   setTime: Dispatch<SetStateAction<number>>;
//   setTapGuru: Dispatch<SetStateAction<boolean>>;
//   setMainTap: Dispatch<SetStateAction<boolean>>;
//   setTimeRefill: Dispatch<SetStateAction<TimeRefill>>;
//   setRefiller: Dispatch<SetStateAction<number>>;
//   setCount: Dispatch<SetStateAction<number>>;
//   setIsRefilling: Dispatch<SetStateAction<boolean>>;
//   setTapValue: Dispatch<SetStateAction<TapValue>>;
//   setTapBalance: Dispatch<SetStateAction<number>>;
//   setLevel: Dispatch<SetStateAction<Level>>;
//   setEnergy: Dispatch<SetStateAction<number>>;
//   setLoading: Dispatch<SetStateAction<boolean>>;
//   setId: Dispatch<SetStateAction<string>>;
//   setInitialized: Dispatch<SetStateAction<boolean>>;
//   SetRefBonus: Dispatch<SetStateAction<number>>;
//   setManualTasks: Dispatch<SetStateAction<Task[]>>;
//   setUserManualTasks: Dispatch<SetStateAction<Task[]>>;
//   setTasks: Dispatch<SetStateAction<Task[]>>;
//   setCompletedTasks: Dispatch<SetStateAction<Task[]>>;
//   setClaimedMilestones: Dispatch<SetStateAction<Milestone[]>>;
//   setClaimedReferralRewards: Dispatch<SetStateAction<Reward[]>>;
//   setIdme: Dispatch<SetStateAction<string>>;
//   setTotalCount: Dispatch<SetStateAction<number>>;
//   setDividedCount: Dispatch<SetStateAction<number>>;
//   setUsers: Dispatch<SetStateAction<number>>;
//   setDividedUsers: Dispatch<SetStateAction<number>>;
//   setUsername: Dispatch<SetStateAction<string>>;

//   startTimer: () => void;
//   sendUserData: () => Promise<void>;
//   refillEnergy: () => void;
//   checkAndUpdateFreeGuru: () => Promise<void>;
//   checkAndUpdateFullTank: () => Promise<void>;
//   fetchData: (userId: string) => Promise<void>;
//   fetchReferrals: () => Promise<void>;
//   updateUserLevel: (userId: string, newTapBalance: number) => Promise<void>;
//   fetchTotalCountFromFirestore: () => Promise<number>;
//   fetchAllUsers: () => Promise<void>;
//   calculateDividedCount: (count: number) => number;
// }