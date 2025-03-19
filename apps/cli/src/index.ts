import { Command } from 'commander';
import { CommonService } from '@bitwarden/common/common.service';

const program = new Command();
const commonService = new CommonService();

program
  .name('bw')
  .description('Bitwarden Command-line Interface (Nx PoC)')
  .version('0.0.1');

program
  .command('hello')
  .description('Test connection to libraries')
  .action(() => {
    console.log(commonService.getMessage());
  });

program
  .command('*', { hidden: true })
  .action((cmd) => {
    console.error(`Unknown command: ${cmd}`);
    program.help();
  });

program.parse(process.argv);

if (process.argv.length <= 2) {
  program.help();
}
