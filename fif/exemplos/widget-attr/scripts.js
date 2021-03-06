  function changeSourceCodeView(node_link, sc_id  ) {
   
     var node_sc = document.getElementById( sc_id );
	 
	 if( node_sc ) 
	   if( node_sc.style.display == "none" ) {
	      node_sc.style.display = "block";
		  node_link.innerHTML = node_link.innerHTML.replace(/Show/, "Hide");
	   } else {
	      node_sc.style.display = "none";	 
		  node_link.innerHTML = node_link.innerHTML.replace(/Hide/, "Show");
	   } // endif
     else 
	   alert("Id not found");
  }
  
 


/**
 *
 * The Globale Variables
 */

if (!window.Node) {
  var Node = {            // If there is no Node object, define one
    ELEMENT_NODE: 1,    // with the following properties and values.
    ATTRIBUTE_NODE: 2,  // Note that these are HTML node types only.
    TEXT_NODE: 3,       // For XML-specific nodes, you need to add
    COMMENT_NODE: 8,    // other constants here.
    DOCUMENT_NODE: 9,
    DOCUMENT_FRAGMENT_NODE: 11
  }
} 


var KEY_PAGEUP   = 33;
var KEY_PAGEDOWN = 34;
var KEY_END      = 35;
var KEY_HOME     = 36;

var KEY_LEFT     = 37;
var KEY_UP       = 38;
var KEY_RIGHT    = 39;
var KEY_DOWN     = 40;

var KEY_SPACE    = 32;
var KEY_TAB      = 9;

var KEY_BACKSPACE = 8;
var KEY_DELETE    = 46;
var KEY_ENTER     = 13;
var KEY_INSERT    = 45;
var KEY_ESCAPE    = 27;

var KEY_F1        = 112;
var KEY_F2        = 113;
var KEY_F3        = 114;
var KEY_F4        = 115;
var KEY_F5        = 116;
var KEY_F6        = 117;
var KEY_F7        = 118;
var KEY_F8        = 119;
var KEY_F9        = 120;
var KEY_F10       = 121;

var KEY_M         = 77;

var NS_XHTML = "http://www.w3.org/1999/xhtml"
var NS_STATE = "http://www.w3.org/2005/07/aaa";

// **********************************************
// *
// * Commonly used helper functions
// *
// **********************************************

/**
 *
 * nextSiblingElement
 * 
 * @contructor
 */
 
function nextSiblingElement( node ) {

  var next_node = node.nextSibling;

  while( next_node
		&& (next_node.nodeType != Node.ELEMENT_NODE) ) {
	  next_node = next_node.nextSibling;
  }  // endwhile

  return next_node;
  
}

/**
 *
 * previousSiblingElement 
 * 
 * @param ( node ) node object for which you are looking for the next sibling element node
 *
 * @return ( node) next sibling or "null"
 */
 
function previousSiblingElement( node ) {

  var next_node = node.previousSibling;

  while( next_node
		&& (next_node.nodeType != Node.ELEMENT_NODE) ) {
	  next_node = next_node.previousSibling;
  }  // endwhile

  return next_node;
  
}

/**
 *
 * firstChildElement 
 * 
 * @param ( node ) node object for which you are looking for the first child element node
 *
 * @return ( node) next sibling or "null"
 */
 
function firstChildElement( node ) {

  var next_node = node.firstChild;

  while( next_node
		&& (next_node.nodeType != Node.ELEMENT_NODE) ) {
	  next_node = next_node.nextSibling;
  }  // endwhile


  return next_node;
  
}

/**
 *
 * getTextContentOfNode
 * 
 * @contructor
 */
 
function getTextContentOfNode( node ) {

  var next_node = node.firstChild;
  var str = "";

  while( next_node ) {
		
	  if( (next_node.nodeType == Node.TEXT_NODE ) &&
		  (next_node.length > 0 )
		 )
	    str += next_node.data;
	  
	  
	  next_node = next_node.nextSibling;
	  
  }  // endwhile

  return str;
  
}

/**
 *
 * setTextContentOfNode
 * 
 * @contructor
 */
 
function setTextContentOfNode( node, text ) {

   // Generate a new text node with the text value
    var text_node = document.createTextNode(text);
  
    // Remove child nodes to remove text
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    } // while

    // Append new text to the container element
    node.appendChild( text_node );

}

// JavaScript Document


if (!window.Node) {
  var Node = {            // If there is no Node object, define one
    ELEMENT_NODE: 1,    // with the following properties and values.
    ATTRIBUTE_NODE: 2,  // Note that these are HTML node types only.
    TEXT_NODE: 3,       // For XML-specific nodes, you need to add
    COMMENT_NODE: 8,    // other constants here.
    DOCUMENT_NODE: 9,
    DOCUMENT_FRAGMENT_NODE: 11
  }
} 

