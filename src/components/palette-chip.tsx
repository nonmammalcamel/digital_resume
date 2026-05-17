type PaletteChipProps = {
  name: string;
  variable: string;
};

export function PaletteChip({ name, variable }: PaletteChipProps) {
  return (
    <div className="palette-chip">
      <div className="palette-chip__swatch" style={{ background: `var(${variable})` }} aria-hidden="true" />
      <div>
        <p className="palette-chip__name">{name}</p>
        <p className="palette-chip__value">{variable}</p>
      </div>
    </div>
  );
}
