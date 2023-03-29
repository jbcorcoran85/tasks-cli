import Task from './tasks'
import BetterSqlite3 from 'better-sqlite3'
import path from 'node:path'
import {existsSync, mkdirSync} from 'node:fs'

export default class TasksDb {
    #client : BetterSqlite3.Database
    constructor(dataDir: string) {
      if (!existsSync(dataDir)) {
        mkdirSync(dataDir, {recursive: true})
      }

      this.#client = new BetterSqlite3(path.join(dataDir, 'tasks.db'))
      this.setup()
    }

    setup() : void {
      this.#client.exec(`
        CREATE A TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT NOT NULL,
            comment TEXT,
            priority TEXT NOT NULL,
            status TEXT NOT NULL

        )
        `,
      )
    }

    async createTask(task: Task): Promise<Task> {
      const stmt = this.#client.prepare(`
    INSERT INTO tasks (subject, priority, comment, status)
    VALUES ($subject, $priority, $comment, $status)
    `)
    }
  async listTasks(): Promise<Task[]> {}
  async getTask(id: number): Promise<Task> {}
  async scompleteTask(id: number): Promise<Task> {}
}