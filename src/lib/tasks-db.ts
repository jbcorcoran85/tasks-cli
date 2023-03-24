import Task from './tasks';

export default class TasksDb {
  async createTask(task: Task): Promise<Task> {}
  async listTasks(): Promise<Task[]> {}
  async getTask(id: number): Promise<Task> {}
  async scompleteTask(id: number): Promise<Task> {}
}