/*
 * Collapsible JSON Formatter - Formatter and colorer of raw JSON code
 * 
 * jQuery Json Formatter plugin v0.1.3
 * 
 * Usage
 * -----
 * 
 * $('#target').jsonFormat('#source'); // or
 * $('#target').jsonFormat('#source', {options override defaults}); // see jf.config
 * #target {
 *     font-family: monospace;
 *     white-space: pre; // or pre-wrap // All fails without this one!
 * }
 * 
 * License
 * -------
 * 
 * Copyright (c) 2008-2009 Vladimir Bodurov
 * http://quickjsonformatter.codeplex.com/
 * 
 * Copyright (c) 2012 Redsandro - Made jQuery plugin
 * http://www.redsandro.com/
 * 
 * The MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining 
 * a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included 
 * in all copies or substantial portions of the Software.
 */
"use strict";
// we need tabs as spaces and not CSS magin-left in order to retain format when copying and pasting the code
window.SINGLE_TAB = "  ";
window.DOUBLE_TAB = MultiplyString( 2, window.SINGLE_TAB );
window.ImgCollapsed = "images/plus.gif";
window.ImgExpanded = "images/minus.gif";
window.QuoteKeys = true;
window._dateObj = new Date();
window._regexpObj = new RegExp();
window.IsCollapsible = true;
window.ViewMeta = true;

// metacharacters are: <([{\^-=$!|]})?*+.>
// ^[a-zA-Z]*[a-zA-Z0-9].\D[a-zA-Z0-9].\D[a-zA-Z0-9]

function $id(id){ return document.getElementById( id ); }
/*
function IsArray( obj ) {
   var a = $.isArray( obj );
   var b = obj &&
          typeof obj === "object" &&
          typeof obj.length === "number" &&
          !(obj.propertyIsEnumerable( "length" ));
   if ( a != b ) {
      console.log( "Different evaluations of IsArray" );
   }
   return a;
}
*/

// Check for a valid object.
function isValidObject( obj ) {
  if ( obj === null || typeof( obj ) === "undefined" ) {
     return false;
  }
  return true;
}

// Remove an item from an array.
function remove( array, index ) {
   return array.slice( 0, index ).concat( array.slice( index + 1 ) );
}

// Generic equality test.
function deepEqual( a, b ) {
   if ( a !== null && b !== null && typeof a === "object" && typeof b === "object" ) {
      if ( a.length !== b.length ) {
         return false;
      }
      for ( var prop in a ) {
         if ( deepEqual( a[prop], b[prop] ) === false ) {
            return false;
         }
      }
      return true;
   } else {
      return a === b;
   }
}

function jsonStringToJsonObject( jsonString ) {
   var jsonObject = jQuery.parseJSON( "[" + jsonString + "]" );  // this is faster and more secure than eval
   return jsonObject;
}

function simpleTraverseJsonObject( jsonObject ) {
   if ( typeof jsonObject === "object" ) {
      $.each( jsonObject, function( key, value ) {
         // key is either an array index or object key
         simpleTraverseJsonObject( value );
      });
   } else if ( jsonObject !== null ) {
      // jsonObj is a number or string
      console.log( jsonObject );
   }
}

function findOiByName( oiName, jsonObject ) {
   var returnObj = null;
   if ( typeof jsonObject === "object" ) {
      // To break out of a $.each loop, you have to return false in the loop callback.
      // Returning true skips to the next iteration, equivalent to a continue in a normal loop.
      $.each( jsonObject, function( key, value ) {
         if ( key === oiName ) {
            returnObj = jsonObject;
            return false;
         }
         // key is either an array index or object key
         returnObj = findOiByName( oiName, value );
         if ( returnObj ) {
            return false;
         }
      });
/* } else if ( jsonObject !== null ) {
      if ( typeof jsonObject === "string" ) {
         console.log( jsonObject );
      } */
   }
   return returnObj;
}

