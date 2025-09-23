## Evertz VIP-X for Companion

**Transport:** TCP JSON-RPC 2.0 (default 31001)  
**Handshake:** required on connect.  
**Ping/Pong:** VIP-X pings ~5s; module replies automatically.

### Actions

- **Refresh Lists** – Re-fetch displays, layouts, windows, inputs, snapshots.
- **Fire Snapshot (by ID)** – Loads a snapshot by numeric ID.
- **Fire Snapshot (by Name)** – Loads a snapshot by name (exact match).
- **Set Display Layout (by ID/Name)** – Put a layout on a display or clear it.
- **Set Window Input (by IDs/Names)** – Assign or clear a window’s source.
- **Set Window Audio (by ID/Name)** – Assign or clear a window’s audio.

> Saving/creating snapshots from the client is **not supported by the VIP-X JSON-RPC** (no method exposed). Create snapshots on the MV, then use this module to recall them.

### Variables

- `$(vipx:connected)` – `true/false`
- `$(vipx:handshake_version)` – negotiated interface version
- `$(vipx:last_snapshot_loaded)` – name or id of last recall

### Feedbacks

- **Connected** – Turns style green when connected.
