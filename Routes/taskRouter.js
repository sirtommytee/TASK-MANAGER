const express =require("express");
const router =express.Router();
const {getTasks,createTask,getTask,deleteTask,updateTask}= require("../Controller/taskController")



// //getalltasks -'/tasks'
// router.get("/", getTasks);
// //create a task-/tasks
// router.post("/", createTask);
// //get a single-/tasks/:taskId- req.params
// router.get("/:taskId", getTask);
// //updating a task-/tasks/:taskId-req.body
// router.patch("/:taskId", updateTask);
// //delete a task-/tasks/:taskId
// router.delete("/:taskId", deleteTask);

router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;