function Process() {
   SetTab();
   window.IsCollapsible = $id("CollapsibleView").checked;
   window.ViewMeta = $id("ViewMeta").checked;
   var json = $id("RawJson").value;
// var json = g_jsonLabel;
   var formattedHtml = "";
   try {
      if ( json === "" ) {
         json = "\"\"";
      }
      var jsonObj = jsonStringToJsonObject( json );
      var oiName = "LLD";
      var jsonObject;
      if ( oiName ) {
         jsonObject = findOiByName( oiName, jsonObj );
         if ( jsonObject === null ) {
            jsonObject = jsonObj[0];
         }
      } else {
         jsonObject = jsonObj[0];
      }

      formattedHtml = renderJsonObjectAsFormattedHtml( jsonObject, 0, false, false, false );
      $id("zFormattedJsonLabel").innerHTML = "<PRE class='CodeContainer'>" + formattedHtml + "</PRE>";
   } catch(e) {
      alert( "JSON is not well formatted:\n" + e.message );
      $id("zFormattedJsonLabel").innerHTML = "";
   }
}

function renderJsonObjectAsFormattedHtml( jsonObj, indent, addComma, isArray, isPropertyContent ) {
   var formattedHtml = "";
   var comma = (addComma) ? "<span class='Comma'>,</span> " : "";
   var objType = typeof jsonObj;
   var collapseHtml = "";
   if ( $.isArray( jsonObj ) ) {
      if ( jsonObj.length === 0 ){
         formattedHtml += getRow( indent, "<span class='ArrayBrace'>[ ]</span>" + comma, isPropertyContent );
      } else {
         collapseHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" onClick=\"ExpImgClicked(this)\" /></span><span class='collapsible'>" : "";
         formattedHtml += getRow( indent, "<span class='ArrayBrace'>[</span>" + collapseHtml, isPropertyContent );
         for ( var k = 0; k < jsonObj.length; k++ ) {
            formattedHtml += renderJsonObjectAsFormattedHtml( jsonObj[k], indent + 1, k < (jsonObj.length - 1), true, false );
         }
         collapseHtml = window.IsCollapsible ? "</span>" : "";
         formattedHtml += getRow( indent, collapseHtml + "<span class='ArrayBrace'>]</span>" + comma, false );
      }
   } else if ( objType === "object" ) {
      if ( jsonObj === null ){
         formattedHtml += formatLiteral( "null", "", comma, indent, isArray, "Null" );
      } else if ( jsonObj.constructor === window._dateObj.constructor ) {
         formattedHtml += formatLiteral( "new Date(" + jsonObj.getTime() + ") /*" + jsonObj.toLocaleString() + "*/", "", comma, indent, isArray, "Date" );
      } else if ( jsonObj.constructor === window._regexpObj.constructor ) {
         formattedHtml += formatLiteral( "new RegExp(" + jsonObj + ")", "", comma, indent, isArray, "RegExp" );
      } else {
         var numProps = 0;
         var type = false;
         var content = false;
         var attributes = false;
         for ( var prop in jsonObj ) {
            if ( prop === "type" ) {
               if ( jsonObj[prop] !== "DIV" ) {
                  numProps = 0;
                  break;
               }
               type = true;
            } else if ( prop === "content" ) {
               content = true;
            } else if ( prop === "attributes" ) {
               attributes = true;
            }
            numProps++;
         }
         if ( numProps === 0 ) {
            formattedHtml += getRow( indent, "<span class='ObjectBrace'>{ }</span>" + comma, isPropertyContent );
         } else {
            collapseHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" onClick=\"ExpImgClicked(this)\" /></span><span class='collapsible'>" : "";
            formattedHtml += getRow( indent, "<span class='ObjectBrace'>{</span>" + collapseHtml, isPropertyContent );
            var j = 0;
            var skip = type && content && attributes;
            var quote = window.QuoteKeys ? "\"" : "";
            if ( skip ) {
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + "type" + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj["type"], indent + 1, ++j < numProps, false, true ), false );
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + "attributes" + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj["attributes"], indent + 1, ++j < numProps, false, true ), false );
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + "content" + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj["content"], indent + 1, ++j < numProps, false, true ), false );
            }
            for ( var prop in jsonObj ) {
               if ( skip ) {
                  if ( prop === "type" || prop === "content" || prop === "attributes" ) {
                     continue;
                  }
               } else if ( window.ViewMeta || prop.charAt( 0 ) !== "." ) {
                  formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + prop + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj[prop], indent + 1, ++j < numProps, false, true ), false );
               }
            }
            collapseHtml = window.IsCollapsible ? "</span>" : "";
            formattedHtml += getRow( indent, collapseHtml + "<span class='ObjectBrace'>}</span>" + comma, false );
         }
      }
   } else if ( objType === "string" ) {
      formattedHtml += formatLiteral( jsonObj.toString().split("\\").join("\\\\").split('"').join('\\"'), "\"", comma, indent, isArray, "String" );
   } else if ( objType === "number" ) {
      formattedHtml += formatLiteral( jsonObj, "", comma, indent, isArray, "Number" );
   } else if ( objType === "boolean" ) {
     formattedHtml += formatLiteral( jsonObj, "", comma, indent, isArray, "Boolean" );
   } else if ( objType === "function" ) {
      if ( jsonObj.constructor === window._regexpObj.constructor ) {
         formattedHtml += formatLiteral( "new RegExp(" + jsonObj + ")", "", comma, indent, isArray, "RegExp" );
      } else {
         jsonObj = formatFunction( indent, jsonObj );
         formattedHtml += formatLiteral( jsonObj, "", comma, indent, isArray, "Function" );
      }
   } else if ( objType === "undefined" ) {
      formattedHtml += formatLiteral( "undefined", "", comma, indent, isArray, "Null" );
   } else {
      formattedHtml += "UNKNOWN type: " + objType;
   }
   return formattedHtml;
}

