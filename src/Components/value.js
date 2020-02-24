import React, {Component} from 'react';
import {Readonly, Select, Number, DatePicker, Checkbox, Input} from 'mta-react-common-visuals';

class Value extends Component {
    render() {
        const {item} = this.props;
        var thirdColumn, fourthColumn, fifthColumn = null;
        if (item.type === "read") {
            thirdColumn = <Readonly value={item.value} />
        } else if (item.type === "input") {
            thirdColumn = <Input name={'input'} onChange={value => console.log(value)} />
            fourthColumn = <Readonly value={item.ehr} />
        } else if (item.type === "select") {
            thirdColumn = <Select name={'select'} options={item.options} onChange={value => console.log(value)} />
            fourthColumn = <Readonly value={item.ehr} />
        } else if (item.type === "number") {
            thirdColumn = <Number name={'number'} onChange={value => console.log(value)} />
            fourthColumn = <Readonly value={item.ehr} />
            fifthColumn = <div><Checkbox info={{content: item.subField}} name={'checkbox'} onChange={value => console.log(value)} text={item.subField} /></div>
        } else if (item.type === "date") {
            thirdColumn = <DatePicker onChange={value => console.log(value)}/>
        }

        return (
            <>
                <div>
                    {thirdColumn}
                </div>
                <div>
                    {fourthColumn}
                </div>
                {fifthColumn}
            </>
        )
    }
}

export default Value;
