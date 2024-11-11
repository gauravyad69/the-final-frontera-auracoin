import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { LucideAngularModule } from 'lucide-angular';
import { Users, Copy, CheckCircle, Coins } from 'lucide-angular';
import { TelegramUserStore } from '../../store/user.store';
import WebApp from '@twa-dev/sdk';


interface Referral {
  userId: string;
  username: string;
  balance: number;
  referrals: number;
}

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss'
})
export class FriendsComponent {
  private clipboard = inject(Clipboard);
  store = inject(TelegramUserStore);

  userInfo = this.store.telegramUser.userInfo;

  // Lucide Icons
  readonly Users = Users;
  readonly Copy = Copy;
  readonly CheckCircle = CheckCircle;
  readonly Coins = Coins;

  copied = signal(false);
  inviteLink = signal('https://t.me/auracoin_robot/auracoin?startapp=ref_'+WebApp.initDataUnsafe.user?.id);

  // Instead, create a computed signal that will update automatically
  referrals = computed(() => this.store.telegramUser.userInfo().referrals || []);

  copyToClipboard() {
    this.clipboard.copy(this.inviteLink());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }

  claimCoins() {
    // Implement the logic to claim coins here
    alert('Coins claimed successfully!');
  }

}
