// we need tabs as spaces and not CSS magin-left in order to retain format when copying and pasting the code
window.SINGLE_TAB = "  ";
window.DOUBLE_TAB = MultiplyString( 2, window.SINGLE_TAB );
window.ImgCollapsed = "images/plus.gif";
window.ImgExpanded = "images/minus.gif";
window.QuoteKeys = true;

var globalJsonLabel = "{ \".oimeta\" : { \"application\" : \"epamms\", \"odName\" : \"TZLLD\", \"fileName\" : \"onCatchException\", \"incremental\" : \"true\" }, " +
                     "\"LLD\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Name\" : \"Drop area ...\" , " +
                     "\"Panel\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"1\" , \"Tag\" : \"panel1\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                     "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"46.21875px\", \"Left\" : \"18px\", \"Height\" : \"415px\", \"Width\" : \"361px\", \"Tag\" : \"Tag100\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"61px\", \"Left\" : \"72px\", \"Height\" : \"160px\", \"Width\" : \"200px\", \"Tag\" : \"Tag101\" , \"Level\" : \"2\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"43px\", \"Left\" : \"69px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag103\" , \"Level\" : \"3\"  } ] }, " +
                     "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"257px\", \"Left\" : \"190px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag102\" , \"Level\" : \"2\"  } ] }, " +
                     "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"55px\", \"Left\" : \"439px\", \"Height\" : \"403px\", \"Width\" : \"182px\", \"Tag\" : \"Tag104\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"64.21875px\", \"Left\" : \"36px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag105\" , \"Level\" : \"2\"  } ] } ]}, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"2\" , \"Tag\" : \"panel2\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                     "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"78px\", \"Left\" : \"82px\", \"Height\" : \"299px\", \"Width\" : \"262px\", \"Tag\" : \"Tag106\" , \"Level\" : \"1\"  }, " +
                     "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"174px\", \"Left\" : \"396px\", \"Height\" : \"297px\", \"Width\" : \"216px\", \"Tag\" : \"Tag107\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"54px\", \"Left\" : \"36px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag108\" , \"Level\" : \"2\"  } ] } ]}, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"3\" , \"Tag\" : \"panel3\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                     "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"47px\", \"Left\" : \"135px\", \"Height\" : \"488px\", \"Width\" : \"415px\", \"Tag\" : \"Tag109\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"66px\", \"Left\" : \"80px\", \"Height\" : \"311px\", \"Width\" : \"243px\", \"Tag\" : \"Tag110\" , \"Level\" : \"2\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"56px\", \"Left\" : \"61px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag111\" , \"Level\" : \"3\"  } ] } ] } ]}, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"4\" , \"Tag\" : \"panel4\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"5\" , \"Tag\" : \"panel5\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"6\" , \"Tag\" : \"panel6\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"7\" , \"Tag\" : \"panel7\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"8\" , \"Tag\" : \"panel8\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"9\" , \"Tag\" : \"panel9\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\"  } ] } ]} ";

