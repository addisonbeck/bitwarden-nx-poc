export class CommonService {
  getMessage(lib: string = "common"): string {
    return `Hello from the ${lib} library!`;
  }
}
