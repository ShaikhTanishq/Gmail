import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'Gmail';
  inbox = inbox;
  filteredInbox = [...inbox];
  mailTemplate = false;
  searchTerm: string = '';
  selectedStartDate: Date | null = null;
  selectedEndDate: Date | null = null;

  filterBtn(){
    console.log('Filter BUtton Was clicked')
  }

  // filtering mails based on the date range selected
  onDateRangeSelected() {
    this.filteredInbox = this.inbox.filter((email) =>
      this.isDateInRange(new Date(email.timestamp))
    );
  }

  private isDateInRange(date: Date): boolean {
    if (!this.selectedStartDate || !this.selectedEndDate) {
      return true; // If no date range is selected, show all emails
    }

    return date >= this.selectedStartDate && date <= this.selectedEndDate;
  }

  filterEmails() {
    console.log('Search Term:', this.searchTerm);
    this.filteredInbox = this.inbox.filter((email) =>
      email.from.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Filtered Inbox:', this.filteredInbox);
  }
  
  // displaying template created
  displayTemplate() {
    this.mailTemplate = !this.mailTemplate;
  }

  markAsRead(email: any) {
    const index = this.inbox.indexOf(email);

    if (index !== -1) {
      this.inbox[index].read = true;
      console.log("READ")
    }
  }

  // confirm box for deleting the email
delete(){
  const agree=confirm("Are you sure you want to delete this mail")
  if(agree){
  console.log("Mail Deleted Successfully!")
  }
}

compose(){
  console.log('Compose was clicked');
}

inboxfunc(){
  console.log('Inbox was clicked');
}

starred(){
  console.log('Starred was clicked');
}

snoozed(){
  console.log('Snoozed was clicked');
}

sent(){
  console.log('Sent was clicked');
}

draft(){
  console.log('Draft was clicked');
}

more(){
  console.log('More was clicked');
}

label(){
  console.log('Label was clicked');
}

meet(){
  console.log('Meet was clicked');
}
}

// json objects
const inbox = [
  {
    "from": "Allwin D'Souza",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-01-01T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "Allwin D'Souza",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2024-01-03T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "Slack",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-01-02T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "MgenLearn",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-01-01T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "Ronald Joseph",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-03-01T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "MgenLearn",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-02-01T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "Alwin Chaple",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-01-01T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "Allwin D'Souza",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-02-02T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "Srikanth Ananthraj",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-01-01T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
    "read": false
  },
  {
    "from": "Alwin Chaple",
    "subject": "Invitation: Birthday Celebration",
    "timestamp": "2023-01-01T12:00:00Z",
    "to": "Tanishq Shaikh",
    "mail": "Birthday Celebration Join with...",
   "read": false
  }
];
