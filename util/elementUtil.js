
class ElementUtil{
    
  async doClick(element){
   
    await element.waitForDisplayed({ timeout: 5000 })
    await element.click();
  }

  async doSendKeys(element,value){
    await element.waitForDisplayed({ timeout: 5000 })
    await element.setValue(value);
  }

   async doVerifyIsDisplayed(element){
   await element.waitForDisplayed({ timeout: 5000 })
   let displayed = await element.isDisplayed()
    return displayed
  }

  async getElementText(elements){
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


}module.exports = new ElementUtil();