import { PieceType, Position, TeamType } from "../Constants";

export class Piece {
  image: string;
  position: Position;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
  possibleMoves?: Position[];
  constructor(position: Position, type: PieceType, team: TeamType) {
    this.image = "";
    this.position = position;
    this.type = type;
    this.team = team;
  }
}
