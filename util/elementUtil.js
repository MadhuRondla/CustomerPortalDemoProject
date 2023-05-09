const xlsx = require('xlsx');
const ExcelJS = require('exceljs');
const wb = new ExcelJS.Workbook();
class ElementUtil {

  async doClick(element) {
    await element.waitForDisplayed({ timeout: 5000 })
    await element.click();
  }

  async doSendKeys(element, value) {

    await element.waitForDisplayed({ timeout: 5000 })
    await element.clearValue();
    await element.setValue(value);
  }

  async doVerifyIsDisplayed(element) {
    try {
      await element.waitForDisplayed({ timeout: 5000 })
      return await element.isDisplayed()
    }
    catch (err) {
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

  async doWriteDataToExcel(excelPath, sheetName, dataToWrite) {
    const workbook = new ExcelJS.Workbook();
    workbook.xlsx.readFile(excelPath)
      .then(() => {
        const worksheet = workbook.getWorksheet(sheetName);
        dataToWrite.forEach(item => {
          worksheet.addRow([item]);
        });
        return workbook.xlsx.writeFile(excelPath);
      });
  }

  async getIndexNumberFromList(elementsList, elementName) {
    const texts = await this.getElementText(elementsList)
    for (let i = 0; i < texts.length; i++) {
      if (texts[i] === elementName) {
        return i
      }
    }
  }

  async getAttributeFromList(elementsList, attribute) {
    const texts = await this.getElementsPromiseTextForAttribute(elementsList, attribute)
    return texts
  }

  async getElementsPromiseTextForAttribute(elements, attribute) {
    return Promise.all(elements.map((el) => el.getAttribute(attribute)))
  }

  async getElementPromiseTextForAttribute(singleElement, attribute) {
    return Promise.all([singleElement.getAttribute(attribute)])
  }
  async getElementPromiseText(singleElement) {
    return Promise.all([singleElement.getText()])
  }
  async doCompareTwoLists(List1,List2){
    let flag = true
    if(List1.length===List2.length){
      List1.sort()
      List2.sort()
      for (let i = 0; i < List1.length; i++) {
        if(!List1[i]=== List2[i]){
           flag=false
        }
    }
    }else{
      flag=false
    }
    return flag
    
  }





  async writeDataToExcelWithExcelJs() {
    const worksheet = wb.addWorksheet('My Worksheet');

    worksheet.columns = [
      { header: 'Name', key: 'name' },
      { header: 'Age', key: 'age' },
      { header: 'Email', key: 'email' }
    ];

    worksheet.addRow({ name: 'John Doe', age: 30, email: 'john.doe@example.com' });
    worksheet.addRow({ name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' });

    wb.xlsx.writeFile('./data/myWorkbook.xlsx')
      .then(() => console.log('Workbook created successfully!'))
      .catch((error) => console.error(error));
  }

  async getDataFromExcelWithExcelJs(excelPath,sheetName) {
    await wb.xlsx
      .readFile(excelPath)
      .then(() => {
        console.log('File read successfully');
      })
      .catch(err => {
        console.log(err.message);
      });
    const ws = wb.getWorksheet(sheetName);
    let rows = ws.getRows(1, ws.rowCount).map(row => row.values);
    let arrayList = [];
    for (let row of rows) {
        let rowValues = row.filter(value => value !== null);
        arrayList.push(rowValues)
  }
  console.log(arrayList)
    
    // console.log(`There are ${ws.actualColumnCount} columns`);
    // console.log(`There are ${ws.actualRowCount} rows`)
    console.log(`There are ${ws.columnCount} columns`);
    console.log(`There are ${ws.rowCount} rows`)   
  }

} module.exports = new ElementUtil();