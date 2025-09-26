## PlanningCenter Online - Services LIVE

This module will allow you to control PCO LIVE and advance your Planning Center Online Service Plans.

### Configuration

- You will need to set up a Personal Access Token in your PCO account.
- <https://api.planningcenteronline.com/oauth/applications>
- The PCO account that makes the token will be the account that controls the plans.
- Supply the Application ID and Secret Key to Companion in the module instance settings.
- You can supply a folder ID to filter the list of services to that specific folder. You can get the folder ID from the URL when viewing that folder in the browser.
- You can also supply a Service Type ID to only return plans for that service type. You can get the Service Type Id from the URL also.
- You can choose how many plans per service type to return and allow as options for control.

### To use the module

Add an action to a button and choose the PCO Plan you wish to control.

**Available actions:**

- Go to Next Item (Select Plan Date from list)
- Go to Previous Item (Select Plan Date from list)
- Reset Live Times (Select Plan from list)
- Go to Next Item of Next Plan in Selected Service Type
- Go to Previous Item of Next Plan in Selected Service Type
- Reset Live Times of Next Plan in Selected Service Type
- Go to Next Item of a Specific Plan (Specify Service Type Id and Plan Id - supports variables)
- Go to Previous Item of a Specific Plan (Specify Service Type Id and Plan Id - supports variables)
- Reset Live Times of a Specific Plan (Specify Service Type Id and Plan Id - supports variables)
- Take Control of Plan (Select Plan Date from list)
- Release Control (Select Plan Date from list)
- Take Control of a Specific Plan (Specify Service Type Id and Plan Id - supports variables)
- Release Control of a Specific Plan (Specify Service Type Id and Plan Id - supports variables)
- Set Plan Id to poll for variables

**Available Variables:**

- Organization Name

- Plan Title
- Plan Series
- Plan Index (Current Item Location in overall Plan)
- Plan Length (Total Items in Plan)

- Plan Current Item
- Plan Current Item Time Length
- Plan Current Item Time Started
- Plan Current Item Time Remaining
- Plan Current Item Time Should Finish
- Plan Current Item Key

- Plan Next Item
- Plan Next Item Time Length
- Plan Next Item Key

- Last Controlled Service Type ID
- Last Controlled Service Type Name
- Last Controlled Plan ID
- Last Controlled Plan Name
