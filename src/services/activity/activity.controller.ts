import { NextFunction, Request, Response, Router } from "express";
import Controller from "../../interfaces/controller.interface";
import RequestWithUser from "../../interfaces/request.interface";
import URLParams from "../../interfaces/urlparams.interface";
import authenticationMiddleware from "../../middleware/authentication.middleware";
import validationMiddleware from "../../middleware/validation.middleware";
import addSearchParams from "../../middleware/search.middleware";
import { Formatter } from "../../utils/formatter";

import ActivityDao from "./activity.dao";
import SearchResult from "../../interfaces/searchresult.interface";

/**
 * Handles Activity routes for RESTful interface
 */
class ActivityController implements Controller {
  public path: string = "/activities";
  public router: Router = Router();

  private fmt: Formatter = new Formatter();
  private activityDao: ActivityDao = new ActivityDao();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(this.path, authenticationMiddleware, addSearchParams, this.all);
  }

  private all = async (request: RequestWithUser, response: Response, next: NextFunction) => {
    try {
      const {data, total} = await this.activityDao.getAll(request.user, request.searchParams);
      response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK", total));
    } catch (error) {
      next(error);
    }
  }
}

export default ActivityController;
