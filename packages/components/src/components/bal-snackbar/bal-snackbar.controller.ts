import { ColorTypes } from '../../types/color.types'

export interface BalSnackbarOptions {
  message: string
  icon: string
  subject: string
  duration?: number
  action?: string
  actionCallback?: () => void
  color?: ColorTypes | ''
}

export class BalSnackbarController {
  private container!: HTMLElement | null
  private queue: HTMLBalSnackbarElement[] = []
  private preQueue: HTMLBalSnackbarElement[] = []
  private queueLimit: number = 5

  create(options: BalSnackbarOptions): HTMLBalSnackbarElement {
    this.setupContainer()
    const snackbar: HTMLBalSnackbarElement = document.createElement('bal-snackbar')
    snackbar.innerHTML = options.message
    snackbar.color = options.color || 'info'
    snackbar.duration = options.duration || 0
    snackbar.subject = options.subject
    snackbar.icon = options.icon
    snackbar.action = options.action || ''
    snackbar.addEventListener('balClose', event => this.removeFromQueue((<any>event).detail))
    snackbar.addEventListener('balAction', () => (options.actionCallback ? options.actionCallback() : void 0))
    this.preQueue.push(snackbar)
    this.updateQueue()
    return snackbar
  }

  private setupContainer() {
    this.container = document.getElementById('bal-snackbar-container')

    if (this.container) return

    if (!this.container) {
      this.container = document.createElement('div')
      this.container.className = 'bal-notices bal-notices--snackbar'
      this.container.id = 'bal-snackbar-container'
    }

    document.body.appendChild(this.container)
  }

  private updateQueue() {
    if (this.queue.length < this.queueLimit) {
      const snackbar = this.preQueue.shift()
      if (snackbar && this.container) {
        this.queue.push(snackbar)
        this.container.insertAdjacentElement('beforeend', snackbar)
      }
    }
  }

  private removeFromQueue(snackbarId: string) {
    this.queue = this.queue.filter(el => el.id !== snackbarId)
    setTimeout(() => this.updateQueue(), 0)
  }

  setQueue(queueLimit: number) {
    this.queueLimit = queueLimit
  }
}

export const balSnackbarController = new BalSnackbarController()
