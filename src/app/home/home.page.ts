import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  minDate: string = new Date().toISOString();
  maxDate: string = new Date(new Date().getFullYear() + 5, new Date().getMonth(), new Date().getDate()).toISOString();
  selectedDate: Date | null = null;
  dateList: any[] = [];
  submitted = false;

  public isDatePickerOpen: boolean = false;


  constructor() { }

  openDateTimePicker() {
    this.isDatePickerOpen = true;
  }


  closeDateTimePicker() {
    this.isDatePickerOpen = false;
  }


  onDateChange(event: any) {
    this.selectedDate = new Date(event.detail.value);;
    this.closeDateTimePicker();
  }

  onSubmit(event: any) {
    event.preventDefault()
    if (this.selectedDate) {
      const currentDate = new Date();
      const selectedDateObject = new Date(this.selectedDate); 
    
      this.dateList = [
        { label: 'Today', date: currentDate.toLocaleDateString() },
        { label: 'Yesterday', date: new Date(currentDate.getTime() - 86400000).toLocaleDateString() },
        { label: '10 days past selected date', date: new Date(selectedDateObject.getTime() - 864000000).toLocaleDateString() },
        { label: '1 year past selected date', date: new Date(selectedDateObject.getFullYear() - 1, selectedDateObject.getMonth(), selectedDateObject.getDate()).toLocaleDateString() }
      ];
      this.submitted = true;
    }
  }


}
