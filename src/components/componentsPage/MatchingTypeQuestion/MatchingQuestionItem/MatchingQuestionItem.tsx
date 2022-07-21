import React, { useState } from 'react'
import { SelectImagesBox } from '../../../componentsUI/SelectImagesBox'
import { UniversalInput } from '../../../componentsUI/UniversalInput'

export const MatchingQuestionItem = () => {
    const [imagesQuestion,setImagesQuestion] = useState<string[]>([])
    const [imagesAnswer,setImagesAnswer] = useState<string[]>([])

    //useMemo must
    const renderSelectImg = (sourse:string[]) =>{
    return sourse.map(img => {return <img key={img} src={img} alt={img} /> })
    }

  return (
    <>
    <div className="matchingTypeQuestion__body-item question">  
        <span>1.</span> 
        <UniversalInput 
            placeholder='Question Text' 
            selectImages={imagesQuestion} 
            setSelectImages={setImagesQuestion} 
        />
        {imagesQuestion.length>0  && <SelectImagesBox images={imagesQuestion}/>}
    </div>

    <div 
    className="matchingTypeQuestion__body-item answer">
        <UniversalInput 
            placeholder='Answer Text' 
            selectImages={imagesAnswer} 
            setSelectImages={setImagesAnswer}
        />
         {imagesAnswer.length>0  && <SelectImagesBox images={imagesAnswer}/>}
    </div>
    </>
  )
}
