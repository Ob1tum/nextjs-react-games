import CellModel from "../CellModel";
import Figure from "./Figure";

export default class S extends Figure {
  constructor() {
    super();
    
    this.cells.push(new CellModel(1, 0, true));
    this.cells.push(new CellModel(2, 0, true));
    this.cells.push(new CellModel(1, 1, true));
    this.cells.push(new CellModel(0, 1, true));

    this.displacementX = 3;
    this.displacementY = 0;
  }

  nextRotate(): void {
    throw new Error("Method not implemented.");
  }
}
