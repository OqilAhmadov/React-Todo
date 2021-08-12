import React from 'react'
import ClassNames from 'classnames';

import removeSvg from '../../assets/img/remove.svg'

import Badge from '../Badge'

import './List.scss'

export default function List({ items, isRemovable, onClick, onRemove }) {

    const removeList = (item) => {
        if (window.confirm('ВЫ действительно хотите удалить список?')) {
            onRemove(item);
        }
    }

    return (
        <ul onClick={onClick} className="list">
            {
                items.map((item, index) => (
                    <li key={index} className={ClassNames(item.className, { 'active': item.active })} >
                        <i>
                            {item.icon ? item.icon :
                                <Badge color={item.color} />
                            }
                        </i>
                        <span>{item.name}</span>
                        {isRemovable &&
                            <img src={removeSvg}
                                className="list__remove-icon"
                                alt="Remove incon"
                                onClick={ () => removeList(item) }
                            />}
                    </li>
                ))
            }

        </ul>
    )
}
