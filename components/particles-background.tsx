export function ParticlesBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0",
      }}
    />
  )
}
