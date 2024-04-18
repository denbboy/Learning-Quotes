import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { QuestResultStyle } from './QuestResult.styled'

import CorrectIc from '../../assets/img/icons/correct.svg'
import InCorrectIc from '../../assets/img/icons/incorrect.svg'
import CloseIc from '../../assets/img/icons/close.svg'

export const QuestResult = ({ onClose, endedQuest }) => {

    const dataEndQuest = endedQuest.questions

    console.log(endedQuest);
    console.log(dataEndQuest);
  return (
    <QuestResultStyle>
        <div className="results">
            <NavLink to={'/map'} className='close__btn'>
                <img src={CloseIc} alt='close ic' />
            </NavLink>
            <h2>
                Results
            </h2>
            <ul className='question'>
                    {dataEndQuest?.map(item => (
                        <li key={item.id}>
                            <p>{item.question}</p>
                            <div className="question__inner">
                                {item?.options?.map(question => (
                                    <div className="question__answer">
                                        <p>
                                            {question.value}
                                        </p>
                                        {question.is_correct === true ? <img src={CorrectIc} alt="correct ic" /> : <img src={InCorrectIc} alt="incorrect ic" />}
                                        
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
            </ul>

            <Link to={'/map'} className='ok__btn'>OK</Link>
        </div>
    </QuestResultStyle>
  )
}
