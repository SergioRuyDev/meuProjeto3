// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   nome = 'Sergio';
//   // idade = 10;
//   //
//   // getIdade() {
//   //   return this.idade;
//   // }
//
//   adiconar(nome: string) {
//     this.nome = nome;
//     // const numero = Math.round(Math.random() * 100);
//     // this.nome = 'João ' + numero;
//
//     // console.log(`Adicionando ` + this.nome); (a mesma coisa)
//   }
//
//   // alterarNome(event: any) {
//   //   // console.log(event);
//   //   this.nome = event.target.value;
//   // }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  funcionarios = [];

  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
  }

}
