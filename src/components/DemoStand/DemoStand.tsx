import React from 'react';
import s from './DemoStand.module.css'
import SuperButton from "../../common/components/SuperButton/SuperButton";
import SuperCheckbox from "../../common/components/SuperCheckbox/SuperCheckbox";
import SuperDebouncedInput from "../../common/components/SuperDebouncedInput/SuperDebouncedInput";
import SuperEditableSpan from "../../common/components/SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperPagination from "../../common/components/SuperPagination/SuperPagination";
import SuperRadio from "../../common/components/SuperRadio/SuperRadio";
import SuperRange from "../../common/components/SuperRange/SuperRange";
import SuperSelect from "../../common/components/SuperSelect/SuperSelect";
import SuperSort from "../../common/components/SuperSort/SuperSort";

export const DemoStand = () => {
    return (
        <div className={s.stand}>
            <div className={s.stand_item}><SuperButton>SuperButton</SuperButton></div>
            <div className={s.stand_item}><SuperCheckbox>SuperCheckbox</SuperCheckbox></div>
            <div className={s.stand_item}><SuperInputText placeholder={'SuperInputText'}/></div>
            <div className={s.stand_item}><SuperDebouncedInput placeholder={'SuperDebouncedInput'}/></div>
            <div className={s.stand_item}><SuperEditableSpan value={'SuperEditableSpan'}/></div>
            <div className={s.stand_item}><SuperPagination page={5} itemsCountForPage={1} totalCount={30} onChange={() => {}} /></div>
            <div className={s.stand_item}><SuperRadio value={1} options={[{id: 1, value: 'Super'}, {id: 2, value: 'Radio'}]}/></div>
            <div className={s.stand_item}><SuperSelect value={1} options={[{id: 1, value: 'Super'}, {id: 2, value: 'Select'}]}/></div>
            <div className={s.stand_item}><SuperRange value={[20, 80]}/></div>
            <div className={s.stand_item}><SuperSort sort={'test'} value={'test'} onChange={() => {}} /></div>
        </div>
    );
};

