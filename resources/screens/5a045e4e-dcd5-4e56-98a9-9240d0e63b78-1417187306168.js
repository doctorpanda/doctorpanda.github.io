jQuery("#simulation")
.on("click", ".s-5a045e4e-dcd5-4e56-98a9-9240d0e63b78 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Image_map_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/cc5c9bd5-aaf6-489b-8661-cede3e146593",
"transition": "slideright"
}
}
]
}
]
}
];
event.data = data;
jEvent.launchCases(cases);
}
});