function formatLiteral( literal, quote, comma, indent, isArray, style ) {
   var str;
   if ( indent >= 0 ) {
      if ( typeof literal === "string" ) {
         literal = literal.split("<").join("&lt;").split(">").join("&gt;");
      }
      str = "<span class='" + style + "'>" + quote + literal + quote + comma + "</span>";
      if ( isArray ) {
         str = getRow( indent, str, false );
      }
   } else {
      str = quote + literal + quote + comma;
   }
   return str;
}

function formatFunction( indent, obj ) {
   var tabs = buildTab( indent, false );
   var funcStrArray = obj.toString().split( "\n" );
   var str = "";
   for ( var k = 0; k < funcStrArray.length; k++ ) {
      str += ((k === 0) ? "" : tabs) + funcStrArray[k] + "\n";
   }

   return str;
}

function getRow( indent, data, isPropertyContent ) {
   var tabs = "";
   if ( indent >= 0 ) {
      for ( var k = 0; k < indent && !isPropertyContent; k++ ) {
         tabs += window.TAB;
      // tabs += window.DOUBLE_TAB;
      }
      if ( data !== null && data.length > 0 && data.charAt( data.length - 1 ) !== "\n" )
         data = data + "\n";
   }
   return tabs + data;
}

function ViewMetaClicked() {
    Process();
}

function CollapsibleViewClicked() {
   $id("CollapsibleViewDetail").style.visibility = $id("CollapsibleView").checked ? "visible" : "hidden";
   Process();
}

function CollapseAllClicked() {
   EnsureIsPopulated();
   TraverseChildren( $id("zFormattedJsonLabel"), function( element ) {
      if ( element.className === 'collapsible' ) {
         MakeContentVisible(element, false);
      }
   }, 0 );
}

