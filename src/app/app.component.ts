import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { SignalComponent } from './signal/signal.component'

interface UserInterface {
  id: string
  name: string
  role: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hasUserData: boolean = false
  users = signal<UserInterface[]>([
    { id: '1', name: 'foo', role: 'developer' },
    { id: '2', name: 'bar', role: 'admin' },
    { id: '3', name: 'baz', role: 'qa' },
  ])

  user = this.users()[0]
}
