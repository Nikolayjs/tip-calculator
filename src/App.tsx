import Card from './components/Card';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 mb-10 xl:mt-28 xl:mb-20">
        <h1 className="text-2xl text-dark-grayish-cyan">S P L I</h1>
        <h1 className="text-2xl text-dark-grayish-cyan">T T E R</h1>
      </div>
      <Card />
    </div>
  );
}

export default App;