function ExpandAllClicked() {
   EnsureIsPopulated();
   TraverseChildren( $id("zFormattedJsonLabel"), function( element ) {
      if ( element.className === 'collapsible' ) {
         MakeContentVisible( element, true );
      }
   }, 0 );
}

function MakeContentVisible( element, visible ) {
   var img = element.previousSibling.firstChild;
   if ( !!img.tagName && img.tagName.toLowerCase() === "img" ) {
      element.style.display = visible ? "inline" : "none";
      element.previousSibling.firstChild.src = visible ? window.ImgExpanded : window.ImgCollapsed;
   }
}

function TraverseChildren( element, func, depth ) {
   for( var i = 0; i < element.childNodes.length; i++ ) {
      TraverseChildren( element.childNodes[i], func, depth + 1 );
   }
   func( element, depth );
}

function CollapseLevel() {
   EnsureIsPopulated();
   var collapseLevel = $id("CollapseLevel");
   var level;
   if ( collapseLevel ) {
      level = parseInt( collapseLevel.options[collapseLevel.selectedIndex].value );
   } else {
      level = 3;
   }
   if ( level === -1 ) {
      CollapseAllClicked();
   } else if ( level === 0 ) {
      ExpandAllClicked();
   } else {
      level += 2;
      TraverseChildren( $id("zFormattedJsonLabel"), function( element, depth ) {
         if ( element.className === 'collapsible' ) {
            if ( depth >= level ) {
               MakeContentVisible( element, false );
            } else {
               MakeContentVisible( element, true );
            }
         }
      }, 0 );
   }
}

function ExpImgClicked( img ) {
   var container = img.parentNode.nextSibling;
   if ( !container ) {
      return;
   }
   var disp = "none";
   var src = window.ImgCollapsed;
   if ( container.style.display === "none" ){
      disp = "inline";
      src = window.ImgExpanded;
   }

   container.style.display = disp;
   img.src = src;
}

function TabSizeChanged() {
   Process();
}

function SetTab() {
   var select = $id("TabSize");
   var indent;
   if ( select ) {
      indent = parseInt( select.options[select.selectedIndex].value );
   } else {
      indent = 3;
   }
   window.TAB = MultiplyString( indent, window.SINGLE_TAB );
}

function EnsureIsPopulated() {
   if ( !$id("zFormattedJsonLabel").innerHTML && !!$id("RawJson").value ) // the !! is to cause $id("RawJson").value to be evaluated as a boolean 
      Process();
}

function trimLeadingAndTrailingWhiteSpace( text ) {  // should be equivalent to javascript trim
   return text.replace( /^\s+|\s+$/g, "" ); // at least one white-space character following start-of-line OR
                                            // at least one white-space character preceding end-of-line AND do-em-all (/g).
}

function trimLeadingWhiteSpace( text ) { // at least one white-space character following start-of-line
   return text.replace( /^\s+/, "" );
}

function stripTrailingWhiteSpace( text ) {
   return text.replace( /\s+$/, "" ); // at least one white-space character preceding end-of-line
}

function isWhiteSpace( ch ) {
   return " \t\n\r\v".indexOf( ch ) >= 0; // space tab line-feed carriage-return vertical-tab
}

function capitalize( text ) {
   return text.charAt( 0 ).toUpperCase() + text.slice( 1 ).toLowerCase();
}

if (typeof( String.prototype.localeCompare) === "undefined" ) {
   String.prototype.localeCompare = function( s, locale, options ) {
      return ((this === s) ? 0 : ((this > s) ? 1 : -1));
   };
}

function strcmp( s1, s2 ) {
   return ((s1 === s2) ? 0 : ((s1 > s2) ? 1 : -1));
}

function MultiplyString( num, str ) {
   var sb =[];
   for ( var k = 0; k < num && k < 10; k++ ) {
      sb.push( str );
   }
   return sb.join( "" );
}

