export class Lexer {

  constructor(input) {
    this.input = input;
    this.size = input && input.length;
    this.buffer = [];
    this.position = 0;
    this.line = 0;
  }

  nextToken() {
    
  }
}
