function buatPiramidaIterasi(tinggi) { for (let i = 1; i <= tinggi; i++) { // Cetak spasi di awal baris 
  let spasi = " ".repeat(tinggi - i); // Cetak bintang di tengah baris 
  let bintang = "*".repeat(2 * i - 1);
  console.log(spasi + bintang); 
  } 
  
}
  buatPiramidaIterasi(5)

class Coba {
  constructor(name){
    this.name = name;
  }
  
  sayHello (name) {
    console.log(`hallo ${name} saya adalah ${this.name}`);
  }
  
  ganti (nama) {
    coba2.name = nama;
  }
}

class Coba2 extends Coba {
  constructor(name, rumah) {
    super(name);
    this.rumah = rumah;
  }
  
  sayHi (name) {
    console.log(`hi ${coba.name} saya adalah ${this.name}`);
  }
}

const coba = new Coba('ahmad');
coba.sayHello('kamu')

const coba2 = new Coba2(coba.name, 'bumi');
coba2.sayHi('aku')

coba.ganti('conta')
console.log(coba2.name)



// 25+54*78+6/2

// function evaluate(expression) {
//   const numbers = [25, 54];
//   const operators = [+];
//   length = 10;

//   for (let i = 0; i < expression.length; i++) {
//     const char = expression[i]; // *
//     if (!isNaN(char)) {
//       numbers.push(parseInt(char));
//     } else {
//       while (operators.length > 0 && precedence(operators[operators.length - 1]) >= precedence(char)) {
//         const b = numbers.pop();
//         const a = numbers.pop();
//         const op = operators.pop();
//         numbers.push(operate(a, b, op));
//       }
//       operators.push(char);
//     }
//   }

//   while (operators.length > 0) {
//     const b = numbers.pop();
//     const a = numbers.pop();
//     const op = operators.pop();
//     numbers.push(operate(a, b, op));
//   }

//   return numbers[0];
// }

// function precedence(operator) {
//   // Fungsi untuk menentukan prioritas operator
//   // Contoh: * dan / memiliki prioritas lebih tinggi dari + dan -
// }

// function operate(a, b, operator) {
//   // Fungsi untuk melakukan operasi aritmatika
//   // Contoh:
//   if (operator === '+') return a + b;
//   if (operator === '-') return a - b;
//   // ...
// }