function buildTab( indent, file ) {
   var tab = "";
   for ( var k = 0; k < indent && k < 100; k++ ) {
      if ( file ) {
         tab += window.SINGLE_TAB;
      } else {
         tab += window.DOUBLE_TAB;
      }
   }
   return tab;
}

// SimpleHashMap - superclass
var SimpleHashMap = function( keyType, valueType ) {
   this._db = [];
   this._keyType = keyType;
   this._valueType = valueType;
   return this;
};

SimpleHashMap.prototype.getIndexOfKey = function( key ) {
   if ( typeof key !== this._keyType ) {
      throw new Error( "Type of key should be: " + this._keyType + "  Not: " + typeof key );
   }
   for ( var k = 0; k < this._db.length; k++ ) {
      if ( this._db[k][0] === key ) {
         return k;
      }
   }
   return -1;
};

SimpleHashMap.prototype.add = function( key, value ) {
   if ( typeof key !== this._keyType ) {
      throw new Error( "Type of key should be: " + this._keyType + "  Not: " + typeof key );
   } else if ( value !== null && typeof value !== this._valueType ) {
      throw new Error( "Type of value should be: " + this._valueType + "  Not: " + typeof value );
   }
   var index = this.getIndexOfKey( key );
   if ( index === -1 ) {
      this._db.push( [key, value] );
   } else {
      this._db[index][1] = value;
   }
   return this;
};

SimpleHashMap.prototype.get = function( key ) {
   if ( this._db.length > 0 && typeof key === this._keyType ){
      for ( var k = 0; k < this._db.length; k++ ) {
         if ( this._db[k][0] === key ) {
            return this._db[k][1];
         }
      }
   }
   return null;
};

SimpleHashMap.prototype.size = function() {
   return this._db.length;
};

SimpleHashMap.prototype.keys = function() {
   var result = [];
   for ( var k = 0; k < this._db.length; k++ ) {
      result.push( this._db[k][0] );
   }
   return result;
};

SimpleHashMap.prototype.values = function() {
   var result = [];
   for ( var k = 0; k < this._db.length; k++ ) {
      result.push( this._db[k][1] );
   }
   return result;
};

SimpleHashMap.prototype.iterate = function( callback ) {
   if ( this._db.length === 0 ) {
      return false;
   }
   for ( var k = 0; k < this._db.length; k++ ) {
      callback( this._db[k][0], this._db[k][1] );
   }
   return true;
};

/*
SimpleHashMap.prototype.randomize = function () {
   if ( _db.length === 0 ) {
      return this;
   }
   var currentIndex = db.length
   var temporaryValue;
   var randomIndex;
   while ( currentIndex !== 0 ) {
      randomIndex = Math.floor( Math.random() * currentIndex );
      currentIndex--;
      temporaryValue = db[currentIndex];
      db[currentIndex] = db[randomIndex];
      db[randomIndex] = temporaryValue;
   }
   return this;
}
*/

SimpleHashMap.prototype.removeItem = function( key ) {
   var item = null;
   var k = this.getIndexOfKey( key );
   if ( k >= 0 ) {
      item = this._db[k][1];
      this._db = remove( this._db, k );
   /*
      while ( k < _db.length ) {
         _db[k][0] = _db[k + 1][0];
         _db[k][1] = _db[k + 1][1];
         k++;
      }
      _db.length--;
      _db[_db.length][0] = null;
      _db[_db.length][1] = null;
   */
   }
   return item;
};

SimpleHashMap.prototype.clear = function() {
   _db.length = 0;
   _db = [];
};

function testSimpleHashMap() {
   var a = new SimpleHashMap( "string", "string" );
   a.add("test", "1132")
    .add("test14", null)
    .add("1421test14", "12312666")
    .iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   /*
   a[test]=1132
   a[test14]=666
   a[1421test14]=12312666
   */
  /*
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   */
   /*
   a[1421test14]=12312666
   a[test]=1132
   a[test14]=666
   */
}

