import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, ' Watch Spider man III', ' Good Family movie', new Date(2021,7,29)),
    new Goal(2, ' Talk a walk', ' To city park', new Date(2021,7,29)),
    new Goal(3, ' Read a book', ' Unleash your potential', new Date(2021,0,29)),
    new Goal(4, ' Do some Angular practices', ' Use Hacker Rank', new Date(2021,7,29)),
  ];

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength +1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if(toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
