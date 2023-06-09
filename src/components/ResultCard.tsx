import { FC } from 'react';
import Button from './ui/Button';

interface IResult {
  result: number;
  tip: number;
  handleReset: () => void;
}

const ResultCard: FC<IResult> = ({ result, tip, handleReset }) => {
  return (
    <div className="bg-dark-cyan rounded-2xl flex min-h-full w-full lg:max-w-[380px] mt-10 lg:mt-0 justify-around">
      <div className="flex flex-col m-[50px]">
        <div className="flex flex-wrap h-full ">
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-lg text-white">Tip Amount</h3>
              <span className="text-dark-grayish-cyan">/ person</span>
            </div>
            <h1 className="text-5xl text-primary">{`${
              tip ? `$${Number(tip).toFixed(2)}` : '$0.00'
            }`}</h1>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-lg text-white">Total</h3>
              <span className="text-dark-grayish-cyan">/ person</span>
            </div>
            <h1 className="text-5xl text-primary">{`${
              result ? `$${Number(result).toFixed(2)}` : '$0.00'
            }`}</h1>
          </div>
          <div className="w-full mt-10 lg:mt-0 self-end">
            <Button
              stl="w-full bg-primary text-dark-cyan text-white disabled:bg-dark-grayish-cyan disabled:text-dark-cyan"
              onClick={handleReset}
              disabled={result ? false : true}
            >
              RESET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
