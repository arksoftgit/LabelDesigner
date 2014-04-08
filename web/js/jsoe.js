// we need tabs as spaces and not CSS magin-left in order to retain format when copying and pasting the code
window.SINGLE_TAB = "  ";
window.DOUBLE_TAB = MultiplyString( 2, window.SINGLE_TAB );
window.ImgCollapsed = "images/plus.gif";
window.ImgExpanded = "images/minus.gif";
window.QuoteKeys = true;

var storageSession = window.sessionStorage;

function trimLeadingAndTrailingWhiteSpace( text ) {  // should be equivalent to javascript trim
   return text.replace( /^\s+|\s+$/g, "" );
}

function trimLeadingWhiteSpace( text ) {
   return text.replace( /^\s+/, "" );
}

function stripTrailingWhiteSpace( text ) {
   return text.replace( /\s+$/, "" );
}

function isWhiteSpace( ch ) {
   return " \t\n\r\v".indexOf( ch ) >= 0;
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

function jsonStringToJsonObject( jsonString ) {
   var jsonObject = jQuery.parseJSON( "[" + jsonString + "]" );  // this is faster and more secure than eval
   return jsonObject;
}

/*
function getLastEntity( jsonObj ) {
var fruitObject = { "a" : "apple", "b" : "banana", "c" : "carrot" };
Object.keys(fruitObject); // this returns all properties in an array ["a", "b", "c"]
fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]] // "carrot"
*/

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

/*
   function addZeidonAttributeToElement( $element, attribute, value ) {
      if (typeof value === "string" || typeof value === "number" ) {
         var key = zeidonAttributeToKey( attribute );
         console.log( "addZeidonAttributeToElement: " + $element.attr( "id" ) + "  key: " + key + "  value: " + value );
         $element.data( key, value );
      }
   }           for ( var prop in obj ) {
               if ( typeof obj[prop] === "string" ) {
               // if ( prop === "Tag" || prop === "Top" || prop === "Left" || prop === "Height" || prop === "Width" || prop === "Order" ) {
               //    continue;
               // } else {
                     addZeidonAttributeToElement( $element, prop, obj[prop] );
               // }
               }
            }
*/

/*
var setParentOrig = function( o ) {
   if ( typeof o === "object" ) {
      for ( var n in o ) {
         if ( typeof n === "object" ) {
            setParentOrig( n );
            n["..parentO"] = o;
         }
      }
   }
}
*/

// called with every property and its value
function logKeyValue( key, value, indent ) {
   var tab = buildTab( indent, true );
   console.log( tab + key + " : " + value );
}

function logJsonObject( jsonObject, callback, indent, showAll ) {
   for ( var prop in jsonObject ) {
      if ( jsonObject[prop] !== null && typeof( jsonObject[prop] ) === "object" ) {
         if ( prop.charAt( 0 ) !== "." || (showAll === true && prop.charAt( 1 ) !== ".") ) {
            var tab = buildTab( indent, true );
         // console.log( "Object: " + jsonObject[key].toString() );
            if ( $.isArray( jsonObject[prop] ) ) {
               console.log( tab + "Array: " + prop + "  length: " + jsonObject[prop].length );
            } else {
               console.log( tab + "Object: " + prop );
            }
            // going one step down in the object tree!!
            logJsonObject( jsonObject[prop], callback, indent + 1, showAll );
         }
      } else {
      // console.log( key + " : " + jsonObject[key] );
         callback.apply( this, [prop, jsonObject[prop], indent] );
      }
   }
}

function logZeidonJsonObject( jsonObject, entity, showAll ) {
   var typeObj = typeof jsonObject;
   if ( typeObj === "object" ) {
      if ( $.isArray( jsonObject ) ) {
      // console.log( "Array: " + jsonObject.length );
         if ( entity !== null && typeof( jsonObject[0] ) === "object" ) {
            for ( var k = 0; k < jsonObject.length; k++ ) {
               console.log( "logZeidonObject Showing Absolute Position: " + jsonObject[k][".hierNbr"] + "  Entity: " + entity + "  Tag: " + jsonObject[k]["Tag"] + "   Cursor: " + k );
               logZeidonJsonObject( jsonObject[k], null );
            }
         } else {
            console.log( "logZeidonObject Unknown Array object: " + typeof( jsonObject[0] ) + "  Object: " + jsonObject[0] );
            for ( var k = 0; k < jsonObject.length; k++ ) {
               logZeidonJsonObject( jsonObject[k], null, showAll );
            }
         }
      } else {
         var typeProp;
      // for ( var prop in jsonObject ) {
      //    console.log( "logZeidonObject prop: " + prop + " type: " + typeof( prop ) + "  type objprop: " + typeof( jsonObject[prop] ) );
      // }
         for ( var prop in jsonObject ) {
            typeProp = typeof jsonObject[prop];
            if ( typeProp === "object" ) {
            // console.log( "logZeidonObject Object: " + prop );
               if ( prop.charAt( 0 ) !== "." || (showAll === true && prop.charAt( 1 ) !== ".") ) {
               // console.log( "logZeidonObject Entity: " + prop + "   Absolute Position ==> " + jsonObject[prop][0][".hierNbr"] );
                  logZeidonJsonObject( jsonObject[prop], prop, showAll );
               }
            } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
            // console.log( "logZeidonObject " + typeProp + " key : value ==> " + prop + " : " + jsonObject[prop] );
            } else if ( typeProp === "boolean" ) {
            // console.log( "logZeidonObject boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
            } else {
               console.log( "logZeidonObject Unknown: " + typeProp + "  Object: " + jsonObject );
            }
         }
      }
   } else {
      console.log( "logZeidonObject Unexpected: " + jsonObject );
   }
}

