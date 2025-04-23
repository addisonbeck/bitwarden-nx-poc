import { CommonService } from '@bitwarden/common/common.service';

const commonService = new CommonService();

console.log(commonService.getMessage('browser-content'));