var globalJsonNewLabel = " { \"OIs\" : [ { \".oimeta\" : { \"application\" : \"Zeidon_Tools\", \"odName\" : \"TZLLD\", \"incremental\" : true }, " +
                  " \"LLD\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "    \"Tag\" : \"label\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Name\" : \"Drop area ...\", \".Name\" : { \"updated\" : \"true\" }, " +
                  "       \"CSS_FileName\" : \"css\", \".CSS_FileName\" : { \"updated\" : \"true\" }, " +
                  "       \"BackgroundColor\" : \"#b62953\", \".BackgroundColor\" : { \"updated\" : \"true\" }, " +
                  "       \"ContinuationTextPreviousPage\" : \"Continued from previous page\", \".ContinuationTextPreviousPage\" : { \"updated\" : \"true\" }, " +
                  "       \"ContinuationTextNextPage\" : \"Continued on next page\", \".ContinuationTextNextPage\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  " \"Panel\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "            \"Tag\" : \"panel1\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "            \"Order\" : \"1\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "            \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "            \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "            \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "            \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "            \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" }, " +
                  "   \"Block\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "               \"Tag\" : \"Tag100\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "               \"Top\" : \"86px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "               \"Left\" : \"157px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "               \"Height\" : \"443px\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "               \"Width\" : \"490px\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "               \"BorderColor\" : \"#ffffff\", \".BorderColor\" : { \"updated\" : \"true\" }, " +
                  "               \"TextColor\" : \"#ffffff\", \".TextColor\" : { \"updated\" : \"true\" }, " +
                  "               \"BackgroundColor\" : \"#ffffff\", \".BackgroundColor\" : { \"updated\" : \"true\" }, " +
                  "               \"Level\" : \"1\", \".Level\" : { \"updated\" : \"true\" }, " +
                  "      \"BlockBlock\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "                       \"Tag\" : \"Tag101\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "                       \"Top\" : \"43px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "                       \"Left\" : \"36px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "                       \"Height\" : \"175px\", \".Height\" : { \"updated\" : \"true\"  }, " +
                  "                       \"Width\" : \"179px\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "                       \"BorderColor\" : \"#e36262\", \".BorderColor\" : { \"updated\" : \"true\" }, " +
                  "                       \"TextColor\" : \"#4050dc\", \".TextColor\" : { \"updated\" : \"true\" }, " +
                  "                       \"BackgroundColor\" : \"#5ce73b\", \".BackgroundColor\" : { \"updated\" : \"true\" }, " +
                  "                       \"Level\" : \"2\", \".Level\" : { \"updated\" : \"true\" } } ] } ] }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "        \"Tag\" : \"panel2\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "        \"Order\" : \"2\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "        \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "        \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "        \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "        \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "        \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel3\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"3\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel4\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"4\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel5\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"5\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel6\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"6\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel7\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"7\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel8\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"8\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel9\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"9\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } } ] " +
                  "        } ] " +
                  "      } ] " +
                  "   }";

var globalJsonStore = " { \"store\": { " +
                  "  \"book\": [  " +
                  "    { \"category\": \"reference\", " +
                  "      \"author\": \"Nigel Rees\", " +
                  "      \"title\": \"Sayings of the Century\", " +
                  "      \"price\": 8.95 " +
                  "    }, " +
                  "    { \"category\": \"fiction\", " +
                  "      \"author\": \"Evelyn Waugh\", " +
                  "      \"title\": \"Sword of Honour\", " +
                  "      \"price\": 12.99 " +
                  "    }, " +
                  "    { \"category\": \"fiction\", " +
                  "      \"author\": \"Herman Melville\", " +
                  "      \"title\": \"Moby Dick\", " +
                  "      \"isbn\": \"0-553-21311-3\", " +
                  "      \"price\": 8.99 " +
                  "    }, " +
                  "    { \"category\": \"fiction\", " +
                  "      \"author\": \"J. R. R. Tolkien\", " +
                  "      \"title\": \"The Lord of the Rings\", " +
                  "      \"isbn\": \"0-395-19395-8\", " +
                  "      \"price\": 22.99 " +
                  "    } " +
                  "  ], " +
                  "  \"bicycle\": { " +
                  "    \"color\": \"red\", " +
                  "    \"price\": 19.95 " +
                  "  } " +
                  "  } " +
                  "  }";

var storageSession = window.sessionStorage;

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
   var jsonObject = jsonStringToJsonObject( globalJsonStore );
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

function logJsonObject( jsonObject, func, indent, showAll ) {
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
            logJsonObject( jsonObject[prop], func, indent + 1, showAll );
         }
      } else {
      // console.log( key + " : " + jsonObject[key] );
         func.apply( this, [prop, jsonObject[prop], indent] );  
      }
   }
}

