class ElementUtil{
    
  async doClick(element){
    browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), 10000);

    await element.waitForDisplayed({ timeout: 5000 })
    await element.click();
  }

  async doSendKeys(element,value){
    //browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), 10000);
    await element.waitForDisplayed({ timeout: 5000 })
    await element.setValue(value);
  }

   async doVerifyIsDisplayed(element){
   await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), 10000);
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

  


}module.exports = new ElementUtil();