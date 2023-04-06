
class ElementUtil {

  async doClick(element) {
    await element.waitForDisplayed({ timeout: 5000 })
    await element.click();
  }

  async doSendKeys(element, value) {
    await element.waitForDisplayed({ timeout: 5000 })
    await element.setValue(value);
  }

  async doVerifyIsDisplayed(element) {
    await element.waitForDisplayed({ timeout: 5000 })
    let displayed = await element.isDisplayed()
    return displayed
  }

  async getElementText(elements) {
    return Promise.all(elements.map((el) => el.getText()))
  }

  async doScrollDownClick(element) {
    while (!await element.isDisplayedInViewport()) {
      browser.keys('ArrowDown')
    }
    await element.waitForDisplayed({ timeout: 5000 })
    await element.click();
    browser.keys(['Escape']);
  }

  async simulateClick(element) {
    await this.trigger(element, 'mousedown');
    await this.trigger(element, 'click');
    await this.trigger(element, 'mouseup');
  }
  async trigger(elem, event) {
    await elem.dispatchEvent(new MouseEvent(event));
  }

  async doGetValue(element) {
    await element.waitForDisplayed({ timeout: 5000 })
    return element.getValue()
  }
  async doGetText(element) {
    await element.waitForDisplayed({ timeout: 5000 })
    return element.getText()
  }

  async doWaitUntillInVisible(element) {
    await element.waitForDisplayed({ timeout: 5000 })
    await element.waitForDisplayed({ timeout: 20000, reverse: true, interval: 1000 })
  }


} module.exports = new ElementUtil();