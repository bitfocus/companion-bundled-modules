# Digital Projection projectors control module

A companion module to control and monitor Digital Projection projectors.

## Supported models

    Models supported by Projector Controller II

    ["Satellite HIGHlite Head 4K-UHD", "Satellite HIGHlite Head WU", \
    "Satellite Titan Head 4K-UHD", "Satellite Titan Head WU"],
    ["Satellite Control Module"],
    ["MLS 10000", "MLS 20000", "MLS 30000"],
    ["Titan 47000 WU", "Titan 43000 WU", "Titan 42000 WU"],
    ["Titan 41000 4K-UHD", "Titan 37000 4K-UHD"],
    ["Titan Laser 37000 WU", "Titan Laser 29000 WU"],
    ["Titan Laser 33000 4K-UHD", "Titan Laser 26000 4K-UHD"],
    ["HIGHlite 4K"],
    ["HIGHlite Laser 3D"],
    ["HIGHlite Laser II 3D"],
    ["E-Vision Laser 15000 WU", "E-Vision 13000 WU"],
    ["M-Vision 23000 WU", "M-Vision Laser 21K", "M-Vision 21000 WU"],
    ["M-Vision 27000 WU", "M-Vision 24000 WU", "M-Vision 21000 WU II"],
    ["M-Vision Laser 18K"],
    ["E-Vision Laser 15000 WU"],
    ["E-Vision Laser 13K"],
    ["E-Vision Laser 11000 4K-UHD"],
    ["E-Vision Laser 10K"],
    ["E-Vision 10000i WU", "E-Vision 8000i WU", "E-Vision 10000 WU", "E-Vision 8000 WU"],
    ["E-Vision 9100 WU"],
    ["E-Vision Laser 4K-UHD"],
    ["E-Vision Laser 8500", "E-Vision Laser 7500"],
    ["EV9000"],
    ["EV6500 II"],
    ["EV5900_WU", "EV7010_WU"],
    ["EV5100_WU", "EV6110_WU"]

## Module overview

    Actions, Variables and Presets are automatically generated from model chosen.
    At connection creation, Initial requests to populate variables values are sent.

### Initial requests

        At connection creation, Initial requests to populate variables values are sent.
        This process may take some time, depending on the model chosen \
        and the number of variables.
        TCP protocol used by Digital Projection needs to resend a response \
        for each request before next request can be received.
        In the "Edit Connection" tab a `Initial requests polling rate (ms)` can be set.
        Default value is `1100ms` based on test made with \
        "Virtual Projectors" of "Controller Projector II" .

### Presets

        Presets are stored by categories:

         - At first level by categories provided by the model chosen 
           (for example "Input", "Picture","Alignment"...).

         - At second level by category of actions:
            . "ChoiceList" (a dropdown list of options)
            . "ToggleList" (a switch between two options)
            . "Value" (a numeric value)
            . "Execute" (a simple command)

        ChoiceList, ToggleList and Value presets labels are linked \
        to their corresponding variable.
        If the module receive a value from the target device, \
        it will automatically update the corresponding variable and then \
        the label of the corresponding preset will be also updated.

        If no value is known or received for a variable,\
        button background color stays "Orange".

### Supported commands

    A generic "Send Command"Action is also created to send non-standard \
    commands to the target device.

    List of available commands and detailed protocols by model \
    can be found on the [DigitalProjection](https://www.digitalprojection.com/) website.
