export default function CalendarioPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
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
