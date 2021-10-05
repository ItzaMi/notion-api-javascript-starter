/**
 * Our connection to the back-end that we created with `express`
 */
const getDataFromBackend = async () => {
  const rest = await fetch('http://localhost:8000/notion');
  const data = await rest.json();

  return data;
};

const container = document.getElementById('container');

/**
 * This function will probably add all everything that
 * you want to your HTML
 */
const addData = async () => {
  const data = await getDataFromBackend();
};

addData();
