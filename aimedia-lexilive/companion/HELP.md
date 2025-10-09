## AI Media Lexi Live

Start and stop your [Lexi Live](https://www.ai-media.tv/our-products/lexi-ai-powered-captioning-tool-kit/lexi-asr/) instances.

User credentials stored in the config are not secure.

### Actions

Start, stop and modify Lexi Live instances.

The origin and reason fields are written to the Lexi Live logs. The default origin is companion_v(Module Version Number)@(User):(Host).

Update Instance List will repopulate the base models, custom models, engines and instances availalbe in the actions, feedbacks, variables and presets.

### Variables

Instance Names

### Feedbacks

Instance State (Off/On)

Instance Configuration

## Version History

### Version 1.2.6
- Manage message queue for better responsiveness

### Version 1.2.5
- Password is secret-text type

### Version 1.2.4
- Sort dropdowns in Actions & Feedbacks (Instances, Base Models, Custom Models)
- Trim variables after parsing
- Sanitize variable Id's

### Version 1.2.0
- New Action: Modify Instance
- New Feedback: Instance Configuration
- Improvement: Polling instances no longer retrieves instance history
- Improvement: Parse local variables
- Fix: Update Instance List action

### Version 1.1.6

- Message queue
- Update dependencies
- Node 22
- Yarn 4

### Version 1.1.4

- Convert to ESM
- Update dependencies

### Version 1.1.3

- Fix in error logging

### Version 1.1.2

- Correct module name
- Better error logging

### Version 1.1.1

- Don't accept empty password
- Update companion-module-base to 1.8.0

### Version 1.1.0

- Add instance start and stop presets

### Version 1.0.0

- Initial release
