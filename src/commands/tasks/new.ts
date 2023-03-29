import {Args, Command, Flags, ux} from '@oclif/core'

export default class TasksNew extends Command {
  static description = 'Create a new Salesforce Task'

  static examples = [
    '<%= config.bin %> <%= command.id %> "Email" *comment* --priority "Normal" --status *Not Started*',
    '<%= config.bin %> <%= command.id %> "Call" *comment* --priority "Normal" --status *Not Started*',
  ]

  static flags = {
    priority: Flags.string({char: 'p', description: 'Priority of the task', default: 'Normal'}),
    status: Flags.string({char: 's', description: 'Status of the task', default: 'Not Started'}),
  }

  static args = {
    subject: Args.string(
      {name: 'subject',
        options: ['Call', 'Email', 'Send Letter', 'Send Quote', 'Other'],
        // required: true,
        description: 'Enter the subject of the Task',
      }),
    comment: Args.string({name: 'comment',
      required: false,
      description: 'Enter the task comment',
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TasksNew)
    this.log(`Create a new task with subject ${args.subject} and priority ${flags.priority}`)
    if (args.comment) {
      console.log(`Comment ${args.comment}`)
    }

    let subject = args.subject
    if (!subject) {
      subject = (await ux.prompt('What is the subject of your task?')).toString()
    }

    this.log(`Creating a Task with a subject ${subject}`)
  }
}
