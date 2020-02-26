import React, {Component} from 'react';
import {Section, Readonly, Info} from 'mta-react-common-visuals';
import Data from '../Data/data.json';
import Value from './value.js';
import Important from './important.js';

class Form extends Component {
    render() {
        return (
            <div>
                <Section collapsible={false} title={'Test form'}>
                    <Section form={true} title={'Ehitise üldinfo'}>
                        <div className="form">
                            <div className="form-row form-header">
                                <div className="col-sm-20 col-md-4 col-lg-4"></div>
                                <div className="col-sm-20 col-md-6 col-lg-6"><Readonly value={'Taotluse andmed'} /></div>
                                <div className="col-sm-20 col-md-2 col-lg-2"><Readonly value={'EHR andmed'} /></div>
                                <div className="col-sm-20 col-md-4 col-lg-4"></div>
                            </div>
                            {Data.map((item, index) => {
                                return (
                                    <div className="form-row" key={index}>
                                        <div className="col-sm-20 col-md-4 col-lg-4 right inline">
                                            <div><Readonly value={item.name} /></div>
                                            <div><Important item={item} /></div>
                                            <div><Info tooltipText={item.info} /></div>
                                        </div>
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
