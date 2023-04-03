## Boinx mimoLive

**Professional Live Streaming for Mac**

mimoLive brings powerful tools for professional live streaming to your Mac, iPad, and iPhone.

It is an all-in-one live switcher, video encoder, editor, and streaming software for Mac®. It enables you to switch multiple cameras, insert presentations, add graphics, overlay lower-thirds, social media comments, transparency with green screens, and so much more.

mimoLive records and streams simultaneously to various services and locations.

### Supported commands

- Document Actions (Set Live, Set Off, Toggle Live)
- Layer Actions (Set Live, Set Off, Toggle Live, Cycle Through Variants)
- Output Actions (Set Live, Set Off, Toggle Live)
- Layer Set Recall
- Set Layer Volume
- Trigger a Generic Endpoint

### Supported feedback

- Document Status
- Layer Status
- Output Status
- Layer Set Status
- Variant Status

### Supported button variables

Dynamic variables are generated for all open documents, and can be accessed using a document (layer) indexing scheme. The following variables are available:

- Document name
- Document live status
- Layer name
- Layer active variant name
- Layer volume (when present)

### Usage

All actions and feedbacks can be targeted using the **API endpoint** provided within mimoLive--see [this page in the manual](https://mimolive.com/manual/5/en/topic/examples-of-api-usage) for details on how to get API endpoints.

Alternatively, **document and layer** actions can be targeted using a document (and layer) index. The first document opened in a session is index 1, the second index 2, and so on. The layer index matches the layer stack within the document, with layer 1 being at the top. For document only actions/feedbacks, just the `<document index>` is needed; for layer actions/feedbacks, the format is `<document index>,<layer index>`

### Limitations

Currently, authenticated connections are not supported, so you will need to have the Remote Control options set to no password.