function initCursors( jsonObject, entity, cursors, parentObj, hierNbr ) {
   if ( typeof jsonObject === "object" ) {
      if ( $.isArray( jsonObject ) ) {
      // console.log( "initCursors Array: " + jsonObject.length );
         if ( entity !== null && typeof( jsonObject[0] ) === "object" ) {
            if ( cursors.get( entity ) === null ) {
               cursors.add( entity, jsonObject[0] );
            }
            for ( var k = 0; k < jsonObject.length; k++ ) {
               hierNbr++;
            //xconsole.log( "initCursors Setting Absolute Position: " + jsonObject[k] + "  Entity: " + jsonObject[k]["Tag"] + "   Absolute Position: " + hierNbr );
               jsonObject[k][".hierNbr"] = hierNbr;
               hierNbr = initCursors( jsonObject[k], null, cursors, jsonObject, hierNbr );
            //yjsonObject[k]["..parentA"] = jsonObject;
            //yjsonObject[k]["..parentO"] = parentObj;
            //yjsonObject[k][".entity"] = entity;
            }
         } else {
            console.log( "initCursors Unknown Array object: " + typeof( jsonObject[0] ) + "  Object: " + jsonObject[0] );
            for ( var k = 0; k < jsonObject.length; k++ ) {
               hierNbr = initCursors( jsonObject[k], null, cursors, parentObj, hierNbr );
            }
         }
      } else { // it's not an array
         var typeProp;
         for ( var prop in jsonObject ) {
            typeProp = typeof jsonObject[prop];
            if ( typeProp === "object" ) {
            // console.log( "initCursors Object: " + prop );
               if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
                  if ( $.isArray( jsonObject[prop] ) && typeof( jsonObject[prop][0] ) === "object" ) {
                     hierNbr = initCursors( jsonObject[prop], prop, cursors, parentObj, hierNbr );
                  } else {
                     console.log( "initCursors Unknown Subobject: " + typeProp + "  Object: " + jsonObject );
                  }
               }
            } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
            // console.log( "initCursors " + typeProp + " key : value ==> " + prop + " : " + jsonObject[prop] );
            } else if ( typeProp === "boolean" ) {
            // console.log( "initCursors boolean key : value ==> " + prop + " : " + jsonObject[prop] ? "Y" : "N" );
            } else {
               console.log( "initCursors Unknown: " + typeProp + "  Object: " + jsonObject );
            }
         }
      }
   } else {
      console.log( "initCursors Unexpected: " + jsonObject );
   }
   return hierNbr;
}

