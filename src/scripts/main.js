'use strict';

const listOfInputs = Array.from(document.querySelectorAll('input'));

listOfInputs.forEach((elemInput) => {
  function prepareAttribute(nameAttr) {
    return nameAttr.charAt(0).toUpperCase() + nameAttr.slice(1);
  }

  const inputName = elemInput.getAttribute('name');
  const parentNode = elemInput.parentElement;
  const label = document.createElement('label');

  elemInput.setAttribute('placeholder', prepareAttribute(inputName));

  parentNode.insertBefore(label, elemInput);
  label.appendChild(elemInput);
});
