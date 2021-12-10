import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Clicking upper left box adds an X', async () => {

    let upperLeft = await (await driver).findElement(By.id('cell-0'));
    await upperLeft.click();
    await driver.sleep(2000);
    expect(await upperLeft.getText()).toContain('X')
    
});

test('Clicking upper right box adds an X', async () => {

    let upperRight = await (await driver).findElement(By.id('cell-2'));
    await upperRight.click();
    await driver.sleep(2000);
    expect(await upperRight.getText()).toContain('X')
    
});

test('Clicking lower right box adds an X', async () => {

    let lowerRight = await (await driver).findElement(By.id('cell-8'));
    await lowerRight.click();
    await driver.sleep(2000);
    expect(await lowerRight.getText()).toContain('X')
    
});

// TESTING THE TEST - EXPECT A FAIL FOR THIS:
// test('Clicking lower right box adds an O', async () => {

//     let lowerRight = await (await driver).findElement(By.id('cell-8'));
//     await lowerRight.click();
//     await driver.sleep(2000);
//     expect(await lowerRight.getText()).toContain('O')
    
// });