// user.service.ts
import { Injectable, signal, computed } from '@angular/core';

interface User {
  id: string;
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  isPremium: boolean;
  isBot: boolean;
  userPhotoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSignal = signal<User>({
    id: '',
    userId: '',
    username: '',
    firstName: '',
    lastName: '',
    isPremium: false,
    isBot: false,
    userPhotoUrl: ''
  });

  // Computed user properties
  readonly fullName = computed(() => {
    const user = this.userSignal();
    return `${user.firstName} ${user.lastName}`.trim();
  });

  readonly isAuthenticated = computed(() => {
    return !!this.userSignal().id;
  });

  async getCurrentUser(): Promise<User> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.userSignal());
      }, 500);
    });
  }

  updateUser(userData: Partial<User>) {
    this.userSignal.update(currentUser => ({
      ...currentUser,
      ...userData
    }));
  }
}