function setHierarchicalJsonObject( jsonObject, rootEntity, cursors ) {
   var obj;
   var returnObj;
   var typeProp;
   if ( typeof jsonObject === "object" ) {
      for ( var prop in jsonObject ) {
         typeProp = typeof prop;
         if ( typeProp === "string" ) {
            if ( prop === "OIs" ) {
               obj = jsonObject[prop];
               if ( $.isArray( obj ) ) {
                  for ( var k = 0; k < obj.length; k++ ) {
                     if ( typeof obj[k] === "object" ) {
                        var containerObj = obj[k];
                        for ( prop in containerObj ) {
                           if ( typeof prop === "string" && prop === rootEntity ) {
                              var entityCursor = cursors.get( "_" );
                              if ( entityCursor === null ) {
                                 entityCursor = new ZeidonEntityCursor( rootEntity, null, null, null );
                              }
                              entityCursor.setEI( obj, k );
                              cursors.add( "_", entityCursor );
                              setHierarchicalJsonObjectRecurse( containerObj, null, cursors, null, 0 );
                              return containerObj;
                           }
                        }
                     }
                  }
               }
            } else if ( prop.charAt( 0 ) !== "." ) {
               returnObj = setHierarchicalJsonObject( jsonObject[prop], rootEntity, cursors );
               if ( returnObj ) {
                  return returnObj;
               }
            }
         } else if ( typeProp === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               obj = jsonObject[prop];
               if ( obj !== null ) {
                  typeObj = typeof obj;
                  if ( typeObj === "object" ) {
                     returnObj = setHierarchicalJsonObject( jsonObject[prop], rootEntity, cursors );
                     if ( returnObj ) {
                        return returnObj;
                     }
                  }
               }
            }
         }
      }
   }
   return null;
}

function setHierarchicalJsonObjectRecurse( jsonObject, entity, cursors, parentObj, hierNbr ) {
   var obj;
   var typeObj;
   if ( typeof jsonObject === "object" ) {
      for ( var prop in jsonObject ) {
         obj = jsonObject[prop];
         if ( obj !== null ) {
            typeObj = typeof obj;
            if ( typeObj === "object" ) {
               if ( prop.charAt( 0 ) !== "." ) {  // ..parentA ..parentO .meta .oimeta
               //xconsole.log( "setHierarchicalJsonObjectRecurse Object: " + prop );
                  if ( $.isArray( obj ) ) {
                  //xconsole.log( "setHierarchicalJsonObjectRecurse Array: " + prop + "  length: " + obj.length );
                     if ( prop !== null && typeof( obj[0] ) === "object" ) {
                        var entityCursor;
                        entityCursor = cursors.get( prop );
                        if ( entityCursor && entityCursor.getEI() === null ) {
                           entityCursor.setEI( obj, obj.length > 0 ? 0 : -1 );
                        }
                        for ( var k = 0; k < obj.length; k++ ) {
                           hierNbr++;
                        //xconsole.log( "setHierarchicalJsonObjectRecurse Setting Absolute Position: " + obj[k]["Tag"] + "  Entity: " + prop + "   Absolute Position: " + hierNbr );
                           obj[k][".hierNbr"] = hierNbr;
                        //yobj[k]["..parentA"] = obj;
                        //yobj[k]["..parentO"] = parentObj;
                        //yobj[k][".entity"] = prop;
                           hierNbr = setHierarchicalJsonObjectRecurse( obj[k], null, cursors, obj[k], hierNbr );
                        // cursors.findParentEntity( prop );
                        }
                     } else {
                     //xconsole.log( "setHierarchicalJsonObjectRecurse Unknown Array object: " + typeof( obj[0] ) + "  Object: " + obj[0] );
                        for ( var k = 0; k < obj.length; k++ ) {
                           hierNbr = setHierarchicalJsonObjectRecurse( obj[k], null, cursors, obj, hierNbr );
                        }
                     }
                  } else {
                  //xconsole.log( "Object: " + prop );
                     if ( entity ) {
                        hierNbr++;
                        obj[".hierNbr"] = hierNbr;
                     //yobj["..parentO"] = parentObj;
                     }
                     // going one step down in the object tree!!
                     hierNbr = setHierarchicalJsonObjectRecurse( obj, null, cursors, obj, hierNbr );
                  }
               }
          /* } else {
               // func.apply( this, [prop, obj, 1] );
               if ( typeObj === "string" || typeObj === "number" || typeObj === "function" || typeObj === "undefined" ) {
               // console.log( "setHierarchicalJsonObjectRecurse " + typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeObj === "boolean" ) {
               // console.log( "setHierarchicalJsonObjectRecurse boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "setHierarchicalJsonObjectRecurse Unknown: " + typeObj + "  Object: " + jsonObject );
               } */
            }
         }
      }
   } else {
      console.log( "setHierarchicalJsonObjectRecurse Unexpected: " + jsonObject );
   }
   return hierNbr;
}

