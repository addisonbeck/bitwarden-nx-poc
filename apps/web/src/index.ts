import { CommonService } from '@bitwarden/common/common.service'
import { AngularService } from '@bitwarden/angular/angular.service'

const commonService = new CommonService();
const angularService = new AngularService();
document.getElementById('commonMessage').textContent = commonService.getMessage();
document.getElementById('angularMessage').textContent = angularService.getMessage();
