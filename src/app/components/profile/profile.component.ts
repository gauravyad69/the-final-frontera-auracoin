// profile.component.ts
import { Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user.service';
import { TelegramUserStore } from '../../store/user.store';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  private userService = inject(UserService);
  store = inject(TelegramUserStore);//this injects the store into this component

  
  // Signals
  user = signal<User | null>(null);
  isProfileVisible = signal(true);
  posts = signal(0);
  
  rank = signal('None');
  

  //from store
  balance = this.store.telegramUser.balanceInfo.refBonus;
  // Computed values
  formattedBalance = computed(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(this.balance());
  });

  constructor() {
    // Setup effect to handle profile visibility changes
    effect(() => {
      if (this.isProfileVisible()) {
        console.log('Profile is now visible');
      } else {
        console.log('Profile is now hidden');
      }
    });

    // Initialize user data
    this.initializeUserData();
  }

  private async initializeUserData() {
    try {
      const userData = await this.userService.getCurrentUser();
      this.user.set(userData);
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
  }

  toggleProfile() {
    this.isProfileVisible.update(visible => !visible);
  }

  updateBadge() {
    // Implement badge update logic
    console.log('Updating badge...');
  }

  openWallet() {
    // Implement wallet opening logic
    console.log('Opening wallet...');
  }

  openHistory() {
    // Implement history opening logic
    console.log('Opening history...');
  }
}