import axios from "axios";
import developmentGroup from "../models/developmentGroup/developmentGroup";

class developmentGroups {
  async getAll(): Promise<developmentGroup[]> {
    const response = await axios(
      `${import.meta.env.VITE_REST_SERVER_URL}/developmentGroups`
    );
    const developmentGroups = response.data;
    return developmentGroups;
  }
}

const developmentGroupsService = new developmentGroups();
export default developmentGroupsService;