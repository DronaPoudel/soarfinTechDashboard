import React from 'react';

const Cards = () => {
  const cards = [
    { id: 1, number: '3778 **** **** 1234', holder: 'Eddy Cusuma', balance: 5756 },
    { id: 2, number: '4455 **** **** 5677', holder: 'Eddy Cusuma', balance: 3421 },
    { id: 3, number: '5566 **** **** 7788', holder: 'Eddy Cusuma', balance: 2755 },
    { id: 4, number: '6677 **** **** 8899', holder: 'Eddy Cusuma', balance: 1678 },
    { id: 5, number: '7788 **** **** 9900', holder: 'Eddy Cusuma', balance: 4532 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#2B3674] mb-6">All Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <div key={card.id} className="bg-[#2B3674] text-white p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm opacity-80">Balance</p>
                <p className="text-2xl font-semibold">${card.balance}</p>
              </div>
              <div className="w-12 h-8 bg-white/10 rounded-lg" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-80">CARD HOLDER</p>
                <p>{card.holder}</p>
              </div>
              <div className="flex justify-between items-end">
                <p className="text-lg">{card.number}</p>
                <div className="flex space-x-1">
                  <div className="w-6 h-6 bg-white/20 rounded-full" />
                  <div className="w-6 h-6 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;