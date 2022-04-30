import { createContext, useContext } from "react";

const Context = createContext();

const ComponentD = () => {
  const { valueD } = useContext(Context);
  return (
  <>
    <p>{ valueD }</p>
  </>
  );
};

const ComponentC = () => {
  const { valueC } = useContext(Context);
  return (
  <>
    <p>{ valueC }</p>
  </>
  );
};

const ComponentB = () => (
  <>
    <ComponentC />
    <ComponentD />
  </>
);

const ComponentA = () => {
  const initialValue = {
    valueC: "component 'C'",
    valueD: "component 'D'"
  }
  return (
    <>
      <Context.Provider value={initialValue}>
        <ComponentB />
      </Context.Provider>
    </>
  );
};

const ChallengeE = () => {
  return <ComponentA />
};

export default ChallengeE