export interface IMultipleInputQuestion{
  selectImagesValue:string[],
  questionValue:string
}

export interface IMultipleInputAnswer{
  selectImagesValue:string[],
  isCorrectAnswer:boolean,
  answerValue: string,
  id:string
}

export interface IMatchingItem  {
  id:string,  
  questionValue:string,
  imagesQuestion:string[],
  answerValue:string,
  imagesAnswer:string[]
}

export interface IMatchingItemQuestion  {
  id:string,  
  questionValue:string,
  imagesQuestion:string[]
}
export interface IMatchingItemAnswer  {
  id:string,  
  answerValue:string,
  imagesAnswer:string[]
}

export interface IMultipleInputItem{
  selectImagesValue:string[], 
  isCorrectAnswer: boolean,
  answerValue:string,
  id: string
}