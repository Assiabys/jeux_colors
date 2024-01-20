import { Component } from '@angular/core';

@Component({
  selector: 'app-color-game',
  templateUrl: './color-game.component.html',
  styleUrls: ['./color-game.component.css']
})
export class ColorGameComponent {
  colors: string[] = ['rouge', 'bleu', 'noir', 'vert','jaune'];
  currentColor: string = '';
  selectedColor: string = '';
  showResult: boolean = false;
  attempts: number = 0;
  score: number = 0;
  resultColor: string = '';

  initializeGame() {
    this.showResult = false;
    this.attempts = 0;
    this.score = 0;
    this.getNextColor();
  }

  getNextColor() {
    this.currentColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  checkColor() {
    this.attempts++;
    this.showResult = true;

    if (this.selectedColor === this.currentColor) {
      this.resultColor = 'green'; // Si correct, change la couleur en vert
      this.score += 4;
    } else {
      this.resultColor = 'red'; // Si incorrect, change la couleur en rouge
    }

    if (this.attempts === 5) {
      this.showResult = false;
    }

    this.getNextColor();
  }
}