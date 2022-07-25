export interface IMultipleInputQuestion{
  imagesQuestion:string[],
  questionValue:string
}

export interface IMultipleInputAnswer{
  imagesAnswer:string[],
  isCorrectAnswer:boolean,
  answerValue: string,
  id:string
}

export interface IMatchingItemQuestion  {
  id:string,  
  questionValue:string,
  imagesQuestion:string[]
}
export interface IMatchingItemAnswer  {
  id:string,  
  isCorrectAnswer?:boolean,
  answerValue:string,
  imagesAnswer:string[]
}

export interface IMatchingItem  {
  id:string,  
  questionValue:string,
  imagesQuestion:string[],
  answerValue:string,
  imagesAnswer:string[]
}

export interface IMultipleInputItem{
  imagesAnswer:string[], 
  isCorrectAnswer: boolean,
  answerValue:string,
  id: string
}

export interface IQuestionState {
  id:number
  questonType: string,
	inputQuestion: IMultipleInputQuestion | IMatchingItemQuestion[],
	answer:IMultipleInputAnswer[] | IMatchingItemAnswer[]
	points:number,
	teacherComment:string
}

export interface IExamInfo{
  course:string,
  grade:string,
  schools:string[],
  subject:string,
  time:string
}