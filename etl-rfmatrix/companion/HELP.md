# ETL Systems: Victor RF Matrix

This module allows control of an ETL Systems Victor RF Matrix over TCP/IP using the ETL ASCII protocol.  
It supports routing, reading input/output aliases, and monitoring connection status.

---

## **Configuration**

When adding the module in Companion, you will be prompted for:

- **Host**  
  The IP address or hostname of the Victor RF Matrix.

- **Port**  
  TCP control port (default: `4000`).

- **Polling Interval (ms)**  
  How often the module polls the matrix for status and aliases.

---

## **Features**

- **Routing**  
  Route any input to any output using dropdown menus populated from the matrix's current aliases or via numeric variables (1–16).

- **Aliases**  
  Automatically fetches and updates input and output aliases from the matrix.  
  Aliases are exposed for use in button labels and variables.

- **Status Monitoring**  
  Connection state is shown in Companion and updated automatically.

---

## **Actions**

- **Route Input to Output**  
  Select an input and an output to create a route.  
  Inputs/outputs can be selected from dropdowns (with aliases) or by entering a variable/number (1–16).

---

## **Variables**

The following variables are available:

- `$(victor:input_<n>)` – Alias for input `n`  
  Example: `$(victor:input_1)` returns alias of input 1.

- `$(victor:output_<n>)` – Alias for output `n`  
  Example: `$(victor:output_3)` returns alias of output 3.

- `$(victor:routed_input_<n>)` – Input number currently routed to output `n`.  
  Example: `$(victor:routed_input_4)` might return `2` if output 4 is fed from input 2.

---

## **Feedbacks**

- **Output Source Match**  
  Change button colors when a specific input is routed to a specific output.

---

## **Notes**

- Ensure the Victor RF Matrix has TCP control enabled and is reachable from the Companion system.
- This module communicates using ETL's ASCII protocol with checksum validation.
- If aliases are changed on the matrix directly, they will be updated in Companion at the next poll.

---

## **Example Button Setup**

1. **Route Control Button**

   - Action: _Route Input to Output_
   - Input: `$(internal:custom_variable)` or choose from dropdown
   - Output: `4`

2. **Status Feedback**
   - Feedback: _Output Source Match_
   - Output: `4`
   - Input: `1`
   - Foreground Color: White  
     Background Color: Green

---

## **Troubleshooting**

- **Connection Not Found or Not Running**  
  Check Host/Port settings and network connectivity. Restart Companion if necessary.

- **Aliases Not Updating**  
  Ensure polling is enabled and the matrix supports the BAT? alias query command.

- **Routing Command Fails**  
  Verify input/output numbers are valid for your matrix (usually 1–16).

---

## Compatibility

While this module has been developed and tested with the **ETL Victor RF Matrix**, it **should** also work with other ETL RF matrix models that support the same protocol.
However, I have not been able to test with other models myself.  
If you try this module with another ETL matrix model, please let me know:

- If it works as expected
- If there are any errors or differences in behavior

Your feedback will help improve compatibility and reliability for all users.

---

Module maintained by **Daniel Vegter**  
[GitHub Repository](https://github.com/DaanCMP/companion-module-etl-victor-rfmatrix)
