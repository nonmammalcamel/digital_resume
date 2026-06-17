import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          border: '3px solid #65a86a',
          color: '#d6a542',
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: '-0.08em',
          fontFamily:
            'SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
        }}
      >
        TK
      </div>
    ),
    {
      ...size
    }
  );
}