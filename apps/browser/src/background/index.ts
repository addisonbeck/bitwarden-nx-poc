import { CommonService } from '@bitwarden/common/common.service';

const commonService = new CommonService();

console.log(commonService.getMessage());

chrome.runtime.onMessage.addListener((message: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
  if (message.action === 'getHello') {
    sendResponse({ message: commonService.getMessage('browser-background') });
  }
  return true;
});
