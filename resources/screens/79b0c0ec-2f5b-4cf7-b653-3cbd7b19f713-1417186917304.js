jQuery("#simulation")
.on("click", ".s-79b0c0ec-2f5b-4cf7-b653-3cbd7b19f713 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-79b0c0ec-2f5b-4cf7-b653-3cbd7b19f713")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/187c81e5-b0f4-4343-baba-527b45e6d755"
}
}
]
}
]
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Panel_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/187c81e5-b0f4-4343-baba-527b45e6d755"
}
}
]
}
]
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Label_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/187c81e5-b0f4-4343-baba-527b45e6d755"
}
}
]
}
]
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_map_1")) {
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