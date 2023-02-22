import { Provider } from "react-redux";
import DynamicHooksCounter from "./components/DynamicHooksCounter";
import HooksCounter from "./components/HooksCounter";
import VariableCounter from "./components/VariableCounter";
import store from "./redux/store";
import Main from "./components/bookingApplicaton/Main";
export default function App() {
  return (
    <Provider store={store}>
      <>
        <Main />
        {/* <HooksCounter />
        <DynamicHooksCounter />
        <VariableCounter />
        <VariableCounter dynamic /> */}
      </>
    </Provider>
  );
}
