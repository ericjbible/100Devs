let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

function render(document: any) {
  console.log(document);
}

const enum Size { Small, Medium, Large }

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}
