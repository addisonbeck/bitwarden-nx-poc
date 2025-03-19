import { CommonService } from '@bitwarden/common/common.service';
export class AngularService {
  private commonService = new CommonService();

  getMessage(): string {
    return this.commonService.getMessage("angular");
  }
}
