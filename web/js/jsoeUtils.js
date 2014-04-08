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
         throw new Error( "Type of key should be " + _keyType );
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
         throw new Error( "Type of key should be " + _keyType );
      } else if ( value !== null && typeof value !== _valueType ) {
         throw new Error( "Type of value should be " + _valueType );
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

function getRow( indent, data, isPropertyContent ) {
   var tabs = "";
   if ( indent >= 0 ) {
      for ( var k = 0; k < indent && !isPropertyContent; k++ )
         tabs += window.DOUBLE_TAB;
      if ( data !== null && data.length > 0 && data.charAt( data.length - 1 ) !== "\n" )
         data = data + "\n";
   }
   return tabs + data;
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
            }
            else
            if ( prop === "content" ) {
               content = true;
            }
            else
            if ( prop === "attributes" ) {
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
               }
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + prop + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj[prop], indent + 1, ++j < numProps, false, true ), false );
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
