import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import { TelegramUser,TapValue } from './user.model';
import { Inject, Injectable } from '@angular/core';




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
            refBonus: 69420,
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
    {providedIn: 'root'},///this right here will allow every component to access this store
    withState(initialTelegramUserState),//our starting state is this
    withMethods((store)=>({

        updateUserRefBonus(refBonusValue:number){
            patchState(store,{
                telegramUser: {
                    ...store.telegramUser(),///this preserves the data i.e doesn't update the the other data except the data specified below i.e BalanceInfo
                    balanceInfo: {
                        ...store.telegramUser().balanceInfo,
                        refBonus: refBonusValue
                    }
                }
            })
        },

        updateTapValue(newTapValue: TapValue) {
            patchState(store, {
                telegramUser: {
                    ...store.telegramUser(),
                    upgradesInfo: {
                        ...store.telegramUser().upgradesInfo,
                        tapValue: newTapValue
                    }
                }
            });
        }

    }))

);