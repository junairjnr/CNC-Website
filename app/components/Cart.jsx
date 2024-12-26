'use client';
import QRCode from 'react-qr-code';
export default function Cart() {
  const value = 'heiii';

  return (
    <div className="w-[300px] h-screen bg-black">
      <h1>hwlloo</h1>
      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: 64,
          width: '100%',
        }}
      >
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value="https://www.awwwards.com/sites/bike-bear-1"
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
