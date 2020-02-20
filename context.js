import { createContext, useContext } from 'react';

const context = createContext({
  alert: function alert(title, text, options) {},
});

export function useDialog() {
  const { alert } = useContext(context);
  return alert;
}

const Provider = context.Provider;
const Consumer = context.Consumer;

export {
  Provider,
  Consumer,
};
