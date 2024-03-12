import {
  Component,
  computed,
  signal,
  effect,
  inject,
  OnInit,
  Signal,
} from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { InfoService } from '../info.service'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { CardModule } from 'primeng/card'

interface UserInterface {
  id: string
  name: string
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  private infoService = inject(InfoService)
  posts: any



  constructor() {
    // TODO Task 4: use toSignal to convert observables to signals
 

    // TODO Task 5: use toObservable to convert signals to observables
  
  }

  // TODO Task 1: create a signal for the users


  // TODO Task 2: create a computed signal for the number of users


  addUser() {
    // TODO Task 1: update the users signal with a new user
   
  }


  
  // TODO Task 3: create a effect to log the users when they change
  // Effect to log the full name and adult status whenever any of the signals change

}
