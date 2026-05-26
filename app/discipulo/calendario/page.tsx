export default function CalendarioDiscipuloPage() {
  return (
    <div style={{ height: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column' }}>
      <iframe
        src="/calendario-discipulado.html"
        style={{
          flex: 1,
          border: 'none',
          width: '100%',
        }}
        title="Calendario de Discipulado"
      />
    </div>
  )
}
