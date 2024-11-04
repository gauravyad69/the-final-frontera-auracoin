import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileIcon, Home, Trophy, CheckSquare, Users, User } from 'lucide-angular';


@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  
  templateUrl:'./bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  readonly FileIcon = FileIcon;
  readonly Home = Home;
  readonly Trophy = Trophy;
  readonly CheckSquare = CheckSquare;
  readonly Users = Users;
  readonly User = User;


}