function logZeidonObject( jsonObject, entity, showAll ) {
   var typeObj = typeof jsonObject;
   if ( typeObj === "object" ) {
      if ( $.isArray( jsonObject ) === false ) {
         var typeProp;
      // for ( var prop in jsonObject ) {
      //    console.log( "logZeidonObject prop: " + prop + " type: " + typeof( prop ) + "  type objprop: " + typeof( jsonObject[prop] ) );
      // }
         for ( var prop in jsonObject ) {
            typeProp = typeof jsonObject[prop];
            if ( typeProp === "object" ) {
            // console.log( "logZeidonObject Object: " + prop );
            // if ( prop !== "..parentO" && prop !== "..parentA" && prop !== ".meta" && prop !== ".oimeta" ) {
               if ( prop.charAt( 0 ) !== "." || (showAll === true && prop.charAt( 1 ) !== ".") ) {
               // console.log( "logZeidonObject Entity: " + prop + "   Absolute Position ==> " + jsonObject[prop][0][".hierNbr"] );
                  logZeidonObject( jsonObject[prop], prop, showAll );
               }
            } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
            // console.log( "logZeidonObject " + typeProp + " key : value ==> " + prop + " : " + jsonObject[prop] );
            } else if ( typeProp === "boolean" ) {
            // console.log( "logZeidonObject boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
            } else {
               console.log( "logZeidonObject Unknown: " + typeProp + "  Object: " + jsonObject );
            }
         }
      } else {
      // console.log( "Array: " + jsonObject.length );
         if ( entity !== null && typeof( jsonObject[0] ) === "object" ) {
            for ( var k = 0; k < jsonObject.length; k++ ) {
               console.log( "logZeidonObject Showing Absolute Position: " + jsonObject[k][".hierNbr"] + "  Entity: " + entity + "  Tag: " + jsonObject[k]["Tag"] ); //+ "   Absolute Position: " + jsonObject[k][tag][".hierNbr"] );
               logZeidonObject( jsonObject[k], null );
            }
         } else {
            console.log( "logZeidonObject Unknown Array object: " + typeof( jsonObject[0] ) + "  Object: " + jsonObject[0] );
            for ( var k = 0; k < jsonObject.length; k++ ) {
               logZeidonObject( jsonObject[k], null, showAll );
            }
         }            
      }
   } else {
      console.log( "logZeidonObject Unexpected: " + jsonObject );
   }
}

