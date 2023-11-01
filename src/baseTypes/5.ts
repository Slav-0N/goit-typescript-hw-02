/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
union = "sdas";
union = 354354;

type Literal = "enable" | "disable";
let literal: Literal;
literal = "disable";
literal = "enable";
