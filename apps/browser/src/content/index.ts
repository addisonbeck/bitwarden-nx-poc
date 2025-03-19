// Content script that will be injected into webpages
import { CommonService } from '@bitwarden/common/common.service';

const commonService = new CommonService();

// This would normally contain more complex logic for form detection, 
// auto-fill functions, and communicating with the background page
console.log(commonService.getMessage('browser-content'));
