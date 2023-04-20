const ElementUtil = require('../util/elementUtil')
describe('Customer Portal Application', () => {
    it('get Data', async () => {
    console.log(ElementUtil.getTestDataFromExcel('./data/TestData.xlsx','Sheet1'))    
    })

})