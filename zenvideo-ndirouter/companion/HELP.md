# Module for ZEN NDIRouter

Controls ZEN NDIRouter. Click here: [ZEN NDIRouter](https://www.ndistuff.uk/zen-ndi-router-remote-panel/) for more info and to download.

---

## Configuration

| Setting       | Description                                       |
| ------------- | ------------------------------------------------- |
| **Target IP** | Enter the address of the PC running ZEN NDIRouter |
| **Port**      | Enter the port TCP Control. Defaults to 9779      |

---

## Actions

| Command             | Description                 |
| ------------------- | --------------------------- |
| **Input to Output** | Route an input to an output |
| **Recall Preset**   | Recall a saved Preset       |

_Note:_ Dynamic variables can be used in most places

---

### ---The following features are waiting for a sponsor---

---

## Actions

| Command | Description |
|---|---|
| **Store Preset** | Store current routes to a Preset |

## Variables

| Variable             | Description                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **$(NAME:name)**     | Name of the Router                                                                                                    |
| **$(NAME:number)**   | Router number                                                                                                         |
| **$(NAME:n_ins)**    | Number of inputs configured                                                                                           |
| **$(NAME:n_outs)**   | Number of outputs configured                                                                                          |
| **$(NAME:preset)**   | Current preset selected (if active)                                                                                   |
| **$(NAME:i\_##\_n)** | Name of input ##                                                                                                      |
| **$(NAME:i\_##\_t)** | Name of network for input ##                                                                                          |
| **$(NAME:i\_##\_v)** | Input ## has a valid signal                                                                                           |
| **$(NAME:i\_##\_u)** | Input ## is in use (routed to an output)                                                                              |
| **$(NAME:o\_##\_n)** | Name of output ##                                                                                                     |
| **$(NAME:o\_##\_s)** | Input source number routed to output ##. Will be 0 if not routed or -1 if out of range for this router configuration. |
| **$(NAME:o\_##\_v)** | Input ## has a valid signal                                                                                           |
| **$(NAME:o\_##\_u)** | Input ## is in use (routed to an output)                                                                              |
| **$(NAME:p\_##\_n)** | Name of Preset ##                                                                                                     |
| **$(NAME:p\_##\_v)** | Preset ## is not empty                                                                                                |
| **$(NAME:p\_##\_u)** | Preset ## is active / in use                                                                                          |

To use these, replace NAME with the name of your module instance.

## Feedbacks

| Feedback          | Description                                               |
| ----------------- | --------------------------------------------------------- |
| **Input Valid**   | Adjust button appearance if Input ## is Valid             |
| **Input In Use**  | Adjust button appearance if Input ## is In Use            |
| **Routed**        | Adjust button appearance if Input X is routed to Output Y |
| **Preset Valid**  | Adjust button appearance if Preset ## is Valid            |
| **Preset In Use** | Adjust button appearance if Preset ## is In Use           |

---

Here is an example page with buttons for a 7x7 router: [Sample 7x7](./sample7x7.companionconfig) <br/>
You will need to create a custom variable `nr_out` (persistent) for this example

---

Contributions for development and maintenance of this open source module are always welcome
https://github.com/sponsors/istnv

---
