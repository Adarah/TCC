import { ChangeEvent } from 'react';
import { ChangeEventHandler, EventHandler, useState } from 'react';
import RRule, { Frequency } from "rrule";
import MonthlyOptions from './monthly-options';
import Repeat from './repeat';
import WeeklyOptions from './weekly-options';
import YearlyOptions from './yearly-options';

interface RRuleProps {
    onChange: ChangeEventHandler<HTMLInputElement>,
}


const RRuleGenerator = (props: RRuleProps) => {
    const { onChange } = props;
    const [frequency, setFrequency] = useState(Frequency.HOURLY);
    const [interval, setInterval] = useState(1);
    console.log('interval is', interval);

    const handleFreqChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        setFrequency(parseInt(e.target.value, 10) as Frequency);
    }
    const handleRepeatChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        setInterval(parseInt(e.target.value, 10));
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const renderOption = (option: Frequency) => {
        switch (option) {
            case Frequency.HOURLY: {
                return <Repeat name="hour" onChange={handleRepeatChange} />;
            }
            case Frequency.DAILY: {
                return <Repeat name="day" onChange={handleRepeatChange} />;
            }
            case Frequency.WEEKLY: {
                return (
                    <>
                        <Repeat name="week" onChange={handleRepeatChange} />;
                        <div>Day of week selector</div>
                    </>
                );
            }
            case Frequency.MONTHLY: {
                return (
                    <>
                        <Repeat name="month" onChange={handleRepeatChange} />
                        <div>Monthly stuff</div>
                    </>
                )
            }
        }
    }


    return (
        <>
            <select onChange={handleFreqChange}>
                <option value={Frequency.HOURLY}>Hourly</option>
                <option value={Frequency.DAILY}>Daily</option>
                <option value={Frequency.WEEKLY}>Weekly</option>
                <option value={Frequency.MONTHLY}>Monthly</option>
                <option value={Frequency.YEARLY}>Yearly</option>
            </select>
            {
                renderOption(frequency)
            }
        </>
    );
};

export default RRuleGenerator;