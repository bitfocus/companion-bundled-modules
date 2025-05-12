# Brainstorm Suite – Companion Module

This module for Companion allows control and automation of applications from the **Brainstorm Suite**, including **InfinitySet**, **Aston**, **eStudio**, and **Edison**. It is designed for integration into live production workflows and advanced graphics environments.

The module communicates with Brainstorm applications via WebSocket, sending commands to trigger predefined or custom actions.

## Module Setup

In the Companion module settings, enter the following parameters:

- **Server IP or Hostname**
- **Server Port** (default: `55123`)
- **License Daemon Port** (default: `54200`)

## Available Actions

- **Run Actions** – Execute predefined actions in your project.
- **Start Aston** – Launch the *Aston* application.
- **Start InfinitySet** – Launch the *InfinitySet* application.
- **Start Edison** – Launch the *Edison* application.
- **Stop App** – Stop the currently running application.
- **Configure Itemset** – Execute a custom itemset.
