import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const Energy_1Widget: React.FunctionComponent<IWidgetProps> = (props) => {
    let [value,setValue] = React.useState(0);
    React.useEffect(()=>{
        props.uxpContext.executeAction('EnergyMeter','GetData',{},{json:true}).then(data=>{
            setValue(data.value);
        });
    },[]);
    return (
        <WidgetWrapper className={'energy-widget'}>
            <div style={{ flex:1,display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center' }}>
            <div className='title'>Current Consumption</div>
            <div className='value'>{`${value} kwH`}</div>
            </div>
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "energy_1",
    widget: Energy_1Widget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "energy_1",
    label: "Energy_1",
    // click: () => alert("Hello"),
    component: Energy_1Widget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"energy_1",
    component: Energy_1Widget
});
*/