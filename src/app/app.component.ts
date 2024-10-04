import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HomeComponent, RouterLink, RouterLinkActive],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	menu = false;
	show(): void {
		if(this.menu == false){
			document.querySelector("#menu")?.classList.remove("h-0");
			document.querySelector("#menu")?.classList.add("h-full");
			this.menu = true;
		}else{
			document.querySelector("#menu")?.classList.add("h-0");
			document.querySelector("#menu")?.classList.remove("h-full");
			this.menu = false;
		}
	}
	title = 'Daniel Web Dev';
}

