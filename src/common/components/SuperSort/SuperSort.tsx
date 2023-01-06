import React from 'react'
import downIcon from './img/arrow_down.png'
import upIcon from './img/arrow_up.png'
import noneIcon from './img/arrow_default.png'
import s from './SuperSort.module.css'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case down: return up;
        case up: return '';
        default: return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value   // '0tech' '0developer'
    const down = '1' + value // '1tech' '1developer'

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            className={s.icon}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={'icon'}
            />
        </span>
    )
}

export default SuperSort
