import { ICaculate } from './../i-caculate';
import { Component } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css'],
})
export class CaculatorComponent {
  inputA: string = "";
  inputB: string = "";
  math_cacu: string = '';
  result: string = "";

  caculates = [
    {
      display: '+',
      class: 'add',
    },
    {
      display: '-',
      class: 'sub',
    },
    {
      display: 'x',
      class: 'mul',
    },
    {
      display: ':',
      class: 'dison',
    },
    {
      display: 'clear',
      class: "clear"
    },
    {
      display: "=",
      class: "show"
    }
  ];


  ngOnInit() {}

  add(inputA: string, inputB: string) {
    const a = parseFloat(this.inputA) + parseFloat(this.inputB);
    this.result = a.toString();
  }
  sub(inputA: string, inputB: string) {
    const a = parseFloat(this.inputA) - parseFloat(this.inputB);
    this.result = a.toString();
  }
  mul(inputA: string, inputB: string) {
    const a = parseFloat(this.inputA) * parseFloat(this.inputB);
    this.result = a.toString();
  }
  dison(inputA: string, inputB: string) {
    const a = parseFloat(this.inputA) / parseFloat(this.inputB);
    this.result = a.toString();
  }
  fnCaculate(operation: ICaculate) {
    console.log(operation);
    const math = operation.class;
    this.math_cacu = operation.display;
    switch (math) {
      case 'add':
        this.add(this.inputA, this.inputB)
        // this.inputA = this.result.toString();
        // this.inputB = "";
        break;
      case 'sub':
        this.sub(this.inputA, this.inputB);
        break;
      case 'mul':
        this.mul(this.inputA, this.inputB);
        break;
      case 'dison':
        this.dison(this.inputA, this.inputB);
        break;
    }
  }
  clear() {
    this.inputA = "";
    this.inputB = "";
    this.math_cacu = '';
    this.result = "";
  }

ngOnChanges() {}

}
