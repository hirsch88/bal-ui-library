import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bal-icon-contact',
  styleUrl: '../bal-icon-svg.scss',
  shadow: false,
  scoped: true,
})
export class IconContact {
  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | '' = ''

  render() {
    return (
      <Host class={{ [`is-size-${this.size}`]: !!this.size }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M7.571 27.714c-.142 0-.142 0-.285-.143-.286-.142-.429-.428-.429-.571v-4H.714C.286 23 0 22.714 0 22.286V2.714C0 2.286.286 2 .714 2h28.572c.428 0 .714.286.714.714v19.572c0 .428-.286.714-.714.714H14l-6 4.571c-.143.143-.286.143-.429.143zM1.43 21.571H7.57c.429 0 .715.286.715.715v3.285l5-3.857c.143-.143.285-.143.428-.143h14.857V3.43H1.43V21.57z"/><path d="M8.286 13a1.28 1.28 0 001.285 1.286A1.28 1.28 0 0010.857 13a1.28 1.28 0 00-1.286-1.286A1.28 1.28 0 008.286 13zM14 13a1.28 1.28 0 001.286 1.286A1.28 1.28 0 0016.57 13a1.28 1.28 0 00-1.285-1.286A1.28 1.28 0 0014 13zm5.714 0A1.28 1.28 0 0021 14.286 1.28 1.28 0 0022.286 13 1.28 1.28 0 0021 11.714 1.28 1.28 0 0019.714 13z"/></svg>
      </Host>
    );
  }
}
