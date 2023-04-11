import { Component } from '@angular/core';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

@Component({
  selector: 'app-ventana-e',
  templateUrl: './ventana-e.component.html',
  styleUrls: ['./ventana-e.component.css']
})
export class VentanaEComponent {
  currentDate: Date = new Date();
  days: CalendarDay[] = [];
  weeks: CalendarDay[][] = [];

  constructor() {
    this.generateCalendar();
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
    this.generateCalendar();
  }

  generateCalendar() {
    const startOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const endOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);

    const monthStartIndex = startOfMonth.getDay();
    const daysInMonth = endOfMonth.getDate();

    const daysInPreviousMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();
    const daysInNextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();

    const days: CalendarDay[] = [];

    for (let i = monthStartIndex - 1; i >= 0; i--) {
      days.push({
        date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, daysInPreviousMonth - i),
        isCurrentMonth: false,
        isToday: false
      });
    }

    for (let i = 0; i < daysInMonth; i++) {
      const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i + 1);
      days.push({
        date: date,
        isCurrentMonth: true,
        isToday: this.isToday(date)
      });
    }

    const daysNeeded = 42 - days.length;

    for (let i = 0; i < daysNeeded; i++) {
      days.push({
        date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, i + 1),
        isCurrentMonth: false,
        isToday: false
      });
    }

    this.days = days;

    const weeks: CalendarDay[][] = [];
    for (let i = 0; i < this.days.length; i += 7) {
      weeks.push(this.days.slice(i, i + 7));
    }
    this.weeks = weeks;
  }

  isToday(date: Date) {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
  }
}
