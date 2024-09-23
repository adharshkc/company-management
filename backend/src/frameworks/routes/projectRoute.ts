import { projectController } from "@di/projectDI";
import { sprintController } from "@di/sprintDI";
import { issueController } from "@di/issueDi";
import { verifyEmployeeAccessToken } from "@frameworks/middlewares/authentication/employeeMiddleware";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { Router } from "express";

const projectRouter = Router();
//Projects
projectRouter.get(
  "/",
  verifyAdminAccess,
  projectController.getProjects.bind(projectController)
);
projectRouter.post(
  "/",
  verifyAdminAccess,
  projectController.createProject.bind(projectController)
);

projectRouter.get(
  "/single",
  verifyEmployeeAccessToken,
  projectController.getProjectByTeamId.bind(projectController)
);

//Sprint
projectRouter.get(
  "/:projectId/sprints",
  verifyEmployeeAccessToken,
  sprintController.getAllSprint.bind(sprintController)
);
projectRouter.post(
  "/:projectId/sprints/",
  verifyEmployeeAccessToken,
  sprintController.createSprint.bind(sprintController)
);
projectRouter.put(
  "/sprints/",
  verifyEmployeeAccessToken,
  sprintController.sprintUpdate.bind(sprintController)
);
projectRouter.delete(
  "/sprints/:id",
  verifyEmployeeAccessToken,
  sprintController.sprintDelete.bind(sprintController)
);

projectRouter.get(
  "/:projectId/sprints/started",
  verifyEmployeeAccessToken,
  sprintController.getStartedSprints.bind(sprintController)
);

//issues
projectRouter.post(
  "/sprints/issues/",
  verifyEmployeeAccessToken,
  issueController.createIssue.bind(issueController)
);
projectRouter.get(
  "/sprints/:sprintId/issues",
  verifyEmployeeAccessToken,
  issueController.getIssues.bind(issueController)
);

projectRouter.get("/sprints/:sprintId/issues");

projectRouter.patch(
  "/sprints/issues/:issueId/update-name",
  verifyEmployeeAccessToken,
  issueController.updateName.bind(issueController)
);
projectRouter.patch(
  "/sprints/issues/:issueId/update-status",
  verifyEmployeeAccessToken,
  issueController.updateStatus.bind(issueController)
);
projectRouter.patch(
  "/sprints/issues/:issueId/update-description",
  verifyEmployeeAccessToken,
  issueController.updateDescription.bind(issueController)
);

export default projectRouter;
