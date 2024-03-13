import './App.css';

const currencies = [
  {coin: 'USD', exchangeRate: 3.6560, dailyChange: '0.939%'},
{coin: 'GBP', exchangeRate: 4.6037, dailyChange: '0.939%' },
{coin: 'JPY', exchangeRate: 2.4339, dailyChange: '0.939%'},
{coin: 'EUR', exchangeRate: 3.9475, dailyChange: '0.939%'},
{coin: 'AUD', exchangeRate: 3.3978, dailyChange: '0.939%'}
];
function Currencies()
{
  const list = currencies.map(coin =>
      <tr
              key = {coin.coin}
          >
              {coin.coin}, {coin.exchangeRate}, {coin.dailyChange}
          </tr>)
  return(
      <table>
          <tr><td>{list}</td></tr>
      </table>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Currency exchange rates of the top 5 currencies</h1>
      <Currencies />
    </div>
  );
}

export default App;
