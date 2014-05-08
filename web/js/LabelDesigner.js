$(window).load(function(){
$(function() {

   $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);

   var g_loadedLLD = null;
   var g_updatedLLD = false;
   var g_application = "epamms";  // need to do something prior to deployment
   var g_fileName = "";
   var g_currentPanel = 1;
   var g_$current_block = null;
   var g_generateTag = 100;
   var g_xOffset = 0;
   var g_yOffset = 0;
   var g_$panel = "#panel";
   var g_$trash = "#ztrash";
   var g_trash_icon = "<div style='float:bottom'><a href='link/to/trash/script/when/we/have/js/off' style='float:right' title='Remove this block' class='ui-icon ui-icon-trash'>Move image to trash</a></div>";
   var g_recycle_icon = "<div style='float:bottom'><a href='link/to/recycle/script/when/we/have/js/off' style='float:right' title='Restore this block' class='ui-icon ui-icon-refresh'>Restore image</a></div>";
   var g_cursorsNewLabel;
   var g_cursorsLabel;
   var g_jsonNewLabel;
   var g_jsonLabel;

// var storageSession = window.sessionStorage;
// var storageLocal = window.localStorage;
// alert( "Session: " + storageSession.registeredViews );
// alert( "Local: " + storageLocal.registeredViews );
// var rv = storageSession.getItem( "registeredViews" );
// var objRV = JSON.parse( rv ) || {};
// alert( "Session objRV: " + objRV.toString() );

   $("#panel").data( "z_^level", 0 );
   $("#panel2").data( "z_^level", 0 );
   $("#panel3").data( "z_^level", 0 );
   $("#panel4").data( "z_^level", 0 );
   $("#panel5").data( "z_^level", 0 );
   $("#panel6").data( "z_^level", 0 );
   $("#panel7").data( "z_^level", 0 );
   $("#panel8").data( "z_^level", 0 );
   $("#panel9").data( "z_^level", 0 );
   $("#zaccordion").accordion( {heightStyle: "fill"} );

   $(".draggable").draggable({
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      helper: "clone",
      appendTo: "body",  // this keeps the drag item visible across divs
      cursor: "move",
      start: function( event, ui ) {
      // alert("Top: " +  $(this).offset().top);
      // console.log(ui);
      // console.log(ui.draggable);
      // $(this).css("z-index", 10 );
         var $parent = $(this).parent();
         var stopLoop = 1; // just to prevent infinite loop in case something goes wrong

         g_xOffset = 0;
         g_yOffset = 0;
         while ( $parent.parent().is( "html" ) === false && stopLoop++ < 40 )
         {
            if ( $parent.is( "div#zclient" ) )
            {
               g_xOffset = 0;
               g_yOffset = 0;
            }

            if ( $parent.is( "div#zviewport" ) )
               break;

         // console.log($parent);
         // console.log( "top: " + Math.floor( $parent.position().top ) );
         // console.log( "left: " + Math.floor( $parent.position().left ) );
            g_xOffset += Math.floor( $parent.position().left );
            g_yOffset += Math.floor( $parent.position().top );

            $parent = $parent.parent();
         }

         console.log( "Start yDrag: " + Math.floor( ui.offset.top - g_yOffset ).toString() + "  xDrag: " + Math.floor( ui.offset.left - g_xOffset ).toString() );

         updatePositionStatus( ui.offset.top - g_yOffset, ui.offset.left - g_xOffset );
         updateSizeStatus( $(this).height(), $(this).width() );
      },
      drag: function( event, ui ) {
         console.log( "Drag yDrag: " + Math.floor( ui.offset.top - g_yOffset ).toString() + "  xDrag: " + Math.floor( ui.offset.left - g_xOffset ).toString() );
         updatePositionStatus( ui.offset.top - g_yOffset, ui.offset.left - g_xOffset );
      },
      stop: function( event, ui ) {
      // $(this).css("z-index", 0 );
      // updatePositionStatus( ui.offset.top - yOffset, ui.offset.left - xOffset );
         console.log( "Stop yDrag: " + Math.floor( ui.offset.top - g_yOffset ).toString() + "  xDrag: " + Math.floor( ui.offset.left - g_xOffset ).toString() );
      // $(this).data( "z_^top", Math.floor( ui.offset.top - yOffset ).toString() );    not right ... done later
      // $(this).data( "z_^left", Math.floor( ui.offset.left - xOffset ).toString() );  not right ... done later
      // setCurrentBlockData( $(this), "updated 1" );
      // updatePositionStatus( -9999, -9999 );
      // updateSizeStatus( -9999, -9999 );
     }
   });

   // Note: "this" is the DOM object, whereas "$(this)" is the jQuery wrapper around the DOM object.
   // When using "this", you can call DOM methods on it, but not jQuery methods. When using "$(this)",
   // you can call jQuery methods on it, but not DOM methods.
   //
   // To create a jQuery element from a DOM element:
   //    var $elem = $(domElem);  // convert DOM element to jQuery element
   //    var htmlElem = $elem[0]; // convert jQuery element to HTML element

   // In the 'drop' event handler function for droppable, the dropped element is: ui.draggable

   function setBlockDraggableResizable( $canvas, $canvasElement, $target ) {
      console.log( "Canvas: " + $canvas.attr( "id" ) + "  canvasElement: " + $canvasElement.attr( "id" ) + "  target: " + $target.attr( "id" ) );
      $canvasElement.draggable({
         cancel: "a.ui-icon", // clicking a link with class .ui-icon won't initiate dragging
         containment: "#panel",
         appendTo: "body",  // this keeps the drag item visible across divs
         cursor: "move",
         start: function( event, ui ) {
         // $target.css("z-index", 10 );
            console.log( "Start yOffset: " + $canvasElement[0].offsetTop + "  xOffset: " + $canvasElement[0].offsetLeft );
            updatePositionStatus( $canvasElement[0].offsetTop, $canvasElement[0].offsetLeft );
            updateSizeStatus( $canvasElement[0].offsetHeight, $canvasElement[0].offsetWidth );
         },
         drag: function( event, ui ) {
            console.log( "Drag yOffset: " + $canvasElement[0].offsetTop + "  xOffset: " + $canvasElement[0].offsetLeft );
            updatePositionStatus( $canvasElement[0].offsetTop, $canvasElement[0].offsetLeft );
         },
         stop: function( event, ui ) {
         // $target.css("z-index", 0 );
         // updatePositionStatus( ui.offset.top - yOffset, ui.offset.left - xOffset );
            console.log( "Stop yOffset: " + $canvasElement[0].offsetTop + "  xOffset: " + $canvasElement[0].offsetLeft );
            g_updatedLLD = true;
            $canvasElement.data( "z_^top", Math.floor( $canvasElement[0].offsetTop ).toString() );
            $canvasElement.data( "z_^left", Math.floor( $canvasElement[0].offsetLeft ).toString() );
            setCurrentBlockData( $canvasElement, "updated 2" );
         // updatePositionStatus( -9999, -9999 );
         // updateSizeStatus( -9999, -9999 );
         }
      });
      $canvasElement.resizable({
         containment: "#panel",
         start: function( event, ui ) {   // alert("Top: " +  $target.offset().top);
            console.log( "Start yResize: " + $canvasElement[0].offsetHeight + "  xResize: " + $canvasElement[0].offsetWidth );
            updatePositionStatus( $canvasElement[0].offsetTop, $canvasElement[0].offsetLeft );
            updateSizeStatus( $canvasElement[0].offsetHeight, $canvasElement[0].offsetWidth );
         },
         resize: function( event, ui ) {
            console.log( "Resize yResize: " + $canvasElement[0].offsetHeight + "  xResize: " + $canvasElement[0].offsetWidth );
            updateSizeStatus( $canvasElement[0].offsetHeight, $canvasElement[0].offsetWidth );
         },
         stop: function( event, ui ) {
            console.log( "Stop yResize: " + $canvasElement[0].offsetHeight + "  xResize: " + $canvasElement[0].offsetWidth );
            g_updatedLLD = true;
            $canvasElement.data( "z_^height", Math.floor( $canvasElement[0].offsetHeight ).toString() );
            $canvasElement.data( "z_^width", Math.floor( $canvasElement[0].offsetWidth ).toString() );
            setCurrentBlockData( $canvasElement, "updated 3" );
         // updatePositionStatus( -9999, -9999 );
         // updateSizeStatus( -9999, -9999 );
         }
      });
   }

   $(".panel, .block-element").droppable({
      accept: ".draggable",
   // hoverClass: "ui-state-active",  partially highlights panel ... not so good
      drop: function( event, ui ) {
         var stopLoop = 1;
         if ( ui.draggable.hasClass( "canvas-element" ) ) {  // dragging block already on canvas
            var $canvasElement = $(ui.helper);
            var $parent = $canvasElement.parent();
            var $canvas = determineTargetOfDrop( event, $(this), $canvasElement );
            if ( true || $parent[0] !== $canvas[0] ) {
               var top = ui.offset.top;
               var left = ui.offset.left;
               while ( $parent[0] !== $canvas[0] && $parent[0].id !== "panel" && stopLoop < 40 ) {
                  top += $parent[0].offsetTop + $parent[0].clientTop;
                  left += $parent[0].offsetLeft + $parent[0].clientLeft;
                  $parent = $parent.parent();
                  stopLoop++;  // using level just to prevent infinite loop
               }

               stopLoop = 1;
               var $canvasParent = $canvas;
               while ( $canvasParent[0] !== $parent[0] && $canvasParent[0].id !== "panel" && stopLoop < 40 ) {
                  top -= $canvasParent[0].offsetTop + $canvasParent[0].clientTop;
                  left -= $canvasParent[0].offsetLeft + $canvasParent[0].clientLeft;
                  $canvasParent = $canvasParent.parent();
                  stopLoop++;
               }

               $canvasElement.offset({ top: Math.floor( top ), left: Math.floor( left ) });
               $canvas.append( $canvasElement );
               g_updatedLLD = true;
               setChildrenLevel( $canvas, $canvasElement );
            // setCurrentBlockData( $canvasElement, "updated 7" );
            // $canvasElement.data( "z_^top", Math.floor( top ).toString() );   done later
            // $canvasElement.data( "z_^left", Math.floor( left ).toString() ); done later
            }
            setCurrentBlockData( $canvasElement, "updated block already on canvas" );
         } else {
            var $canvasElement = $(ui.helper).clone(); // ui.draggable.clone();  dragging new block
            $canvasElement.height( $(ui.helper).height() ).width( $(ui.helper).width() );
            $canvasElement.css({ top:event.pageY, left:event.pageX });
            var uniqueTag = getUniqueId();
            $canvasElement.attr( "id", uniqueTag );
            var $canvas = determineTargetOfDrop( event, $(this), $canvasElement );
            $canvasElement.attr( "name", uniqueTag );
            $canvasElement.text( uniqueTag );
            $canvasElement.removeClass( "ui-draggable-dragging" ).addClass( "canvas-element block-element" );

            setBlockDraggableResizable( $canvas, $canvasElement, $(this) );

            $canvas.append( $canvasElement );
            $canvasElement.append( "<h5 class='ui-widget-header'></h5>" );
            $canvasParent = $canvas;
            while ( $canvasParent[0].id !== "panel" && stopLoop < 40 ) {
               stopLoop++;
               $canvasParent = $canvasParent.parent();
            }

            setChildrenLevel( $canvas, $canvasElement );
            $canvasElement.prepend( g_trash_icon );
            $canvasElement.css({
               position: "absolute",
               top: Math.floor( ui.position.top - $canvas.offset().top ),
               left: Math.floor( ui.position.left - $canvas.offset().left ),
               height: "100px",
               width: "100px"
            });
            g_updatedLLD = true;
            $canvasElement.data( "z_^top", Math.floor( ui.position.top - $canvas.offset().top ).toString() );
            $canvasElement.data( "z_^left", Math.floor( ui.position.left - $canvas.offset().left ).toString() );
            $canvasElement.data( "z_^height", "100px" );
            $canvasElement.data( "z_^width", "100px" );
            setCurrentBlockData( $canvasElement, "updated new block" );
         }
      }
   });
/*
   function bindEvents(){
      $('.block').not('.initialized').addClass('initialized').on().resizable().draggable();
   }
*/
   function setCurrentBlockData( $element, message ) {
      console.log( message + message + message + message );
      g_updatedLLD = true;
      mapElementToData( $element );
      if ( g_$current_block && g_$current_block.attr( "id" ) !== $element.attr( "id" ) ) {
         mapUiDataToElementData( g_$current_block );
      }
      g_$current_block = $element;
      mapElementDataToUiData( g_$current_block );
      $("#zBlockTag").val( $element.attr( "id" ) );
   }

   function floorPixel( attr ) {
      var idx = attr.indexOf( "px" );
      var pixels = Math.floor( attr.substring( 0, idx ) );
      if ( pixels < 0 ) {
         pixels = 0;
      }
      return( pixels + "px" );
   }

   function mapElementToData( $element ) {
   // $item.data( "z_^top", $item.position().top );  these don't have units (e.g. px)
   // $item.data( "z_^left", $item.position().left );
      var id = $element.parent().attr( "id" );
      $element.data( "rparent", id );
      $element.data( "z_^tag", $element.attr("id") );
      $element.data( "z_^top", floorPixel( $element.css( "top" ) ) );
      $element.data( "z_^left", floorPixel( $element.css( "left" ) ) );
      $element.data( "z_^height", floorPixel( $element.css( "height" ) ) );
      $element.data( "z_^width", floorPixel( $element.css( "width" ) ) );
      $element.css({ position: "absolute" });
   // displayElementData( "mapElementToData: ", $element );
   }

   function restoreProperties( $element ) {
      $element.css({ position: "absolute" });
   }

   // <div id="label" name="label" class="label" style="top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;">Drop area ...  <!-- without position:relative, target position is off -->
   // <div id="panel" name="panel" class="panel" style="background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;">1
   // <div class="block draggable canvas-element block-element ui-draggable ui-resizable" style="position:absolute;top:-0.78125px;height:253px;width:266px;left:0px;background-color: #ccffcc; display: block; float: left; color: red; border: 2px solid;" id="Tag100" name="Tag100">
   // <input type="text" id="zLabelBackgroundColor" name="zLabelBackgroundColor" class="zeidon" data-zmap="label.z_^background^color"  value="#ffffed" />
   function mapUiDataToElementData( $current_element ) {
      if ( $current_element ) {
      // displayElementData( "mapUiDataToElementData (before)", $current_element );
         var entityAttr;
         var n;
         var entity;
         var key;
         var element_id = $current_element.attr( "id" );
         if ( element_id !== "label" && element_id !== "panel" ) {
            element_id = "block";
         }
         $("input.zeidon, select.zeidon").each( function() {
            entityAttr = $(this).data( "zmap" );
            if ( entityAttr ) {
               n = entityAttr.indexOf( ".z_" );
               entity = entityAttr.substring( 0, n );
               key = entityAttr.substring( n + 1 );
               if ( entity === element_id ) {
                  $current_element.data( key, $(this).val() );
               }
            }
         });
      // displayElementData( "mapUiDataToElementData (after)", $current_element );
      }
   }

   function mapElementDataToUiData( $current_element ) {
      if ( $current_element ) {
      // displayElementData( "mapElementDataToUiData", $current_element );
         var entityAttr;
         var n;
         var entity;
         var key;
         var value;
         var element_id = $current_element.attr( "id" );
         if ( element_id !== "label" && element_id !== "panel" ) {
            element_id = "block";
         }
         $("input.zeidon, select.zeidon").each( function() {
            entityAttr = $(this).data( "zmap" );
            if ( entityAttr ) {
               n = entityAttr.indexOf( ".z_" );
               entity = entityAttr.substring( 0, n );
               key = entityAttr.substring( n + 1 );
               if ( entity === element_id ) {
                  value = $current_element.data( key );
                  if ( ! value ) {
                     value = "";
                  }
                  if ( $(this).hasClass( "colorwell" ) ) {
                     if ( value.indexOf( '#' ) !== 0 ) {
                        value = "#ffffff";
                     }
                     var colorPicker = $.farbtastic( "#" + $(this).attr( "id" ) );
                     colorPicker.setColor( value );
                  }
                  $(this).val( value );
               }
            }
         });
      }
   }

   $("#zBlockTag").blur( function() {
      if ( g_$current_block ) {
         var newText = $(this).val();
         g_$current_block.attr( "id", newText );
         g_$current_block.attr( "name", newText );
      // $current_block.text( newText );  this wipes out all child nodes of the div ... but the complicated next line works.
         g_$current_block.contents().filter(function() { return this.nodeType === 3; }).replaceWith( newText );
      }
      return false;  // prevent default and propagation
   });

   $("div").on( "mousedown", ".block-element", function( event ) {
      if ( event.button === 0 ) {  // left button
         mapUiDataToElementData( g_$current_block );
         g_$current_block = $(this);
         $("#zBlockTag").val( $(this).attr( "id" ) );
         mapElementDataToUiData( g_$current_block );
         return false;  // prevent default and propagation
      }
   });
/*
   $("body").on( "click", "div.ui-draggable", function() {
      mapUiDataToElementData( $current_block );
      $current_block = $(this);
      $("#zBlockTag").val( $(this).attr( "id" ) );
      mapElementDataToUiData( $current_block );
      return false;  // prevent default and propagation
   });
*/
   $("body").on( "click", "a.ui-icon-trash", function() {
      trashImage( $(this) );
      return false;  // prevent default and propagation
   });

   $("body").on( "click", "a.ui-icon-refresh", function() {
      restoreImage( $(this) );
      return false;  // prevent default and propagation
   });

   function trashImage( $item ) {
      var $parent = $item.parent();
      $parent = $parent.parent();
      $item.parent().remove();
      mapElementToData( $parent );
      $parent.fadeOut( function() {
         var $list = $( "ul", g_$trash ).length ?
            $( "ul", g_$trash ) :
            $("<ul class='pool ui-helper-reset'/>").appendTo( g_$trash );

         $parent
            .prepend( g_recycle_icon )
            .appendTo( $list )
            .fadeIn( function() {
               $parent.animate( { top: "0px", left: "0px", width: "60px", height: "40px" } );
            });
      });
   }

   function restoreImage( $item ) {
      var $parent = $item.parent();
      $parent = $parent.parent();  // now we are at the correct item
      var $newParent = null;
      var id = $parent.data( "rparent" );
      if ( id !== "" ) {
         $newParent = $("#" + id);
      }
      if ( $newParent === null ) {
         $newParent = $("#panel");
      }
      $item.parent().remove();
      restoreProperties( $parent );
      $parent.fadeOut(function() {
         $parent
            .prepend( g_trash_icon )
            .appendTo( $newParent )
            .fadeIn( function() {
               $parent.animate( { top: $parent.data( "z_^top" ), left: $parent.data( "z_^left" ), width: $parent.data( "z_^width" ), height: $parent.data( "z_^height" ) } );
            });
      });
   }

   function getBackgroundColorForLevel( level ) {
      if ( level <= 0 )
         level = 1;
      else
      if ( level > 7 )
         level = ((level - 1) % 7) + 1;

      return level === 1 ? "#ccffcc" : level === 2 ? "#ccffff" : level === 3 ? "#ffccff" : level === 4 ? "#ccccff" : level === 5 ? "#ffcccc" : level === 6 ? "#ffffcc" : "#cccccc";
   }

   function getColorForLevel( level ) {
      if ( level <= 0 || level >= 7  ) {
         level = 1;
      }

      return level === 1 ? "red" : level === 2 ? "brown" : level === 3 ? "yellow" : level === 4 ? "green" : level === 5 ? "blue" : level === 6 ? "indigo" : "violet";
   }

   function setChildrenLevel( $parent, $child ) {
      var level = parseInt( $parent.data( "z_^level" ), 10 ) + 1;
      $child.data( "z_^level", level );
      $child.css({
         background: getBackgroundColorForLevel( level ),
         color: getColorForLevel( level )
      });

      // get all divs of the child
      $( "div" ).children( ".selected" ).css( "color", "blue" );
      var $children = $child.children();
      var list = $children.map(function() {
         if ( this.nodeName === "DIV" && this.classList.contains( "ui-draggable") === true ) {
            return $(this); //.nodeName + ' ' + this.className + '  id: ' + this.id;
         }
      }).get();
   // displayElementData( "setChildrenLevel (after)", $child );
      for ( var k = 0; k < list.length; k++ ) {
         setChildrenLevel( $child, list[k] );
      }
   }

   function determineTargetOfDrop( event, $parent, $canvasElement ) {
      var clickX = event.pageX;
      var clickY = event.pageY;
      var $list;
      var offset;
      var range;
      var $body = $('body').parents().addBack();

      $list = $('body *').filter(function() {
        offset = $(this).offset();
        range = {
            x: [offset.left, offset.left + $(this).outerWidth()],
            y: [offset.top, offset.top + $(this).outerHeight()]
        };

        return (clickX >= range.x[0] && clickX <= range.x[1]) && (clickY >= range.y[0] && clickY <= range.y[1]);
      });

      $list = $list.add($body);

      var list = $list.map( function() {
         if ( this.nodeName === "DIV" && this.id !== null && this.id !== "ztrash" && this.id !== "label" &&
              this.id !== "zcontainer" && this.id.indexOf( "ui-accordion" ) < 0 &&
              this.classList.contains( "ui-draggable-dragging") === false ) {
            return $(this); //.nodeName + ' ' + this.className + '  id: ' + this.id;
         }
      }).get();

   // console.log( "List: " + list );
      var $target = $parent;
      var ceTop = Math.floor( $canvasElement.offset().top );
      var ceLeft = Math.floor( $canvasElement.offset().left );
      var ceHeight = Math.floor( $canvasElement.height() );
      var ceWidth = Math.floor( $canvasElement.width() );
   // var tgtTop = $target.offset().top;
   // var tgtLeft = $target.offset().left;
      var tgtHeight = Math.floor( $target.height() );
      var tgtWidth = Math.floor( $target.width() );
      var $el;
      var elHeight;
      var elWidth;

      if ( ceTop === 0 && ceLeft === 0 ) {
         ceTop = clickY;
         ceLeft = clickX;
      }

      for ( var k = 0; k < list.length; k++ ) {
         $el = list[k];
         if ( $el.parents("div#panel").length ) {  // clicked element has div#panel as parent
            elHeight = Math.floor( $el.height() );
            elWidth = Math.floor( $el.width() );

            if ( elHeight < tgtHeight && elWidth < tgtWidth &&  // clicked element is smaller than current target
                 ceTop >= Math.floor( $el.offset().top ) && ceLeft >= Math.floor( $el.offset().left ) &&  // new element within clicked element boundaries
                 ceTop + ceHeight < Math.floor( $el.offset().top ) + elHeight &&
                 ceLeft + ceWidth < Math.floor( $el.offset().left ) + elWidth ) {
               $target = $el;
            // tgtTop = $target.offset().top;
            // tgtLeft = $target.offset().left;
               tgtHeight = Math.floor( $target.height() );
               tgtWidth = Math.floor( $target.width() );
            }
         }
      }

      return $target;
   }

   function getUniqueId() {
      var k = 0; // prevent infinite loop
      var arr = $(document.getElementById( "Tag" + g_generateTag ));
      do
      {
         if ( $(arr).length <= 0 ) {
            break;
         }

         g_generateTag++;
         arr = $(document.getElementById( "Tag" + g_generateTag ));
      } while ( k++ < 100 )

      var tag = "Tag" + g_generateTag;
      console.log( "getUniqueId: " + tag );
      return tag;
   }

   function updatePositionStatus( offset_top, offset_left ) {
      // ... then update the numbers
      var new_position;
      if ( offset_top === -9999 ) {
         new_position = "";
      } else {
         new_position = "Position: " + Math.floor( offset_top ) + "," + Math.floor( offset_left );
      }

      $( "span#zdisplay_position" ).text( new_position );
   }

   function updateSizeStatus( height, width ) {
      // ... then update the numbers
      var new_size;
      if ( width === -9999 ) {
         new_size = "";
      } else {
         new_size = "Size: " + height + "," + width;
      }

      $("span#zdisplay_size").text( new_size );
   }

   $.fn.makeAbsolute = function( rebase ) {
      return this.each(function() {
         var el = $(this);
         var pos = el.position();
         el.css({ position: "absolute", marginLeft: 0, marginTop: 0, top: pos.top, left: pos.left });
         if ( rebase )
            el.remove().appendTo( "body" );
      });
   };

   function mapDOM( element, json ) {
      var treeObject = {};

      // If it's a string, convert to a document Node
      if ( typeof element === "string" ) {
         if ( window.DOMParser )
         {
            parser = new DOMParser();
            docNode = parser.parseFromString( element, "text/xml" );
         }
         else // Microsoft strikes again
         {
            docNode = new ActiveXObject( "Microsoft.XMLDOM" );
            docNode.async = false;
            docNode.loadXML( element );
         }
         element = docNode.firstChild;
      }

      // Recursively loop through DOM elements and assign properties to object
      function treeHTML( element, object ) {
         object["type"] = element.nodeName;
         var nodeList = element.childNodes;
         if ( nodeList !== null ) {
            if ( nodeList.length ) {
               object["content"] = [];
               for ( var i = 0; i < nodeList.length; i++ ) {
                  if ( nodeList[i].nodeType === 3 ) {
                     object["content"].push(nodeList[i].nodeValue);
                  } else {
                     object["content"].push( {} );
                     treeHTML( nodeList[i], object["content"][object["content"].length - 1] );
                  }
               }
            }
         }
         if ( element.attributes != null ) {  // cannot use !== here
            if ( element.attributes.length ) {
               object["attributes"] = {};
               for ( var i = 0; i < element.attributes.length; i++ ) {
                  object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
               }
            }
         }
      }
      treeHTML(element, treeObject);

      return (json) ? JSON.stringify( treeObject ) : treeObject;
   }

   function selectPanel( value ) {
      mapUiDataToElementData( $("#panel") );
      $("#panel").attr( "id", "panel" + g_currentPanel ).attr( "name", "panel" + g_currentPanel ).removeClass( "panel_active" ).addClass( "panel_hidden" ).hide();
      $("#panel" + value).attr( "id", "panel" ).attr( "name", "panel" ).removeClass( "panel_hidden" ).addClass( "panel_active" ).show();
      g_currentPanel = value;
      mapElementDataToUiData( $("#panel") );
   }
/*
   var selected;
   var f = $.farbtastic('#zpicker');
   var p = $('#zpicker').css('opacity', 0.25);
   $('.colorwell')
      .each(function () {
         f.linkTo(this);
         $(this).css('opacity', 0.75);
      })
      .focus(function() {
         if (selected) {
            $(selected).css('opacity', 0.75).removeClass('colorwell-selected');
         }
         f.linkTo(this);
         p.css('opacity', 1);
         $(selected = this).css('opacity', 1).addClass('colorwell-selected');
      });
*/
   function fbCallback( color ) {
      alert( "fbCallback color: " + color );
   }

   $("#jQueryRequired").hide();

$("#zBlockViewName").mousedown(function(){
  alert("The zBlockViewName was clicked.");
});
         // using default options
    /*   $("#ftree").fancytree({
            source: {url: "ajax-tree-decide.json"}
         });

    $("#treegrid").fancytree({
      extensions: ["table"],
      checkbox: true,
      table: {
        indentation: 20,      // indent 20px per node level
        nodeColumnIdx: 2,     // render the node title into the 2nd column
        checkboxColumnIdx: 0  // render the checkboxes into the 1st column
      },
      source: {
        url: "../demo/ajax-tree-plain.json"
      },
      lazyload: function(e, data) {
        data.result = {url: "../demo/ajax-sub2.json"}
      },
      renderColumns: function(e, data) {
        var node = data.node,
          $tdList = $(node.tr).find(">td");
        // (index #0 is rendered by fancytree by adding the checkbox)
        $tdList.eq(1).text(node.getIndexHier()).addClass("alignRight");
        // (index #2 is rendered by fancytree)
        $tdList.eq(3).text(node.key);
        $tdList.eq(4).html("<input type='checkbox' name='like' value='" + node.key + "'>");
      }
    });


    // Attach the dynatree widget to an existing <div id="tree"> element
    // and pass the tree options as an argument to the dynatree() function:
    $("#dtree").dynatree({
      onActivate: function(node) {
        // A DynaTreeNode object is passed to the activation handler
        // Note: we also get this event, if persistence is on, and the page is reloaded.
        alert("You activated " + node.data.title);
      },
      children: [
        {title: "Item 1"},
        {title: "Folder 2", isFolder: true, key: "folder2",
          children: [
            {title: "Sub-item 2.1"},
            {title: "Sub-item 2.2"}
          ]
        },
        {title: "Item 3"}
      ]
    });
*/


// $("#zBlockBackgroundColor").attr( "readonly", true );
   var selectedBlock;
   var fBlock = $.farbtastic( "#zBlockPicker", fbCallback );
   var pBlock = $("#zBlockPicker").css("opacity", 0.25).hide();
   $("input.colorwell1")
      .each( function() {
         fBlock.linkTo(this);
         $(this).css( "opacity", 0.75 );
      })
      .blur( function() {
        pBlock.css( "opacity", 0.25 );
        pBlock.hide();
      })
      .focus( function() {
         if ( selectedBlock ) {
            $(selectedBlock).css( "opacity", 0.75 ).removeClass( "colorwell-selected" );
         }
         fBlock.linkTo( this );
         pBlock.css( "opacity", 1 );
         pBlock.fadeIn();
         $(selectedBlock = this).css( "opacity", 1 ).addClass( "colorwell-selected" );
      });

   var selectedLabel;
// $("#zLabelBackgroundColor").attr( "readonly", true );
   var fLLD = $.farbtastic( "#zLabelPicker", fbCallback );
   var pLLD = $("#zLabelPicker").css("opacity", 0.25).hide();
   $("input.colorwell2")
      .each( function() {
         fLLD.linkTo(this); $(this).css( "opacity", 0.75 );
      })
      .blur( function() {
        pLLD.css( "opacity", 0.25 );
        pLLD.hide();
      })
      .focus( function() {
         if ( selectedLabel ) {
            $(selectedLabel).css( "opacity", 0.75 ).removeClass( "colorwell-selected" );
         }
         fLLD.linkTo( this );
         pLLD.css( "opacity", 1 );
         pLLD.fadeIn();
         $(selectedLabel = this).css( "opacity", 1 ).addClass( "colorwell-selected" );
      });

   $("input.zeidon, select.zeidon")
      .blur( function () {
      // var jsonObj = null;
         var entityAttr = $(this).data( "zmap" );
         if ( entityAttr ) {
            var n = entityAttr.indexOf( ".z_" );
            var entity = entityAttr.substring( 0, n );
            var key = entityAttr.substring( n + 1 );
            var value = $(this).is( ":checkbox" ) ? $(this)[0].checked ? "Y" : "N" : $(this).val();
            if ( entity === "block" ) {
               if ( g_$current_block ) {
                  g_updatedLLD = true;
                  console.log( "updated block attribute: " + key + "  value: " + value );
                  g_$current_block.data( key, value );
               }
            // jsonObj = dataToJSON( $current_block );
            } else if ( entity === "panel" ) {
               g_updatedLLD = true;
               console.log( "updated panel attribute: " + key + "  value: " + value );
               $("#panel").data( key, value );
            // jsonObj = dataToJSON( $("#panel") );
            } else if ( entity === "label" ) {
               g_updatedLLD = true;
               console.log( "updated label attribute: " + key + "  value: " + value );
               $("#label").data( key, value );
            }
            /*
            var jsonOut = "jsonOut: \n";
            jQuery.each( jsonObj, function(i, val) {
               jsonOut += "  ==> " + i + " - " + val + "\n";
            });
            alert( "jsonOut: " + jsonOut );
            */
         }
      });

// $("#zBlockTextAlign").combobox();
// $("#zHazardPanel").combobox();

   var $PanelSpinner = $("#zPanelSpinner").spinner();
   $PanelSpinner.spinner( "option", "min", 1 );
   $PanelSpinner.spinner( "option", "max", 9 );
   $PanelSpinner.spinner( "option", "numberFormat", "nn" );
   $PanelSpinner[0].readOnly = true;  // prevent invalid input

   // Handle the Spinner change event.
   $PanelSpinner.on( "spinstop", function( event, ui ) {
      selectPanel( $PanelSpinner.spinner( "value" ) );
   });

//x$(function() {
   //x $("#zPanelUnits").buttonset();
//x});

// $("#zPanelUnits").buttonset().find("label").css({ width: "50%" });
//x $("#zPanelUnits").buttonset().find('label').css({ 'width': '40px', 'height': '24px'});

//x$(function() {
   //x $("#zBlockUnits").buttonset();
//x});

// $("#zBlockUnits").buttonset().find("label").css({ width: "50%" });
//x $("#zBlockUnits").buttonset().find('label').css({ 'width': '40px', 'height': '24px'});

   $(function() {
      $( "#zmbp" ).tabs({
      // event: "mouseover"
      });
   });

// $(function() {
//    $( "#zcheckContinuationBlock" ).button();
//  });

   var blockRecurse = 0;
   var entityIdx = -1;
   var recurse = -1;
   var firstPanel = true;
   var lastPanel = false;

   var req = null;
   var isIE = false;

   function initRequest() {
      if (window.XMLHttpRequest) {
         if (navigator.userAgent.indexOf('MSIE') !== -1) {
            isIE = true;
         }
         return new XMLHttpRequest();
      } else if (window.ActiveXObject) {
         isIE = true;
         return new ActiveXObject("Microsoft.XMLHTTP");
      }
   }

// ReadyState  Holds the status of the XMLHttpRequest. Changes from 0 to 4:
//  - 0: request not initialized
//  - 1: server connection established
//  - 2: request received
//  - 3: processing request
//  - 4: request finished and response is ready
// status - 200: "OK"
//        - 404: Page not found
/* function FormatToJsonLLD_Callback() {
      if ( req.readyState === 4 ) {
         if ( req.status === 200 ) {
         // parseMessages( req.responseXML );
         // $id("zFormattedJsonLabel").innerHTML = g_jsonLabel;
            alert( "Accept: " + req.responseText );
         }
      }
   }
*/
   // jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )  Returns: jqXHR
   // Additional parameters:
   //   data - contains the resulting data from the request
   //   status - contains the status of the request ("success", "notmodified", "error", "timeout", or "parsererror")
   //   xhr - contains the XMLHttpRequest object
   function FormatToJsonLLD_Callback( jsonZeidon, status, xhr ) {
      if ( xhr.readyState === 4 ) {
         if ( xhr.status === 200 ) {
         // parseMessages( req.responseXML );
            console.log( "Accept JSON Zeidon: " + jsonZeidon );
         }
      }
   }
/*
   function ConvertWysiwygLabelDesignToZeidonJson( name ) {
      $("#panel").attr( "id", "panel" + currentPanel ).attr( "name", "panel" + currentPanel );
      var $initElement = $("#label");
      var jsonDOM = mapDOM( $initElement[0], true );
   // console.log( "JSON DOM: " + jsonDOM );
      var jsonLabel = CaptureZeidonLabelJsonFromDomJson( jsonDOM );

      // Display the resultant JSON that will be passed to Zeidon to be saved as an LLD.
   // console.log( "\nJsonLabel: " + jsonLabel );
      try {
      // var jsonObj = eval( "[" + jsonLabel + "]" );
      // var jsonObj = jQuery.parseJSON( "[" + jsonLabel + "]" );  // this is faster and more secure than eval (above)
      // var formattedHtml = renderJsonObjectAsFormattedHtml( jsonObj[0], 0, false, false, false );
      // $id("zFormattedJsonLabel").innerHTML = "<PRE class='CodeContainer'>" + formattedHtml + "</PRE>";

         // Assign handlers immediately after making the request and remember the jqxhr object for this request
         // Pass the JSON version of the label to Zeidon (on the server) to be saved as an LLD.
         var url = "labeldesigner?action=saveLabel&fileName=" + escape( name ) + "&jsonLabel=" + escape( jsonLabel );
         var jqxhr = $.post( url,
                             FormatToJsonLLD_Callback ) // the function to run if the request succeeds
            .done(function() {
               console.log( "Save LLD to Zeidon: second success" );
            })
            .fail(function() {
               alert( "error " + jqxhr.toString() );
            })
            .always(function() {
               console.log( "Save LLD to Zeidon: always finished" );
         });

         // Perform other work here ...

         // Set another completion function for the request above
         jqxhr.always(function() {
            console.log( "Save LLD to Zeidon: second always finished" );
         });

      } catch(e) {
         $id("zFormattedJsonLabel").innerHTML = jsonLabel;
         alert( "JSON Label is not well formatted:\n" + e.message );
      } finally {
         $("#panel" + currentPanel).attr( "id", "panel" ).attr( "name", "panel" );
      }
   }
*/
   function ConvertWysiwygLabelDesignToZeidonJson( name ) {
      $("#panel").attr( "id", "panel" + g_currentPanel ).attr( "name", "panel" + g_currentPanel );
      var $initElement = $("#label");
      var jsonDOM = mapDOM( $initElement[0], true );
   // console.log( "JSON DOM: " + jsonDOM );
      var jsonLabel = CaptureZeidonLabelJsonFromDomJson( jsonDOM );

      // Display the resultant JSON that will be passed to Zeidon to be saved as an LLD.
   // console.log( "\nJsonLabel: " + jsonLabel );
      var url = "labeldesigner?action=saveLabel&fileName=" + escape( name );

      // Display the resultant JSON that will be passed to Zeidon to be saved as an LLD.
   // console.log( "\nJsonLabel: " + jsonLabel );

      $.ajax({
         url : url,
         type : 'POST',
         data : { jsonLabel : jsonLabel },
         dataType : 'json',
         success: function( data ) {
            console.log( data );
         }
      });

// The following does not work???
//      var jsonObj = new Object();
//      jsonObj.action = "saveLabel";
//      jsonObj.fileName = escape( name );
//      jsonObj.jsonLabel = jsonLabel;
//
//      $.ajax({
//         url: "labeldesigner",
//         type: 'POST',
//         dataType: 'json',
//         data: JSON.stringify( jsonObj ),
//         contentType: 'application/json',
//         mimeType: 'application/json',
//         success: function( data ) {
//            console.log( data );
//         }
//      });
   }

   $("#zTest1").click( function() {
   // testJsonPath();
   // testZeidonViewCursors();
      var jsonLabelLod = jsonStringToJsonObject( g_JsonLabelLod );
      g_cursorsLabel = new ZeidonViewCursors();
      console.log( g_cursorsLabel instanceof ZeidonViewCursors );
      console.log( g_cursorsLabel instanceof SimpleHashMap );
      console.log( "Cursors Label log LOD" );
      g_cursorsLabel.logLod( jsonLabelLod, null );
      g_cursorsLabel.loadLod( jsonLabelLod, null );
      g_cursorsLabel.resetEntityCursors();
      var stopLoop = 0;
      var entity = "BlockContext";
      while ( entity && stopLoop++ < 10 ) {
      // console.log( "FindParent Entity: " + entity );
         entity = g_cursorsLabel.findParentEntity( entity );
      }
      console.log( "setHierarchicalJsonObject New Label: "  + g_JsonNewLabel );
      g_jsonLabel = jsonStringToJsonObject( g_JsonNewLabel );
   // simpleTraverseJsonObject( g_jsonLabel, true );
      setHierarchicalJsonObject( g_jsonLabel, "LLD", g_cursorsLabel );
      g_cursorsLabel.createEntity( "Panel", 3 );
      g_cursorsLabel.setAttribute( "Panel", "Tag", "PanelX!" );
      console.log( "Cursors Label Test1.0" );
      g_cursorsLabel.display("Tag");
   // console.log( "\ninitCursorsDeprecated: " );
   // initCursorsDeprecated( g_jsonLabel, null, cursorsLabel, null, 0 );
   // logJsonObject( g_jsonLabel, logKeyValue, 0, true );
      console.log( "Cursors Label Test1.1" );
      g_cursorsLabel.deleteEntity( "Panel", 3 );
      g_cursorsLabel.display("Tag");
      g_cursorsLabel.setToSubobject( "BlockBlock" );
      console.log( "Cursors Label Test1A" );
      g_cursorsLabel.display("Tag");
      g_cursorsLabel.resetFromSubobject();
      console.log( "Cursors Label Test1B" );
      g_cursorsLabel.display("Tag");
   // storageSession.newLabel = g_JsonNewLabel;
   // storageSession.cursorsNewLabel = g_cursorsLabel.toString();

      return false;
   });

   $("#zTest2").click( function() {
   // console.log( "Cursors NewLabel Test2" );
   // cursorsNewLabel.iterate(function(k,v) {
   //    console.log( "Entity: " + k + "   Absolute Entity: " + v[".hierNbr"] );
   // });
   // logZeidonJsonObject( jsonNewLabel, null );
      console.log( "Cursors Label Test2" );
      g_cursorsLabel.display();
      logZeidonJsonObject( g_jsonLabel, null );

      var stopLoop = 0;
      var entity = "BlockBlock";
      while ( entity && stopLoop++ < 10 ) {
      // console.log( "FindParent Entity: " + entity );
         entity = g_cursorsLabel.findParentEntity( entity );
      }

      entity = "Panel";
      var rc = g_cursorsLabel.setFirst( entity );
   // console.log( "SetFirst rc: " + rc );
      if ( rc === 0 ) {
         console.log( "SetFirst Found: " + entity + "   Tag: " + g_cursorsLabel.getAttribute( entity, "Tag" ) );
      } else {
         console.log( "SetFirst Not found: " + entity );
         g_cursorsLabel.display();
      }
      rc = g_cursorsLabel.hasNext( entity );
      console.log( "hasNext " + entity + "  rc: " + rc );
      rc = g_cursorsLabel.hasPrev( entity );
      console.log( "hasPrev " + entity + "  rc: " + rc );

      stopLoop = 0;
      while ( rc >= 0 && stopLoop++ < 20 ) {
         console.log( "Found Next: " + entity + "   Tag: " + g_cursorsLabel.getAttribute( entity, "Tag" ) );
         rc = g_cursorsLabel.setNext( entity );
      }

      entity = "BlockBlock";
      rc = g_cursorsLabel.setLast( entity );
      if ( rc === 0 ) {
         console.log( "SetLast Found: " + entity + "   Tag: " + g_cursorsLabel.getAttribute( entity, "Tag" ) );
         g_cursorsLabel.setToSubobject( entity );
      } else {
         console.log( "SetLast Not found: " + entity );
         g_cursorsLabel.display();
      }
      rc = g_cursorsLabel.hasNext( entity );
      console.log( "hasNext " + entity + "  rc: " + rc );
      rc = g_cursorsLabel.hasPrev( entity );
      console.log( "hasPrev " + entity + "  rc: " + rc );

      stopLoop = 0;
      while ( rc >= 0  && stopLoop++ < 20 ) {
         console.log( "Found Prev: " + entity + "   Tag: " + g_cursorsLabel.getAttribute( entity, "Tag" ) );
         rc = g_cursorsLabel.setPrev( entity );
      }

      entity = "BlockBlock";
      rc = g_cursorsLabel.hasAnyWithinOi( entity );
      console.log( "hasAny " + entity + "  rc: " + rc );

      entity = "BlockBlock";
      g_cursorsLabel.setFirstWithinOi( entity );
      console.log( "First " + entity );
      g_cursorsLabel.logHierarchy( entity, "Tag" );

      entity = "BlockBlock";
      g_cursorsLabel.setLastWithinOi( entity );
      console.log( "Last " + entity );
      g_cursorsLabel.logHierarchy( entity, "Tag" );

      entity = "BlockBlock";
      rc = g_cursorsLabel.setLast( entity );
      if ( rc === 0 ) {
         console.log( "SetLast2 Found: " + entity + "   Tag: " + g_cursorsLabel.getAttribute( entity, "Tag" ) );
      } else {
         console.log( "SetLast2 Not found: " + entity );
      }

      return false;
   });

   $("#zTest3").click( function() {
//    cursorsLabel.logLod( jsonStringToJsonObject( g_JsonLabelLod ), null );

      var url = "labeldesigner?action=getSkeletonForView&viewName=_CurrentLLD";

      // Display the resultant JSON that will be passed to Zeidon to be saved as an LLD.
   // console.log( "\nJson Registered Views: " + jsonRegisteredViews );
      $.ajax({
         url : url,
         type : 'POST',
         data : {},
         dataType : 'json',
         success: function( data ) {
            console.log( "Test3 success data: " );
            console.log( data );
            g_cursorsLabel.logLod( jsonStringToJsonObject( g_JsonLabelLod ), null );
         // logJsonObject( jsonStringToJsonObject( data ), logKeyValue, 0, true );
         }
      });

      return false;
   });

   function openWin()
   {
   // var myWindow = window.open();
   // var myWindow = window.open("","myWindow","width=200,height=100");
      var myWindow = window.open( "xyz", "_blank", "toolbar=yes, menubar=yes scrollbars=yes, resizable=yes, top=300, left=600, width=1000, height=800" );
      var myDocument = myWindow.document;
      var HTMLstring="<html>\n<head>\n<title>ZeidonX JSON</title>\n" +
         "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">\n" +
         "<script src=\"http://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
         "<script src=\"http://code.jquery.com/ui/1.10.3/jquery-ui.js\"></script>\n" +
         "<script src=\"js/jquery.blockUI.js\"></script>\n" +
         "<script src=\"js/jsoeUtils.js\"></script>\n" +
         "</head><body>\n" +
         "<textarea id=\"RawJson\" style=\"display:none;\"></textarea>\n" +
                "<div id=\"ControlsRow\">\n" +
                  "<input type=\"Button\" value=\"Format\" onClick=\"Process()\"/>\n" +
                  "<span id=\"TabSizeHolder\">Tab Size:\n" +
                    "<select id=\"TabSize\" onChange=\"TabSizeChanged()\">\n" +
                      "<option value=\"1\">1</option>\n" +
                      "<option value=\"2\">2</option>\n" +
                      "<option value=\"3\" selected=\"true\">3</option>\n" +
                      "<option value=\"4\">4</option>\n" +
                      "<option value=\"5\">5</option>\n" +
                      "<option value=\"6\">6</option>\n" + 
                    "</select>\n" +
                  "</span>&nbsp;&nbsp;\n" +
                  "<span id=\"CollapsibleViewHolder\" >\n" +
                      "<label for=\"CollapsibleView\">\n" +
                        "<input type=\"checkbox\" id=\"CollapsibleView\" onClick=\"CollapsibleViewClicked()\" checked/>Collapsible View\n" +
                      "</label>\n" +
                  "</span>&nbsp;&nbsp;\n" +
                  "<span id=\"ViewMetaHolder\" >\n" +
                      "<label for=\"ViewMeta\">\n" +
                        "<input type=\"checkbox\" id=\"ViewMeta\" onClick=\"ViewMetaClicked()\"/>View Meta\n" +
                      "</label>\n" +
                  "</span>&nbsp;&nbsp;\n" +
                  "<span id=\"CollapsibleViewDetail\">Expand:\n" +
                    "<select id=\"CollapseLevel\" onChange=\"CollapseLevel()\">\n" +
                      "<option value=\"-1\">none</option>\n" +
                      "<option value=\"0\" selected=\"true\">all</option>\n" +
                      "<option value=\"1\">1</option>\n" +
                      "<option value=\"2\">2</option>\n" +
                      "<option value=\"3\">3</option>\n" +
                      "<option value=\"4\">4</option>\n" +
                      "<option value=\"5\">5</option>\n" +
                      "<option value=\"6\">6</option>\n" + 
                      "<option value=\"7\">7</option>\n" + 
                      "<option value=\"8\">8</option>\n" + 
                      "<option value=\"9\">9</option>\n" + 
                    "</select>\n" +
                  "</span>\n" +
                "</div>\n" +
                "<div id=\"zFormattedJsonLabel\" class=\"zFormattedJsonLabel\"></div>\n" +
                "<form id=\"InvisibleLink\" target=\"_blank\">\n" +
                  "<input type=\"hidden\" id=\"InvisibleLinkUrl\" name=\"json\" value=\"\" />\n" +
                "</form>\n" +
                "</body></html>";
      console.log( HTMLstring );
      myDocument.write( HTMLstring );
      myWindow.document.getElementById("RawJson").value = g_JsonNewLabelA; // jsonStringToJsonObject( g_JsonNewLabel );
 //   var rawJson = myDocument.getElementById("RawJson")
 //   rawJason.outerHTML = jsonStringToJsonObject( g_JsonNewLabel );
      myDocument.close();
      myWindow.onload = function() {
         alert( "On Load");
      };
   }

   $("#zTest4").click( function() {
      openWin();
   // Process();
      /*
      var formattedHtml = renderJsonObjectAsFormattedHtml( g_jsonLabel, 0, false, false, false );
      console.log( formattedHtml );
      $id("zFormattedJsonLabel").innerHTML = "<PRE class='CodeContainer'>" + formattedHtml + "</PRE>";
      */
      return false;
   });

   $("#zLLD_Save").click( function() {
      var name = $("#zLLD_Name").val();
      if ( name === "" ) {
         alert( "LLD Name is required for Save!" );
      } else {
         if ( g_updatedLLD ) {
            ConvertWysiwygLabelDesignToZeidonJson( name );
            g_loadedLLD = name;
            g_updatedLLD = false;
         }
      }
      return false;
   });

   function CaptureZeidonLabelJsonFromDomJson( jsonDom ) {
   // var jsonObj = eval( "[" + json + "]" );
      var jsonObj = jQuery.parseJSON( "[" + jsonDom + "]" );  // this is faster and more secure than eval
      var formattedHtml = renderJsonObjectAsFormattedHtml( jsonObj[0], 0, false, false, false );
   // $id("zFormattedJsonLabel").innerHTML = "<PRE class='CodeContainer'>" + formattedHtml + "</PRE>";

   // once is enough (above)? jsonObj = jQuery.parseJSON( "[" + jsonDom + "]" );  // this is faster and more secure than eval
      var jsonLabel = "{ \"OIs\" : [ { \".oimeta\" : { \"application\" : \"Zeidon_Tools\", \"odName\" : \"TZLLD\", \"incremental\" : \"true\" }";
      var firstBlock = new Object();
      firstBlock.isFirst = true;
      jsonLabel += TranslateWysiwygDesignToJsonLabel( null, -1, jsonObj[0], false, false, false, firstBlock );
      jsonLabel += "} ] }";
      return jsonLabel;
   }

   function CheckIfLastSibling( parentArray, parentIdx, className ) {
      var objType;
      if ( parentArray !== null && parentIdx >= 0 ) {
         while ( parentIdx < parentArray.length ) {
            objType = typeof parentArray[parentIdx];
            if ( objType === 'object' ) {
               var obj = parentArray[parentIdx];
               var numProps = 0;
               var type = false;
               var content = false;
               var attributes = false;
               for ( var prop in obj ) {
                  if ( prop === "type" ) {
                     if ( obj[prop] !== "DIV" ) {
                        numProps = 0;
                        break;
                     }
                     type = true;
                  } else
                  if ( prop === "content" ) {
                     content = true;
                  } else
                  if ( prop === "attributes" ) {
                     attributes = true;
                  }
                  numProps++;
               }

               var skip = type && content && attributes;
               if ( skip && numProps > 0 ) {  // it's a DIV
                  // get the class
                  var classlist = obj["attributes"]["class"];
                  if ( classlist && classlist.indexOf( className ) >= 0 ) {
                     return false;
                  }
               }
            }

            parentIdx++;
         }
      }

      return true;
   }

   function propertyToZeidonAttribute( property ) {
      var hat = property.indexOf( "^" );
      var start;
      var end;
      while ( hat >= 0 ) {
         start = property.substring( 0, hat );
         end = property.substring( hat + 1 );
         property = start + end.substring( 0, 1 ).toUpperCase() + end.substring( 1 );
         hat = property.indexOf( "^", hat );
      }

      return property;
   }

   function elementDataToJSON( id ) {
      var $element = $("#" + id);
      var json = "";
      if ( $element ) {
         $.each( $element.data(), function( key, value ) {
            if ( key.indexOf( "z_" ) === 0 && (typeof value === "string" || typeof value === "number") ) {
               var zeidonAttribute = propertyToZeidonAttribute( key.substring( 2 ) );
               json += ", \"" + zeidonAttribute + "\" : \"" + value + "\"";
            }
         });
      }

      return json;
   }

   function TranslateWysiwygDesignToJsonLabel( parentArray, parentIdx, obj, addComma, isArray, isPropertyContent, firstBlockIn ) {
      var jsonLabel = "";
      var comma = (addComma) ? ", " : "";
      var objType = typeof obj;
      recurse++;
      var firstBlock = new Object();
      firstBlock.isFirst = firstBlockIn.isFirst;
      if ( $.isArray( obj ) ) {
         if ( obj.length === 0 ) {
         // json += getRow( -1, "[ ]" + comma, isPropertyContent );
         } else {
         // json += getRow( -1, "[", isPropertyContent );
             for ( var k = 0; k < obj.length; k++ ) {
               if ( typeof obj[k] !== "string" ) {
                  jsonLabel += TranslateWysiwygDesignToJsonLabel( obj, k + 1, obj[k], k < (obj.length - 1), true, false, firstBlock );
               }
            }
         }
      // json += getRow( -1, "], " + comma, false );
      } else if ( objType === 'object' ) {
         if ( obj === null ){
            jsonLabel += formatLiteral( "null", "", comma, -1, isArray, "Null" );
         } else if ( obj.constructor === window._dateObj.constructor ) {
            jsonLabel += formatLiteral( "new Date(" + obj.getTime() + ") /*" + obj.toLocaleString() + "*/", "", comma, -1, isArray, "Date" );
         } else if ( obj.constructor === window._regexpObj.constructor ) {
            jsonLabel += formatLiteral( "new RegExp(" + obj + ")", "", comma, -1, isArray, "RegExp" );
         } else {
            var numProps = 0;
            var type = false;
            var content = false;
            var attributes = false;
            for ( var prop in obj ) {
            // console.log( obj[prop] );
               if ( prop === "type" ) {
                  if ( obj[prop] !== "DIV" ) {
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
            // json += getRow( -1, comma, isPropertyContent );
            } else {
               var skip = type && content && attributes;
               if ( skip ) {  // it's a DIV
                  // get the class
                  var classlist = obj["attributes"]["class"];
                  var text;
                  if ( typeof obj["content"][0] === "string" ) {
                     text = stripTrailingWhiteSpace( obj["content"][0] );
                  }
                  else {
                     text = "";
                  }
                  // Anytime you start a new entity you need a comma, no matter what the
                  // previous "thing" was.  At the end of every entity, "} ]" is required,
                  // unless it is a sibling entity of the same name.  In that case, we
                  // want to skip the "} ]" and the entity name and " : [".
                  if ( classlist ) {
                     var isLabel = false;  // there is only one label
                     var isPanel = false;  // there are panels at only one level

                     var lastBlock = true;
                     var isBlock = false;
                     if ( classlist.indexOf( "label" ) >= 0 ) {
                        isLabel = true;
                        entityIdx = -1;
                        firstPanel = true;
                        lastPanel = false;
                        jsonLabel += ", \n\"LLD\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Name\" : \"" + text + "\" ";
                        jsonLabel += getRow( -1, TranslateWysiwygDesignToJsonLabel( null, -1, obj["attributes"], 0, true, false, firstBlock ), false );
                     } else if ( classlist.indexOf( "panel" ) >= 0 ) {
                        isPanel = true;
                        entityIdx = 0;
                        blockRecurse = 0;
                        firstBlock.isFirst = true;
                        if ( firstPanel ) {
                           jsonLabel += ", \n\"Panel\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"" + text + "\" ";
                           firstPanel = false;
                        } else {
                           jsonLabel += "}, \n{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"" + text + "\" ";
                        }
                        jsonLabel += getRow( -1, TranslateWysiwygDesignToJsonLabel( null, -1, obj["attributes"], 0, true, false, firstBlock ), false );
                        lastPanel = CheckIfLastSibling( parentArray, parentIdx, "panel" );
                     } else if ( classlist.indexOf( "block" ) >= 0 ) {
                        var $element = $("#" + obj["attributes"]["id"]);
                        var blockLevel = parseInt( $element.data( "z_^level" ) );
                        isBlock = true;
                        if ( firstBlock.isFirst || blockLevel > blockRecurse ) {
                           blockRecurse = blockLevel;
                           firstBlock.isFirst = false;
                           if ( blockLevel > 1 ) {
                              jsonLabel += ", \n\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } ";
                           } else {
                              jsonLabel += ", \n\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } ";
                           }
                        } else {
                           jsonLabel += ", \n{ \".meta\" : { \"created\" : \"true\" } ";
                        }
                        // This is where we need to determine if there is a sibling block!
                        lastBlock = CheckIfLastSibling( parentArray, parentIdx, "block" );
                        jsonLabel += getRow( -1, TranslateWysiwygDesignToJsonLabel( null, -1, obj["attributes"], 0, true, false, firstBlock ), false );
                        entityIdx--;
                     // if ( json.indexOf( "Tag107" ) >= 0 ) {
                        // console.log( "json: " + json );
                        // console.log( obj["content"] );
                        // lastBlock = CheckIfLastBlockSibling( parentArray, parentIdx );
                     // }
                     }
                  // console.log( obj["content"] );
                     firstBlockIn.isFirst = firstBlock.isFirst = lastBlock;
                     jsonLabel += getRow( -1, TranslateWysiwygDesignToJsonLabel( null, -1, obj["content"], 0, true, false, firstBlock ), false );
                     if ( isBlock ) {
                        if ( lastBlock ) {
                           jsonLabel += getRow( -1, " } ]", isPropertyContent );
                        } else {
                           jsonLabel += getRow( -1, " }", isPropertyContent );
                        }
                     }
                     if ( isPanel && lastPanel ) {
                        jsonLabel += getRow( -1, " } ]", isPropertyContent );
                     }
                     if ( isLabel ) {  // there is only one label
                        jsonLabel += getRow( -1, " } ]", isPropertyContent );
                     }
                  }
               } else if ( type === false ) {
                  // we're looking at attributes
                  console.log( "Looking for attributes in: " + obj['id'] );
                  for ( var prop in obj ) {
                  // console.log( obj[prop] );
                     if ( prop === "id" ) {
                        // 'id' and 'name' should be the same!
                        if ( obj['id'] !== obj['name']) {
                           alert( "Houston ... we have a problem with id != name" );
                        }

                        // Guarantee the Tag is set properly in the element data.
                     // jsonLabel += getRow( -1, ", \"Tag\" : \"" + trimLeadingAndTrailingWhiteSpace( obj[prop] ) + "\"", isPropertyContent );
                        $("#" + obj['id']).data( "z_^tag", obj['id'] );

                        // So let's get the all of the custom properties for this element
                     // displayElementData( "TranslateWysiwygDesignToJsonLabel", $("#" + obj['id']) );
                        jsonLabel += elementDataToJSON( obj['id'] );
                     } /* else if ( prop === "style" ) {   these are done using the "data" versions
                        // do position and size
                        var stylelist = obj[prop];
                        jsonLabel += formatStyle( stylelist, "top" );
                        jsonLabel += formatStyle( stylelist, "left" );
                        jsonLabel += formatStyle( stylelist, "height" );
                        jsonLabel += formatStyle( stylelist, "width" );
                     } */
                  }
               }
            // json += getRow( -1, "\n", isPropertyContent );
            }
         }
      } else if ( objType === 'string' ) {
         jsonLabel += formatLiteral( obj.toString().split("\\").join("\\\\").split('"').join('\\"'), "\"", comma, -1, isArray, "String" );
      } else if ( objType === 'number' ) {
         jsonLabel += formatLiteral( obj, "", comma, -1, isArray, "Number" );
      } else if ( objType === 'boolean' ) {
        jsonLabel += formatLiteral( obj, "", comma, -1, isArray, "Boolean" );
      } else if ( objType === 'function' ) {
         if ( obj.constructor === window._regexpObj.constructor ) {
            jsonLabel += formatLiteral( "new RegExp(" + obj + ")", "", comma, -1, isArray, "RegExp" );
         } else {
            obj = formatFunction( 0, obj );
            jsonLabel += formatLiteral( obj, "", comma, -1, isArray, "Function" );
         }
      } else if ( objType === 'undefined' ) {
         jsonLabel += formatLiteral( "undefined", "", comma, -1, isArray, "Null" );
      } else {
         jsonLabel += "UNKNOWN object type: " + objType;
      }
   // console.log( jsonLabel );
      recurse--;

      return jsonLabel;
   }

   function formatStyle( stylelist, attr, comma ) {
      var idx = stylelist.indexOf( attr );
      var str = "";
      if ( idx >= 0 ) {
         var idxColon = stylelist.indexOf( ":", idx );
         if ( idxColon >= 0 ) {
            idxColon++;
            while ( isWhiteSpace( stylelist.charAt( idxColon ) ) ) {
               idxColon++;
            }
            str = ", \"" + capitalize( attr ) + "\"" + " : \"";
            var idxSemicolon = stylelist.indexOf( ";", idxColon );
            if ( idxSemicolon >= 0 ) {
               str += stylelist.substring( idxColon, idxSemicolon );
            } else {
               str += stylelist.substring( idxColon );
            }
            str += "\"";
         }
      }

      return str;
   }

   function MakeContentVisible( element, visible ) {
      var img = element.previousSibling.firstChild;
      if ( !!img.tagName && img.tagName.toLowerCase() === "img") {
         element.style.display = visible ? 'inline' : 'none';
         element.previousSibling.firstChild.src = visible ? window.ImgExpanded : window.ImgCollapsed;
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

   $("#zLLD_Load").click( function() {
      var name = $("#zLLD_Name").val();
      if ( name === "" ) {
         alert( "LLD Name is required for Load!");
         return false;
      }
      if ( g_updatedLLD ) {
         if ( window.confirm( "Current label has been updated.  Do you want to overwrite changes?" ) === false ) {
            return false;
         }
      }
      LoadZeidonJsonFromLLD( name );
      g_loadedLLD = name;
   });

   function zeidonAttributeToKey( attribute ) {
      var ch;
      var k;
      var key = "z_";
      for ( k = 0; k < attribute.length; k++ ) {
         ch = attribute.charAt( k );
         if ( ch === ch.toLowerCase() ) {
            key += ch;
         }
         else {
            key += "^";
            key += ch.toLowerCase();
         }
      }
      return key;
   }

   function addZeidonAttributeToElement( $element, attribute, value ) {
      if (typeof value === "string" || typeof value === "number" ) {
         var key = zeidonAttributeToKey( attribute );
         console.log( "addZeidonAttributeToElement: " + $element.attr( "id" ) + "  key: " + key + "  value: " + value );
         $element.data( key, value );
      }
   }

   function AddHtmlLabelElementAttributes( $root, $parentElement, obj, entity, indent ) {
      var tag = obj["Tag"];
      if ( tag !== null ) {
         var identity = "id=\"" + tag + "\" name=\"" + tag + "\" ";
         var classes = "class=\"" + entity;
         if ( entity === "block" ) {
            if ( tag.indexOf( "Tag" ) === 0 && $.isNumeric( tag.substring( 3 ) ) ) {
               var tagNbr = parseInt( tag.substring( 3 ) );
               if ( g_generateTag < tagNbr ) {
                  g_generateTag = tagNbr;
               }
            }
            classes += " draggable canvas-element block-element";
         }
         var attr = "";
         var level = 0;
         var style = "style=\"position:absolute;";
         for ( var prop in obj ) {
            if ( typeof obj[prop] === "string" ) {
               console.log ( "Property for entity: " + entity + " prop: " + prop + ": " + obj[prop] );
               if ( prop === "Tag" ) {
                  continue;
               } else if ( prop === "Order"  ) {
                  attr += prop.toLowerCase() + "=\"" + obj[prop] + "\" ";
               } else if ( prop === "Top" || prop === "Left" || prop === "Width" || prop === "Height" ) {
                  style += prop.toLowerCase() + ":" + obj[prop] + ";";  // can't use Math.floor here because it has 'px' units
               } else {
                  if ( prop === "Level" ) {
                     level = parseInt( obj[prop] );
                  }
               }
            }
         }

      // $(tag).innerHTML = attr + style;
         if ( entity === "block" ) {
            var tab = buildTab( indent, false );
            classes += "\" ";
            style += "background-color: " + getBackgroundColorForLevel( level ) + "; display: block; float: left; color: " + getColorForLevel( level ) + "; border: 2px solid; background-position: initial initial; background-repeat: initial initial;\"";
            var div = "<div " + identity + classes + style + attr + "></div>";
            var $element = $(div).text( tag )
                 .draggable({
                    cancel: "a.ui-icon", // clicking a link with class .ui-icon won't initiate dragging
                    containment: "#" + $root.attr("id"),
                    appendTo: "body",  // this keeps the drag item visible across divs
                    cursor: "move" })
                 .resizable({ containment: "#" + $root.attr("id") })
                 .prepend( "<div style=\"float:bottom\">\n" +
                           "   <a href=\"link/to/trash/script/when/we/have/js/off\" style=\"float:right\" title=\"Remove this block\" class=\"ui-icon ui-icon-trash\">Move image to trash</a>\n" +
                           "</div>" )
                 .append( "<h5 class=\"ui-widget-header\"></h5>" );
            $parentElement.append( $element );
            for ( var prop in obj ) {
               if ( typeof obj[prop] === "string" ) {
               // if ( prop === "Tag" || prop === "Top" || prop === "Left" || prop === "Height" || prop === "Width" || prop === "Order" ) {
               //    continue;
               // } else {
                     addZeidonAttributeToElement( $element, prop, obj[prop] );
               // }
               }
            }
/*
            <div class=\"block draggable ui-widget-content ui-draggable canvas-element block-element ui-resizable\" style=\"position: absolute; top: 51px; left: 212px; width: 100px; height: 100px; background-color: rgb(204, 255, 204); display: block; float: left; color: rgb(255, 0, 0); border: 2px solid; background-position: initial initial; background-repeat: initial initial;\" id=\"Tag110\" name=\"Tag110\" level=\"1\">

            <div class=\"block draggable ui-widget-content ui-draggable canvas-element block-element ui-resizable\" style=\"position: absolute; top: 52px; left: 219px; width: 100px; height: 100px; background-color: rgb(204, 255, 204); display: block; float: left; color: rgb(255, 0, 0); border: 2px solid; background-position: initial initial; background-repeat: initial initial;\" id=\"Tag110\" name=\"Tag110\" level=\"1\">
               <div style=\"float:bottom\">
                  <a href=\"link/to/trash/script/when/we/have/js/off\" style=\"float:right\" title=\"Remove this block\" class=\"ui-icon ui-icon-trash\">Move image to trash</a>
               </div>Tag110
               <div class=\"ui-resizable-handle ui-resizable-e\" style=\"z-index: 90; display: block;\"></div>
               <div class=\"ui-resizable-handle ui-resizable-s\" style=\"z-index: 90; display: block;\"></div>
               <div class=\"ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se\" style=\"z-index: 90; display: block;\"></div>
               <h5 class=\"ui-widget-header\"></h5>
            </div>
*/
         } else { // must be label or panel
            var $element = $("#" + tag);
            style += "\"";
            $element.innerHTML = identity + style;
            for ( var prop in obj ) {
               if ( typeof obj[prop] === "string" ) {
               // if ( prop === "Tag" || prop === "Top" || prop === "Left" || prop === "Height" || prop === "Width" || prop === "Order" )  {
               //   continue;
               // } else {
                     addZeidonAttributeToElement( $element, prop, obj[prop] );
               // }
               }
            }
         }
      }
   }

   function AddHtmlWysiwygLabelElements( $root, $parentElement, obj, div, indent ) {
      if ( obj["Tag"] !== null ) {
         AddHtmlLabelElementAttributes( $root, $parentElement, obj, div, indent + 1 );
      // displayElementData( "AddHtmlWysiwygLabelElements", $parentElement );
         $parentElement = $("#" + obj["Tag"]);
      }

      for ( var prop in obj ) {
         if ( prop === ".meta" ) {
            // do nothing
         }
         else
         if ( prop === "Block" || prop === "BlockBlock") {
            var objBlock = obj[prop];
            for ( var k = 0; k < objBlock.length; k++ ) {
               AddHtmlWysiwygLabelElements( $root, $parentElement, objBlock[k], "block", indent + 1 );
            }
         }
      }
   }

   function RenderWysiwygLabelFromZeidonJson( jsonObj, indent, isArray, isPropertyContent ) {
      if ( $.isArray( jsonObj ) ) {
         if ( jsonObj.length !== 1 ){
            throw new Error( "The JSON object is not a valid Zeidon Label Definition" );
         } else {
            var obj = jsonObj[0];
            var objOimeta = obj[".oimeta"];
            if ( objOimeta["odName"] !== "TZLLD" ) {
               throw new Error( "The JSON meta object type is invalid:" + objOimeta['odName'] );
            }

            if ( objOimeta["application"] !== null ) {
               g_application = objOimeta["application"];
            }

            if ( objOimeta["fileName"] !== null ) {
               g_fileName = objOimeta["fileName"];
               $("#zLLD_Name").val( g_fileName );
            }

            var objLLD = obj["LLD"][0];
            if ( objLLD === null ) {
               throw new Error( "The JSON object does not contain an LLD property: " + obj );
            }

            for ( var prop in objLLD ) {
               if ( prop === ".meta" ) {
                  // do nothing
               }
               else
               if ( prop === "Name" ) {
                  $("#label").innerText = objLLD["Name"];
                  AddHtmlLabelElementAttributes( null, $("#label"), objLLD, "label", indent );
               }
               else
               if ( prop === "Panel" ) {
                  var objPanel = objLLD["Panel"];
                  var $parentElement = $("#label");
                  for ( var k = 0; k < objPanel.length; k++ ) {
                     AddHtmlWysiwygLabelElements( $("#" + objPanel[k]["Tag"]), $parentElement, objPanel[k], "panel", indent + 1 );
                  }
               }
               else
               if ( prop === "ViewObjRef" ) {
                  var $selected = $('#selectedRegisteredViews').empty();
                  var objViewObjRef = objLLD["ViewObjRef"];
                  for ( var k = 0; k < objViewObjRef.length; k++ ) {
                     var el = $("<li uniqueidentity=\"" + objViewObjRef[k].ZKey + "\" class=\"ui-state-highlight\">" + objViewObjRef[k].Name + "</li>");
                     $selected.append( el );
                  // el.draggable({ helper: 'clone' });
                  }
               }
            }
         }
      } else {
         throw new Error( "The JSON does not contain a valid Zeidon Label Definition: " + jsonObj );
      }
   }

   // Additional parameters:
   //   data - contains the resulting data from the request
   //   status - contains the status of the request ("success", "notmodified", "error", "timeout", or "parsererror")
   //   xhr - contains the XMLHttpRequest object
   function LoadZeidonJsonFromLLD_Callback( jsonZeidon, status, xhr ) {
      if ( xhr.readyState === 4 ) {
         if ( xhr.status === 200 ) {
         // parseMessages( req.responseXML );
            console.log( "JSON Zeidon: " + jsonZeidon );
            try {
               g_generateTag = 100;
               $("#panel").attr( "id", "panel" + g_currentPanel )
                          .attr( "name", "panel" + g_currentPanel )
                          .removeClass( "panel_active" )
                          .addClass( "panel_hidden" )
                          .hide();

            // $(".panel").empty(); does too much
            // $('#zmasterdiv').empty();  clears the master div.
            // $('#zmasterdiv div').empty(); clears all the child divs, but leaves the master intact.
            /*
               $(".panel").each( function() {
                  while ( $(this).firstChild ) {
                     $(this).removeChild( $(this).firstChild );
                  }
               });
            */
               $("#label div").empty();
               $("#label").removeData();
               $(".panel").each( function( idx ) {
                  $(this).hide()
                         .removeData()
                         .css( 'background-color', 'lightyellow' )
                         .addClass( "ui-droppable panel_hidden" )
                         .text( idx + 1 );
               });

               // clear all zeidon mapping
               $("input.zeidon, select.zeidon").each( function() {
               // console.log( "Clearing element: " + $(this).attr( "id" ) );
               // if ( $(this).attr( "id" ) === "CSS_File" ) {
               //    console.log( "Clearing CSS_File element: " + $(this).attr( "id" ) );
               // }
                  if ( $(this).hasClass( "colorwell" ) ) {
                     var colorPicker = $.farbtastic( "#" + $(this).attr( "id" ) );
                     colorPicker.setColor( "#ffffff" );
                     $(this).val( "#ffffff" );
                  } else {
                     $(this).val( "" );
                  }
               });

            // var jsonObj = eval( "[" + data + "]" );
               var jsonObj = jQuery.parseJSON( "[" + jsonZeidon + "]" );  // this is faster and more secure than eval
               jsonObj = jsonObj[0];
               jsonObj = jsonObj["OIs"];

               // Display the JSON coming back (to the client) from Zeidon (server).
               var formattedHtml = renderJsonObjectAsFormattedHtml( jsonObj, 0, false, false, false );
            // $id("zFormattedJsonLabel").innerHTML = "<PRE class='CodeContainer'>" + formattedHtml + "</PRE>";

               // Now actually display the LLD in the designer.
               RenderWysiwygLabelFromZeidonJson( jsonObj, 1, false, false );

            } catch(e) {
               $id("zFormattedJsonLabel").innerHTML = jsonZeidon;
               alert( "JSON is not well formatted:\n" + e.message );
            } finally {
               g_updatedLLD = false;
               g_currentPanel = 1;
               g_$current_block = null;
               $("#panel" + g_currentPanel).attr( "id", "panel" )
                                         .attr( "name", "panel" )
                                         .removeClass( "panel_hidden" )
                                         .addClass( "panel_active" )
                                         .show();
               mapElementDataToUiData( $("#label") );
               mapElementDataToUiData( $("#panel") );
               $PanelSpinner.spinner( "value", 1 );

               $(".block").each( function() {
                  setBlockDraggableResizable( $(this).parent(), $(this), $(this) );
               });
            }
         }
      }
   }

/*
   function LoadZeidonJsonFromLLD( name ) {
      try {
         var url = "labeldesigner?action=loadLabel&fileName=" + escape( name );
         req = initRequest();
         req.open( "POST", url, true );
         req.onreadystatechange = LoadZeidonJsonFromLLD_Callback;
         req.send( null );
      } catch(e) {
         alert( "Could not load file: " + name + "\n" + e.message );
      } finally {
         $("#panel" + currentPanel).attr( "id", "panel" );
      }
   }
*/
   function LoadZeidonJsonFromLLD( name ) {
      try {
         // Assign handlers immediately after making the request and remember the jqxhr object for this request
         // Retrieve the JSON version of the label from Zeidon (on the server) in a saved LLD.
         var url = "labeldesigner?action=loadLabel&fileName=" + escape( name );
         var jqxhr = $.post( url,
                             LoadZeidonJsonFromLLD_Callback ) // the function to run if the request succeeds
            .done(function() {
               console.log( "Load Zeidon From LLD: second success" );
            })
            .fail(function() {
               alert( "error " + jqxhr.responseText );
            })
            .always(function() {
               console.log( "Load Zeidon From LLD: always finished" );
         });

         // Perform other work here ...

         // Set another completion function for the request above
         jqxhr.always(function() {
            console.log( "Load Zeidon From LLD: second always finished" );
         });

      } catch(e) {
         alert( "Could not load file: " + name + "\n" + e.message );
      } finally {
         $("#panel" + g_currentPanel).attr( "id", "panel" );
         g_$current_block = null;

         // TODO: display the label/panel/block properties
      }
   }

   $( "ul.droptrue" ).sortable({
      connectWith: "ul"
   });

   $( "ul.dropfalse" ).sortable({
      connectWith: "ul",
      dropOnEmpty: false
   });

   $("#zLLD_LoadRegisteredViews").click( function() {
      var name = $("#zLLD_Name").val();
      if ( name === "" ) {
      // alert( "LLD Name is required for Registered Views! ... assuming xx for now!" );
      // name = "xx";
         alert( "LLD Name is required for Registered Views!" );
         return false;
      }

      var url = "labeldesigner?action=loadRegisteredViews&fileName=" + escape( name );

      $.ajax({
         url : url,
         type : 'POST',
         data : { registeredViews : "rv" },
         dataType : 'json',
         success: function( data ) {
            console.log( "Return from loadRegisteredViews: " + data );
            var jsonObj = jQuery.parseJSON( data );  // this is faster and more secure than eval
            simpleTraverseJsonObject( jsonObj, false );
            var $select = $('#selectRegisteredViews').empty();
         // $select.append( "<li class=\"ui-state-default\">Drag registered views...</li>" );
            $.each(jsonObj.registeredViews, function( k, item ) {
               var el = $("<li uniqueidentity=\"" + item.ZKey + "\" class=\"ui-state-default\">" + item.Name + "</li>");
               $select.append( el );
               el.draggable({ helper: 'clone' });
            });
         }
      });

      return false;
   });

// $( "#sortable1, #sortable2, #sortable3" ).disableSelection();

   $( ".equalheight" ).equalHeights( 400 );

   function supportsLocalStorage() {
      try {
         return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
         return false;
      }
   }

   function updateRegisteredViewsSession() {
      g_updatedLLD = true;
      if ( supportsLocalStorage() ) {
         // { "employees": [ { "firstName":"John" , "lastName":"Doe" }, { "firstName":"Anna" , "lastName":"Smith" } ] }
         var jsonRegisteredViews;
         var arrayRegisteredViews = "{ \"registeredViews\" :";
         var first = true;

         $("#selectedRegisteredViews li").each(function() {
            var metaZKey = $(this).attr( "uniqueidentity" );
            var metaViewName = $(this)[0].innerText;
         // alert( "ZKey: " + metaZKey + "   Name: " + metaViewName );
            if ( first ) {
               arrayRegisteredViews += " [ ";
               first = false;
            }

            arrayRegisteredViews += "{ \"ZKey\" : \"" + metaZKey + "\", \"Name\" : \"" + metaViewName + "\" }, ";
         });

         if ( first === false ) {
            var k = arrayRegisteredViews.lastIndexOf( "," );
            jsonRegisteredViews = arrayRegisteredViews.substring( 0, k ) + " ] }";
         } else {
            jsonRegisteredViews = arrayRegisteredViews + " [] }";
         }

         var storageS = window.sessionStorage;
      // var storageL = window.localStorage;
         storageS.registeredViews = JSON.stringify( jsonRegisteredViews );
      // storageL.registeredViews = JSON.stringify( g_jsonLabel );
         return jsonRegisteredViews;
      }

      return "";
   }

   $("#zLLD_SaveRegisteredViews").click( function() {
      var name = $("#zLLD_Name").val();
      if ( name === "" ) {
         alert( "LLD Name is required for Save Registered Views! ... assuming xx for now!" );
         name = "xx"; // return false;
      }

      var jsonRegisteredViews = updateRegisteredViewsSession();
      var url = "labeldesigner?action=saveRegisteredViews&fileName=" + escape( name );

      // Display the resultant JSON that will be passed to Zeidon to be saved as an LLD.
   // console.log( "\nJson Registered Views: " + jsonRegisteredViews );

      $.ajax({
         url : url,
         type : 'POST',
         data : { "fileName" : g_loadedLLD, "registeredViews" : jsonRegisteredViews },
         dataType : 'json',
         success: function( data ) {
            console.log( "Return from saveRegisteredViews: " + data );
            var jsonObj = jQuery.parseJSON( data );  // this is faster and more secure than eval
            simpleTraverseJsonObject( jsonObj, false );
         }
      });

      return false;
   });

   var fnEnsureInDropTargetOnce = function( event, ui ) {
      var toDrop = $(ui.draggable).clone();
      if ( $("#selectedRegisteredViews").find( "li[uniqueIdentity=" + toDrop.attr( "uniqueIdentity" ) + "]" ).length <= 0 ) {
         toDrop.removeClass("ui-state-default").addClass( "ui-state-highlight" );
         $("#selectedRegisteredViews").append( toDrop );
         updateRegisteredViewsSession();
      }
      else {
         return false;
      }
   };

   $("#selectRegisteredViews li").draggable({ helper: 'clone' });

   $("#selectRegisteredViews").droppable({ drop: function( event, ui ) {
                                                   $(ui.draggable).remove();
                                                   updateRegisteredViewsSession();
                                                 }
   });

   $("#selectedRegisteredViews")
      .droppable({ drop: fnEnsureInDropTargetOnce })
      .sortable({ connectWith: ".connectedSortable" }).disableSelection();

});
});

   /**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 *
 * Version 1.0
 * Updated 12/10/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com)
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 *
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 *
 */

(function($) {
   $.fn.equalHeights = function(minHeight, maxHeight) {
      tallest = (minHeight) ? minHeight : 0;
      this.each(function() {
         if($(this).height() > tallest) {
            tallest = $(this).height();
         }
      });
      if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
      return this.each(function() {
         $(this).height(tallest).css("overflow","auto");
      });
   }
})(jQuery);