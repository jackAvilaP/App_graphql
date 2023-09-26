import Task from "./models/Task.js";

const resolvers = {
  Query: {
    hello: () => ` Hello world jack`,

    getAllTaks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
    getTask: async (_, args) => {
      const { id } = args;
      const resultTask = await Task.findById(id);
      return resultTask;
    },

  },

  Mutation: {
    createTasks: async (_, args) => {
      const { title, description } = args.task;
      const newTaks = new Task({ title, description });
      await newTaks.save();
      return newTaks;
    },
    deleteTask: async(_,args)=>{
        const { id,  } = args;
        await Task.findByIdAndDelete(id);
        return "Task delete"
    },
    updateTask: async(_,args)=>{
        const {id, task} = args;
        const taskUpdate=await Task.findByIdAndUpdate(id, {
            $set: task // $set solo actualiza los campos que llegan 
        }, {new:true});
        return taskUpdate
    }
  },
};

export default resolvers;
