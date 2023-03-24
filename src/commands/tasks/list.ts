import {Args, Command, Flags} from '@oclif/core'

export default class TasksList extends Command {
  static description = 'Show list of Tasks'

  static examples = [
    '<%= config.bin %> <%= command.id %> bob sally arthur',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    subject: Args.string({name: 'subject',
      options: ['Call', 'Email', 'Send Letter', 'Send Quote', 'Other'],
      required: true}),
    string: Args.string({comment: 'Comment'}),
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TasksList)
    console.log(args.subject)
    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/josephcorcoran/DEV/tasks-cli/src/commands/tasks/list.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
