import React, {Component} from 'react';
import {Readonly, Select, Number, DatePicker, Checkbox, Input, Info} from 'mta-react-common-visuals';

class Value extends Component {
    render() {
        const {item} = this.props;
        var secondColumn, thirdColumn, fourthColumn = null;
        if (item.type === "read") {
            secondColumn = <Readonly value={item.value} />
        } else if (item.type === "input") {
            secondColumn = <Input name={'input'} onChange={value => console.log(value)} />
            thirdColumn = <Readonly value={item.ehr} />
        } else if (item.type === "select") {
            secondColumn = <Select name={'select'} options={item.options} onChange={value => console.log(value)} />
            thirdColumn = <Readonly value={item.ehr} />
        } else if (item.type === "number") {
            secondColumn = <Number name={'number'} onChange={value => console.log(value)} />
            thirdColumn = <Readonly value={item.ehr} />
            fourthColumn = <><Checkbox name={'checkbox'} onChange={value => console.log(value)} />
                            <Info tooltipText={item.subField} />
                            <Readonly value={item.subField} />
                            </>
        } else if (item.type === "date") {
            secondColumn = <DatePicker onChange={value => console.log(value)}/>
        }

        return (
            <>
                <div className="col-sm-20 col-md-6 col-lg-6">
                    {secondColumn}
                </div>
                <div className="col-sm-20 col-md-2 col-lg-2 gray">
                    {thirdColumn}
                </div>
                <div className="col-sm-20 col-md-4 col-lg-4 inline">
                    {fourthColumn}
                </div>
            </>
        )
    }
}

export default Value;
