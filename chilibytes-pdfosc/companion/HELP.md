# PDFOSC Companion Module

## Introduction

This module integrates the PDFOSC viewer with Bitfocus Companion. </br>
Enables bi-directional OSC communication for remote control and monitoring of PDF documents. </br>
<b> To avoid confusion during live events, OSC feedbacks are restricted to Presentation Mode ON.</br>
This prevents non-active machines from sending feedback that could be mistaken for the live source. </b></br>

## Module Configuration

Configure the following settings for the module:

- **Remote IP**: Address of the PDFOSC machine (default: 127.0.0.1)
- **Remote Port**: Port PDFOSC listens for actions (default: 55550)
- **Listen Port**: Port Companion listens for feedbacks from PDFOSC (default: 55551)

## Available Actions

This module provides the following actions to control your PDF documents:

| Action                   | &nbsp;&nbsp;Description                                     |
| ------------------------ | ----------------------------------------------------------- |
| Next                     | &nbsp;&nbsp;Navigate to the next page                       |
| Previous                 | &nbsp;&nbsp;Navigate to the previous page                   |
| First Page               | &nbsp;&nbsp;Jump to the first page of the document          |
| Last Page                | &nbsp;&nbsp;Jump to the last page of the document           |
| Enter Presentation Mode  | &nbsp;&nbsp;Switch PDFOSC into fullscreen presentation mode |
| Exit Presentation Mode   | &nbsp;&nbsp;Exit from fullscreen presentation mode          |
| Toggle Presentation Mode | &nbsp;&nbsp;Switch between normal and presentation modes    |

</br>

## Feedback Functions

These feedbacks indicate the state of your document:

| Feedback | Description                                             |
| -------- | ------------------------------------------------------- |
| Current  | Shows the current page number                           |
| Total    | Shows the total pages number of the document            |
| State    | Shows the state of Presentation Mode                    |
| Test     | Shows 99/99 and Green Background in Current/Total pages |

</br>

## Variables

The module provides these variables for use in buttons and other modules:

| Variable       | Description                                               |
| -------------- | --------------------------------------------------------- |
| Current        | Current page number                                       |
| Total          | Total pages number                                        |
| State          | State of Presentation Mode (Normal, Presentation, Exited) |
| isPresentation | Indicates if presentation mode is active (Yes/No)         |

</br>

## Presets

Ready-to-use presets are included for common functions:

- **Navigation Controls**: Previous/Next page buttons, First/Last page buttons
- **Page Counter**: Displays current page and total pages
- **Presentation Controls**: Toggle button that changes function based on presentation mode state

## Using with PDFOSC

This module requires the PDFOSC PDF viewer application to be installed and running on your target machine(s). Please ensure:

1. PDFOSC is properly installed and running
2. Network connectivity exists between Companion and the PDFOSC machine
3. The ports configured in this module match those in PDFOSC
4. Pressing Test button in PDFOSC Config Page, will send 99/99 and Green background to "Current/Total pages" button
5. <b>OSC feedbacks will be enabled only when Presentation Mode is active, Action and Test functions are always enable.</b>

For information about installing and configuring the PDFOSC application, please visit: [PDFOSC GitHub Repository](https://github.com/chilibytesdotcom/pdfosc)

## Troubleshooting

| Issue                    | &nbsp;&nbsp;&nbsp;&nbsp;Solution                                                      |
| ------------------------ | ------------------------------------------------------------------------------------- |
| Cannot connect to PDFOSC | &nbsp;&nbsp;&nbsp;&nbsp;Check IP address, ports and ensure PDFOSC is running          |
| Cannot connect to PDFOSC | &nbsp;&nbsp;&nbsp;&nbsp;Check network connectivity and firewall settings              |
| Actions not working      | &nbsp;&nbsp;&nbsp;&nbsp;Confirm a PDF document is open in PDFOSC                      |
| Actions not working      | &nbsp;&nbsp;&nbsp;&nbsp;Verify Remote IP and port settings match PDFOSC configuration |
| No feedback from PDFOSC  | &nbsp;&nbsp;&nbsp;&nbsp;Verify listen port setting matches PDFOSC configuration       |
| No feedback from PDFOSC  | &nbsp;&nbsp;&nbsp;&nbsp;Is PDFOSC in Presentation Mode ?                              |

</br>

## Support

For additional help with this module:

- Check the [full documentation](https://github.com/chilibytesdotcom/pdfosc)
- Report issues to the [GitHub issues page](https://github.com/chilibytesdotcom/companion-module-chilibytes-pdfosc/issues)

## About

This Companion module is maintained by [ChiliBytes](https://chilibytes.com)
