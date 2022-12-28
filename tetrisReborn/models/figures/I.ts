import CellModel from "../CellModel";
import Figure from "./Figure";

export default class I extends Figure {
  constructor() {
    super();
    
    for (let i = 0; i < 4; i++) {
      this.cells.push(new CellModel(i, 0, true));
    }

    this.displacementX = 3;
    this.displacementY = 0;
  }

  nextRotate(): void {
    throw new Error("Method not implemented.");
  }
}
