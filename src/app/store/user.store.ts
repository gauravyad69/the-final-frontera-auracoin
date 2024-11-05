import {signalStore, withState} from '@ngrx/signals';
import { TelegramUser } from './user.model';

type TelegramUserState = {
    telegramUser: TelegramUser;
}

const initialTelegramUserState: TelegramUserState={
    telegramUser: {
        userInfo: {
            userId: '',
            username: '',
            firstName: '',
            referrals: []
        },
        balanceInfo: {
            totalBalance: 69,
            balance: 69,
            tapBalance: 0,
            refBonus: 0,
            energy: 0
        },
        upgradesInfo: {
            freeGuru: 0,
            fullTank: 0,
            timeSta: null,
            timeStaTank: null,
            tapValue: { level: 0, value: 0 },
            timeRefill: { level: 0, duration: 0, step: 0 },
            level: { id: 0, name: '', imgUrl: '' },
            battery: { level: 0, energy: 0 }
        },
        taskInfo: {
            tasksCompleted: [],
            manualTasks: []
        }
    }
}



export const TelegramUserStore = signalStore(
    withState(initialTelegramUserState)
);