var ZeidonEntityCursor = function( entity, parentEntity, recursive, derived ) {
   var _entity;  // don't think we need entity ... remove for deployment!!!
   var _parentEntity; // parent entity name
   var _recursive;
   var _derived;
   var _array = null; // entity instance container
   var _cursor = -1; // current cursor position (-1 ==> unset)

   (function() {
   //xconsole.log( "Adding ZeidonEntityCursor: " + entity + "  Parent: " + parentEntity + "  Recursive:" + recursive + "  Derived:" + derived );
      _entity = entity;
      _parentEntity = parentEntity;
      _recursive = recursive;
      _derived = derived;
      _array = null;
      _cursor = -1;
   })();

   this.setEI = function( array, cursor ) {
      if ( $.isArray( array ) === false ) {
         throw new Error( "setEI: Object must be an array for entity: " + _entity );
      }
      _array = array;
      _cursor = cursor;
      return this;
   };

   this.getEI = function() {
      if ( _array && _cursor >= 0 ) {
         return _array[_cursor];
      } else {
         return null;
      }
   };

   this.getArray = function() {
      return _array;
   };

   this.getCursor = function() {
      return _cursor;
   };

   this.getParent = function() {
      return _parentEntity;
   };

   this.getRecursive = function() {
      return _recursive;
   };

   this.getDerived = function() {
      return _derived;
   };

   this.getEntity = function() {
      return _entity;
   };

   this.clear = function() {
      _array = null;
      _cursor = -1;
   };
};

var ZeidonViewCursors = function() {
   var _db = [];
   var _keyType;
   var _valueType;
   var _root;

   (function() {
      _keyType = "string";
      _valueType = "object";
      _root = null;
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

   this.getRoot = function() {
      return _root;
   }

   this.loadLod = function( lodObject, parentEntity ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               var entity = parentEntity;
               if ( $.isArray( lodObject[prop] ) ) {
               // console.log( "Array: " + prop + "  length: " + lodObject[prop].length );
                  for ( var k = 0; k < lodObject[prop].length; k++ ) {
                     entity = lodObject[prop][k].Name;
                     if ( entity ) {
                        var entityCursor;
                     // console.log( "Found Entity: " + entity + "  Parent: " + parentEntity );
                        if ( prop === "Object"  ) {
                           entityCursor = new ZeidonEntityCursor( entity, null, null, null );
                           this.add( "_", entityCursor );
                        } else if ( prop === "Root" ) {
                           _root = entity;
                           parentEntity = "_";
                        }
                        if ( _root ) {
                           entityCursor = new ZeidonEntityCursor( entity, parentEntity, lodObject[prop][k].Recursive, lodObject[prop][k].Derived );
                           this.add( entity, entityCursor );
                        } else {
                           // this is the name of the LOD ... put it in a global hashmap
                           if ( ! g_LodMap.get( entity ) ) {
                              g_LodMap.add( entity, this ); // add this LOD to the global hashmap
                           }
                        }
                        // going one step down in the object tree!!
                     //xconsole.log( "Object0: " + prop );
                        this.loadLod( lodObject[prop][k], entity );
                     } else {
                        // going one step down in the object tree!!
                     //xconsole.log( "Object1: " + prop );
                        this.loadLod( lodObject[prop], parentEntity );
                     }
                  }
               } else {
                  // going one step down in the object tree!!
               //xconsole.log( "Object2: " + prop );
                  this.loadLod( lodObject[prop], parentEntity );
               }
            }
         } else {
         // console.log( "Attribute ==> " + prop + " : " + lodObject[prop] );
         }
      }
   };
/*
   this.loadLod = function( lodObject, parentEntity ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               if ( $.isArray( lodObject[prop] ) ) {
                  console.log( "Array: " + prop + "  length: " + lodObject[prop].length );
                  if ( prop === "Root"  ) {
                     _root = lodObject[prop][0].Name;
                     parentEntity = _root;
                     entityCursor = new ZeidonEntityCursor( _root );
                     this.add( parentEntity, entityCursor );
                  } else if ( prop === "Entity" ) {
                     var entity = lodObject[prop][0].Name;
                     console.log( "Found Entity: " + entity + "  Parent: " + parentEntity );
                     entityCursor = new ZeidonEntityCursor( entity );
                     this.add( entity, entityCursor );
                     parentEntity = lodObject.Name;
                  }
               } else {
                  console.log( "Object: " + prop );
               }
               // going one step down in the object tree!!
               this.loadLod( lodObject[prop], parentEntity );
            }
         } else {
            console.log( prop + " : " + lodObject[prop] );
         }
      }
   };
*/
   this.logLod = function( lodObject, parent ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               if ( $.isArray( lodObject[prop] ) ) {
                  if ( prop === "Entity" || prop === "Root" ) {
                     for ( var k = 0; k < lodObject[prop].length; k++ ) {
                        var entity = lodObject[prop][k].Name;
                        var recursive = lodObject[prop][k].Recursive;
                        var derived = lodObject[prop][k].Derived;
                        var message = prop + ": " + entity + "  Parent: " + parent;
                        if ( recursive )
                           message += "  Recursive";
                        if ( derived )
                           message += "  Derived";
                        console.log( message );
                        // going one step down in the object tree!!
                        this.logLod( lodObject[prop][k], entity );  // we know this is mandatory
                     }
                  } else {
                     if ( prop === "OIs" || prop === "Object" ) {
                        console.log( "Container: " + prop + "  length: " + lodObject[prop].length  );
                     } else {
                        console.log( "Array: " + prop + "  length: " + lodObject[prop].length );
                     }
                     // going one step down in the object tree!!
                     this.logLod( lodObject[prop], parent );
                  }
               } else {
                  // going one step down in the object tree!!
               // console.log( "Non-Array: " + prop );
                  this.logLod( lodObject[prop], parent );
               }
            }
         }
      }
   };

   this.resetEntityCursors = function() {
      this.iterate( function( k, v ) {
         if ( k !== "_" ) { // forget the top container ... not a real entity, but does hold the "container entity"
         //xconsole.log( "Reset cursors for: " + v.getEntity() );
            v.clear();
         }
      });
   };

