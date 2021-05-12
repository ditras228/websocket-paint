import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className={'setting-bar'}>
            <label htmlFor="{'line-width'}">Толщина линии</label>
            <input
                onChange={e => {
                    toolState.setLineWidth(e.target.value)
                }
                }
                style={{marginLeft: 20}}
                id={'line-width'}
                type="number"
                defaultValue={1}
                min={1}
                max={50}/>
            <input onChange={e=>toolState.setStrokeColor(e.target.value)} type="color"/>
        </div>
    );
};

export default SettingBar;