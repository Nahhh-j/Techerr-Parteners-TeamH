const mon = "mon";
const thr = "thr";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek = [mon,thr,wed,thu,fri,sat];
const nonsense =[1,2,"hello",false,null,true, undefined,"nico"];

console.log(daysOfWeek[2],nonsense);

daysOfWeek.push("sun");

console.log(daysOfWeek);