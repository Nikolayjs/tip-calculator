import { FC, useState } from 'react';
import TextField from './ui/TextField';
import Button from './ui/Button';
import ResultCard from './ResultCard';
import React from 'react';

const buttons = [
  {
    name: '5%',
    value: 5,
    isActive: false,
  },
  {
    name: '10%',
    value: 10,
    isActive: false,
  },
  {
    name: '15%',
    value: 15,
    isActive: false,
  },
  {
    name: '25%',
    value: 25,
    isActive: false,
  },
  {
    name: '50%',
    value: 50,
    isActive: false,
  },
];

interface ICalculation {
  value: number | string;
  people: number | string;
  percent: null | number;
  customPercent: null | number;
}

const Card: FC = () => {
  const [calculation, setCalculation] = useState<ICalculation>({
    value: 0,
    people: 0,
    percent: null,
    customPercent: null,
  });

  const [result, setResult] = useState(0);
  const [tip, setTip] = useState(0);

  const handlePercent = (value: number, index: number) => {
    const btn = buttons[index];
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] !== buttons[index]) {
        buttons[i].isActive = false;
        setCalculation({ ...calculation, percent: null, customPercent: null });
      }
    }
    if (btn.isActive && calculation.percent === value) {
      btn.isActive = false;
      setCalculation({ ...calculation, percent: null, customPercent: null });
      setTip(0);
    } else {
      btn.isActive = true;
      setCalculation({ ...calculation, percent: value, customPercent: null });
    }
  };

  const handleCustomPercent = (value: number) => {
    buttons.forEach((btn) => {
      [...buttons, (btn.isActive = false)];
    });
    setCalculation({ ...calculation, percent: value, customPercent: value });
  };

  const handleReset = () => {
    buttons.forEach((btn) => {
      [...buttons, (btn.isActive = false)];
    });
    setCalculation({
      ...calculation,
      value: 0,
      people: 0,
      percent: 0,
      customPercent: null,
    });
    setResult(0);
    setTip(0);
  };

  React.useEffect(() => {
    let value = Number(calculation.value);
    let people = Number(calculation.people);
    let percent = Number(calculation.percent);
    setResult(value);
    if (people) {
      setResult(value / people);
    }
    if (percent) {
      setTip((Number(calculation.value) / 100) * percent);
      setResult(value + (value / 100) * percent);
    }
    if (percent && people) {
      setTip((Number(calculation.value) / people / 100) * percent);
      setResult(value / people + (value / people / 100) * percent);
    }
  }, [calculation]);

  return (
    <div className="w-full lg:max-w-[920px] bg-white rounded-2xl flex flex-col lg:flex-row min-h-[480px] p-[50px] gap-[50px]">
      <div className="flex flex-col gap-7 w-full lg:max-w-[380px]">
        <TextField
          label="Bill"
          img="icon-dollar.svg"
          id="bill"
          placeholder="0"
          value={calculation.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCalculation({ ...calculation, value: e.target.value })
          }
        />
        <h3 className="text-dark-grayish-cyan">Select Tip %</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {buttons.map((btn, i) => (
            <Button
              key={btn.value}
              stl="bg-dark-cyan hover:bg-primary text-white hover:text-dark-cyan w-full"
              isActive={btn.isActive}
              onClick={() => handlePercent(btn.value, i)}
            >
              {btn.name}
            </Button>
          ))}
          <TextField
            type="text"
            id="percent"
            placeholder="Custom"
            value={`${calculation.customPercent ? calculation.customPercent : ''}`}
            onChange={(e: { target: { value: number } }) => handleCustomPercent(e.target.value)}
          />
        </div>
        <TextField
          label="Number of people"
          img="icon-person.svg"
          id="person"
          placeholder="0"
          value={calculation.people}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCalculation({ ...calculation, people: e.target.value })
          }
        />
      </div>
      <ResultCard result={result} tip={tip} handleReset={handleReset} />
    </div>
  );
};

export default Card;
