import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.sass'
})
export class MessagesComponent {
  // Q: how come this is a public access?
  // A: since component has to access this message service, that's why
  constructor(public messageService: MessageService) { }
}