/** not yet implemented

var JsonHashMap = function( keyType, valueType, jsonString ) {  // added jsonString parameter
   var _db = [];
   var _keyType;
   var _valueType;

   (function() {
      _keyType = keyType;
      _valueType = valueType;
      // added
      if ( jsonString ) {
         var jsonObject = jsonStringToJsonObject( jsonString );
         jsonObjectToHashMap( jsonObject, _db );
      }
      // end added
   })();

   var getIndexOfKey = function( key ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be: " + _keyType + "  Not: " + typeof key );
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return k;
         }
      }
      return -1;
   };

   this.add = function( key, value ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be: " + _keyType + "  Not: " + typeof key );
      } else if ( value !== null && typeof value !== _valueType ) {
         throw new Error( "Type of value should be: " + _valueType + "  Not: " + typeof value );
      }
      var index = getIndexOfKey( key );
      if ( index === -1 ) {
         _db.push( [key, value] );
      } else {
         _db[index][1] = value;
      }
      return this;
   };

   this.get = function( key ) {
      if ( typeof key !== _keyType || _db.length === 0 ){
         return null;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return _db[k][1];
         }
      }
      return null;
   };

   this.size = function() {
      return _db.length;
   };

   this.keys = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][0] );
      }
      return result;
   };

   this.values = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][1] );
      }
      return result;
   };

   // Added to support initializing a JsonHashMap from a JSON object ... not yet implemented!
   this.jsonToHash = function( jsonObject ) {
      var typeObj = typeof jsonObject;
      if ( typeObj === "object" ) {
         if ( $.isArray( jsonObject ) ) {
            $.each( jsonObject, function( key, value ) {
               add( key, value );
         });
         }
      }
   };

   this.toString = function() {
      var result;
      if ( _db.length > 0 ) {
         result = "{ ";
         for ( var k = 0; k < _db.length; k++ ) {
            result += "{ " + _db[k][0] + " : " + _db[k][1] + " }";
         }
         result += " }";
      } else {
         result = "{}";
      }
      return result;
   };

   this.randomize = function() {
      if ( db.length === 0 ) {
         return this;
      }
      var currentIndex = db.length, temporaryValue, randomIndex;
      while ( 0 !== currentIndex ) {
         randomIndex = Math.floor( Math.random() * currentIndex );
         currentIndex--;
         temporaryValue = db[currentIndex];
         db[currentIndex] = db[randomIndex];
         db[randomIndex] = temporaryValue;
      }
      return this;
   };

   this.iterate = function( callback ) {
      if ( _db.length === 0 ) {
         return false;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         callback( _db[k][0], _db[k][1] );
      }
      return true;
   };
};

function testJsonHashMap() {
   var jsonObject = jsonStringToJsonObject( g_JsonStore );
   var a = new JsonHashMap( "string", "string", jsonObject );

   a.iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
}
*/

var storageSession = window.sessionStorage;
var g_LodMap = new SimpleHashMap( "string", "object" );
var g_ViewNameMap = new SimpleHashMap( "string", "object" );

function testJsonPath() {
   var jsonObject = jsonStringToJsonObject( g_JsonStore );
   var arg1 = "$..author";
   var arg2 = {resultType:"PATH"};
   var res1 = jsonPath( jsonObject, arg1 );
   var res2 = jsonPath( jsonObject, arg1, arg2 );
   var x1 = res1.toString();
   var x2 = res2.toString();
   console.log( "res1: " + res1 );
   console.log( "res2: " + res2 );
}

function displayElementData( message, $element ) {
   if ( $element ) {
      console.log( message + "... Element Data for: " + $element.attr( "id" ) );
      if ( $element.data() ) {
         $.each( $element.data(), function( key, value ) {
            if ( typeof value === "string" || typeof value === "number" ) {
               console.log( "   ~ " + key + " : " + value );
            }
         });
      }
   }
}