/*
   this.resetEntityCursors = function() {
      this.privateResetEntityCursors( _lodObject );
   }

   this.privateResetEntityCursors = function( lodObject ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               if ( $.isArray( lodObject[prop] ) ) {
                  if ( prop === "Entity" || prop === "Root" ) {
                     for ( var k = 0; k < lodObject[prop].length; k++ ) {
                        var entity = lodObject[prop][k].Name;
                        var entityCursor = this.get( entity );
                        if ( entityCursor ) {
                           entityCursor.clear();
                           console.log( "Reset cursors for: " + entity );
                        } else {
                           console.log( "No reset for entity: " + entity );
                        }
                        // going one step down in the object tree!!
                        this.privateResetEntityCursors( lodObject[prop][k] );
                     }
                  } else {
                     // going one step down in the object tree!!
                     console.log( "Skipping: " + prop );
                     this.privateResetEntityCursors( lodObject[prop] );
                  }
               } else {
                  console.log( "Non-Array: " + prop );
                  this.privateResetEntityCursors( lodObject[prop] );
               }
            }
         }
      }
   };
*/

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

   this.getParent = function( key ) {
      var entityCursor = this.get( key );
      if ( entityCursor ) {
         var ei = entityCursor.getEI();
         if ( ei ) {
            var entityParent = ei.getParent();
            if ( entityParent ) {
               return this.get( entityParent );
            }
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

   this.iterate = function( callback ) {
      if ( _db.length === 0 ) {
         return false;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === _root ) {
            while ( k < _db.length ) {
               callback( _db[k][0], _db[k][1] );
               k++;
            }
            return true;
         }
      }
      return false;
   };

   this.removeItem = function( key ) {
      var k = getIndexOfKey( key );
      var item = null;
      if ( k >= 0 ) {
         item = _db[k][1];
         while ( k < _db.length ) {
            _db[k][0] = _db[k + 1][0];
            _db[k][1] = _db[k + 1][1];
            k++;
         }
         _db.length--;
         _db[_db.length][0] = null;
         _db[_db.length][1] = null;
      }
      return item;
   };

   this.clear = function() {
      _db.length = 0;
      _db = [];
   };

   this.display = function() {
      var ei;
      this.iterate( function( k, v ) {
         if ( k !== "_" ) { // forget the top container ... not a real entity
            ei = v.getEI();
            if ( ei ) {
               console.log( "Entity: " + k + "   Absolute Entity: " + ei[".hierNbr"] + "   Cursor: " + v.getCursor() );
            } else {
               console.log( "Entity: " + k + "   No Cursor" );
            }
         }
      });
   };

   this.logHierarchy = function( entity, attribute ) {
      var entityCursor = this.get( entity );
      if ( entityCursor ) {
         var ei = entityCursor.getEI();
         if ( ei ) {
            var parentEntity = entityCursor.getParent();
            if ( parentEntity ) {
               var indent;
               if ( parentEntity === "_" ) {
                  indent = 0;
               } else {
                  indent = this.logHierarchy( parentEntity, attribute );
               }
               var tab = buildTab( indent, true );
               console.log( tab + entity + "  " + attribute + ": " + ei[attribute] );
               return indent + 1;
            }
         }
      }
      return 0;
   };

   this.findParentEntity = function( entity ) {
      var entityCursor = this.get( entity );
      if ( entityCursor ) {
         if ( entityCursor.getEntity() !== entity ) {
            if ( entity !== "_" ) {
               console.log( "findParentEntity encountered entity mismatch: " + entity + "   getEntity: " + entityCursor.getEntity() );
            }
            return null;
         }
         console.log( "findParentEntity of: " + entity + "  ==> " +  entityCursor.getParent() + "   Cursor: " + entityCursor.getCursor() );
         return entityCursor.getParent();
      }
      return null;
   };

   this.searchForEntityByValue = function( entityObj, searchAttribute, searchValue, position, cursorIdx ) {
      var k;
      switch ( position ) {
         case 1: // POS_FIRST
            k = 0;
            break;
         case 2: // POS_LAST
            k = entityObj.length - 1;
            break;
         case 3: // POS_NEXT
            k = cursorIdx + 1;
            break;
         case 4: // POS_PREV
            k = cursorIdx - 1;
            break;
         default:
            k = cursorIdx;
            console.log( "Invalid position parameter: " + position );
      }
      if ( searchAttribute ) {
         if ( position === 1 || position === 3 ) { // POS_FIRST or POS_NEXT
            while ( k < entityObj.length ) {
               if ( entityObj[k][searchAttribute] === searchValue ) {
                  break;
               }
               k++;
            }
         } else if ( position === 2 || position === 4 ) { // POS_LAST or POS_PREV
            while ( k >= 0 ) {
               if ( entityObj[k][searchAttribute] === searchValue ) {
                  break;
               }
               k--;
            }
         }
      }
      if ( k < 0 || k >= entityObj.length ) {
         k = cursorIdx;
      }

      return k;
   };

   // If searchAttribute is not null, look for the first/last/next/prev instance of searchEntity with the attribute value specified by searchValue, otherwise,
   // just look for the first/last/next/prev instance of searchEntity meeting the given criteria.
   // If position is not POS_NONE, reset the cursors if the requested entity instance is located.  Respect parentage if scopingEntity is specified (i.e.  only
   // entities hierarchically below the scoping entity can change position).
   // Position may be one of five values: POS_FIRST = 1; POS_LAST = 2; POS_NEXT = 3; POS_PREV = 4 (POS_NONE = 0 is invalid) 
   // Note that that "path" and "recurse" parameters are for testing purposes only and should be removed prior to deployment.
   this.locateEntity = function( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, entity, establishPosition, recurse, path ) {
// this.locateEntity = function( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, entity, establishPosition ) {
      var entityCursor;
      var cursorIdx;
      var rc = -4;
      if ( typeof entityObj === "object" ) {
      //xconsole.log( "locateEntity coming through path: " + path + "   recurse: " + recurse );
         if ( $.isArray( entityObj ) ) {
            var k;
         // console.log( "locateEntity Array: " + jsonObject.length );
            if ( entity !== null && typeof( entityObj[0] ) === "object" ) {
               entityCursor = this.get( entity );
               cursorIdx = entityCursor.getCursor();
               if ( entity === searchEntity ) { // we are at the correct entity
                  k = this.searchForEntityByValue( entityObj, searchAttribute, searchValue, position, cursorIdx );
                  if ( k >= 0 ) {
                     if ( establishPosition ) {
                        this.resetEntityCursors();
                     //xconsole.log( "locateEntity1 resetting EI for entity: " + entity + "  at cursor: " + k );
                        entityCursor.setEI( entityObj, k );
                        this.resetChildCursors( entityObj[k], entity );
                     //zthis.display();
                     }
                     if ( k === cursorIdx ) {
                        if ( position === 3 || position === 4 ) { // POS_NEXT or POS_PREV
                           return -1; // CURSOR_UNCHANGED
                        }
                     }
                     return 0; // CURSOR_SET
                  } else {
                     return -2; // CURSOR_UNDEFINED
                  }
               } else { // we are hierarchically above the entity we are looking for
                  if ( belowScope === false ) { // can't move parentage at this level
                     if ( entity === scopingEntity ) {
                        belowScope = true;
                     }
                     rc = this.locateEntity( entityObj[cursorIdx], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, null, establishPosition, recurse + 1, "A2" );
                     if ( rc > -4 ) {
                        if ( establishPosition ) {
                        //xconsole.log( "locateEntity2 resetting EI for entity: " + entity );
                           entityCursor.setEI( entityObj, cursorIdx );
                        // this.resetChildCursors( entityObj[cursorIdx], entity );
                        //zthis.display();
                        }
                        return rc;
                     }
                  } else { // so parentage is permitted to change at this level
                     if ( position === 1 || position === 3 ) { // POS_FIRST or POS_NEXT
                        for ( k = (position === 1) ? 0 : cursorIdx; k < entityObj.length; k++ ) {
                           rc = this.locateEntity( entityObj[k], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, null, establishPosition, recurse + 1, "A1" );
                           if ( rc > -4 ) {
                           //xconsole.log( "locateEntity3 resetting EI for entity: " + entity );
                              if ( establishPosition ) {
                                 entityCursor.setEI( entityObj, k );
                              }
                           // this.resetChildCursors( entityObj[k], entity );
                           //zthis.display();
                              if ( position === 1 || k === cursorIdx ) {
                                 return rc;
                              } else {
                                 return -2; // CURSOR_SET_NEWPARENT
                              }
                           }
                        }
                     } else if ( position === 2 || position === 4 ) { // POS_LAST or POS_PREV
                        for ( k = (position === 2) ? entityObj.length - 1 : cursorIdx; k >= 0; k-- ) {
                           rc = this.locateEntity( entityObj[k], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, null, establishPosition, recurse + 1, "A2" );
                           if ( rc > -4 ) {
                           //xconsole.log( "locateEntity4 resetting EI for entity: " + entity );
                              if ( establishPosition ) {
                                 entityCursor.setEI( entityObj, k );
                              }
                           // this.resetChildCursors( entityObj[k], entity );
                              if ( position === 2 || k === cursorIdx ) {
                                 return rc;
                              } else {
                                 return -2; // CURSOR_SET_NEWPARENT
                              }
                           }
                        }
                     } else {
                        console.log( "Locating entity has an invalid position parameter: " + position );
                     }
                  }
               }
            }
         } else { // it's not an array
            var typeProp;
            for ( var prop in entityObj ) {
               typeProp = typeof entityObj[prop];
               if ( typeProp === "object" ) {
               //xconsole.log( "locateEntity Object: " + prop );
                  if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs ... we should always be below OIs???
                     if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                        entityCursor = this.get( prop );
                        cursorIdx = entityCursor.getCursor();
                        rc = this.locateEntity( entityObj[prop], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, prop, establishPosition, recurse + 1, "C" );
                        if ( rc > -4 ) {
                        //xconsole.log( "locateEntity1 NOT resetting EI for entity: " + prop );
                        //zthis.display();
                           return rc; // do not reset cursor position here
                        }
                     } else {
                        console.log( "locateEntity Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
                     }
                  }
            /* } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
                  console.log( "locateEntity " + typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeProp === "boolean" ) {
                  console.log( "locateEntity boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "locateEntity Unknown: " + typeProp + "  Object: " + entityObj ); */
               }
            }
         }
      } else {
         console.log( "locateEntity Unexpected: " + entityObj );
      }
      return rc;
   };

   this.resetChildCursors = function( entityObj, entity ) {
      var typeProp;
      for ( var prop in entityObj ) {
         typeProp = typeof entityObj[prop];
         if ( typeProp === "object" ) {
            if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs ... we should always be below OIs???
               if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                  this.resetChildCursorsRecurse( entityObj[prop], prop );
               } else {
                  console.log( "Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
               }
            }
      /* } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
            console.log( typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
         } else if ( typeProp === "boolean" ) {
            console.log( "boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
         } else {
            console.log( "Unknown: " + typeProp + "  Object: " + entityObj ); */
         }
      }
   };

   this.resetChildCursorsRecurse = function( entityObj, entity ) {
      if ( typeof entityObj === "object" ) {
         if ( $.isArray( entityObj ) ) {
            if ( entity !== null && typeof( entityObj[0] ) === "object" ) {
               var eo = this.get( entity );
               if ( eo ) {
                  if ( eo.getEI() === null ) {
                     eo.setEI( entityObj, 0 );
                  //xconsole.log( "resetChildCursorsRecurse resetting entity: " + entity + "  hierNbr: " + entityObj[0]["..parentO"][".hierNbr"] );
                     this.resetChildCursorsRecurse( entityObj[0], null );
                  }
               } else {
                  console.log( "resetChildCursors could not establish cursor position for entity: " + entity );
               }
            } else {
               for ( var k = 0; k < entityObj.length; k++ ) {   // never get here!!!
                  this.resetChildCursorsRecurse( entityObj[k], null );
               }
            }
         } else { // it's not an array
            var typeProp;
            for ( var prop in entityObj ) {
               typeProp = typeof entityObj[prop];
               if ( typeProp === "object" ) {
                  if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
                     if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                        this.resetChildCursorsRecurse( entityObj[prop], prop );
                     } else {
                        console.log( "Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
                     }
                  }
            /* } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
                  console.log( typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeProp === "boolean" ) {
                  console.log( "boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "Unknown: " + typeProp + "  Object: " + entityObj ); */
               }
            }
         }
      } else {
         console.log( "Unexpected: " + entityObj );
      }
   };

   this.validateCursors = function( entity ) {
      var entityCursor;
      var ei;
      var idx;
      while ( entity ) {
         if ( entity === _root ) {
            return true; // everything looks good
         }
         var entityCursor = this.get( entity );
         if ( entityCursor && entityCursor.getEI() ) {
            entity = entityCursor.getParent();
         } else {
            break;
         }
      }
      return false;
   };

