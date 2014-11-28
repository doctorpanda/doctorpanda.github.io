jQuery("#simulation")
.on("click", ".s-5269f4d6-29ab-4edd-9ddd-30effe7f496a .click", function(event, data) {
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
} else if(jFirer.is("#s-Label_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d824b77e-c9fe-4501-aa87-4d0146bfc6d2"
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