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
          border: '4px solid #d6a542',
          color: '#d6ffd8',
          fontSize: 34,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          fontFamily:
            'Arial, Helvetica, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
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