import path from 'node:path'
describe('Customer Portal Application', () => {
    

it('should upload a file', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload')

    //const filePath = 'D:/test.png'
    const filePath = path.join(__dirname, '../data/test.png');
    const remoteFilePath = await browser.uploadFile(filePath)

    await $('input[type="file"]').setValue(remoteFilePath)
    await $('#file-submit').click()
     // eslint-disable-next-line wdio/no-pause
    await browser.pause(5000)
});

})