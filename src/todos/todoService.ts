import { Todo } from './todo';

export type TodoCreationParams = Pick<Todo, 'title' | 'description'>;

// export type TodoCreationParams{
//     title: string;
//     description: string;    
// }

export class TodoService{
    public get (todoId : string): Todo{
        return {
            id : parseInt( todoId),
            title : 'Do the laundry',
            description : 'Wash the clothes and hang them to dry',
            done : false
        }
    }

    public create (todoCreationParams : TodoCreationParams) : Todo{
        console.log("mock db call.");
        return {
            id : 1,
            title : "mocked todo",
            description : "mocked description",
            done : false 
        }
    }
}
