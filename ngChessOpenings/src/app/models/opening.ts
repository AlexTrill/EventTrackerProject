export class Opening {
  openingId: number;
  name: String;
  pieceColor: String;
  tutorialLink: String;
  type: String;
  imageUrl: String;
  common: boolean;

  constructor(
    openingId: number= 0,
    name: String ='',
    pieceColor: String = '',
    tutorialLink: String='',
    type: String = '',
    imageUrl: String = '',
    common: boolean = false){
      this.openingId=openingId;
      this.name=name;
      this.pieceColor =pieceColor;
      this.tutorialLink =tutorialLink;
      this.type=type;
      this.imageUrl=imageUrl;
      this.common=common;
    }
}

