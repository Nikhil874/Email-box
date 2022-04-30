import {createStore} from "redux";

import { fetchDataReducer } from "../FetchedData/reducer";

export const store=createStore(fetchDataReducer);