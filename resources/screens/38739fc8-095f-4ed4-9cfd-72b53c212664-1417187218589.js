jQuery("#simulation")
.on("click", ".s-38739fc8-095f-4ed4-9cfd-72b53c212664 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Rectangle_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/68503a7d-e959-40d2-95b6-e671729aeb29"
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