var ARIA_STATE = "aria-";

/**
 * Widgets Object is used to initialize a set of controls 
 * and provide a conveinence fuction to cancel event propagration
 * @construtor
 */
 
function Widgets() {
  this.widgets = new Array();
}

/**
 * add is member of the Widgets Object 
 * and used add a widget ot the list of widgets to be intitialized 
 * as part of the onload event
 * The controls array is the list of controls to initialize
 * @member Enable
 * @return none
 */

Widgets.prototype.add = function(obj) {
  this.widgets[this.widgets.length] = obj;
}

/**
 * init is member of the Widgets Object 
 * and is called by the onload event to initialize widgets in the web resource
 * The controls array is the list of controls to initialize
 * @member Enable
 * @return none
 */

Widgets.prototype.init = function() {
   	
   for(var i = 0; i < this.widgets.length; i++ )
     this.widgets[i].init();
}

//
// convience function for getting the node based on id

function _$( id ) {
  return document.getElementById( id );	
}


//
// WebBrowser object to abstract accessibility API differences between web standards supporting browsers and Internet Explorer 7.0
//
// The state variable keeps track of current state of checkbox
function WebBrowser() {

}


//
// keyCode is a function to get the keycode from a keypress event
//
// @param ( event object) event is an event object
//
// @return ( keycode ) 

WebBrowser.prototype.keyCode = function( event ) {
  var e = event || window.event;
  
  return e.keyCode;
}  

/**
 * OnClick Event Simulator
 *
 * @param ( node ) DOM node object
 * @return nothing
 */

if( document.createEvent ) {

  // If a web standards based browser implement this function

  WebBrowser.prototype.simulateOnClickEvent = function( node ) {
    // W3C DOM Events way to trigger a "click" event
    var e = document.createEvent('MouseEvents');
    e.initEvent( 'click', true, true );

    node.dispatchEvent( e );

  } 

} else {

  // If a Microsoft IE based browser implement this function
  
  WebBrowser.prototype.simulateOnClickEvent = function( node ) {

    var e = document.createEventObject();
    node.fireEvent( "onclick", e );

  } // endif

}

if ( document.addEventListener ) {

  // If a web standards based browser implement this function

  WebBrowser.prototype.setMouseCapture = function( node, clickHandler, downHandler, moveHandler, upHandler ) {

    if( clickHandler )
      document.addEventListener( "click",     clickHandler, true );
		
    if( downHandler )
      document.addEventListener( "mousedown", downHandler,  true );

    if( moveHandler )
      document.addEventListener( "mousemove", moveHandler,  true );
		
		if( upHandler)
      document.addEventListener( "mouseup",   upHandler,    true );

  }

  WebBrowser.prototype.releaseMouseCapture = function( node, clickHandler, downHandler, moveHandler, upHandler ) {

	if( upHandler)
      document.removeEventListener( "mouseup",   upHandler,    true );
			
    if( moveHandler )
      document.removeEventListener( "mousemove", moveHandler,  true );
		
    if( downHandler )
      document.removeEventListener( "mousedown", downHandler,  true );
			
    if( clickHandler )
      document.removeEventListener( "click",     clickHandler, true );

  }

} else {

  // If a Microsoft IE based browser implement this function

  WebBrowser.prototype.setMouseCapture = function( node, clickHandler, downHandler, moveHandler, upHandler ) {

   node.setCapture();
   if( clickHandler)
	   node.attachEvent( "onclick", clickHandler );
		 
   if( downHandler)
     node.attachEvent( "onmousedown", downHandler );
		 
   if( moveHandler )
	   node.attachEvent( "onmousemove", moveHandler );
		 
   if( upHandler )
	   node.attachEvent( "onmouseup", upHandler );

  } // endif

  WebBrowser.prototype.releaseMouseCapture = function( node, clickHandler, downHandler, moveHandler, upHandler ) {

   if( upHandler )
     node.detachEvent( "onmouseup", upHandler );
		 
   if( moveHandler )
     node.detachEvent( "onmousemove", moveHandler );
		 
   if( downHandler)
     node.detachEvent( "onmousedown", downHandler );
		 
   if( clickHandler)
     node.detachEvent( "onclick", clickHandler );
		 
     node.releaseCapture();

  } // endif


}




