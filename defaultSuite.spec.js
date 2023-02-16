const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Default Suite', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('Pruebas funcionales', async function() {
    await driver.get("https://tanner.cl/")
    await driver.findElement(By.id("button-acceso-clientes")).click()
    await driver.findElement(By.name("aux_user")).click()
    await driver.findElement(By.name("aux_user")).sendKeys("Ingresar usuario")
    await driver.findElement(By.name("aux_user")).sendKeys("Ingresar usuario")
    await driver.findElement(By.name("aux_pass")).click()
  })
})
