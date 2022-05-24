import React from 'react';
import OrderSummary from '../components/Cart/OrderSummary';
import OrderSummaryDetails from '../components/Cart/OrderSummaryDetails';

export default function Cart () {
  return (
    <main className="container mx-auto">
      <h1 className="mb-6">Order Summary</h1>
      <div className="container mx-auto border-solid border-2 border-sky-500 grid gap-4 grid-cols-3 grid-rows-1">
        <OrderSummary/>
        <OrderSummaryDetails/>
      </div>
    </main>
  );
}