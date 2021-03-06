
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./Redux/store";
import  {Provider as ReduxProvider}  from "react-redux"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <ReduxProvider store={store} >
    <App />
    </ReduxProvider>
  </BrowserRouter>,
  rootElement
);