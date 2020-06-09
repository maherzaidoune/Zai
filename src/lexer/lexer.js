export class Lexer {

  constructor(input) {
    this.input = input;
    this.size = input && input.length;
    this.buffer = [];
    this.position = 0;
    this.line = 0;
    this.column = 0;
  }

  nextToken = () => {
    if (this.buffer.length > 0) {
      return this.buffer.pop();
    }
    return this.read();
  }

  read = () => {

  }
}
