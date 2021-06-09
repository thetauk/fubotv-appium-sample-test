import { Browser, Element } from "webdriverio";

const findElement = async (driver: Browser<any>, elementLocator: string, timeout: number = 20000) => {
  const element: Element<any> = await driver.$(elementLocator);
  await element.waitForExist({ timeout: timeout });
  return element;
}

const clickElement = async (driver: Browser<any>, elementLocator: string, timeout: number = 20000) => {
  const element: Element<any> = await findElement(driver, elementLocator, timeout);
  await element.click();
}

const setValueOnElement = async (driver: Browser<any>, elementLocator: string, value: string = "", timeout: number = 20000) => {
  const element: Element<any> = await findElement(driver, elementLocator, timeout);
  await element.setValue(value);
}

export { findElement, clickElement, setValueOnElement };