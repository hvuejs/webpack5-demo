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
export declare type TodoPreview = Pick<Todo, 'title' | 'completed'>;
export {};
