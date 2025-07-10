## Shure Chargers

- Shure SBRC
- Shure SBC240
- Shure SBC220

### Available actions

| Title                                              | Model Support |
| -------------------------------------------------- | ------------- |
| Set Device ID <sup>x</sup>                         | All           |
| Set Storage Mode <sup>x</sup>                      | All           |
| Flash Device <sup>x</sup>                          | All           |
| x Dynamic variables can be used with these actions |               |

### Available feedbacks

| Title                 | Description                                       | Model Support |
| --------------------- | ------------------------------------------------- | ------------- |
| Storage Mode          | If the charger is in storage mode                 | All           |
| Flash                 | If Flash is active on the charger                 | All           |
| Bay Detected          | If there is a battery in the charging bay.        | All           |
| Bay State             | Current state of the charging bay                 | All           |
| Bay Error             | Current error of the charging bay                 | All           |
| Battery Charge Equals | If the battery charge is equal to the given value | All           |

#### Time To Full Value Table

    Numeric, five characters

    Considered as time to target where:

    Charging Mode: Value is the estimated time to full charge.
    Storage Mode: Value is the estimated time to optimal storage voltage.

| Value         | Description                                     |
| ------------- | ----------------------------------------------- |
| 00000 - 65528 | Number of minutes estimated to reach the target |
| 65529         | Battery is fully charged                        |
| 65533         | Calculation in progress                         |
| 65534         | Error has occurred                              |
| 65535         | Unknown or not applicable                       |
