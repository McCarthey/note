class EventBus {
    constructor() {
        this.events = this.events || {}
    }
}

EventBus.prototype.emit = function (type, ...args) {
    let e
    e = this.events[type]
    if (Array.isArray(e)) {
        for (let i = 0; i < e.length; i++) {
            e[i].apply(this, args)
        }
    } else {
        e[0].apply(this, args)
    }
}

EventBus.prototype.addListener = function (type, func) {
    const e = this.events[type]

    if (!e) {   //如果从未注册过监听函数，则将函数放入数组存入对应的键名下
        this.events[type] = [func];
    } else {  //如果注册过，则直接放入
        e.push(func);
    }
}

const eventBus = new EventBus()
export default eventBus
