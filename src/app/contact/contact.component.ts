import { Component } from '@angular/core';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent {
	goto(x: string): void {
		window.location.href = x;
	}
}
