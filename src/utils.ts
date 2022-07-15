/**
 * @description: 11
 * @return {*}
 */
export function a () {
    return "hello"
}

/**
 * @description: 22
 * @return {*}
 */
export function b () {
    return "world"
}

export interface HTMLElementPlus extends HTMLElement {
    attachEvent?(type: string, cb: Function): void
}

/**
 * @description: 事件监听
 * @param {HTMLElement} el
 * @param {string} type
 * @param {Function} cb
 */
// export function addEvent (el: HTMLElementPlus, type: string, cb: EventListener) {
//     if (el.addEventListener) {
//         el.addEventListener(type, cb, false)
//     } else if (el.attachEvent) { // ie8及以下
//         el.attachEvent('on'+type, cb)
//     } else {
//         el['on'+type] = cb;
//     }
// }


/**
 * @description: 
 * @param {HTMLElement} el
 * @param {string} type
 * @param {EventListener} cb
 */
export function addEvent (el: HTMLElement, type: string, cb: EventListener) {
    if (el.addEventListener) {
        el.addEventListener(type, cb, false)
    } else {
        el['on'+type] = function (event: Event) {
            if (typeof cb === "function") {
                cb.call(this, event)
            }
        } 
    }
}
