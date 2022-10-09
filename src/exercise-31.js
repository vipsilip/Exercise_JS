export function countStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  return studentList.reduce((count, student) => {
    if (student.gender === 'male') count += 1;
    return count;
  }, 0);
}
// export function countStudents(studentList) {
//     if (!Array.isArray(studentList) || studentList.length === 0) return 0;
//     let count = 0;
//     for(let i=0;i<studentList.length;i++){
//         const student = studentList[i];
//         if(student.gender==='male') count+=1;
//     }
//     return count;
//   }
