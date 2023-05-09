const ElementUtil = require('../util/elementUtil')
describe('Customer Portal Application', () => {
    it('get Data', async () => {
    ElementUtil.getDataFromExcelWithExcelJs('./data/myWorkbook.xlsx','Sheet1')   
    })

})