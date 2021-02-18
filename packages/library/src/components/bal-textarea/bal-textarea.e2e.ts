import { newE2EPage } from '@stencil/core/testing'

describe('bal-textarea', () => {
  let page
  let balChangeEvent
  let balInputEvent
  let balInputElement
  let nativeTextareaElement
  beforeEach(async () => {
    page = await newE2EPage()
    await page.setContent(`<bal-textarea></bal-textarea>`)
    balChangeEvent = await page.spyOnEvent('balChange')
    balInputEvent = await page.spyOnEvent('balInput')
    balInputElement = await page.find('bal-textarea')
    nativeTextareaElement = await balInputElement.find('textarea')
  })
  it('should only call balInput and no balChange, because the input has still the focus', async () => {
    expect(await nativeTextareaElement.getProperty('value')).toBe('')

    await nativeTextareaElement.focus()
    await nativeTextareaElement.press('8')

    expect(await nativeTextareaElement.getProperty('value')).toBe('8')
    expect(balInputEvent).toHaveReceivedEvent()
    expect(balChangeEvent).not.toHaveReceivedEvent()
  })

  it('should fire balChange & balInput, because the input gets blured', async () => {
    await nativeTextareaElement.focus()
    await nativeTextareaElement.press('8')
    await nativeTextareaElement.press('Tab')

    expect(await nativeTextareaElement.getProperty('value')).toBe('8')
    expect(balInputEvent).toHaveReceivedEvent()
    expect(balChangeEvent).toHaveReceivedEventTimes(1)
  })

  it('should fire balChange and no balInput, beacuse only the value of the web component is changed', async () => {
    await balInputElement.setProperty('value', '88')
    await page.waitForChanges()

    expect(balInputEvent).not.toHaveReceivedEvent()
    expect(balChangeEvent).toHaveReceivedEventTimes(1)
  })

  it('should fire no balChange and no balInput, beacuse the field has still a focus', async () => {
    nativeTextareaElement.focus()

    await balInputElement.setProperty('value', '88')
    await page.waitForChanges()

    expect(balInputEvent).not.toHaveReceivedEvent()
    expect(balChangeEvent).not.toHaveReceivedEvent()
  })

  it('should fire no balChange and no balInput, beacuse the field has still a focus', async () => {
    nativeTextareaElement.focus()

    await balInputElement.setProperty('value', '88')
    await page.waitForChanges()
    await nativeTextareaElement.press('Tab')

    expect(balInputEvent).not.toHaveReceivedEvent()
    expect(balChangeEvent).toHaveReceivedEventTimes(1)
  })
})