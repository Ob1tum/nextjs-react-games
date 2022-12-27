import CellModel from "../CellModel";
import Figure from "./Figure";

export default class O extends Figure {
  constructor() {
    super();

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        this.cells.push(new CellModel(i, j, true));
      }
    }

    this.displacementX = 4;
    this.displacementY = 0;
  }
  
  nextRotate(): void {
    throw new Error("Method not implemented.");
  }
}
