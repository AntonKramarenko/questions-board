export interface IInputQuestion{
  selectImagesValue:string[],
  questionValue:string
}

export interface IMultipleInputAnswer{
  selectImagesValue:string[],
  isCorrectAnswer:boolean,
  answerValue: string,
  id:string
}

export 	interface IMatchingItem  {
  id:string,  
  questionValue:string,
  imagesQuestion:string[],
  answerValue:string,
  imagesAnswer:string[]
}