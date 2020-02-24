import React, {Component} from 'react';
import {Section, Readonly, Info} from 'mta-react-common-visuals';
import Data from '../Data/data.json';
import Value from './value.js';

class Form extends Component {
    render() {
        return (
            <div>
                <Section collapsible={false} title={'Test form'}>
                    <Section form={true} title={'Ehitise üldinfo'}>
                        <div className="form">
                            <div className="form-line">
                                <div></div>
                                <div></div>
                                <div><Readonly value={'Taotluse andmed'} /></div>
                                <div><Readonly value={'EHR andmed'} /></div>
                                <div></div>
                            </div>
                            {Data.map((item, index) => {
                                return (
                                    <div className="form-line" key={index}>
                                        <div><Readonly value={item.name} /></div>
                                        <div><Info tooltipText={item.info} /></div>
                                        <Value item={item}/>
                                    </div>
                                )
                            })}
                        </div>
                    </Section>
                </Section>
            </div>
        )
    }
}

export default Form;
