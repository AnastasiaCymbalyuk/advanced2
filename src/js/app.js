// TODO: write your code here
export default function checkDescription(obj) {
  const newArray = [];
  const { special: array } = obj;
  array.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    const objArray = {};
    objArray.id = id;
    objArray.name = name;
    objArray.icon = icon;
    objArray.description = description;
    newArray.push(objArray);
  });
  return newArray;
}
