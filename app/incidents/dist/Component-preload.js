//@ui5-bundle ns/incidents/Component-preload.js
sap.ui.require.preload({
	"ns/incidents/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(n){"use strict";return n.extend("ns.incidents.Component",{metadata:{manifest:"json"}})});
},
	"ns/incidents/i18n/i18n.properties":'# This is the resource bundle for ns.incidents\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Incident management\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,60\nflpTitle=Incidents Management\n',
	"ns/incidents/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"ns.incidents","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.2","toolsId":"c4879592-cbf1-4de2-806f-909fe6a84b62"},"dataSources":{"mainService":{"uri":"odata/v4/processor/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"incidents-display":{"semanticObject":"incidents","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.129.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ns.incidents.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"IncidentsList","target":"IncidentsList"},{"pattern":"Incidents({key}):?query:","name":"IncidentsObjectPage","target":"IncidentsObjectPage"}],"targets":{"IncidentsList":{"type":"Component","id":"IncidentsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Incidents","variantManagement":"Page","navigation":{"Incidents":{"detail":{"route":"IncidentsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}},"initialLoad":"Enabled"}}},"IncidentsObjectPage":{"type":"Component","id":"IncidentsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Incidents","controlConfiguration":{"conversation/@com.sap.vocabularies.UI.v1.LineItem#i18nConversation":{"tableSettings":{"type":"ResponsiveTable","creationMode":{"name":"Inline"}}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"incidents"}}'
});
//# sourceMappingURL=Component-preload.js.map
