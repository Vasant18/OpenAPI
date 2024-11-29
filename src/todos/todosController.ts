// src/users/usersController.ts
import {
  Controller,
  Get,
  Path,
  Route
} from "tsoa";
import { Todo } from './todo';
import { TodoService } from "./todoService";
  @Route("todo")
  export class TodoController extends Controller {
    /**
     * This is the controller for creating todos
     */
   @Get("{todoId}")
   public async getTodo (
    @Path() todoId : string
   ): Promise<Todo> {
    let todoService = new TodoService();
    return todoService.get(todoId);         
   }
  }