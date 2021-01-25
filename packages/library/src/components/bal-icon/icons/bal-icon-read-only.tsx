import { Component, h } from '@stencil/core';

@Component({
  tag: 'bal-icon-read-only',
  shadow: false,
  scoped: true,
})
export class IconReadOnly {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g clip-path="url(#clip0)"><path d="M11.746 13.96c.476 0 .794-.317.794-.793 0-1.27 1.11-2.381 2.38-2.381.477 0 .794-.318.794-.794 0-.476-.317-.794-.793-.794a3.93 3.93 0 00-3.969 3.969c0 .476.318.793.794.793zM30 14.913s0-.159 0 0v-.636c-4.286-5.237-8.889-7.936-13.65-8.253-5.08-.318-10.636 2.54-16.033 8.095 0 0 0 .159-.158.159 0 0 0 .159-.159.159v.793s0 .159.159.159c5.397 5.397 10.476 8.095 15.555 8.095h.635c4.762-.159 9.365-3.016 13.651-8.254-.159-.159-.159-.159 0-.317 0 0 0 .159 0 0zM15.238 8.405c2.857 0 5.08 2.38 5.08 5.08 0 2.698-2.382 5.079-5.08 5.079s-5.08-2.223-5.08-5.08 2.382-5.08 5.08-5.08zm.953 13.492c-4.445.317-9.366-2.222-14.286-7.143 3.174-3.016 6.19-5.238 9.206-6.19-1.587 1.11-2.54 3.015-2.54 4.92 0 3.651 3.016 6.667 6.667 6.667 3.65 0 6.667-3.016 6.667-6.667a6.382 6.382 0 00-2.699-5.238c3.016.952 5.873 3.175 8.73 6.508-3.65 4.603-7.619 6.984-11.745 7.143z"/></g><defs><clipPath id="clip0"><path d="M0 0h30v30H0z"/></clipPath></defs></svg>
    );
  }
}