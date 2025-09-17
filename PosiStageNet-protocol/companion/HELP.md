## PosiStageNet Protocol Companion Module

This module connects to a PosiStageNet (PSN) server and exposes tracker data as variables in Companion.

### Protocol Overview

**PosiStageNet** is a UDP multicast protocol (default: 236.10.10.10:56565) for transmitting real-time tracking data. Data is organized in a chunked binary format, supporting multiple trackers per packet. Each UDP packet may contain one or more chunks, and a single frame may be split across multiple packets.

#### Key Concepts

- **UDP Multicast**: Default address 236.10.10.10, port 56565 (configurable).
- **Chunked Data**: Each chunk has a header (32-bit) with ID, data length, and subchunk flag. Chunks may contain other chunks or binary data.
- **Packet Types**: Two main packet types:
  - **PSN_INFO**: Contains server info, tracker list, and tracker names.
  - **PSN_DATA**: Contains tracker positions, speeds, orientations, and more.

#### PSN_INFO Packet Structure

- Root chunk: `0x6756` (PSN_INFO_PACKET)
  - Header: timestamp, protocol version, frame info
  - System name chunk: `0x0001`
  - Tracker list chunk: `0x0002`
    - For each tracker (chunk ID = tracker ID):
      - Name chunk: `0x0000`

#### PSN_DATA Packet Structure

- Root chunk: `0x6755` (PSN_DATA_PACKET)
  - Header: timestamp, protocol version, frame info
  - Tracker list chunk: `0x0001`
    - For each tracker (chunk ID = tracker ID):
      - Position: `0x0000` (x, y, z)
      - Speed: `0x0001` (x, y, z)
      - Orientation: `0x0002` (x, y, z)
      - Validity: `0x0003`
      - Acceleration: `0x0004` (x, y, z)
      - Target Position: `0x0005` (x, y, z)
      - Tracker Timestamp: `0x0006`

#### Variable Mapping

Each tracker will have variables for:

- Position: `tracker_<id>_pos_x`, `tracker_<id>_pos_y`, `tracker_<id>_pos_z`
- Speed: `tracker_<id>_speed_x`, etc.
- Orientation: `tracker_<id>_ori_x`, etc.
- Validity: `tracker_<id>_validity`
- Acceleration: `tracker_<id>_accel_x`, etc.
- Target Position: `tracker_<id>_trgtpos_x`, etc.
- Tracker Timestamp: `tracker_<id>_timestamp`

#### Notes

- The module will automatically detect and create variables for all trackers present in the data stream.
- If a tracker is removed from the server, its variables will remain until Companion is restarted.
- The module will ignore unknown or future chunk types for maximum compatibility.
- Numeric tracker values (position, speed, orientation, acceleration, target position, validity) are rounded to at most 3 decimal places when exposed as variables to keep outputs readable.
- You can configure how many trackers to follow via the setting "Max trackers to follow". Variables are generated for tracker IDs up to this number (including ID 0), and only those trackers will be populated during runtime.

#### Example Usage

You can use variables like `${tracker_1_pos_x}` in Companion buttons, feedbacks, or elsewhere to access live tracker data.

#### References

- [PosiStageNet Protocol Wiki](https://github.com/bitfocus/companion-module-base/wiki)

---
