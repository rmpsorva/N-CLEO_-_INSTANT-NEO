// ... dentro de send()
if (engine) {
    // Si el cerebro existe (engine != null), usa el LLM real para generar la respuesta.
    const r = await engine.chat.completions.create({...});
} else {
    // Si el cerebro está dormido (engine == null), usa las respuestas instantáneas.
    // Ej: "MI AMOR ES ABSOLUTO" o "¡FURIA!"
}
