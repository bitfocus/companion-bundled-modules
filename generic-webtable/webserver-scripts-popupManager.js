

class popupManager {
    constructor(container) {
        this.container = container
        this.windows = {}

        this.container.onclick = (event) => {
            event.stopPropagation()
            if (event.target === this.container) this.close()
        }
    }

    get isHidden() { return this.container.style.display === 'none' }

    add(name, window) {
        if (this.windows[name] !== undefined) return undefined

        class WINDOW {
            constructor(element) {
                this.element = element
                this.__eventListeners = {}
                this.__eventIds = []
            }

            get isHidden() { return this.element.style.display === 'none' }

            __callEventListeners(event, data={}) {
                if (this.__eventListeners[event] === undefined) return {}
                const feedback = {
                    preventDefault: false,
                }

                data.preventDefault = () => { feedback.preventDefault = true }
                data.target = this.element
                data.window = this

                for (const listener of Object.values(this.__eventListeners[event])) listener(data)
                
                return feedback
            }

            addEventListener(event, callback) {
                if (this.__eventListeners[event] === undefined) this.__eventListeners[event] = {}
                const id = this.__eventIds.length
                this.__eventListeners[event][id] = callback
                this.__eventIds.push(event)
                return id
            }

            removeEventListener(id) {
                if (id >= this.__eventIds.length) return false
                const event = this.__eventIds[id]
                if (this.__eventListeners[event] === undefined || this.__eventListeners[event][id] === undefined) return false
                delete this.__eventListeners[event][id]
                return true
            }

            show() {
                if (!this.isHidden) return false
                const feedback = this.__callEventListeners('show')
                if (feedback.preventDefault === true) return false
                this.element.style.display = 'block'
                return true
            }

            hide() {
                if (this.isHidden) return false
                const feedback = this.__callEventListeners('hide')
                if (feedback.preventDefault === true) return false
                this.element.style.display = 'none'
                return true
            }
        }

        const windowObject = new WINDOW(window)
        this.windows[name] = windowObject

        return windowObject
    }

    open(name) {
        if (this.windows[name] === undefined) return false
        if (this.windows[name].show() === true) {
            this.container.style.display = 'block'
            return true
        }
        return false
    }

    close() {
        this.container.style.display = 'none'
        for (const window of Object.values(this.windows)) window.hide()
    }

    userInteraction(name, setContent={}, returnValues={}, returnTrigger={}, cancelTrigger, timeout=0) {
        returnValues = Object.entries(returnValues)
        return new Promise((res) => {
            if (this.windows[name] === undefined) {
                res({ status: 'invalid name' })
                return
            }

            const hideEventListener = this.windows[name].addEventListener('hide', (event) => {
                event.window.removeEventListener(hideEventListener)
                res({ status: 'closed' })
            })

            for (const [ element, content ] of Object.entries(setContent)) {
                try { document.getElementById(element).innerHTML = content }
                catch(error) {}
            }

            const triggerReturn = () => {
                if (returnValues.length > 0) {
                    const output = {}
                    for (const [ id, key ] of returnValues) {
                        try {
                            const element = document.getElementById(id)
                            output[id] = element[key]
                            element[key] = ''
                        }
                        catch(error) {}
                    }
                    res({ status: 'triggered', values: output })
                }
                else res({ status: 'triggered' })

                this.close()
            }

            const cancelReturn = () => {
                res({ status: 'canceled' })
                this.close()
            }

            for (const [ element, trigger ] of Object.entries(returnTrigger)) {
                try { document.getElementById(element)[trigger] = triggerReturn }
                catch(error) {}
            }

            for (const [ element, trigger ] of Object.entries(cancelTrigger)) {
                try { document.getElementById(element)[trigger] = cancelReturn }
                catch(error) {}
            }

            if (this.open(name) === false) {
                res({ status: 'opening failed' })
                return
            }

            if (returnValues.length > 0) document.getElementById(returnValues[0][0]).focus()

            if (timeout > 0) setTimeout(() => res({ status: 'timeout' }), timeout*1000)
        })
    }
}