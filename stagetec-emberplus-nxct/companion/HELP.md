# STAGETEC Ember+ NEXUS compact
Credits to the developers of the generic Ember+ module for the basis (https://github.com/bitfocus/companion-module-generic-emberplus)

 Features:
 * Select specific device interfaces to get access to control actions and parameter values
 * Set values of Ember+ Parameters and get feedback from Ember+ Parameters.
 
 Differences to generic Ember+ module:
 * Auto parsing of Ember+ tree
 * Additional actions available: increment, decrement, toggle boolean and set value with expression
 * Additional feedbacks available: hit threshold, below threshold and boolean equal
 * Different Ember+ library is used: node-emberplus. Reason: for Ember+ matrix extension node paths starting with values > 0 are necessary.
  
## Version History

### 0.9.1 BETA 
 * Initial version
 * Only tested with the following Ember+ trees: Nexus Compact, Nexus Modular (standard)
 
### 0.9.5 BETA 
 * NXCT Version definitions
 * Only tested with the following Ember+ trees: Nexus Compact
 * Selection of interface controls gives access to Parameters and control actions
 
### 1.0.0
 * official Release

### 1.0.1
 * proper links to GitHub Repo added to manifest.json
 * dependency cleanup
 * init improvement
  