if (typeof document.documentElement.setAttributeNS != 'undefined') {

  WebBrowser.prototype.stopPropagation = function( event ) {
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  WebBrowser.prototype.target = function( event ) {
	return event.target;
  }
  
  WebBrowser.prototype.attrName = function( event ) {
	return event.attrName
  }
  
  WebBrowser.prototype.charCode = function(event) {
     return event.charCode;
  }

  WebBrowser.prototype.calculateOffsetLeft = function( node ) {
	return node.offsetLeft;	  
  }
  
  WebBrowser.prototype.calculateOffsetTop = function( node ) {
	return node.offsetTop;	  
  }
  
  WebBrowser.prototype.pageX = function( e ) {
		return e.pageX;	  
  }
  
  WebBrowser.prototype.pageY = function( e ) {
		return e.pageY;	  
  }
  
  WebBrowser.prototype.setNodePosition = function(node,left,top) {
		node.style.left = left+"px";
		node.style.top = top+"px";
  }


} else {

  WebBrowser.prototype.stopPropagation = function( event ) {
    event.cancelBubble = true; 
    event.returnValue = false;
    return false;
  }

  WebBrowser.prototype.charCode = function(event) {
    return window.browser.keyCode( event );
  }

  WebBrowser.prototype.target = function( event ) {
    return event.srcElement;
  }

  WebBrowser.prototype.attrName = function( event ) {
	return event.propertyName;
  }
  
  WebBrowser.prototype.calculateOffsetLeft = function(node) {
	var offset = 0;
	
	while( node ) {
	  offset += node.offsetLeft;
	  node = node.offsetParent;
	}
	
	return offset;	  
  }
  
  WebBrowser.prototype.calculateOffsetTop = function(node) {
	var offset = 0;
	
	while( node ) {
		offset = offset + node.offsetTop;
		node = node.offsetParent;
	}
	
	return offset;	  
  }
  
  WebBrowser.prototype.pageX = function( e ) {
		return e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);	  
  }
  
  WebBrowser.prototype.pageY = function( e ) {
		return e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);	  
  }
  
  WebBrowser.prototype.setNodePosition = function(node,left,top) {
		offsetx = 0;
		offsety = 0;
		nnode = node.offsetParent
		while( nnode ) {
			offsetx = offsetx + nnode.offsetLeft;
			offsety = offsety + nnode.offsetTop;
			nnode = nnode.offsetParent;
		}
		node.style.left = left-offsetx+"px";
		node.style.top = top-offsety+"px";
  }
  
};


if (document.addEventListener) {

     // Functions for W3C Standards compliant implementation of adding event handlers

     WebBrowser.prototype.addEvent = function(elmTarget, sEventName, fCallback) {
       elmTarget.addEventListener(sEventName, fCallback, false);
       returnValue = true;
     };

     WebBrowser.prototype.removeEvent = function(elmTarget, sEventName, fCallback) {
       elmTarget.removeEventListener(sEventName, fCallback, false);
       returnValue = true;
     };

     WebBrowser.prototype.addChangeEvent =  function(elmTarget, fCallback) {
      elmTarget.addEventListener("DOMAttrModified", fCallback, false);
      returnValue = true;
    };

} else {

  if(document.attachEvent) {

     // IE Specific Event handler functions
     WebBrowser.prototype.addEvent = function(elmTarget, sEventName, fCallback) {
       returnValue = elmTarget.attachEvent('on' + sEventName, fCallback);
     };

     WebBrowser.prototype.removeEvent = function(elmTarget, sEventName, fCallback) {
       returnValue = elmTarget.detachEvent('on' + sEventName, fCallback);
     };

    WebBrowser.prototype.addChangeEvent =  function(elmTarget, fCallback) {
      returnValue = elmTarget.attachEvent("onpropertychange", fCallback);
    };

  } else {

     // For browsers that do not support W3C or IE event functions
     WebBrowser.prototype.addEvent = function(elmTarget, sEventName, fCallback) {
       return false;
     };

     WebBrowser.prototype.removeEvent = function(elmTarget, sEventName, fCallback) {
       return false;
     };

     WebBrowser.prototype.addChangeEvent =  function(elmTarget, fCallback) {
       return false;
     };

  }

}

widgets_flag = true;
var widgets = new Widgets();
var browser = new WebBrowser();

function initApp() {
  widgets.init();
}

/**
 *
 * The Checkbox object is used to maintain information about a checkbox widget
 *
 * @constructor
 */

function Checkbox( id ) {
  this.id = id;
} // end Checkbox


/**
 * init is a subclass of Checkbox and is used to initialize the event handlers 
 *
 * @member Checkbox
 *
 * @return none
 */

Checkbox.prototype.init = function() {

  this.node = document.getElementById(this.id);
  this.image_node = this.node.getElementsByTagName("img")[0];

  if( this.node.getAttribute("aria-checked") == "true") 
     this.image_node.src = "images//checked.gif";
  
  var obj = this; 
  // Add event handlers for checking a checkbox 
  browser.addEvent(this.node, "keydown", function(event) {handleCheckboxKeyDownEvent(event, obj); }, false);
  browser.addEvent(this.node, "keypress", function(event) {handleCheckboxKeyPressEvent(event, obj); }, false);
  browser.addEvent(this.node, "click",   function(event) {handleCheckboxClickEvent(event, obj); },   false);
  
  // Add event handlers for a checkbox geeting and losing focus
  browser.addEvent(this.node, "focus", function(event) {handleCheckboxFocusEvent(event, obj);}, false);
  browser.addEvent(this.node, "blur",  function(event) {handleCheckboxBlurEvent(event, obj); }, false);
} // end Checkbox.prototype.init