/*
    zPOS_NONE  = 0;
    zPOS_FIRST = 1;
    zPOS_LAST  = 2;
    zPOS_NEXT  = 3;
    zPOS_PREV  = 4;

    zCURSOR_NULL = -3
    zCURSOR_UNDEFINED = -2
    zCURSOR_UNCHANGED = -1
    zCURSOR_SET = 0
    zCURSOR_SET_NEWPARENT = 1
    zCURSOR_SET_RECURSIVE_CHILD = 2
*/

   this.hasAnyWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      if ( typeof searchAttribute === "undefined" || typeof searchValue === "undefined" ) {
         searchAttribute = null;
         searchValue = null;
      }
      if ( belowScope || this.validateCursors( searchEntity ) ) {
         var entityCursor = this.get( "_" );
         if ( entityCursor ) {
            var entityObj = entityCursor.getEI();
            if ( entityObj ) {
               // this.locateEntity( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, entity, establishPosition, recurse, path );
               var rc = this.locateEntity( entityObj, searchEntity, _root, searchAttribute, searchValue, 1, true, _root, false, 0, "" );
               if ( rc >= 0 ) {
                  return rc; // zCURSOR_SET
               }
               return -2; // zCURSOR_UNDEFINED
            }
         }
         return -3; // zCURSOR_NULL;
      }
      return -4; // ???
   };

   this.hasAny = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 1, false, false );
   };

   this.hasNext = function( searchEntity ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 3, false, false );
   };

   this.hasPrev = function( searchEntity ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 4, false, false );
   };

   this.setWithinOi = function( searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, establishPosition ) {
      if ( typeof searchAttribute === "undefined" ) searchAttribute = null;
      if ( typeof searchValue === "undefined" ) searchValue = null;
      if ( typeof scopingEntity === "undefined" || scopingEntity === null ) {
         scopingEntity = this.findParentEntity( searchEntity );
      }
      if ( belowScope || this.validateCursors( searchEntity ) ) {
         var entityCursor = this.get( "_" );
         if ( entityCursor ) {
            var entityObj = entityCursor.getEI();
            if ( entityObj ) {
               // this.locateEntity( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, entity, establishPosition, recurse, path );
               var rc = this.locateEntity( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, _root, establishPosition, 0, "" );
               if ( rc >= 0 ) {
                  return rc; // zCURSOR_SET
               }
               return -2; // zCURSOR_UNDEFINED
            }
         }
         return -3; // zCURSOR_NULL;
      }
      return -4; // ???
   };

   this.setFirstWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, _root, searchAttribute, searchValue, 1, true, true );
   };

   this.setFirst = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 1, false, true );
   };

   this.setLastWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, _root, searchAttribute, searchValue, 2, true, true );
   };

   this.setLast = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 2, false, true );
   };

   this.setNext = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 3, false, true );
   };

   this.setPrev = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 4, false, true );
   };

   this.setSubobject = function( entity, subEntity ) {

   };

   this.resetSubobject = function( entity, subEntity ) {

   };

   this.getAttribute = function( entity, attribute ) {
      var entityCursor = this.get( entity );
      if ( entityCursor ) {
         var entityObj = entityCursor.getEI();
         if ( entityObj ) {
         // console.log( entityObj );
            return entityObj[attribute];
         }
      }
      return "";
   };
};

/*
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
newObject = Object.create(oldObject);
*/
var SimpleHashMap = function( keyType, valueType ) {
   var _db = [];
   var _keyType;
   var _valueType;

   (function() {
      _keyType = keyType;
      _valueType = valueType;
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

var g_LodMap = new SimpleHashMap( "string", "object" );