import CellModel from "./CellModel";
import Figure from "./figures/Figure";
import { MoveDirection } from "./figures/MoveDirection";
import O from "./figures/O";
import { fieldHeight, fieldWidth } from "./static-data";

export default class FieldModel {
  cells: CellModel[] = [];
  nextFigure: Figure | null = null;
  currentFigure: Figure | null = null;
  gameOver: boolean = false;

  level: number = 1;
  score: number = 0;

  private createRandomFigure(): Figure {
    return new O();
  }

  private getCopy(): FieldModel {
    const newField = new FieldModel();
    newField.cells = this.cells;
    newField.currentFigure = this.currentFigure;
    newField.nextFigure = this.nextFigure;
    newField.gameOver = this.gameOver;
    return newField;
  }

  private checkGameOver() {
    const nextFigureCellsArr = this.nextFigure.getCellsArray();

    for (let i = 0; i < nextFigureCellsArr.length; i++) {
      const figureCell = nextFigureCellsArr[i];
      const cellToCheck = this.cells.find((c) => c.x === figureCell.x && c.y === figureCell.y);
      if (cellToCheck.filled) {
        this.gameOver = true;
        return;
      }
    }
  }

  private spawnNextFigure() {
    const cellsToFill = this.currentFigure.getCellsArray();
    for (let i = 0; i < cellsToFill.length; i++) {
      const { x, y } = cellsToFill[i];
      const cell = this.cells.find((c) => c.x === x && c.y === y);
      cell.filled = true;
    }

    this.checkGameOver();

    this.currentFigure = this.nextFigure;
    this.nextFigure = this.createRandomFigure();
  }

  private horizontalMove(direction: MoveDirection) {
    const figureCellsArr = this.currentFigure.getCellsArray();
    
    for (let i = 0; i < figureCellsArr.length; i++) {
      const figureCell = figureCellsArr[i];
      const leftCell = this.cells.find((c) => c.x === figureCell.x + (direction as number) && c.y === figureCell.y)
      if (!leftCell || leftCell.filled) return;
    }

    this.currentFigure.move(direction);
  }

  private moveBottom() {
    const figureCellsArr = this.currentFigure.getCellsArray();
    const maxY = Math.max(...figureCellsArr.map((c) => c.y));

    const xCoordinates = figureCellsArr.map((c) => c.x);
    const minX = Math.min(...xCoordinates);
    const maxX = Math.max(...xCoordinates);

    if (maxY + 1 === fieldHeight) {
      this.spawnNextFigure();
      return;
    }

    for (let i = minX; i <= maxX; i++) {
      const cellToCheck = this.cells.find((c) => c.x === i && c.y === maxY + 1);
      if (cellToCheck.filled) {
        this.spawnNextFigure();
        return;
      }
    }

    this.currentFigure.move(MoveDirection.BOTTOM);
  }

  initGame(): FieldModel {
    for (let i = 0; i < fieldHeight; i++) {
      for (let j = 0; j < fieldWidth; j++) {
        this.cells.push(new CellModel(j, i));
      }
    }

    this.nextFigure = this.createRandomFigure();
    this.currentFigure = this.createRandomFigure();
    return this.updateBoard();
  }

  moveCurrentFigure(direction: MoveDirection) {
    switch (direction) {
      case MoveDirection.BOTTOM:
        this.moveBottom();
        break;
      case MoveDirection.LEFT:
      case MoveDirection.RIGHT:
        this.horizontalMove(direction);
        break;
      default:
        break;
    }
  }

  updateBoard(): FieldModel {
    for (let i = 0; i < this.cells.length; i++) {
      const cell = this.cells[i];
      if (!cell.filled) cell.hasFigure = this.currentFigure.onCell(cell);
    }

    return this.getCopy();
  }


}
