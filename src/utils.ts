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

/**
 * @description: 事件监听
 * @param {HTMLElement} el
 * @param {string} type
 * @param { EventListenerOrEventListenerObject } cb
 */
export function addEvents (el: HTMLElement, type: string, cb: EventListenerOrEventListenerObject) {
    if (el.addEventListener) {
        el.addEventListener(type, cb, false)
    } else if (el.attachEvent) { // ie8及以下
        el.attachEvent('on'+type, cb)
    } else {
        el['on'+type] = cb;
    }
}


/**
 * @description: 
 * @param {HTMLElement} el
 * @param {string} type
 * @param {EventListenerOrEventListenerObject} cb
 */
export function addEvent (el: HTMLElement, type: string, cb: EventListenerOrEventListenerObject) {
    if (el.addEventListener) {
        el.addEventListener(type, cb, false)
    } else if (el.attachEvent) {
        el.attachEvent('on'+type, cb)
    } else {
        el['on'+type] = function (event: Event) {
            let e = event || window.event
            typeof cb === "function" && cb.call(this, e)
        } 
    }
}
