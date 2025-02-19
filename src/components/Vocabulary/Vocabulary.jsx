import React from 'react'
import { VocabularyStyle } from './Vocabulary.styled'

import CloseIc from '../../assets/img/icons/close.svg'

export const Vocabulary = ({ onClose, dataItem }) => {
    const dataWords = dataItem?.words

    return (
        <VocabularyStyle>
            <div className='vocabluary_bgd' onClick={onClose}></div>
            <div className="vocabulary">
                <button className='vocabulary__close' onClick={onClose}>
                    <img src={CloseIc} alt="close ic" />
                </button>
                <h2>
                    Vocabulary
                </h2>
                <ul className='vocabulary__list'>
                    {dataWords?.length ? dataWords?.map(item => (
                        <li>
                            <div className="word">
                                <h3>
                                    {item.word}
                                </h3>
                            </div>
                            <div className="translation">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    )) : <h3>
                        No words yet
                    </h3>}
                </ul>

                <button className='vocabulary__ok' onClick={onClose}>OK</button>
            </div>
        </VocabularyStyle>
    )
}
