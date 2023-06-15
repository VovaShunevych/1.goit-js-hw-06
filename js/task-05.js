
  
const getInputValue = ({ currentTarget }) =>
  (nameRef.innerText =
    currentTarget.value.trim() !== ''
      ? currentTarget.value.trim()
      : 'Anonymous');


