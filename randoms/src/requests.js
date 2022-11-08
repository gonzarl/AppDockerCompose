const PORT1 = process.env.REACT_APP_EXPRESS_PORT;
const PORT2 = process.env.REACT_APP_EXPRESS2_PORT;
const PORT3 = process.env.REACT_APP_PHP_PORT;
const PORT4 = process.env.REACT_APP_PYTHON_PORT;

const requests = [
  {"url":"http://localhost:"+PORT1,"color":"pink"},
  {"url":"http://localhost:"+PORT2,"color":"cyan"},
  {"url":"http://localhost:"+PORT3,"color":"yellow"},
  {"url":"http://localhost:"+PORT4,"color":"red"},
]

export default requests;
