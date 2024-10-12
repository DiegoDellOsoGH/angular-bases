import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Ironman";
  public age: number = 45;

  // get - Se ven como propiedades
  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  // Metodo
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  chageHero(name: string): void{
    this.name = name;
  }

  chageAge(age: number): void{
    this.age = age;
  }

  resetForm(): void{
    // this.name = 'Ironman';
    this.age = 45;

    // Encuentra el primero
    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'

    // Encuentra todos
    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML  = '<h1>Desde Angular</h1>';
    })
  }

}