function setHierarchicalJsonObject( jsonObject, entity, cursors, parentObj, hierNbr ) {
   var obj;
   var typeObj;
   if ( typeof jsonObject === "object" ) {
      for ( var prop in jsonObject ) {
         obj = jsonObject[prop];
         if ( obj !== null ) {
            typeObj = typeof obj;
            if ( typeObj === "object" ) {
               if ( prop.charAt( 0 ) !== "." ) {  // ..parentA ..parentO .meta .oimeta
                  console.log( "setHierarchicalJsonObject Object: " + prop );
                  if ( $.isArray( obj ) ) {
                     console.log( "setHierarchicalJsonObject Array: " + prop + "  length: " + obj.length );
                     if ( prop !== null && typeof( obj[0] ) === "object" ) {
                        if ( cursors.get( prop ) === null ) {
                           cursors.add( prop, obj[0] );
                        }
                        for ( var k = 0; k < obj.length; k++ ) {
                           hierNbr++;
                           console.log( "setHierarchicalJsonObject Setting Absolute Position: " + obj[k]["Tag"] + "  Entity: " + prop + "   Absolute Position: " + hierNbr.toString() );
                           obj[k][".hierNbr"] = hierNbr.toString();
                           obj[k]["..parentA"] = obj;
                           obj[k]["..parentO"] = parentObj;
                           obj[k][".entity"] = prop;
                           parentObj[".cursor"] = k;
                           hierNbr = setHierarchicalJsonObject( obj[k], null, cursors, obj[k], hierNbr );
                           cursors.findParentEntity( prop );
                        }
                     } else {
                        console.log( "setHierarchicalJsonObject Unknown Array object: " + typeof( obj[0] ) + "  Object: " + obj[0] );
                        for ( var k = 0; k < obj.length; k++ ) {
                           hierNbr = setHierarchicalJsonObject( obj[k], null, cursors, obj, hierNbr );
                        }
                     }
                  } else {
                     console.log( "Object: " + prop );
                     if ( entity ) {
                        hierNbr++;
                        obj[".hierNbr"] = hierNbr;
                        obj["..parentO"] = parentObj;
                     }
                     // going one step down in the object tree!!
                     hierNbr = setHierarchicalJsonObject( obj, null, cursors, obj, hierNbr );
                  }
               }
            } else {
               // func.apply( this, [prop, obj, 1] );  
               if ( typeObj === "string" || typeObj === "number" || typeObj === "function" || typeObj === "undefined" ) {
               // console.log( "setHierarchicalJsonObject " + typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeObj === "boolean" ) {
               // console.log( "setHierarchicalJsonObject boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "setHierarchicalJsonObject Unknown: " + typeObj + "  Object: " + jsonObject );
               }
            }
         }
      }
   } else {
      console.log( "setHierarchicalJsonObject Unexpected: " + jsonObject );
   }
   return hierNbr;
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
               console.log( "initCursors Setting Absolute Position: " + jsonObject[k] + "  Entity: " + jsonObject[k]["Tag"] + "   Absolute Position: " + hierNbr.toString() );
               jsonObject[k][".hierNbr"] = hierNbr.toString();
               hierNbr = initCursors( jsonObject[k], null, cursors, jsonObject, hierNbr );
               jsonObject[k]["..parentA"] = jsonObject;
               jsonObject[k]["..parentO"] = parentObj;
               jsonObject[k][".entity"] = entity;
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

function RenderJsonObjectAsFormattedHtml( jsonObj, indent, addComma, isArray, isPropertyContent ) {
   var formattedHtml = "";
   var comma = (addComma) ? "<span class='Comma'>,</span> " : "";
   var objType = typeof jsonObj;
   var collapseHtml = "";
   if ( $.isArray( jsonObj ) ) {
      if ( jsonObj.length === 0 ){
         formattedHtml += GetRow( indent, "<span class='ArrayBrace'>[ ]</span>" + comma, isPropertyContent );
      } else {
         collapseHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" onClick=\"ExpImgClicked(this)\" /></span><span class='collapsible'>" : "";
         formattedHtml += GetRow( indent, "<span class='ArrayBrace'>[</span>" + collapseHtml, isPropertyContent );
         for ( var k = 0; k < jsonObj.length; k++ ) {
            formattedHtml += RenderJsonObjectAsFormattedHtml( jsonObj[k], indent + 1, k < (jsonObj.length - 1), true, false );
         }
         collapseHtml = window.IsCollapsible ? "</span>" : "";
         formattedHtml += GetRow( indent, collapseHtml + "<span class='ArrayBrace'>]</span>" + comma, false );
      }
   } else if ( objType === "object" ) {
      if ( jsonObj === null ){
         formattedHtml += FormatLiteral( "null", "", comma, indent, isArray, "Null" );
      } else if ( jsonObj.constructor === window._dateObj.constructor ) {
         formattedHtml += FormatLiteral( "new Date(" + jsonObj.getTime() + ") /*" + jsonObj.toLocaleString() + "*/", "", comma, indent, isArray, "Date" );
      } else if ( jsonObj.constructor === window._regexpObj.constructor ) {
         formattedHtml += FormatLiteral( "new RegExp(" + jsonObj + ")", "", comma, indent, isArray, "RegExp" );
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
            formattedHtml += GetRow( indent, "<span class='ObjectBrace'>{ }</span>" + comma, isPropertyContent );
         } else {
            collapseHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" onClick=\"ExpImgClicked(this)\" /></span><span class='collapsible'>" : "";
            formattedHtml += GetRow( indent, "<span class='ObjectBrace'>{</span>" + collapseHtml, isPropertyContent );
            var j = 0;
            var skip = type && content && attributes;
            var quote = window.QuoteKeys ? "\"" : "";
            if ( skip ) {
               formattedHtml += GetRow( indent + 1, "<span class='PropertyName'>" + quote + "type" + quote + "</span>: " + RenderJsonObjectAsFormattedHtml( jsonObj["type"], indent + 1, ++j < numProps, false, true ), false );
               formattedHtml += GetRow( indent + 1, "<span class='PropertyName'>" + quote + "attributes" + quote + "</span>: " + RenderJsonObjectAsFormattedHtml( jsonObj["attributes"], indent + 1, ++j < numProps, false, true ), false );
               formattedHtml += GetRow( indent + 1, "<span class='PropertyName'>" + quote + "content" + quote + "</span>: " + RenderJsonObjectAsFormattedHtml( jsonObj["content"], indent + 1, ++j < numProps, false, true ), false );
            }
            for ( var prop in jsonObj ) {
               if ( skip ) {
                  if ( prop === "type" || prop === "content" || prop === "attributes" ) {
                     continue;
                  }
               }
               formattedHtml += GetRow( indent + 1, "<span class='PropertyName'>" + quote + prop + quote + "</span>: " + RenderJsonObjectAsFormattedHtml( jsonObj[prop], indent + 1, ++j < numProps, false, true ), false );
            }
            collapseHtml = window.IsCollapsible ? "</span>" : "";
            formattedHtml += GetRow( indent, collapseHtml + "<span class='ObjectBrace'>}</span>" + comma, false );
         }
      }
   } else if ( objType === "string" ) {
      formattedHtml += FormatLiteral( jsonObj.toString().split("\\").join("\\\\").split('"').join('\\"'), "\"", comma, indent, isArray, "String" );
   } else if ( objType === "number" ) {
      formattedHtml += FormatLiteral( jsonObj, "", comma, indent, isArray, "Number" );
   } else if ( objType === "boolean" ) {
     formattedHtml += FormatLiteral( jsonObj, "", comma, indent, isArray, "Boolean" );
   } else if ( objType === "function" ) {
      if ( jsonObj.constructor === window._regexpObj.constructor ) {
         formattedHtml += FormatLiteral( "new RegExp(" + jsonObj + ")", "", comma, indent, isArray, "RegExp" );
      } else {
         jsonObj = FormatFunction( indent, jsonObj );
         formattedHtml += FormatLiteral( jsonObj, "", comma, indent, isArray, "Function" );
      }
   } else if ( objType === "undefined" ) {
      formattedHtml += FormatLiteral( "undefined", "", comma, indent, isArray, "Null" );
   } else {
      formattedHtml += "UNKNOWN type: " + objType;
   }
   return formattedHtml;
}

