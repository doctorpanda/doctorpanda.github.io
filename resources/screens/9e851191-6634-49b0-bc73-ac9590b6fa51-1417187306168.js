jQuery("#simulation")
.on("click", ".s-9e851191-6634-49b0-bc73-ac9590b6fa51 .click", function(event, data) {
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
} else if(jFirer.is("#s-Rectangle_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/5a045e4e-dcd5-4e56-98a9-9240d0e63b78"
}
}
]
}
]
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Rectangle_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/0883cb9e-6393-4537-adb1-2b04b47f69b3"
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