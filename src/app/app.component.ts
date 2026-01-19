import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  people: Person[] = [];
  loading = false;
  error = '';

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.loading = true;
    this.error = '';
    this.peopleService.getPeople().subscribe({
      next: (data) => {
        this.people = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load people';
        this.loading = false;
      },
    });
  }
}
