const users = {
  alex: {
    skills: ['HTML', 'CSS', 'JS'],
  },
  Asab: {
    skills: ['HTML', 'CSS', 'JS', 'Redux', 'MongoDB'],
  },
  Brook: {
    skills: ['HTML', 'CSS', 'JS', 'React'],
  },
};
function findMostSkills(obj) {
  let maxSkill = 0;
  let nameMaxSkill = '';
  for (let name in obj) {
    const amountSkill = obj[name].skills.length;
    if (amountSkill > maxSkill) {
      maxSkill = amountSkill;
      nameMaxSkill = name;
    }
  }
  return nameMaxSkill;
}
console.log(findMostSkills(users));