function FormatLiteral( literal, quote, comma, indent, isArray, style ) {
   var str;
   if ( indent >= 0 ) {
      if ( typeof literal === "string" ) {
         literal = literal.split("<").join("&lt;").split(">").join("&gt;");
      }
      str = "<span class='" + style + "'>" + quote + literal + quote + comma + "</span>";
      if ( isArray ) {
         str = GetRow( indent, str, false );
      }
   } else {
      str = quote + literal + quote + comma;
   }
   return str;
}

function FormatFunction( indent, obj ) {
   var tabs = buildTab( indent, false );
   var funcStrArray = obj.toString().split( "\n" );
   var str = "";
   for ( var k = 0; k < funcStrArray.length; k++ ) {
      str += ((k === 0) ? "" : tabs) + funcStrArray[k] + "\n";
   }

   return str;
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

var ZeidonViewCursors = function( keyType, valueType, root ) {
   var _db = [];
   var _keyType;
   var _valueType;
   var _root;

   (function() {
      _keyType = keyType;
      _valueType = valueType;
      _root = root;
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

   this.logHierarchy = function( entity, attribute ) {
      var entityObj = this.get( entity );
      if ( entityObj ) {
         var indent = 0;
         var parentObj = entityObj["..parentO"];
         if ( parentObj ) {
            indent = this.logHierarchy( parentObj[".entity"], attribute );
         }
         var tab = buildTab( indent, true );
         console.log( tab + entity + "  " + attribute + ": " + entityObj[attribute] );
         return indent + 1;
      }
      return 0;
   };

   this.findParentEntity = function( entity ) {
      var entityObj = this.get( entity );
      if ( entityObj ) {
         var parentObj = entityObj["..parentO"];
         if ( parentObj ) {
            return parentObj[".entity"];
         }
      }
      return null;
   };

   this.searchForValue = function( entityObj, searchAttribute, searchValue, last ) {
      if ( searchAttribute ) {
         var found = false;
         if ( last ) {
            for ( k = entityObj.length - 1; k >= 0; k-- ) {
               if ( entityObj[k][searchAttribute] === searchValue ) {
                  found = true;
                  break;
               }
            }
         } else {
            for ( k = 0; k < entityObj.length; k++ ) {
               if ( entityObj[k][searchAttribute] === searchValue ) {
                  found = true;
                  break;
               }
            }
         }
         if ( found == false ) {
            k = -1;
         }
      } else {
         k = last ? entityObj.length - 1 : 0;
      }
      return k;
   }
     
   // If searchAttribute is not null, look for the first/last instance of searchEntity with the attribute value specified by searchValue, otherwise,
   // just look for the first/last instance of searchEntity.  If last is true, look for last (otherwise first) instance meeting the given criteria.
   // If reset is true, reset the cursors if the requested entity instance is located.  Respect parentage if scopingEntity is specified.
   // Note that that "path" and "recurse" parameters are for testing purposes only and should be removed prior to deployment.
   this.locateEntity = function( entityObj, entity, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse, path ) {
// this.locateEntity = function( entityObj, entity, map, searchEntity, searchAttribute, searchValue, last ) {
      if ( typeof entityObj === "object" ) {
         console.log( "locateEntity coming through path: " + path + "   recurse: " + recurse );
         if ( $.isArray( entityObj ) ) {
            var k;
         // console.log( "locateEntity Array: " + jsonObject.length );
            if ( entity !== null && typeof( entityObj[0] ) === "object" ) {
               if ( entity === searchEntity ) {
                  k = this.searchForValue( entityObj, searchAttribute, searchValue, last );
                  if ( k >= 0 ) {
                     map.add( entity, entityObj[k] );
                     if ( reset ) {
                        this.add( entity, entityObj[k] );
                     }
                     return true;
                  } else {
                     return false;
                  }
               } else {
                  if ( last ) {
                     for ( k = entityObj.length - 1; k >= 0; k-- ) {
                        if ( this.locateEntity( entityObj[k], null, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse + 1, "A1" ) ) {
                           map.add( entity, entityObj[k] );
                           if ( reset ) {
                              this.add( entity, entityObj[k] );
                           }
                           return true;
                        }
                     }
                  } else {
                     for ( k = 0; k < entityObj.length; k++ ) {
                        if ( this.locateEntity( entityObj[k], null, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse + 1, "A2" ) ) {
                           map.add( entity, entityObj[k] );
                           if ( reset ) {
                              this.add( entity, entityObj[k] );
                           }
                           return true;
                        }
                     }
                  }
               }
            } else {
               console.log( "locateEntity Unknown Array object: " + typeof( entityObj[0] ) + "  Object: " + entityObj[0] + "   Path B" );  // never get here!!!
               if ( last ) {
                  for ( k = entityObj.length - 1; k >= 0; k-- ) {
                     if ( this.locateEntity( entityObj[k], null, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse + 1, "B1" ) ) {
                        return true;
                     }
                  }
                  
               } else {
                  for ( k = 0; k < entityObj.length; k++ ) {
                     if ( this.locateEntity( entityObj[k], null, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse + 1, "B2" ) ) {
                        return true;
                     }
                  }
               }
            }
         } else { // it's not an array
            var typeProp;
            for ( var prop in entityObj ) {
               typeProp = typeof entityObj[prop];
               if ( typeProp === "object" ) {
                  console.log( "locateEntity Object: " + prop );
                  if ( prop.charAt( 0 ) !== "." && prop != "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
                     if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                        if ( this.locateEntity( entityObj[prop], prop, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse + 1, "C" ) ) {
                           return true;
                        }
                     } else {
                        console.log( "locateEntity Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
                     }
                  }
               } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
               // console.log( "locateEntity " + typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeProp === "boolean" ) {
               // console.log( "locateEntity boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "locateEntity Unknown: " + typeProp + "  Object: " + entityObj );
               }
            }
         }
      } else {
         console.log( "locateEntity Unexpected: " + entityObj );
      }
      return false;
   }

   this.resetChildCursors = function( entityObj, entity, map ) {
      if ( typeof entityObj === "object" ) {
         if ( $.isArray( entityObj ) ) {
            if ( entity !== null && typeof( entityObj[0] ) === "object" ) {
               if ( map.get( entity ) === null ) {
                  map.add( entity, entityObj[0] );
                  this.add( entity, entityObj[0] );
                  console.log( "resetChildCursors resetting entity: " + entity );
                  this.resetChildCursors( entityObj[0], null, map );
              }
            } else {
               for ( var k = 0; k < entityObj.length; k++ ) {   // never get here!!!
                  this.resetChildCursors( entityObj[k], null, map );
               }
            }
         } else { // it's not an array
            var typeProp;
            for ( var prop in entityObj ) {
               typeProp = typeof entityObj[prop];
               if ( typeProp === "object" ) {
                  if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
                     if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                        this.resetChildCursors( entityObj[prop], prop, map );
                     } else {
                        console.log( "Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
                     }
                  }
               } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
               // console.log( typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeProp === "boolean" ) {
               // console.log( "boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "Unknown: " + typeProp + "  Object: " + entityObj );
               }
            }
         }
      } else {
         console.log( "Unexpected: " + entityObj );
      }
   };

   this.validateCursors = function( entity ) {
      var entityObj = this.get( entity );
      var parentObj;
      while ( entityObj !== null ) {
         parentObj = entityObj["..parentO"];
         entity = parentObj[".entity"];
         if ( entity === _root ) {
            break;
         }
         entityObj = this.get( entity );
         if ( entityObj[".hierNbr"] !== parentObj[".hierNbr"] ) {
            return false;
         }
      }
      return true;
   };
/*
    zCURSOR_NULL = -3
    zCURSOR_UNDEFINED = -2
    zCURSOR_UNCHANGED = -1
    zCURSOR_SET = 0
    zCURSOR_SET_NEWPARENT = 1
    zCURSOR_SET_RECURSIVE_CHILD = 2

   this.hasAnyWithinOi = function( searchEntity ) {
      if ( this.get( searchEntity ) ) {
         return 0; // zCURSOR_SET
      } else {
         return -3; // zCURSOR_NULL;
      }
   };
*/    

   this.hasAnyWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      if ( searchAttribute === undefined || searchValue === undefined ) {
         searchAttribute = null;
         searchValue = null;
      }
      var entityObj = this.get( _root );
      if ( entityObj ) {
         var map = new SimpleHashMap( "string", "object" );
         // this.locateEntity( entityObj, entity, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse, path )
         if ( this.locateEntity( entityObj, _root, map, searchEntity, searchAttribute, searchValue, false, _root, false, 0, "" ) ) {
            entityObj = map.get( searchEntity );
            this.resetChildCursors( entityObj, searchEntity, map );
            return 0; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };

/*
   this.hasNext = function( searchEntity ) {
      ? zCURSOR_SET : zCURSOR_UNCHANGED;
   };

   this.hasPrev = function( searchEntity ) {
      ? zCURSOR_SET : zCURSOR_UNCHANGED;
   };

   this.hasAny = function( searchEntity, scopingEntity ) {
      ? zCURSOR_SET : zCURSOR_NULL;
   };

   this.hasAny = function( searchEntity, searchAttribute, searchValue, scopingEntity ) {
      ? zCURSOR_SET : zCURSOR_NULL;
   };
*/
   this.setFirstWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      if ( searchAttribute === undefined || searchValue === undefined ) {
         searchAttribute = null;
         searchValue = null;
      }
      var entityObj = this.get( _root );
      if ( entityObj ) {
         var map = new SimpleHashMap( "string", "object" );
         // this.locateEntity( entityObj, entity, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse, path )
         if ( this.locateEntity( entityObj, _root, map, searchEntity, searchAttribute, searchValue, false, _root, true, 0, "" ) ) {
            entityObj = map.get( searchEntity );
            this.resetChildCursors( entityObj, searchEntity, map );
            return 0; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };

   this.setLastWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      if ( searchAttribute === undefined || searchValue === undefined ) {
         searchAttribute = null;
         searchValue = null;
      }
      var entityObj = this.get( _root );
      if ( entityObj ) {
         var map = new SimpleHashMap( "string", "object" );
         // this.locateEntity( entityObj, entity, map, searchEntity, searchAttribute, searchValue, last, scopingEntity, reset, recurse, path )
         if ( this.locateEntity( entityObj, _root, map, searchEntity, searchAttribute, searchValue, true, _root, true, 0, "" ) ) {
            entityObj = map.get( searchEntity );
            this.resetChildCursors( entityObj, searchEntity, map );
            return 0; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   }

   this.setFirst = function( searchEntity, scopingEntity ) {
      
   };

   this.setLast = function( searchEntity, scopingEntity ) {
      
   };

   this.setFirst = function( searchEntity, searchAttribute, searchValue, scopingEntity ) {
      
   };

   this.setNext = function( searchEntity, searchAttribute, searchValue, scopingEntity ) {
      
   };

   this.setPrev = function( searchEntity, searchAttribute, searchValue, scopingEntity ) {
      
   };

   this.setLast = function( searchEntity, searchAttribute, searchValue, scopingEntity ) {
      
   };

   this.setSubobject = function( entity, subEntity ) {
      
   };

   this.resetSubobject = function( entity, subEntity ) {
      
   };

   this.setFirst = function( entity ) {
      if ( this.validateCursors( entity ) ) {
         var entityObj = this.get( entity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];

            this.add( entity, parentArr[0] );
            parentObj[".cursor"] = 0;
            var map = new SimpleHashMap( "string", "object" );
            this.resetChildCursors( entityObj, entity, map );
            return 0; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };
   
   this.setNext = function( entity ) {
      if ( this.validateCursors( entity ) ) {
         var entityObj = this.get( entity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];
            var k = parentObj[".cursor"];

            if ( k < parentArr.length - 1 ) {
               k++;
               this.add( entity, parentArr[k] );
               parentObj[".cursor"] = k;
               var map = new SimpleHashMap( "string", "object" );
               this.resetChildCursors( entityObj, entity, map );
               return 0; // zCURSOR_SET
            }
            return -1; // zCURSOR_UNCHANGED
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };

   this.setPrev = function( entity ) {
      if ( this.validateCursors( entity ) ) {
      var entityObj = this.get( entity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];
            var k = parentObj[".cursor"];

            if ( k > 0 ) {
               k--;
               this.add( entity, parentArr[k] );
               parentObj[".cursor"] = k;
               var map = new SimpleHashMap( "string", "object" );
               this.resetChildCursors( entityObj, entity, map );
               return 0; // zCURSOR_SET
            }
            return -1; // zCURSOR_UNCHANGED
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };

   this.setLast = function( entity ) {
      if ( this.validateCursors( entity ) ) {
         var entityObj = this.get( entity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];

            this.add( entity, parentArr[parentArr.length - 1] );
            parentObj[".cursor"] = parentArr.length - 1;
            var map = new SimpleHashMap( "string", "object" );
            this.resetChildCursors( entityObj, entity, map );
            return 0; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };

   this.getAttribute = function( entity, attribute ) {
      var entityObj = this.get( entity );
      if ( entityObj !== null ) {
      // console.log( entityObj );
         return entityObj[attribute];
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
         randomIndex = Math.floor( Math.random( ) * currentIndex );
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
   var jsonObject = jsonStringToJsonObject( globalJsonStore );
   var a = new JsonHashMap( "string", "string", jsonObject );

   a.iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
}
*/