import Myname from './components/claculator.js'
function MyButton() {
  return (
      <button>
        I'm a button
      </button>
  );
}

export default function MyApp() {
  return (
    <div className="mul">
      <Myname />
    </div>
  );
}
