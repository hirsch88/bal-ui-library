import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bal-icon-social-linkedin-line',
  styleUrl: '../bal-icon-svg.scss',
  shadow: false,
  scoped: true,
})
export class IconSocialLinkedinLine {
  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | '' = ''

  render() {
    return (
      <Host class={{ [`is-size-${this.size}`]: !!this.size }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M24 23.5h-4.3c-.3 0-.5-.2-.5-.5v-6c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v6c0 .3-.2.5-.5.5H12c-.1 0-.3-.1-.4-.1-.1-.1-.1-.2-.1-.4V11.9c0-.1 0-.3.1-.4.1-.1.2-.2.4-.2h4.3c.3 0 .5.2.5.5v.3c.6-.4 1.6-.8 2.9-.8 3 0 4.8 2.3 4.8 5.9V23c0 .3-.2.5-.5.5zm-3.8-1h3.3v-5.2c0-3.1-1.4-4.9-3.8-4.9-1.8 0-3 1.1-3 1.1-.1.1-.4.2-.5.1-.2-.1-.3-.3-.3-.5v-.8h-3.3v10.1h3.3V17c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v5.5h-.1zm-9.9 1H6c-.3 0-.5-.2-.5-.5V11.9c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V23c0 .3-.2.5-.5.5zm-3.8-1h3.3V12.4H6.5v10.1zm1.7-11.8c-1.5 0-2.7-1.2-2.7-2.6 0-1.5 1.2-2.6 2.7-2.6 1.5 0 2.6 1.1 2.7 2.6-.1 1.5-1.2 2.6-2.7 2.6zm0-4.2c-1 0-1.7.6-1.7 1.6 0 .8.6 1.6 1.6 1.6 1.1 0 1.7-.8 1.7-1.6s-.5-1.6-1.6-1.6z"/></svg>
      </Host>
    );
  }
}
