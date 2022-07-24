
declare global {
    interface HTMLElement {
        attachEvent?(type: string, cb: EventListenerOrEventListenerObject): void
    }
}

export {}
