import React from 'react';
import ReactDOM from 'react-dom';

const registeredComponentTypes = new Map();
let ready = false;

export default function registerComponentType(typeName, ComponentType) {
  if (registeredComponentTypes.has(typeName)) {
    throw new Error(`component class "${typeName}" already registered`);
  }
  registeredComponentTypes.set(typeName, ComponentType);

  if (ready) mountComponents(typeName);
}

document.addEventListener('DOMContentLoaded', () => {
  ready = true;
  mountComponents();
});

function mountComponents(onlyTypeName = null) {
  const selector = onlyTypeName
    ? `[data-react-component="${onlyTypeName}"]`
    : '[data-react-component]';

  Array.from(document.querySelectorAll(selector)).map(node => {
    const typeName = node.dataset.reactComponent;
    mountComponent(getRegisteredComponentType(typeName), node);
  });
}

function mountComponent(ComponentType, node) {
  const props = JSON.parse(node.dataset.reactProps);
  ReactDOM.render(<ComponentType {...props} />, node);
}

export function getRegisteredComponentType(typeName) {
  if (!registeredComponentTypes.has(typeName)) {
    throw new Error(`component class "${typeName}" not registered`);
  }
  return registeredComponentTypes.get(typeName);
}
