/**
 * @description: 11
 * @return {*}
 */
export declare function a(): string;
/**
 * @description: 22
 * @return {*}
 */
export declare function b(): string;
export interface HTMLElementPlus extends HTMLElement {
    attachEvent?(type: string, cb: Function): void;
}
/**
 * @description: 事件监听
 * @param {HTMLElement} el
 * @param {string} type
 * @param {Function} cb
 */
/**
 * @description:
 * @param {HTMLElement} el
 * @param {string} type
 * @param {EventListener} cb
 */
export declare function addEvent(el: HTMLElement, type: string, cb: EventListener): void;
