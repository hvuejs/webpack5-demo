import "./base.less";
import { b, addEvent } from "./utils"
console.log("Hello " + b());
const btn: HTMLButtonElement = document.getElementsByTagName("button")[0];
addEvent(btn, 'click', function (this: unknown, evnet: Event) {
    console.log(evnet, btn.innerHTML, this);
    btn.innerHTML = "按钮";
})

class Person {
    name: string
    constructor (name: string) {
        this.name = name
    }
}

const person = new Person("小李")

console.log(person);

const obj = { name: '小花', age: 22, sex: '女' }

const { name, ...args } = obj;

console.log(name, args);
