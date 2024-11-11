import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TelegramUser, TimeRefill, Level, Battery, TapValue, Referral } from '../store/user.model';
import { Observable } from 'rxjs';
import { TelegramUserStore } from '../store/user.store';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASE_API_URL = 'https://api.auracoin.tech';
  private headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
  ) {
    // Initialize headers with token if it exists
    const token = localStorage.getItem('token');
    if (token) {
      this.setAuthToken(token);
    }
  }

  private setAuthToken(token: string): void {
    localStorage.setItem('token', token);
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Auth methods
  login(userId: string, username: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.BASE_API_URL}/login`, { userId, username }, { headers: this.headers });
  }



  register(userId: string, username: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.BASE_API_URL}/register`, { userId, username })
      .pipe(
        tap(response => {
          if (response.token) {
            this.setAuthToken(response.token);
          }
        })
      );
  }

  // User methods
  getTelegramUser(): Observable<TelegramUser> {
    console.log("trying to get TelegramUser from the api (api.services.ts)")
    return this.http.get<TelegramUser>(`${this.BASE_API_URL}/telegramUser`, { headers: this.headers });
  }

  checkIfUserExistsInDB(userId: string, username: string): Observable<number> {
    console.log("trying to get checkUserResponse from the api (api.services.ts)")
    return this.http.post(`${this.BASE_API_URL}/exists`, 
      { 
        userId, 
        username 
      }, 
      { 
        observe: 'response'
      }
    ).pipe(
      map(response => response.status)
    );
  }

  
  updateTelegramUser(updatedData: Partial<TelegramUser>): Observable<TelegramUser> {
    return this.http.patch<TelegramUser>(`${this.BASE_API_URL}/telegramUser`, updatedData, { headers: this.headers });
  }

  // Balance and Energy methods
  updateBalance(newBalance: number): Observable<TelegramUser> {
    return this.http.patch<TelegramUser>(`${this.BASE_API_URL}/balance`, { balance: newBalance }, { headers: this.headers });
  }

  updateEnergy(newEnergy: number): Observable<TelegramUser> {
    return this.http.patch<TelegramUser>(`${this.BASE_API_URL}/energy`, { energy: newEnergy }, { headers: this.headers });
  }

  updateTapBalance(newTapBalance: number): Observable<TelegramUser> {
    return this.http.patch<TelegramUser>(`${this.BASE_API_URL}/tapBalance`, { tapBalance: newTapBalance }, { headers: this.headers });
  }

  // Tap Value methods
  updateUserTapValue(newTapValue: TapValue): Observable<TapValue> {
    return this.http.put<TapValue>(`${this.BASE_API_URL}/tapValue`, newTapValue, { headers: this.headers });
  }


  //api method to create a new user (post) returns the created user
  createTelegramUser(userId: string, username: string,refereeId: number|null, firstName: string, lastName:string, isPremium:boolean, profilePicture:string|null ): Observable<TelegramUser> {
    const initialUser: TelegramUser = {
      userInfo: {
        userId,
        username,
        firstName:  firstName,
        lastName: lastName,
        isPremium: isPremium,
        refereeId: refereeId,
        profilePicture: profilePicture,
        refereeUsername: null,
        referrals: []
      },
      balanceInfo: {
        totalBalance: 0,
        balance: 0,
        tapBalance: 0,
        refBonus: 0,
        energy: 0
      },
      upgradesInfo: {
        freeGuru: 0,
        fullTank: 0,
        timeSta: null,
        timeStaTank: null,
        tapValue: {
          level: 1,
          value: 1
        },
        timeRefill: {
          level: 1,
          duration: 60,
          step: 1
        },
        level: {
          id: 1,
          name: "Beginner",
          imgUrl: ""
        },
        battery: {
          level: 1,
          energy: 100
        }
      },
      taskInfo: {
        tasksCompleted: [],
        manualTasks: []
      }
    };

    return this.http.post<TelegramUser>(`${this.BASE_API_URL}/telegramUser`,initialUser, { headers: this.headers });
  }

  // Other methods can be added similarly...
} 