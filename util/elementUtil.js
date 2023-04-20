const xlsx = require('xlsx');
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
    try{
      await element.waitForDisplayed({ timeout: 5000 })
      return await element.isDisplayed()
    }
    catch(err){
      return false
    }
    
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

  async getTestDataFromExcel(path, sheetName) {
    
    const workbook = xlsx.readFile(path)
    const worksheet = workbook.Sheets[sheetName];
    const range = xlsx.utils.decode_range(worksheet['!ref']);
    const data = [];
    for (let row = range.s.r; row <= range.e.r; row++) {
      const rowData = [];
      for (let col = range.s.c; col <= range.e.c; col++) {
        const cell = worksheet[xlsx.utils.encode_cell({ r: row, c: col })];
        if (cell) {
          rowData.push(cell.v);
        } else {
          rowData.push('');
        }
      }
      data.push(rowData);
    }
    return data
  }


} module.exports = new ElementUtil();