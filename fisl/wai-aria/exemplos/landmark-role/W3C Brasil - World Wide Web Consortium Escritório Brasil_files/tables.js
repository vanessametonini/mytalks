jQuery(document).ready(function($){var jqtp={tableframe:{'void':'none','above':'solid none none none','below':'none none solid none','lhs':'none none none solid','rhs':'none solid none none','hsides':'solid none solid none','vsides':'none solid none solid','box':'solid','border':'solid'},process:function(){var pdata='({'+$(this).attr('title')+'})';var params=eval(pdata);var table=jqtp.nextTable(this);if(!table)
return;$(table).attr("jqtp_params",pdata);jqtp.doTable(params,$(table));$(this).remove();},nextTable:function(el){if(el==null)
return null;do{while(el.nextSibling==null){if(el.parentNode==null)
return null;else
el=el.parentNode;}
el=el.nextSibling;while(el.tagName!='TABLE'&&el.firstChild)
el=el.firstChild;}while(el&&el.tagName!='TABLE');return el;},unitify:function(n){if(/^\d+$/.test(n))
return n+"px";else
return n;},doTable:function(p,t){if(p.id!=undefined)
t.id=p.id;if(p.summary!=undefined)
t.summary=p.summary;if(p.caption!=undefined)
t.append("<caption>"+p.caption+"</caption>");var hrc=p.headerrows;var frc=p.footerrows;jqtp.cleanHeadAndFoot(t,hrc,frc);jqtp.collapseCells(t);jqtp.colours(p,t);jqtp.borders(p,t);jqtp.layout(p,t);jqtp.align(p,t);if(p.sort=="on"&&(p.disableallsort!="on")){t.addClass("jqtp_sortable");}},collapseCells:function(t){var span=/^\s*\^\s*$/;t.find("tr").each(function(){$(this).find("td")
.add($(this).find("th"))
.filter(function(){return span.test($(this).text());})
.each(function(){var offset=$(this).prevAll().length;var rb=$(this);do{rb=rb.parent().prev()
.children().eq(offset);}while(span.test(rb.text()));rb.attr("rowspan",rb.attr("rowspan")+1);});});t.find("td")
.add($(this).find("th"))
.filter(function(){return span.test($(this).text());})
.remove();},cleanHeadAndFoot:function(t,hrc,frc){var bodies=t.find('tbody');var b=bodies[0];var h=t.find('thead');if(h.length==0&&b.firstChild){if(hrc!=undefined){if(hrc>$(b).children().length)
hrc=$(b).children().length;}else{hrc=0;var fc=b.firstChild;while(fc&&fc.firstChild&&fc.firstChild.tagName=='TH'){hrc++;fc=fc.nextSibling;}}
if(hrc>0){bodies.before("<thead></thead>");h=t.find('thead');while(hrc--){var bratz=$(b).children();h.append($(bratz[0]).remove());}}}
var f=t.find('tfoot');if(f.length!=0&&f.children().length==0){f.remove();f=[];}
if(f.length==0&&$(b).children().length>0){if(frc!=undefined){if(frc>$(b).children().length)
frc=$(b).children().length;}else{frc=0;var lc=b.lastChild;while(lc&&lc.firstChild&&lc.firstChild.tagName=='TH'){frc++;lc=lc.previousSibling;}}
if(frc>0){bodies.after("<tfoot></tfoot>");f=t.find('tfoot');while(frc--){var bratz=$(b).children();f.append($(bratz[bratz.length-1]).remove());}}}},colours:function(p,t){if(p.headerbg!=undefined||p.headercolor!=undefined){var h=t.find('thead').add(t.find('tfoot'));if(h.length){if(p.headerbg!=undefined)
h.css("background-color",p.headerbg);if(p.headercolor!=undefined)
h.css("color",p.headercolor);}}
if(p.databg!=undefined||p.datacolor!=undefined){var h=t.find('tbody > tr');if(h.length){if(p.databg!=undefined){var c=p.databg.split(/\s*,\s*/);for(var i=0;i<h.length;i++){$(h[i]).css("background-color",c[i%c.length]);}}
if(p.datacolor!=undefined){var c=p.datacolor.split(/\s*,\s*/);for(var i=0;i<h.length;i++){$(h[i]).css("color",c[i%c.length]);}}}}},borders:function(p,t){if(p.tableborder!=undefined)
t[0].border=p.tableborder;if(p.tableframe!=undefined&&jqtp.tableframe[p.tableframe]!=undefined)
t.css('border-style',jqtp.tableframe[p.tableframe]);if(p.tablerules==undefined)
p.tablerules="rows";t[0].rules=p.tablerules;if(p.cellborder!=undefined){t.find("td").add(t.find("th"))
.css("border-width",jqtp.unitify(p.cellborder));}},layout:function(p,t){if(p.cellpadding!=undefined)
t[0].cellPadding=p.cellpadding;if(p.cellpadding!=undefined)
t[0].cellSpacing=p.cellspacing;if(p.tablewidth!=undefined)
t[0].width=p.tablewidth;if(p.columnwidths!=undefined){var cw=p.columnwidths.split(/\s*,\s*/);var h=t.find('tr').each(function(){var i=0;var kid=this.firstChild;while(kid&&i<cw.length){var cs=kid.colSpan;if(cs<1)cs=1;if(cs==1)
$(kid).css("width",jqtp.unitify(cw[i]));i+=cs;do{kid=kid.nextSibling;}while(kid&&kid.nodeType!=1);}});}},align:function(p,t){if(p.valign==undefined)
p.valign="top";if(p.headervalign==undefined)
p.headervalign=p.valign;if(p.datavalign==undefined)
p.datavalign=p.valign;t.find("thead > tr > th")
.add(t.find("thead > tr > td"))
.add(t.find("tfoot > tr > th"))
.add(t.find("tfoot > tr > td"))
.css("vertical-align",p.headervalign);t.find("tbody > tr > td")
.add(t.find("tbody > tr > th"))
.css("vertical-align",p.datavalign);if(p.headeralign)
t.find("thead > tr > th")
.add(t.find("thead > tr > td"))
.add(t.find("tfoot > tr > th"))
.add(t.find("tfoot > tr > td"))
.css("text-align",p.headeralign);if(p.dataalign)
t.find("tbody > tr > td")
.add(t.find("tbody > tr > th"))
.css("text-align",p.headeralign);},makeSortable:function(){var sortOpts;var pdata=$(this).attr("jqtp_params");if(pdata!=undefined){$(this).removeAttr("jqtp_params");var p=eval(pdata);var sortcol=[0,0];if(p.initSort!=undefined){if(!sortOpts)sortOpts={};sortcol[0]=p.initSort-1;sortOpts.sortList=[sortcol];}
if(p.initdirection!=undefined){if(!sortOpts)sortOpts={};sortcol[1]=(p.initdirection=="down")?1:0;sortOpts.sortList=[sortcol];}
if(p.databgsorted!=undefined){if(!sortOpts)sortOpts={};var className='jqtp_databgsorted_'
+p.databgsorted.replace(/\W/g,'_');var cols=p.databgsorted.split(/\s*,\s*/);col=cols[0];$("body").append('<style type="text/css">.'+className
+'{background-color:'+col
+'}</style>');sortOpts.cssAsc=className;sortOpts.cssDesc=className;}}
if(!$(this).find("thead").length){jqtp.cleanHeadAndFoot($(this));}
$(this).tablesorter(sortOpts);}};$(".jqtp_process").each(jqtp.process);var sort=$("meta[name='JQTABLEPLUGINSORT']").attr("content");if(sort){if(sort=='all'){$("table").addClass("jqtp_sortable");}else if(sort=='attachments'){$(".foswikiAttachments table").addClass("jqtp_sortable");}}
$(".jqtp_sortable").each(jqtp.makeSortable);});