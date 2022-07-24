/**
 *  Pick 的作用就是从一个对象中，挑选需要的字段出来
 * 
 *  实例：
 *  type Pick<T, K extends keyof T> = {
 *      [P in K]: T[P];
 *  }
 * 
 *  比如: 从 Todo 里面只取出 title 和 completed 
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

export type TodoPreview = Pick<Todo, 'title'| 'completed'>

const todo: TodoPreview = {
    title: "Clean room",
    // description: "描述", // 报错：只取 title 和 completed 参数，description 字段未取出
    completed: false
}

console.log(todo);


/**
 *  extends : 翻译是延伸的意思
 *  
 *  在 TS 充当了 if 和 在xxx范围内 的一个作用，extends 后面通常就要接三目运算符了
 */

type mytype1 = 1 extends string ? true : false; // false
type mytype2 = '1' extends string ? true : false // true
type mytype2_1 = string extends '1' ? true : false // false
type mytype3 = mytype1 extends any ? 1 : 2 // 1
type mytype4 = [90] extends unknown[] ? true : false // true
type mytype5 = [90] extends string[] ? true : false // false


// 上面简单的举了几个例子，简单解释下：

// 1 是否属于 string 类型 得到 false 因为 1 是数字类型
// '1' 属于是 string 类型的 三目运算符判断为 true
// string 类型 属于 '1' 肯定是 false 的，string 类型范围比'1'更大，不在属于的范畴了
// mytype1 属于 any 类型是对的，因为 any 包含一切~
// [90] 是一个数值型的数组，属于一个 unknown 未知类型的数组中，这个也是对的，因为未知类型也会包含数字类型
// 而 [90] 就不属于 string[] 的范畴了




// extends 也有不接三目运算符的时候, 比如写一个限制 string 类型的 push 方法

type StrPush<T extends string[], U extends string> = [...T, U];

type StringArr = StrPush<['1','2','3'], '4'> // 正确 

// type NumberArr = StrPush<[1,2,3], 4> // 报错，因为指定数组中的类型为 string 

type NumPush<T extends number[], U extends number> = [...T, U];

type NumberArr = NumPush<[1,2,3], 4> // 正确

/* 
    extends 总结
        extends 在 TS 的 函数体中的时候起到的是判断范畴的一个作用
        在一些特殊位置 （比如接收泛型的时候，在函数运算过程中断言变量类型的时候）起到的是一个 约束类型 的作用

*/

