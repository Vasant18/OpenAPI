// src/users/usersController.ts
import {
    Controller,
    Get,
    Path,
    Route
} from "tsoa";
import { TodoService } from "./todoService";
  @Route("todo")
  export class TodoController extends Controller {
   @Get("{todoId}")
   public async getTodo (
    @Path() todoId : string
   ){
    let todoService = new TodoService();
    return todoService.get(todoId);         
   }
  }