/**
 * toggleCheckbox is called by event handlers to toggle the state of the checkbox
 *
 * @param ( Checkbox object ) checkbox  Checkbox to toggle state
 *
 * @return none
 */

toggleCheckbox = function( checkbox ) {

  if (checkbox.node.getAttribute("aria-checked") == "true") {

    // If the checkbox is currently checked set the state to unchecked	

    checkbox.node.setAttribute("aria-checked", "false");
    checkbox.image_node.src= "images/unchecked.gif";

  } else {

    // If the checkbox is currently unchecked set the state to checked	

    checkbox.node.setAttribute("aria-checked", "true");
    checkbox.image_node.src= "images//checked.gif";

  }  // endif
  
 
} // end toggleCheckbox

/**
 * handleCheckboxKeyDownEvent processes keys associated with a checkbox
 *
 * @param ( event ) event is the event handler for the event
 * @param ( Checkbox object ) checkbox is the Checkbox object that is the target of the keyboard event
 *
 * @return false to stop event propagation if mouse event was used by checkbox, else true
 */

handleCheckboxKeyDownEvent = function(event, checkbox) {
	// If IE get the IE event object
	var e = event || window.event;

  switch( browser.keyCode(e) ) {

    case KEY_SPACE:
	     // When space hit toggle the checkbox
         toggleCheckbox( checkbox );
		 // Tell browser we handled this event and not to process any other actions
         return browser.stopPropagation(e);
         break;

  }  // end switch

  return true;

} // end handleCheckboxKeyDownEvent

/**
 * handleCheckboxKeyPressEvent processes keys associated with a checkbox
 *
 * The Opera browser performs some window commands from the keypress event,
 * not keydown like Firefox, Safari, and IE. This event handler consumes
 * keypresses for relevant keys so that Opera behaves when the user is
 * manipulating the checkboxes with the keyboard.
 *
 * @param ( event ) event is the event handler for the event
 * @param ( Checkbox object ) checkbox is the Checkbox object that is the target of the keyboard event
 *
 * @return false to stop event propagation if key event was used by checkbox, else true
 */

handleCheckboxKeyPressEvent = function(event, checkbox ) {
  // If IE get the IE event object
  var e = event || window.event;

  switch( browser.keyCode(e) ) {

    case KEY_SPACE:
	 // Tell browser we handled this event and not to process any other actions
         return browser.stopPropagation(e);
         break;

  }  // end switch

  return true;

} // end handleCheckboxKeyPressEvent

/**
 * handleCheckboxFocusEvent processes keys associated with a Checkbox
 *
 * @param ( event ) event is the event handler for the event
 * @param ( Checkbox object ) checkbox is the Checkbox object that is the target of the keyboard event
 *
 * @return false if keyboard event was used by checkbox, else true
 */

handleCheckboxFocusEvent = function(event, checkbox) {
  //Kick IE 7
  checkbox.node.className += ""; 

  return true;

} // end handleCheckboxFocusEvent

/**
 * handleCheckboxBlurEvent processes keys associated with a checkbox
 *
 * @param ( event ) event is the event handler for the event
 * @param ( Checkbox object ) checkbox is the Checkbox object that is the target of the keyboard event
 *
 * @return false if keyboard event was used by checkbox, else true
 */

handleCheckboxBlurEvent = function(event, checkbox) {
  //Kick IE 7
  checkbox.node.className += ""; 

  return true;

} // end handleCheckboxBlurEvent

/**
 * handleCheckboxClickEvent processes pointer click events with in the checkbox
 *
 * @param ( event ) event is the event handler for the event
 * @param ( Checkbox object ) checkbox is the Checkbox object that is the target of the pointer event
 *
 * @return false to stop event propagation if mouse event was used by checkbox, else true
 */

function handleCheckboxClickEvent( event, checkbox ) {
	// If IE get the IE event object
	var e = event || window.event;

  if( (checkbox.node == browser.target(e)) ||
	  (checkbox.image_node == browser.target(e)) ) {
	  // Toggle the checkbox
      toggleCheckbox( checkbox );
	  checkbox.node.focus();
	  // Tell browser we handled this event and not to process any other actions
	  return browser.stopPropagation(e);
  } // endif

  return true;
} // end handleCheckboxClickEvent
