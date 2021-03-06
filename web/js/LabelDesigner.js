$(window).load(function(){
$(function() {

   $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);

   var g_loadedLLD = null;
   var g_updatedLLD = false;
// var g_application = "epamms";  // need to do something prior to deployment
   var g_fileName = "";
   var g_currentPage = 1;
   var g_$current_block = null;
   var g_selected_first = null;
   var g_selected_list = [];
   var g_generateTag = 100;
   var g_xOffset = 0;
   var g_yOffset = 0;
// var g_$page = "#page";
   var g_$trash = "#ztrash";
   var g_trash_icon = "<div style='float:bottom'><a href='link/to/trash/script/when/we/have/js/off' style='float:right' title='Remove this block' class='ui-icon ui-icon-trash'>Move image to trash</a></div>";
   var g_recycle_icon = "<div style='float:bottom'><a href='link/to/recycle/script/when/we/have/js/off' style='float:right' title='Restore this block' class='ui-icon ui-icon-refresh'>Restore image</a></div>";
// var g_cursorsNewLabel;
   var g_cursorsLabel;
   var g_currentSnapX = 0.50;
   var g_currentSnapY = 0.50;

   var g_scale = 1;
   var g_pixelsPerInch = 81;
   var g_pixelsBorder = 2;
   
   var g_scrollbar = null;
   var g_windowHeight = -1;
   var g_windowWidth = -1;
   var g_ppiX = -1;
   var g_ppiY = -1;
// var g_ppcmX = -1;
// var g_ppcmY = -1;
   
   var g_jsonLabel1;
   var g_jsonLabel2;

// var storageSession = window.sessionStorage;
// var storageLocal = window.localStorage;
// alert( "Session: " + storageSession.registeredViews );
// alert( "Local: " + storageLocal.registeredViews );
// var rv = storageSession.getItem( "registeredViews" );
// var objRV = JSON.parse( rv ) || {};
// alert( "Session objRV: " + objRV.toString() );

   $("#page").data( "z_^level", 0 );
   $("#page2").data( "z_^level", 0 );
   $("#page3").data( "z_^level", 0 );
   $("#page4").data( "z_^level", 0 );
   $("#page5").data( "z_^level", 0 );
   $("#page6").data( "z_^level", 0 );
   $("#page7").data( "z_^level", 0 );
   $("#page8").data( "z_^level", 0 );
   $("#page9").data( "z_^level", 0 );
   $("#zaccordion").accordion( {heightStyle: "fill"} );
   $(function() {
        var icons = {
            header: "ui-icon-circle-arrow-e",
            headerSelected: "ui-icon-circle-arrow-s"
        };
        $("#zaccordion").accordion({
            icons: icons,
            collapsible: true
        });
        $("#toggle").button().toggle(function() {
            $("#zaccordion").accordion( "option", "icons", false );
        }, function() {
            $("#zaccordion").accordion( "option", "icons", icons );
        });
    });

   $("#zmbp").tabs({
      // event: "mouseover"
   });

   $(".zalign").click( function() {
      runAlign( this );
      return false;  // prevent default propagation
   });

   function clearListAndSelection( current_selected ) {
      var el;
      while ( g_selected_list.length > 0 ) {
         el = g_selected_list.shift();
      // $el.removeClass( "ctrl-selected" );
      // $el.removeClass( "first-selected" );
         $(el).css( "border", "2px solid #000" );
      }
      g_selected_first = current_selected;
      if ( current_selected ) {
         g_selected_list.push( current_selected );
      // $(current_selected).addClass( "first-selected" );
         $(current_selected).css( "border", "2px solid #FF7777" );
      }
   }

   // Create/maintain list of selected elements:
   // When an element is clicked add/remove selected elements to the list and set css class appropriately:
   //  - if no element has been selected:
   //     - make the element the first selected
   //     - add element to selected list
   //  - otherwise:
   //     - if the Ctrl key is down:
   //        - if the element is already selected, remove from the selected list and set the first selected appropriately
   //        - else add the element to the selected list and set the first selected appropriately
   //     - else
   //        - set the element as the first selected and add as the only element in the selected list
   $("body").on( "click", ".canvas-element", function(e) {
      // console.log( "Click on canvas-element has been pressed!" );
      if ( g_selected_first === null || e.ctrlKey === false ) {
         clearListAndSelection( this ); // clear the list and set current selection
         updatePositionStatus( this.offsetTop, this.offsetLeft, "Start yOffset" );
         updateSizeStatus( this.offsetHeight, this.offsetWidth, "Start yOffset" );
      } else if ( e.ctrlKey ) { // Ctrl + click combo
      // console.log( "Ctrl+Click on canvas-element has been pressed!" );
         var idx = g_selected_list.indexOf( this );
         if ( idx >= 0 ) { // remove this ... already in the list so deselect
            g_selected_list.splice( idx, 1 );
            if ( this === g_selected_first ) {
               $(this).css( "border", "2px solid #000" );
               if ( g_selected_list.length > 0 ) {
                  g_selected_first = g_selected_list[0];
               // g_selected_first.addClass( "ctrl-selected" );
                  $(g_selected_first).css( "border", "2px solid #FF7777" );
               } else {
                  g_selected_first = null;
               }
            }
         } else { // not in list, so add it if it has the same parent as others in the list
            if ( g_selected_first === null || g_selected_list.length === 0 ) {
               clearListAndSelection( this ); // clear the list and set current selection
               g_selected_first = this;
            // $(this).addClass( "first-selected" );
               $(this).css( "border", "2px solid #FF7777" );
               g_selected_list.splice( 0, g_selected_list.length );  // clear the list (shouldn't be necessary)
            } else {
               var el = g_selected_list[0];
               var id = $(el).parent().attr( "id" );
               if ( $(this).parent().attr( "id" ) === id ) {
                  g_selected_list.push( this );
               // $(this).addClass( "ctrl-selected" );
                  $(this).css( "border", "2px solid #A7C8E2" );
               } else {
                  alert( "multi-select items must have the same parent" );
               }
            }
         }
      }
      return false;  // continue default propagation
   });

   // Here is the complete order of events per drag and drop interaction: 
   // draginit > dropinit > dragstart > drag > dropstart > drop > dropend > dragend
   // getter for zIndex:  var zIndex = $(".selector").draggable( "option", "zIndex" );
   // setter for zIndex:  $(".selector").draggable( "option", "zIndex", 100 );
// var drag_zIndex = 0;
   $(".draggable").draggable({
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      helper: "clone",
      appendTo: "body",  // this keeps the drag item visible across divs
      cursor: "move",
      start: function( event, ui ) {
      // alert("Top: " +  $(this).offset().top);
      // console.log(ui);
      // console.log(ui.draggable);
      // $(this).css( "z-index", 10 );
      // drag_zIndex = $(this).draggable( "option", "zIndex" );
      // $(this).draggable( "option", "zIndex", 100 );
         if ( $(this).hasClass( "canvas-element" ) ) {
            clearListAndSelection( this ); // clear the list and set current selection
         }

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
         // console.log( "top: " + Math.round( $parent.position().top ) );
         // console.log( "left: " + Math.round( $parent.position().left ) );
            g_xOffset += $parent.position().left;
            g_yOffset += $parent.position().top;

            $parent = $parent.parent();
         }

      // console.log( "Start yDragPanel: " + Math.round( ui.offset.top - g_yOffset ).toString() + "  xDragPanel: " + Math.round( ui.offset.left - g_xOffset ).toString() );
         updatePositionStatus( ui.offset.top - g_yOffset, ui.offset.left - g_xOffset, "Start yDragPanel" );
         updateSizeStatus( $(this).height(), $(this).width(), "Start yDragPanel" );
      },
      drag: function( event, ui ) {
      // console.log( "Drag yDragPanel: " + Math.round( ui.offset.top - g_yOffset ).toString() + "  xDragPanel: " + Math.round( ui.offset.left - g_xOffset ).toString() );
         updatePositionStatus( ui.offset.top - g_yOffset, ui.offset.left - g_xOffset, "Drag yDragPanel" );
      },
      stop: function( event, ui ) {
      // $(this).draggable( "option", "zIndex", drag_zIndex );
      // $(this).css( "z-index", 0 );
      // updatePositionStatus( ui.offset.top - yOffset, ui.offset.left - xOffset );
      // console.log( "Stop yDrag: " + Math.round( ui.offset.top - g_yOffset ).toString() + "  xDrag: " + Math.round( ui.offset.left - g_xOffset ).toString() );
         console.log( "Scroll #label top: " + $("#label").scrollTop() + "   left: " + $("#label").scrollLeft() );
      // $(this).data( "z_^top", Math.round( ui.offset.top - yOffset ).toString() );    not right ... done later
      // $(this).data( "z_^left", Math.round( ui.offset.left - xOffset ).toString() );  not right ... done later
      // setCurrentBlockData( $(this), "updated 1" );
         updatePositionStatus( ui.offset.top - g_yOffset, ui.offset.left - g_xOffset, "Stop yDrag" );
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
         containment: "#page",
         appendTo: "body",  // this keeps the drag item visible across divs
         cursor: "move",
         start: function( event, ui ) {
            clearListAndSelection( $canvasElement[0] ); // clear the list and set current selection
         // drag_zIndex = $canvasElement.draggable( "option", "zIndex" );
         // $canvasElement.draggable( "option", "zIndex", 100 );
         // $target.css( "z-index", 10 );
         // console.log( "Start yOffset: " + $canvasElement[0].offsetTop + "  xOffset: " + $canvasElement[0].offsetLeft );
            updatePositionStatus( $canvasElement[0].offsetTop, $canvasElement[0].offsetLeft, "Start yOffset" );
            updateSizeStatus( $canvasElement[0].offsetHeight, $canvasElement[0].offsetWidth, "Start yOffset" );
         },
         drag: function( event, ui ) {
         // console.log( "Drag yOffset: " + $canvasElement[0].offsetTop + "  xOffset: " + $canvasElement[0].offsetLeft );
            updatePositionStatus( $canvasElement[0].offsetTop, $canvasElement[0].offsetLeft, "Drag yOffset" );
         },
         stop: function( event, ui ) {
         // $canvasElement.draggable( "option", "zIndex", drag_zIndex );
         // $target.css( "z-index", 0 );
         // updatePositionStatus( ui.offset.top - yOffset, ui.offset.left - xOffset );
         // console.log( "Stop yOffset: " + $canvasElement[0].offsetTop + "  xOffset: " + $canvasElement[0].offsetLeft );
            g_updatedLLD = true;
            $canvasElement.data( "z_^top", ($canvasElement[0].offsetTop / g_pixelsPerInch).toFixed( 2 ) );
            $canvasElement.data( "z_^left", ($canvasElement[0].offsetLeft / g_pixelsPerInch).toFixed( 2 ) );
            setCurrentBlockData( $canvasElement, "updated 2" );
            updatePositionStatus( $canvasElement[0].offsetTop, $canvasElement[0].offsetLeft, "Stop yOffset ... z_^top and z_^left" );
         // updatePositionStatus( -9999, -9999 );
         // updateSizeStatus( -9999, -9999 );
         }
      });
      $canvasElement.resizable({
         containment: "#page",
         start: function( event, ui ) {   // alert("Top: " +  $target.offset().top);
         // console.log( "Start yResize: " + $canvasElement[0].offsetHeight + "  xResize: " + $canvasElement[0].offsetWidth );
            updatePositionStatus( $canvasElement[0].offsetTop, $canvasElement[0].offsetLeft, "Start yResize" );
            updateSizeStatus( $canvasElement[0].offsetHeight, $canvasElement[0].offsetWidth, "Start yResize" );
         },
         resize: function( event, ui ) {
         // console.log( "Resize yResize: " + $canvasElement[0].offsetHeight + "  xResize: " + $canvasElement[0].offsetWidth );
            updateSizeStatus( $canvasElement[0].offsetHeight, $canvasElement[0].offsetWidth, "Resize yResize" );
         },
         stop: function( event, ui ) {
         // console.log( "Stop yResize: " + $canvasElement[0].offsetHeight + "  xResize: " + $canvasElement[0].offsetWidth );
            g_updatedLLD = true;
            $canvasElement.data( "z_^height", (($canvasElement[0].offsetHeight) / g_pixelsPerInch).toFixed( 2 ) );
            $canvasElement.data( "z_^width", (($canvasElement[0].offsetWidth) / g_pixelsPerInch).toFixed( 2 ) );
            setCurrentBlockData( $canvasElement, "updated 3" );
            updateSizeStatus( $canvasElement[0].offsetHeight, $canvasElement[0].offsetWidth, "Stop yResize ... z_^height and z_^width" );
         // updatePositionStatus( -9999, -9999 );
         // updateSizeStatus( -9999, -9999 );
         }
      });
   }

   $(".page, .block-element").droppable({
      accept: ".draggable",
   // hoverClass: "ui-state-active",  partially highlights page ... not so good
      drop: function( event, ui ) {
         var stopLoop = 1;
         if ( ui.draggable.hasClass( "canvas-element" ) ) {  // dragging element already on canvas
            var $canvasElement = $(ui.helper);
            var $parent = $canvasElement.parent();
            var $canvas = determineTargetOfDrop( event, $(this), $canvasElement );
            if ( true || $parent[0] !== $canvas[0] ) {
               var top = ui.offset.top;
               var left = ui.offset.left;
               while ( $parent[0] !== $canvas[0] && $parent[0].id !== "page" && stopLoop < 40 ) {
                  top += $parent[0].offsetTop + $parent[0].clientTop;
                  left += $parent[0].offsetLeft + $parent[0].clientLeft;
                  $parent = $parent.parent();
                  stopLoop++;  // using stopLoop just to prevent infinite loop
               }

               stopLoop = 1;
               var $canvasParent = $canvas;
               while ( $canvasParent[0] !== $parent[0] && $canvasParent[0].id !== "page" && stopLoop < 40 ) {
                  top -= $canvasParent[0].offsetTop + $canvasParent[0].clientTop;
                  left -= $canvasParent[0].offsetLeft + $canvasParent[0].clientLeft;
                  $canvasParent = $canvasParent.parent();
                  stopLoop++;
               }
               var top = Math.round( top );
               var left = Math.round( left );
               console.log( ".page, .block-element top:" + top + "  left: " + left );
               $canvasElement.offset({ top: top, left: left });
               $canvas.append( $canvasElement );
               g_updatedLLD = true;
               setChildrenLevel( $canvas, $canvasElement );
            // setCurrentBlockData( $canvasElement, "updated 7" );
            // $canvasElement.data( "z_^top", Math.round( top ).toString() );   done later
            // $canvasElement.data( "z_^left", Math.round( left ).toString() ); done later
            }
            setCurrentBlockData( $canvasElement, "updated block already on canvas" );
            clearListAndSelection( $canvasElement[0] ); // clear the list and set current selection
         } else {
            var $canvasElement = $(ui.helper).clone(); // ui.draggable.clone();  dragging new block
            console.log( ".page, .block-element new block top:" + event.pageY + "  left: " + event.pageX +
                         "   height: " + $(ui.helper).height() + "   width: " + $(ui.helper).width() );
                      // "   height: " + ($(ui.helper).height() + g_pixelsBorder) + "   width: " + ($(ui.helper).width() + g_pixelsBorder) );
            $canvasElement.height( $(ui.helper).height() ).width( $(ui.helper).width() );
            $canvasElement.css({ top: event.pageY, left: event.pageX });
            var uniqueTag = getUniqueId();
            $canvasElement.attr( "id", uniqueTag );
            var $canvas = determineTargetOfDrop( event, $(this), $canvasElement );
            $canvasElement.attr( "name", uniqueTag );
            $canvasElement.text( uniqueTag );
            $canvasElement.removeClass( "ui-draggable-dragging" ).addClass( "canvas-element block-element" );

            setBlockDraggableResizable( $canvas, $canvasElement, $(this) );

            $canvas.append( $canvasElement );
         // $canvasElement.append( "<h5 class='ui-widget-header'></h5>" );
            $canvasElement.append( "<h5></h5>" );
            $canvasParent = $canvas;
            while ( $canvasParent[0].id !== "page" && stopLoop < 40 ) {
               stopLoop++;
               $canvasParent = $canvasParent.parent();
            }

            setChildrenLevel( $canvas, $canvasElement );
            $canvasElement.prepend( g_trash_icon );
            console.log( ".page, .block-element new block2 top:" + Math.floor( ui.position.top - $canvas.offset().top ).toString() + "px" +
                         "   left: " + Math.floor( ui.position.left - $canvas.offset().left ).toString() + "px"  +
                         "   height: 81px   width: 81px" );
            $canvasElement.css({
               position: "absolute",
               top: Math.floor( ui.position.top - $canvas.offset().top ).toString() + "px",
               left: Math.floor( ui.position.left - $canvas.offset().left ).toString() + "px",
               height: pixel2Scale( "81px" ), // pixelsPerInch
               width: pixel2Scale( "81px" ) // pixelsPerInch
            });
            g_updatedLLD = true;
            var top = Math.floor( ui.position.top - $canvas.offset().top );
            var left = Math.floor( ui.position.left - $canvas.offset().left );
            var scale = g_pixelsPerInch * g_scale;
            console.log( ".page, .block-element new block data z_^top:" + (top / scale).toFixed( 2 ) +
                         "  z_^left: " + (left / scale).toFixed( 2 ) +
                         "   z_^height: " +  "1.00" + "   z_^width: " +  "1.00" );
            $canvasElement.data( "z_^top", (top / scale).toFixed( 2 ) );
            $canvasElement.data( "z_^left", (left / scale).toFixed( 2 ) );
            $canvasElement.data( "z_^height", "1.00" );
            $canvasElement.data( "z_^width", "1.00" );
            setCurrentBlockData( $canvasElement, "updated new block" );
            clearListAndSelection( $canvasElement[0] ); // clear the list and set current selection
         }
      }
   });

/*
   function bindEvents(){
      $('.block').not('.initialized').addClass('initialized').on().resizable().draggable();
   }
*/

   function pixel2Scale( attr ) {
      if ( g_scale === 1 ) {
         console.log( "pixel2Scale attr: " + attr + " ==> " + attr );
         return attr;
      } else {
         var idx = attr.indexOf( "px" );
         if ( idx >= 0 ) {
             attr = attr.substring( 0, idx );
         }
         var pixels = parseFloat( attr );
         if ( pixels < 0 ) {
            pixels = 0;
         }
         var n = Math.round( pixels * g_scale );
         console.log( "pixel2Scale attr: " + attr + " ==> " + n.toString() + "px" );
         return n.toString() + "px";
      }
   }

   function setCurrentBlockData( $element, message ) {
      console.log( "setCurrentBlockData: " + message );
      g_updatedLLD = true;
      mapUiElementToData( $element );
      if ( g_$current_block && g_$current_block.attr( "id" ) !== $element.attr( "id" ) ) {
         mapUiDataToElementData( g_$current_block );
      }
      g_$current_block = $element;
      mapElementDataToUiData( g_$current_block );
      $("#zBlockTag").val( $element.attr( "id" ) );
   }

   function inch2px( attr ) {
      var idx = attr.indexOf( "in" );
      if ( idx >= 0 ) {
         attr = attr.substring( 0, idx );
      }
      var pixels = Math.round( parseFloat( attr ) * g_pixelsPerInch );
      if ( pixels < 0 ) {
         pixels = 0;
      }
      return( pixels + "px" );      
   }

   function scalePixel2Inch( attr, border, message ) {  // "message" for debugging only
      var idx = attr.indexOf( "px" );
      if ( idx >= 0 ) {
         attr = attr.substring( 0, idx );
      }
      var pixels = parseFloat( attr );
      if ( pixels < 0 ) {
         pixels = 0;
      }
      var n = (pixels + border) / (g_pixelsPerInch * g_scale);
      console.log( "scalePixel2Inch attr: " + attr + "   " + message + ": " + n.toFixed( 2 ).toString() + "in" );
      return n.toFixed( 2 );
   }

   function mapUiElementToData( $element ) {
   // $item.data( "z_^top", $item.position().top );  these don't have units (e.g. px)
   // $item.data( "z_^left", $item.position().left );
      var id = $element.parent().attr( "id" );
      $element.data( "rparent", id );
      $element.data( "z_^tag", $element.attr( "id" ) );
      $element.data( "z_^top", scalePixel2Inch( $element.css( "top" ), 0, "top" ) );
      $element.data( "z_^left", scalePixel2Inch( $element.css( "left" ), 0, "left" ) );
      $element.data( "z_^height", scalePixel2Inch( $element.css( "height" ), 4, "height" ) ); // g_pixelsBorder
      $element.data( "z_^width", scalePixel2Inch( $element.css( "width" ), 4, "width" ) );
      $element.css({ position: "absolute" });
   // displayElementData( "mapUiElementToData: ", $element );
   }

   function restoreProperties( $element ) {
      $element.css({ position: "absolute" });
   }

   // <div id="label" name="label" class="label" style="top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;">Drop area ...     <!-- without position:relative, target position is off -->
   // <div id="page" name="page" class="page" style="background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;">1
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
         if ( element_id !== "label" && element_id !== "page" ) {
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
         if ( element_id !== "label" && element_id !== "page" ) {
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
      return false;  // prevent default propagation
   });

   $("div").on( "mousedown", ".block-element", function( event ) {
      if ( event.button === 0 ) {  // left button
         mapUiDataToElementData( g_$current_block );
         g_$current_block = $(this);
         $("#zBlockTag").val( $(this).attr( "id" ) );
         mapElementDataToUiData( g_$current_block );
         return false;  // prevent default propagation
      }
   });
/*
   $("body").on( "click", "div.ui-draggable", function() {
      mapUiDataToElementData( $current_block );
      $current_block = $(this);
      $("#zBlockTag").val( $(this).attr( "id" ) );
      mapElementDataToUiData( $current_block );
      return false;  // prevent default propagation
   });
*/
   $("body").on( "click", "a.ui-icon-trash", function() {
      trashImage( $(this) );
      return false;  // prevent default propagation
   });

   $("body").on( "click", "a.ui-icon-refresh", function() {
      restoreImage( $(this) );
      return false;  // prevent default propagation
   });

   function trashImage( $item ) {
      var $parent = $item.parent();
      $parent = $parent.parent();
      $item.parent().remove();
      mapUiElementToData( $parent );
      $parent.fadeOut( function() {
         var $list = $("ul", g_$trash).length ?
            $("ul", g_$trash) :
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
         $newParent = $("#page");
      }
      $item.parent().remove();
      restoreProperties( $parent );
      $parent.fadeOut(function() {
         $parent
            .prepend( g_trash_icon )
            .appendTo( $newParent )
            .fadeIn( function() {
               $parent.animate( { top: inch2px( $parent.data( "z_^top" ) ), left: inch2px( $parent.data( "z_^left" ) ),
                                  width: inch2px( $parent.data( "z_^width" ) ), height: inch2px( $parent.data( "z_^height" ) ) } );
            });
      });
   }

   function getBackgroundColorForLevel( level ) {
      if ( level <= 0 )
         level = 1;
      else
      if ( level > 8 )
         level = ((level - 1) % 8) + 1;

      return level === 1 ? "#fefefe" : level === 2 ? "#ccffcc" : level === 3 ? "#ccffff" : level === 4 ? "#ffccff" : level === 5 ? "#ccccff" : level === 6 ? "#ffcccc" : level === 7 ? "#ffffcc" : "#cccccc";
   }

   function getColorForLevel( level ) {
      return "#000000";
   /*
      if ( level <= 0 || level >= 7  ) {
         level = 1;
      }

      return level === 1 ? "red" : level === 2 ? "brown" : level === 3 ? "yellow" : level === 4 ? "green" : level === 5 ? "blue" : level === 6 ? "indigo" : "violet";
    */
   }

   function setChildrenLevel( $parent, $child ) {
      var level = parseInt( $parent.data( "z_^level" ), 10 ) + 1;
      $child.data( "z_^level", level );
      $child.css({
         background: getBackgroundColorForLevel( level ),
         color: getColorForLevel( level )
      });

      // get all divs of the child
      $("div").children( ".selected" ).css( "color", "blue" );
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
      var ceTop = Math.round( $canvasElement.offset().top );
      var ceLeft = Math.round( $canvasElement.offset().left );
      var ceHeight = Math.round( $canvasElement.height() - g_pixelsBorder ); // account for border
      var ceWidth = Math.round( $canvasElement.width() - g_pixelsBorder ); // account for border
   // var tgtTop = $target.offset().top;
   // var tgtLeft = $target.offset().left;
      var tgtHeight = Math.round( $target.height() );
      var tgtWidth = Math.round( $target.width() );
      var $el;
      var elHeight;
      var elWidth;

      if ( ceTop === 0 && ceLeft === 0 ) {
         ceTop = clickY;
         ceLeft = clickX;
      }

      for ( var k = 0; k < list.length; k++ ) {
         $el = list[k];
         if ( $el.parents("div#page").length ) {   // clicked element has div#page as parent
            elHeight = Math.round( $el.height() );
            elWidth = Math.round( $el.width() );

            if ( elHeight < tgtHeight && elWidth < tgtWidth &&  // clicked element is smaller than current target
                 ceTop >= Math.round( $el.offset().top ) && ceLeft >= Math.round( $el.offset().left ) &&  // new element within clicked element boundaries
                 ceTop + ceHeight < Math.round( $el.offset().top ) + elHeight &&
                 ceLeft + ceWidth < Math.round( $el.offset().left ) + elWidth ) {
               $target = $el;
            // tgtTop = $target.offset().top;
            // tgtLeft = $target.offset().left;
               tgtHeight = Math.round( $target.height() );
               tgtWidth = Math.round( $target.width() );
            }
         }
      }

      console.log( "Target of drop: " + $target[0].id )
      return $target;
   }

   function getUniqueId() {
      var stopLoop = 0; // prevent infinite loop
      var arr = $(document.getElementById( "Tag" + g_generateTag ));
      do
      {
         if ( $(arr).length <= 0 ) {
            break;
         }

         g_generateTag++;
         arr = $(document.getElementById( "Tag" + g_generateTag ));
      } while ( stopLoop++ < 100 )

      var tag = "Tag" + g_generateTag;
      console.log( "getUniqueId: " + tag );
      return tag;
   }

   function updatePositionStatus( offset_top, offset_left, message ) {
      // ... then update the numbers
      var new_position;
      if ( offset_top === -9999 ) {
         new_position = "";
      } else {
         var x = offset_left / g_pixelsPerInch;  // 1 = g_pixelsBorder/2
         var y = offset_top / g_pixelsPerInch;
         new_position = "Position: " + y.toFixed( 2 ) + "in, " + x.toFixed( 2 ) + "in";
      }

      console.log( "UpdatePositionStatus " + message + " (" + offset_top + "," + offset_left + ") : " + new_position );
      $("span#zdisplay_position").text( new_position );
   }

   function updateSizeStatus( height, width, message ) {
      // ... then update the numbers
      var new_size;
      if ( height === -9999 ) {
         new_size = "";
      } else {
         var x = width / g_pixelsPerInch;
         var y = height / g_pixelsPerInch;
         new_size = "Size: " + y.toFixed( 2 ) + "in, " + x.toFixed( 2 ) + "in";
      }

      console.log( "UpdateSizeStatus " + message + " (" + height + "," + width + ") : " + new_size );
      $("span#zdisplay_size").text( new_size );
   }

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

   function selectPage( value ) {
      mapUiDataToElementData( $("#page") );
      $("#page").attr( "id", "page" + g_currentPage ).attr( "name", "page" + g_currentPage ).removeClass( "page_active" ).addClass( "page_hidden" ).hide();
      $("#page" + value).attr( "id", "page" ).attr( "name", "page" ).removeClass( "page_hidden" ).addClass( "page_active" ).show();
      g_currentPage = value;
      mapElementDataToUiData( $("#page") );
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
//xvar fLLD = $.farbtastic( "#zLabelPicker", fbCallback );
//xvar pLLD = $("#zLabelPicker").css("opacity", 0.25).hide();
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

   $("#zBlockTop")
      .blur( function () {
         var top = pixel2Scale( inch2px( $(this).val() ) )
         console.log( "block top attribute: " + $(this).val() + " ==> " + top );
         g_$current_block.css({ top : top });
   });
   
   $("#zBlockLeft")
      .blur( function () {
         var left = pixel2Scale( inch2px( $(this).val() ) )
         console.log( "block left attribute: " + $(this).val() + " ==> " + left );
         g_$current_block.css({ left : left });
   });
   
   $("#zBlockHeight")
      .blur( function () {
         var height = pixel2Scale( inch2px( $(this).val() ) )
         console.log( "block height attribute: " + $(this).val() + " ==> " + height );
         g_$current_block.css({ height : height });
   });
   
   $("#zBlockWidth")
      .blur( function () {
         var width = pixel2Scale( inch2px( $(this).val() ) )
         console.log( "block width attribute: " + $(this).val() + " ==> " + width );
         g_$current_block.css({ width : width });
   });
   
   $("input.zeidon, select.zeidon")
      .blur( function () {
         console.log( "updated zeidon block attributes" );
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
            } else if ( entity === "page" ) {
               g_updatedLLD = true;
               console.log( "updated page attribute: " + key + "  value: " + value );
               $("#page").data( key, value );
            // jsonObj = dataToJSON( $("#page") );
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

// $("#label").niceScroll({touchbehavior:false,cursorcolor:"#00F",cursoropacitymax:0.7,cursorwidth:6,background:"#ccc",autohidemode:false});
   function runEffect( show ) {
      // run the effect
      var options = { direction : "down" };
      if ( show ) {
         $("#zmenu").show( "slide", options, 125 );
      } else {
         $("#zmenu").hide( "slide", options, 125 );
      }
   }

   // set initial state.
   $("#showtools").prop( "checked", false );
   runEffect( false );
   $("#showtools")
      .change(function() {
         var left = $(window).width() - $("#zmenu").width() - 4*g_scrollbar.width - 2;
         $("#zmenu").css({ left: left, height: $("#label").height() - g_scrollbar.height });

         if ( $(this).is( ":checked" ) ) {
            runEffect( true );
         } else {
            runEffect( false );
         }
      });

// $("#zBlockTextAlign").combobox();
// $("#zHazardPanel").combobox();

   var $PageSpinner = $("#zPageSpinner").spinner();
   $PageSpinner.spinner( "option", "min", 1 );
   $PageSpinner.spinner( "option", "max", 9 );
   $PageSpinner.spinner( "option", "numberFormat", "nn" );
   $PageSpinner[0].readOnly = true;  // prevent invalid input

   // Handle the Spinner change event.
   $PageSpinner.on( "spinstop", function( event, ui ) {
      selectPage( $PageSpinner.spinner( "value" ) );
   });

   var $SnapSpinnerX = $("#SnapSpinnerX").spinner();
   $SnapSpinnerX.spinner( "option", "min", 0.01 );
   $SnapSpinnerX.spinner( "option", "max", 1.00 );
   $SnapSpinnerX.spinner( "option", "step", 0.01 );
   $SnapSpinnerX.spinner( "option", "page", 0.10 );
   $SnapSpinnerX.spinner( "option", "numberFormat", "n.nn" );
   $SnapSpinnerX[0].readOnly = true;  // prevent invalid input

   // Handle the Spinner change event.
   $SnapSpinnerX.on( "spinstop", function( event, ui ) {
      g_currentSnapX = ($SnapSpinnerX.spinner( "value" ) * 100).toString();
   });

   var $SnapSpinnerY = $("#SnapSpinnerY").spinner();
   $SnapSpinnerY.spinner( "option", "min", 0.01 );
   $SnapSpinnerY.spinner( "option", "max", 1.00 );
   $SnapSpinnerY.spinner( "option", "step", 0.01 );
   $SnapSpinnerY.spinner( "option", "page", 0.10 );
   $SnapSpinnerY.spinner( "option", "numberFormat", "n.nn" );
   $SnapSpinnerY[0].readOnly = true;  // prevent invalid input

   // Handle the Spinner change event.
   $SnapSpinnerY.on( "spinstop", function( event, ui ) {
      g_currentSnapY = ($SnapSpinnerY.spinner( "value" ) * 100).toString();
   });

//x$(function() {
   //x $("#zPageUnits").buttonset();
//x});

// $("#zPageUnits").buttonset().find("label").css({ width: "50%" });
//x$("#zPageUnits").buttonset().find('label').css({ 'width': '40px', 'height': '24px'});

//x$(function() {
   //x $("#zBlockUnits").buttonset();
//x});

// $("#zBlockUnits").buttonset().find("label").css({ width: "50%" });
//x $("#zBlockUnits").buttonset().find('label').css({ 'width': '40px', 'height': '24px'});

// $(function() {
//    $("#zcheckContinuationBlock").button();
//  });

   var blockRecurse = 0;
   var entityIdx = -1;
   var recurse = -1;
   var firstPage = true;
   var firstPanel = true;
   var lastPage = false;

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
      $("#page").attr( "id", "page" + currentPage ).attr( "name", "page" + currentPage );
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
         $("#page" + currentPage).attr( "id", "page" ).attr( "name", "page" );
      }
   }
*/
   function ConvertWysiwygLabelDesignToZeidonJson( name ) {
      $("#page").attr( "id", "page" + g_currentPage ).attr( "name", "page" + g_currentPage );
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
      g_jsonLabel1 = jsonStringToJsonObject( g_JsonNewLabel );
   // simpleTraverseJsonObject( g_jsonLabel, true );
      setHierarchicalJsonObject( g_jsonLabel1, "LLD", g_cursorsLabel );
      g_cursorsLabel.createEntity( "Page", 3 );
      g_cursorsLabel.setAttribute( "Page", "Tag", "PageX!" );
      console.log( "Cursors Label Test1.0" );
      g_cursorsLabel.display("Tag");
   // console.log( "\ninitCursorsDeprecated: " );
   // initCursorsDeprecated( g_jsonLabel, null, cursorsLabel, null, 0 );
   // logJsonObject( g_jsonLabel, logKeyValue, 0, true );
      console.log( "Cursors Label Test1.1" );
      g_cursorsLabel.deleteEntity( "Page", 3 );
      g_cursorsLabel.display("Tag");
      g_cursorsLabel.setToSubobject( "BlockBlock" );
      console.log( "Cursors Label Test1A" );
      g_cursorsLabel.display("Tag");
      g_cursorsLabel.resetFromSubobject();
      console.log( "Cursors Label Test1B" );
      g_cursorsLabel.display("Tag");
   // storageSession.newLabel = g_JsonNewLabel;
   // storageSession.cursorsNewLabel = g_cursorsLabel.toString();
   
      return false;  // prevent default propagation
   });

   $("#zTest2").click( function() {
   // console.log( "Cursors NewLabel Test2" );
   // cursorsNewLabel.iterate(function(k,v) {
   //    console.log( "Entity: " + k + "   Absolute Entity: " + v[".hierNbr"] );
   // });
   // logZeidonJsonObject( jsonNewLabel, null );
      console.log( "Cursors Label Test2" );
      g_cursorsLabel.display();
      logZeidonJsonObject( g_jsonLabel1, null );

      var stopLoop = 0;
      var entity = "BlockBlock";
      while ( entity && stopLoop++ < 10 ) {
      // console.log( "FindParent Entity: " + entity );
         entity = g_cursorsLabel.findParentEntity( entity );
      }

      entity = "Page";
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

      return false;  // prevent default propagation
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
         success: function( data, textStatus, xhr ) {
            console.log( "Test3 success status: " + xhr.status + "  Text status: " + textStatus );
            console.log( "Test3 success data: " + data );
            g_cursorsLabel.logLod( jsonStringToJsonObject( g_JsonLabelLod ), null );
         // logJsonObject( jsonStringToJsonObject( data ), logKeyValue, 0, true );
         }
      });

      return false;  // prevent default propagation
   });

   function openWin()
   {
   // var myWindow = window.open();
   // var myWindow = window.open("","myWindow","width=200,height=100");
      var myWindow = window.open( "xyz", "_blank", "toolbar=yes, menubar=yes scrollbars=yes, resizable=yes, top=300, left=600, width=1000, height=800" );
      var myDocument = myWindow.document;
      var HTMLstring="<html>\n<head>\n<title>ZeidonX JSON</title>\n" +
         "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/json.css\">\n" +
         "<script src=\"http://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
         "<script src=\"http://code.jquery.com/ui/1.10.3/jquery-ui.js\"></script>\n" +
         "<script src=\"js/jquery.blockUI.js\"></script>\n" +
         "<script src=\"js/jsoeUtils.js\"></script>\n" +
         "<script src=\"js/jsoe.js\"></script>\n" +
         "<script src=\"js/jsoeObjectBrowser.js\"></script>\n" +
         "<script>\n" +
            "$(document).ready(function(){ // Once the page has loaded and is ready, the alert below will fire.\n" +
               "loadViewNames();\n" +
            // "alert('Your page has loaded - and Now this alert appears!');\n" +
            "});\n" +
         "</script>" +
         "</head><body onload=\"loadViewNames()\">\n" +
         "<textarea id=\"RawJson\" style=\"display:none;\"></textarea>\n" +
                "<div id=\"ControlsRow\">\n" +
                  "<input type=\"Button\" value=\"Format\" onClick=\"Process()\"/>\n" +
                  "<span id=\"ViewNamesHolder\">View Names:\n" +
                    "<select id=\"ViewNames\" onChange=\"ViewNameChanged()\">\n" +
                    "</select>\n" +
                  "</span>&nbsp;&nbsp;\n" +
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
   // console.log( HTMLstring );
      myDocument.write( HTMLstring );
 //   myWindow.document.getElementById("RawJson").value = g_JsonNewLabelA; // jsonStringToJsonObject( g_JsonNewLabel );
 //   var rawJson = myDocument.getElementById("RawJson")
 //   rawJason.outerHTML = jsonStringToJsonObject( g_JsonNewLabel );
      myDocument.close();
 /*   myWindow.onload = function() {
         alert( "On Load" );
      }; */
      return myWindow;
   }

   $("#zTest4").click( function() {
   // Process();
      /*
      var formattedHtml = renderJsonObjectAsFormattedHtml( g_jsonLabel, 0, false, false, false );
      console.log( formattedHtml );
      $id("zFormattedJsonLabel").innerHTML = "<PRE class='CodeContainer'>" + formattedHtml + "</PRE>";
      */

      var url = "ftp?action=loadFile&url=test.pdf&fileName=test.pdf";

      // Display the resultant JSON that will be passed to Zeidon to be saved as an LLD.
   // console.log( "\nJson Registered Views: " + jsonRegisteredViews );
      $.ajax({
         url : url,
         type : 'POST',
         data : {},
         dataType : 'json',
         success: function( data, textStatus, xhr ) {
            console.log( "Test4 success status: " + xhr.status + "  Text status: " + textStatus );
            console.log( "Test4 success data: " + data );
          }
      });

      return false;  // prevent default propagation
   });

   $("#zTest5").click( function() {
      runEffect( false );
      return false;  // prevent default propagation
   });

   var $ZoomSpinner = $("#zZoomSpinner").spinner();
   $ZoomSpinner.spinner( "option", "min", 0.2 );
   $ZoomSpinner.spinner( "option", "max", 2.0 );
   $ZoomSpinner.spinner( "option", "step", 0.1 );
   $ZoomSpinner.spinner( "option", "page", 0.5 );
   $ZoomSpinner.spinner( "option", "numberFormat", "n.n" );
   $ZoomSpinner[0].readOnly = true;  // prevent invalid input
 
    // Handle the Spinner change event.
   $ZoomSpinner.on( "spinstop", function( event, ui ) {
      g_scale = $ZoomSpinner.spinner( "value" );
      resizeImg();
   });

   function roundInch2Pixel( attr ) {
      var idx = attr.indexOf( "in" );
      if ( idx >= 0 ) {
         attr = attr.substring( 0, idx );
      }
      var inches = parseFloat( attr );
      if ( inches < 0 ) {
         inches = 0;
      }
      return Math.round( inches * g_pixelsPerInch * g_scale );
   }

   function resizeImg() {
      $( "div.page" ).each(function() {
      // console.log( "Scaling page: " + $this.attr( "id" ) );
         var $this = $(this);
         var scale = Math.floor( g_scale * 81 );
         $this.css( 'background-size', scale + "px " + scale + "px" );
      });

   // var scale = Math.floor( g_scale * 81 );
   // $( "div#page").css( 'background-size', scale + "px " + scale + "px" );
      $( ".canvas-element" ).each(function() {
         var $this = $(this);
      // console.log( "Tag: " + $this.attr( "id" ) + "  Top: " + $this.data( "z_^top" ) + "  Left: " + $this.data( "z_^left" ) +
      //              "  Width: " + $this.data( "z_^width" ) + "  Height: " + $this.data( "z_^height" ) );
         var top = roundInch2Pixel( $this.data( "z_^top" ) );
         var left = roundInch2Pixel( $this.data( "z_^left" ) );
         var width = roundInch2Pixel( $this.data( "z_^width" ) );
         var height = roundInch2Pixel( $this.data( "z_^height" ) );
      // console.log( "New Tag: " + $this.attr( "id" ) + "  Top: " + top + "  Left: " + left + "  Width: " + width + "  Height: " + height );
         $this.css({ top: top, left: left, width: width, height: height });
      });
   }

/* FTP Client

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class FileClient {
    public static void main(String[] args) throws Exception {

        long start = System.currentTimeMillis();

        // localhost for testing
        Socket sock = new Socket("127.0.0.1", 13267);
        System.out.println("Connecting...");
        InputStream is = sock.getInputStream();
        // receive file
        new FileClient().receiveFile(is);
        OutputStream os = sock.getOutputStream();
        //new FileClient().send(os);
        long end = System.currentTimeMillis();
        System.out.println(end - start);

        sock.close();
    }


    public void send(OutputStream os) throws Exception {
        // sendfile
        File myFile = new File("/home/nilesh/opt/eclipse/about.html");
        byte[] mybytearray = new byte[(int) myFile.length() + 1];
        FileInputStream fis = new FileInputStream(myFile);
        BufferedInputStream bis = new BufferedInputStream(fis);
        bis.read(mybytearray, 0, mybytearray.length);
        System.out.println("Sending...");
        os.write(mybytearray, 0, mybytearray.length);
        os.flush();
    }

    public void receiveFile(InputStream is) throws Exception {
        int filesize = 6022386;
        int bytesRead;
        int current = 0;
        byte[] mybytearray = new byte[filesize];

        FileOutputStream fos = new FileOutputStream("def");
        BufferedOutputStream bos = new BufferedOutputStream(fos);
        bytesRead = is.read(mybytearray, 0, mybytearray.length);
        current = bytesRead;

        do {
            bytesRead = is.read(mybytearray, current,
                    (mybytearray.length - current));
            if (bytesRead >= 0)
                current += bytesRead;
        } while (bytesRead > -1);

        bos.write(mybytearray, 0, current);
        bos.flush();
        bos.close();
    }
} 
*/

/* FTP Server

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class FileServer {
    public static void main(String[] args) throws Exception {
        // create socket
        ServerSocket servsock = new ServerSocket(13267);
        while (true) {
            System.out.println("Waiting...");

            Socket sock = servsock.accept();
            System.out.println("Accepted connection : " + sock);
            OutputStream os = sock.getOutputStream();
            //new FileServer().send(os);
            InputStream is = sock.getInputStream();
            new FileServer().receiveFile(is);
            sock.close();
        }
    }

    public void send(OutputStream os) throws Exception {
        // sendfile
        File myFile = new File("/home/nilesh/opt/eclipse/about.html");
        byte[] mybytearray = new byte[(int) myFile.length() + 1];
        FileInputStream fis = new FileInputStream(myFile);
        BufferedInputStream bis = new BufferedInputStream(fis);
        bis.read(mybytearray, 0, mybytearray.length);
        System.out.println("Sending...");
        os.write(mybytearray, 0, mybytearray.length);
        os.flush();
    }

    public void receiveFile(InputStream is) throws Exception {
        int filesize = 6022386;
        int bytesRead;
        int current = 0;
        byte[] mybytearray = new byte[filesize];

        FileOutputStream fos = new FileOutputStream("def");
        BufferedOutputStream bos = new BufferedOutputStream(fos);
        bytesRead = is.read(mybytearray, 0, mybytearray.length);
        current = bytesRead;

        do {
            bytesRead = is.read(mybytearray, current,
                    (mybytearray.length - current));
            if (bytesRead >= 0)
                current += bytesRead;
        } while (bytesRead > -1);

        bos.write(mybytearray, 0, current);
        bos.flush();
        bos.close();
    }
} 
*/

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
      return false;  // prevent default propagation
   });

   function CaptureZeidonLabelJsonFromDomJson( jsonDom ) {
   // var jsonObj = eval( "[" + json + "]" );
      var jsonObj = jQuery.parseJSON( "[" + jsonDom + "]" );  // this is faster and more secure than eval
   // var formattedHtml = renderJsonObjectAsFormattedHtml( jsonObj[0], 0, false, false, false );
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

   function quoteLiteral( literal, quote, comma ) {
      return quote + literal + quote + comma;
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
         // json += "[ ]" + comma;
         } else {
         // json += "[";
             for ( var k = 0; k < obj.length; k++ ) {
               if ( typeof obj[k] !== "string" ) {
                  jsonLabel += TranslateWysiwygDesignToJsonLabel( obj, k + 1, obj[k], k < (obj.length - 1), true, false, firstBlock );
               }
            }
         }
      // json += "], " + comma;
      } else if ( objType === 'object' ) {
         if ( obj === null ){
            jsonLabel += quoteLiteral( "null", "", comma );
         } else if ( obj.constructor === window._dateObj.constructor ) {
            jsonLabel += quoteLiteral( "new Date(" + obj.getTime() + ") /*" + obj.toLocaleString() + "*/", "", comma );
         } else if ( obj.constructor === window._regexpObj.constructor ) {
            jsonLabel += quoteLiteral( "new RegExp(" + obj + ")", "", comma );
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
            // json += comma;
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
                     var isPage = false;  // there are pages at only one level
                     var isPanel = false;  // there are panels at only one level

                     var lastBlock = true;
                     var isBlock = false;
                     if ( classlist.indexOf( "label" ) >= 0 ) {
                        isLabel = true;
                        entityIdx = -1;
                        firstPage = true;
                        firstPanel = true;
                        lastPage = false;
                        jsonLabel += ", \n\"LLD\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Name\" : \"" + text + "\" ";
                        jsonLabel += TranslateWysiwygDesignToJsonLabel( null, -1, obj["attributes"], 0, true, false, firstBlock );
                     } else if ( classlist.indexOf( "page" ) >= 0 ) {
                        isPage = true;
                        entityIdx = 0;
                        blockRecurse = 0;
                        firstBlock.isFirst = true;
                        if ( firstPage ) {
                           jsonLabel += ", \n\"Page\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"" + text + "\" ";
                           firstPage = false;
                        } else {
                           jsonLabel += "}, \n{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"" + text + "\" ";
                        }
                        jsonLabel += TranslateWysiwygDesignToJsonLabel( null, -1, obj["attributes"], 0, true, false, firstBlock );
                        lastPage = CheckIfLastSibling( parentArray, parentIdx, "page" );
                     } else if ( classlist.indexOf( "block" ) >= 0 ) {
                        var $element = $("#" + obj["attributes"]["id"]);
                        var blockLevel = parseInt( $element.data( "z_^level" ) );
                        isBlock = true;
                        if ( firstBlock.isFirst || blockLevel > blockRecurse ) {
                           blockRecurse = blockLevel;
                           firstBlock.isFirst = false;
                           if ( blockLevel > 2 ) {
                              jsonLabel += ", \n\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } ";
                           } else if ( blockLevel > 1 ) {
                              jsonLabel += ", \n\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } ";
                           } else {
                              jsonLabel += ", \n\"Panel\" : [ { \".meta\" : { \"created\" : \"true\" } ";
                           }
                        } else {
                           jsonLabel += ", \n{ \".meta\" : { \"created\" : \"true\" } ";
                        }
                        // This is where we need to determine if there is a sibling block!
                        lastBlock = CheckIfLastSibling( parentArray, parentIdx, "block" );
                        jsonLabel += TranslateWysiwygDesignToJsonLabel( null, -1, obj["attributes"], 0, true, false, firstBlock );
                        entityIdx--;
                     // if ( json.indexOf( "Tag107" ) >= 0 ) {
                        // console.log( "json: " + json );
                        // console.log( obj["content"] );
                        // lastBlock = CheckIfLastBlockSibling( parentArray, parentIdx );
                     // }
                     }
                  // console.log( obj["content"] );
                     firstBlockIn.isFirst = firstBlock.isFirst = lastBlock;
                     jsonLabel += TranslateWysiwygDesignToJsonLabel( null, -1, obj["content"], 0, true, false, firstBlock );
                     if ( isBlock ) {
                        if ( lastBlock ) {
                           jsonLabel += " } ]";
                        } else {
                           jsonLabel += " }";
                        }
                     }
                     if ( isPage && lastPage ) {
                        jsonLabel += " } ]";
                     }
                     if ( isLabel ) {  // there is only one label
                        jsonLabel += " } ]";
                     }
                  }
               } else if ( type === false ) {
                  // we're looking at attributes
                  console.log( "Looking for attributes in: " + obj['id'] );
                  for ( var prop in obj ) {
                  // console.log( obj[prop] );
                     if ( prop === "id" ) {
                        // 'id' and 'name' should be the same!
                     // if ( obj['id'] !== obj['name']) {  ... we no longer name the divs
                     //    alert( "Houston ... we have a problem with id != name" );
                     // }

                        // Guarantee the Tag is set properly in the element data.
                     // jsonLabel += ", \"Tag\" : \"" + trimLeadingAndTrailingWhiteSpace( obj[prop] ) + "\"";
                        $("#" + obj['id']).data( "z_^tag", obj['id'] );

                        // So let's get the all of the custom properties for this element
                        displayElementData( "TranslateWysiwygDesignToJsonLabel", $("#" + obj['id']) );
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
            // json += "\n";
            }
         }
      } else if ( objType === 'string' ) {
         jsonLabel += quoteLiteral( obj.toString().split("\\").join("\\\\").split('"').join('\\"'), "\"" );
      } else if ( objType === 'number' ) {
         jsonLabel += quoteLiteral( obj, "", comma );
      } else if ( objType === 'boolean' ) {
        jsonLabel += quoteLiteral( obj, "", comma );
      } else if ( objType === 'function' ) {
         if ( obj.constructor === window._regexpObj.constructor ) {
            jsonLabel += quoteLiteral( "new RegExp(" + obj + ")", "", comma );
         } else {
            obj = formatFunction( 0, obj );
            jsonLabel += quoteLiteral( obj, "", comma );
         }
      } else if ( objType === 'undefined' ) {
         jsonLabel += quoteLiteral( "undefined", "", comma );
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
            return false;  // prevent default propagation
         }
      }
      LoadZeidonJsonFromLLD( name );
      g_loadedLLD = name;
      return false;  // prevent default propagation
   });

   $("#SnapType").selectmenu({
      close: function( event, data ) {  // use close event instead of change event because we always want to apply the selection, even if no change
         if ( g_$current_block ) {
            var value = $(this).val();
         // console.log( "close: " + value );
            g_$current_block.draggable( "option", "snap", false );  // reset so changes are applied if necessary
            g_$current_block.draggable( "option", "grid", [1, 1] );
            if ( value === "default" || value === "none" ) {
               // nothing to do
            } else {
               g_$current_block.draggable( "option", "snap", true );
               if ( value === "grid" ) {
                  g_$current_block.draggable( "option", "grid", [g_currentSnapX, g_currentSnapY] );
               } else if ( value === "inner" ) {
                  g_$current_block.draggable( "option", "snapMode", "inner" );
               } else if ( value === "outer" ) {
                  g_$current_block.draggable( "option", "snapMode", "outer" );
               } else if ( value === "both" ) {
                  g_$current_block.draggable( "option", "snapMode", "both" );
               }
            }
         }
      }
   });
   
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
                  style += prop.toLowerCase() + ":" + inch2px( obj[prop] ) + ";";
               } else {
                  if ( prop === "Level" ) {
                     level = parseInt( obj[prop] );
                  }
               }
            }
         }

      // $(tag).innerHTML = attr + style;
         if ( entity === "block" || entity === "panel" ) {
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
                 .resizable({ containment: "#" + $root.attr( "id" ) })
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
         } else { // must be label or panel or page
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
         displayElementData( "AddHtmlWysiwygLabelElements", $parentElement );
         $parentElement = $("#" + obj["Tag"]);
      }

      for ( var prop in obj ) {
         if ( prop === ".meta" ) {
            // do nothing
         }
         else
         if ( prop === "Block" || prop === "BlockBlock" || prop === "Panel" ) {
            var objBlock = obj[prop];
            for ( var k = 0; k < objBlock.length; k++ ) {
               AddHtmlWysiwygLabelElements( $root, $parentElement, objBlock[k], "block", indent + 1 );
            }
         }
      /*
         else
         if ( prop === "Panel" ) {
            var objPanel = obj[prop];
            for ( var k = 0; k < objPanel.length; k++ ) {
               AddHtmlWysiwygLabelElements( $root, $parentElement, objPanel[k], "panel", indent + 1 );
            }
         }
      */
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
               if ( prop === "Page" ) {
                  var objPage = objLLD["Page"];
                  var $parentElement = $("#label");
                  for ( var k = 0; k < objPage.length; k++ ) {
                     AddHtmlWysiwygLabelElements( $("#" + objPage[k]["Tag"]), $parentElement, objPage[k], "page", indent + 1 );
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
               $("#page").attr( "id", "page" + g_currentPage )
                          .attr( "name", "page" + g_currentPage )
                          .removeClass( "page_active" )
                          .addClass( "page_hidden" )
                          .hide();

            // $(".page").empty(); does too much
            // $('#zmasterdiv').empty();  clears the master div.
            // $('#zmasterdiv div').empty(); clears all the child divs, but leaves the master intact.
            /*
               $(".page").each( function() {
                  while ( $(this).firstChild ) {
                     $(this).removeChild( $(this).firstChild );
                  }
               });
            */
               $("#label div").empty();
               $("#label").removeData();
               $(".page").each( function( idx ) {
                  $(this).hide()
                         .removeData()
                         .css( 'background-color', 'lightyellow' )
                         .addClass( "ui-droppable page_hidden" )
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
            // var formattedHtml = renderJsonObjectAsFormattedHtml( jsonObj, 0, false, false, false );
            // $id("zFormattedJsonLabel").innerHTML = "<PRE class='CodeContainer'>" + formattedHtml + "</PRE>";

               // Now actually display the LLD in the designer.
               RenderWysiwygLabelFromZeidonJson( jsonObj, 1, false, false );

            } catch(e) {
               $id("zFormattedJsonLabel").innerHTML = jsonZeidon;
               alert( "JSON is not well formatted:\n" + e.message );
            } finally {
               g_updatedLLD = false;
               g_currentPage = 1;
               g_$current_block = null;
               $("#page" + g_currentPage).attr( "id", "page" )
                                         .attr( "name", "page" )
                                         .removeClass( "page_hidden" )
                                         .addClass( "page_active" )
                                         .show();
               mapElementDataToUiData( $("#label") );
               mapElementDataToUiData( $("#page") );
               $PageSpinner.spinner( "value", 1 );

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
         $("#page" + currentPage).attr( "id", "page" );
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
         $("#page" + g_currentPage).attr( "id", "page" );
         g_$current_block = null;

         // TODO: display the label/page/block properties
      }
   }

   $("ul.droptrue").sortable({
      connectWith: "ul"
   });

   $("ul.dropfalse").sortable({
      connectWith: "ul",
      dropOnEmpty: false
   });

 /*  
   $("#zLLD_LoadRegisteredViews").click( function() {
      var name = $("#zLLD_Name").val();
      if ( name === "" ) {
      // alert( "LLD Name is required for Registered Views! ... assuming xx for now!" );
      // name = "xx";
         alert( "LLD Name is required for Registered Views!" );
         return false;  // prevent default propagation
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

      return false;  // prevent default propagation
   });
*/
// $("#sortable1, #sortable2, #sortable3").disableSelection();

   $(".equalheight").equalHeights( 400 );

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

         var storageS = window.sessionStorage; // use when you need to store something that changes or something temporary
      // var storageL = window.localStorage; // use for long term use
         storageS.registeredViews = JSON.stringify( jsonRegisteredViews );
      // storageL.registeredViews = JSON.stringify( g_jsonLabel );
         return jsonRegisteredViews;
      }

      return "";
   }
/*
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

      return false;  // prevent default propagation
   });
*/
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

   $(document).keydown(function(e){
      if ( e.ctrlKey && e.keyCode === 123 ) { // Ctrl + F12 keydown combo
      // console.log( "Ctrl+F12 has been pressed!" );
         g_jsonLabel1 = jsonStringToJsonObject( g_JsonNewLabel );
         g_jsonLabel2 = jsonStringToJsonObject( g_JsonNewLabelA );
         g_ViewNameMap.setNameForView( g_jsonLabel1, "dks1_viewname" );
         g_ViewNameMap.setNameForView( g_jsonLabel2, "dks2_viewname" );
         var cursorsLabel = g_ViewNameMap.getViewByName( "dks1_viewname" );
      // console.log( "getViewByName found: " + cursorsLabel );
         var myWindow = openWin();
      }
   });

   function scrollbarWidthHeight() {
      if ( g_scrollbar === null ) {
         var div = document.createElement("div");
         div.style.overflow = "scroll";
         div.style.visibility = "hidden";
         div.style.position = 'absolute';
         div.style.width = '100px';
         div.style.height = '100px';
         document.body.appendChild(div);
         var scrollWidth = div.offsetWidth - div.clientWidth;
         var scrollHeight = div.offsetHeight - div.clientHeight;
         document.body.removeChild(div);
         g_scrollbar = { width: scrollWidth, height: scrollHeight };
      }

      console.log( "ScrollBar width: " + g_scrollbar.width );
      console.log( "ScrollBar height: " + g_scrollbar.height );
   // return g_scrollbar;
   };

   function setLLD_sizes() {
      if ( g_windowHeight !== $(window).height() || g_windowWidth !== $(window).width() ) {
         g_windowHeight = $(window).height();
         g_windowWidth = $(window).width();
      // console.log( "window height: " + g_windowHeight );   // returns height of browser viewport
      // console.log( "document height: " + $(document).height() ); // returns height of HTML document
      // console.log( "window width: " + g_windowWidth );   // returns width of browser viewport
      // console.log( "document width: " + $(document).width() ); // returns width of HTML document
         // For screen size you can use the screen object in the following way:
         // 1920 x 1200
      // console.log( "screen height: " + screen.height );
      // console.log( "screen width: " + screen.width );
      // console.log( "devicePixelRatio: " + window.devicePixelRatio );

      // var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
      //console.log( "x:" + x + "  y:" + y );

      // console.log( "Window resize ======================================= " );
      // console.log( "window height: " + g_windowHeight );   // returns height of browser viewport
      // console.log( "document height: " + $(document).height() ); // returns height of HTML document
      // console.log( "window width: " + g_windowWidth );   // returns width of browser viewport
      // console.log( "document width: " + $(document).width() ); // returns width of HTML document

         var realWindowHeight = g_windowHeight - g_scrollbar.height;
         var realWindowWidth = g_windowWidth - 2*g_scrollbar.width;
         $("#zcontainer").css({ width: realWindowWidth, height: realWindowHeight });
         $("#zviewport").css({ width: realWindowWidth - g_scrollbar.width, height: realWindowHeight - 3*g_scrollbar.height });
         $("#zclient").css({ width: realWindowWidth, height: g_windowHeight - $("#zheader").height() - $("#zfooter").height() });

         $("#label").css({ width: realWindowWidth - g_scrollbar.width, height: realWindowHeight - $("#zheader").height() - $("#zfooter").height() - g_scrollbar.height });
         $("#zfooter").css({ width: realWindowWidth - g_scrollbar.width, top: realWindowHeight - $("#zfooter").height() });

      // var left = $(window).width() - $("#zmenu").width() - 4*g_scrollbar.width - 2;
         var left = realWindowWidth - $("#zmenu").width() - 3*g_scrollbar.width - 2;
         $("#zmenu").css({ left: left, height: $("#label").height() - g_scrollbar.height });
         $("#zaccordion").css({ left: left, height: $("#zmenu").height() });
         $("#zaccordion").accordion( "refresh" );
      // console.log( "zmenu calculated left: " + left );
         return true;
      } else {
      // console.log( "returning false" );
         return false;  // prevent default propagation
      }
   }
/*
<div id="zcontainer" name="zcontainer" style="width:12in; height:9in;">
   <div id="zviewport" name="zviewport" style="background-color:#00A5FF; height:0.4in;">
      <span>
         <div id="zheader" style="display: block; font-size: 1em; font-weight: bold;">
            Label Designer&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="ztoolbar" class="ui-widget-header ui-corner-all">
               ...  
            </div> // ztoolbar
            <img src="./images/epamms.jpg" width="64" height="25" alt="ePamms" style="margin:5px; float:right; border-style:double;">
         </div> // zheader
      </span>
      <div id="zclient" name="zclient" style="margin:0"> <!-- client area -->
         <div id="pagemenu" name="pagemenu" class="ui-widget-content" style="position:relative;margin:0">
            <div id="label" name="label" class="label" style="top:0px;left:0px;float:left;position:absolute;">Drop area ...    // without position:relative, target position is off
               <div id="page"   name="page" class="page" style="display:block;">1</div> // page
            </div> // label
            <div id="zmenu" name="zmenu" class="toggler" style="background-color:#00D7FF;top:0px;width:3.5in;height:9in;float:right;position:absolute;">   // without position:relative, clone position is off
               <div id="zaccordion" name="zaccordion" style="margin-left:0;padding-left:0">
                  ...            
               </div> // zaccordion
            </div> // zmenu
         </div> // pagemenu
      </div> // zclient
   </div> // zviewport
   <div id="zfooter" name="zfooter" style="position:absolute;height:0.25in;background-color:#00A5FF;clear:both;text-align:left;">Copyright &copy; Arksoft, Inc.
      <span id="zdisplay_size" name="zdisplay_size" style="float:right;padding-right:10px;"></span>
      <span id="zdisplay_position" name="zdisplay_position" style="float:right;padding-right:10px;"></span>
   </div> // zfooter
</div> // zcontainer
*/

   $(window).resize(function() {
      return setLLD_sizes();
   });

   function equalSpaceOrAbut( id, el_array ) {
      var pos = -1;
      var $item;
      if ( id === "ah" || id === "av" ) { // Abut Horizontal or Vertical
         // Abut each ctrl except for the top-most (or left-most) ctrl to the prior ctrl.
         el_array.forEach( function( item ) {
            $item = $(item);
            if ( pos >= 0 ) {
               if ( id === "ah" ) {
                  $item.css({ left: pos });
               } else {
                  $item.css({ top: pos });
               }
            }
            if ( id === "ah" ) {
               pos = $item.cssInt( 'left' ) + $item.cssInt( 'width' ) + 4; // 2*g_pixelsBorder;
            } else {
               pos = $item.cssInt( 'top' ) + $item.cssInt( 'height' ) + 4; // 2*g_pixelsBorder;
            }
         });
      } else {  // if ( id === "esh" || id === "esv" ) // Equal Space Horizontal or Vertical
         var used = 0;
         var extent = -1;
         var space;
         el_array.forEach( function( item ) {
            $item = $(item);
            if ( pos < 0 ) {
               if ( id === "esh" ) {
                  pos = $item.cssInt( 'left' );
               } else {
                  pos = $item.cssInt( 'top' );
               }
            }
            if ( id === "esh" ) {
               used += $item.cssInt( 'width' );
               space = $item.cssInt( 'left' ) + $item.cssInt( 'width' );
            } else {
               used += $item.cssInt( 'height' );
               space = $item.cssInt( 'top' ) + $item.cssInt( 'height' );
            }
            if ( space > extent ) {
               extent = space;
            }
         });
         
         // we've gotten dimensions ... now determine amount of space between each element
         space = (extent - used) / el_array.length - 1;
         el_array.forEach( function( item ) {
            $item = $(item);
            if ( id === "esh" ) {
               $item.css({ left: pos });
               pos += $item.cssInt( 'width' ) + space;
            } else {
               $item.css({ top: pos });
               pos += $item.cssInt( 'height' ) + space;
            }
         });
      }
   }

   function runAlign( button ) {
   // console.log( "zalign id: " + button.id );
      if ( g_selected_list.length > 1 && g_selected_first !== null ) {
         switch ( button.id ) {
            case "esh": // Equal Space Horizontal
            case "esv": // Equal Space Vertical
            case "ah": // Abut Horizontal
            case "av": // Abut Vertical
               var new_array = g_selected_list.slice();  // shallow copy of array to be used in sort (which modifies the array)
               new_array.sort( function( a, b ) {
                  var $a = $(a);
                  var $b = $(b);
                  var diff;
                  if ( button.id === "av" || button.id === "esv" ) {
                     diff = $a.cssInt( 'top' ) - $b.cssInt( 'top' );
                     if ( diff ) {
                        return diff;
                     } else {
                        return $a.cssInt( 'height' ) - $b.cssInt( 'height' );
                     }
                  } else {  // button.id === "ah" || button.id === "esh"
                     diff = $a.cssInt( 'left' ) - $b.cssInt( 'left' );
                     if ( diff ) {
                        return diff;
                     } else {
                        diff = $a.cssInt( 'width' ) - $b.cssInt( 'width' );
                        return diff;
                     }
                  }
               });
               equalSpaceOrAbut( button.id, new_array );
               break;

            default:
               var $el = $(g_selected_first);
               var coord;
               var $item;
               g_selected_list.forEach( function( item ) {
                  console.log( item.id );
                  if ( g_selected_first.id !== item.id ) {
                     $item = $(item);
                     switch ( button.id ) {
                        case "at": // Align Top
                           $item.css({ top: $el.cssInt( 'top' ) });
                           break;

                        case "al": // Align Left
                           $item.css({ left: $el.cssInt( 'left' ) });
                           break;

                        case "ab": // Align Bottom
                           coord = $el.cssInt( 'top' ) + $el.cssInt( 'height' ) - $item.cssInt( 'height' );
                           if ( coord < 0 ) {
                              coord = 0;
                           }
                           $item.css({ top: coord });
                           break;

                        case "ar": // Align Right
                           coord = $el.cssInt( 'left' ) + $el.cssInt( 'width' ) - $item.cssInt( 'width' );
                           if ( coord < 0 ) {
                              coord = 0;
                           }
                           $item.css({ left: coord });
                           break;

                        case "ew": // Equal Width
                           $item.css({ width: $el.cssInt( 'width' ) });
                           break;

                        case "eh": // Equal Height
                           $item.css({ height: $el.cssInt( 'height' ) });
                           break;

                        case "ewh": // Equal Width & Height
                           $item.css({ width: $el.cssInt( 'width' ) });
                           $item.css({ height: $el.cssInt( 'height' ) });
                           break;

                  } // end of: inner switch
               }
            });
         }
      }
   }

   scrollbarWidthHeight();  // call the function to set g_scrollbar
   setLLD_sizes();

/**
var canvas = $('#canvasback')[0];
var ctx = canvas.getContext('2d');
ctx.lineWidth=1;
ctx.strokeStyle="#efe";

function assignToDiv() { // this kind of function you are looking for
   dataUrl = canvas.toDataURL();
// document.getElementById('#label').style.background = "url('+dataUrl+')";
   $('#page')[0].style.background = 'url('+dataUrl+')';
}

function draw() { // replace with your logic
// width:8.5in;height:9in;
   var k;
   for ( k = g_ppiX; k < 8.5 * g_ppiX; k += g_ppiX ) {
      ctx.moveTo( k, 0 );
      ctx.lineTo( k, 9 * g_ppiY );
      ctx.stroke();
   }

   for ( k = g_ppiY; k < 9 * g_ppiY; k += g_ppiY ) {
      ctx.moveTo( 0, k );
      ctx.lineTo( 8.5 * g_ppiX, k );
      ctx.stroke();
   }
**/
/*
   ctx.fillStyle = "rgb(100, 250, 100)";
   ctx.fillRect (10, 10, 35, 30);
   ctx.fillStyle = "rgba(100, 250, 250, 0.5)";
   ctx.fillRect (30, 30, 35, 30);
}
*/
/**
draw();
assignToDiv();
**/


/*
   // cannot get physical dimensions of screen.
   function getPPI() {
      if ( g_ppiX === -1 || g_ppiY === -1 ) {
         var DOM_body = document.getElementsByTagName( 'body' )[0];	
         var DOM_divI = document.createElement( 'div' );
      // var DOM_divM = document.createElement( 'div' );
         DOM_divI.style.width = "1in";
         DOM_divI.style.height = "1in";
      // DOM_divM.style.width = "1cm";
      // DOM_divM.style.height = "1cm";
         DOM_body.appendChild( DOM_divI );
      // DOM_body.appendChild( DOM_divM );
         var ppiX = document.defaultView.getComputedStyle( DOM_divI, null ).getPropertyValue( "width" );
         var ppiY = document.defaultView.getComputedStyle( DOM_divI, null ).getPropertyValue( "height" );
      // var ppcmX = document.defaultView.getComputedStyle( DOM_divM, null ).getPropertyValue( "width" );
      // var ppcmY = document.defaultView.getComputedStyle( DOM_divM, null ).getPropertyValue( "height" );
         DOM_body.removeChild( DOM_divI );
      // DOM_body.removeChild( DOM_divM );
         g_ppiX = parseInt( ppiX );
         g_ppiY = parseInt( ppiY );
      // g_ppcmX = parseInt( ppcmX );
      // g_ppcmY = parseInt( ppcmY );
      }
   }

// $(".scroll-pane").jScrollPane();

   getPPI();
   console.log( "PPI X: " + g_ppiX + "   PPI Y: " + g_ppiY );
   console.log( "Screen Width: " + $(document).width() + "   Screen Height: " + $(document).height() );
// console.log( "PPCM X: " + g_ppcmX + "   PPCM Y: " + g_ppcmY );
// console.log( "Exact X: " + g_ppiX / 2.54 + "   Exact Y: " + g_ppiY / 2.54 );
// console.log( "Round X: " + Math.round( g_ppiX / 2.54 ) + "   Round Y: " + Math.round( g_ppiY / 2.54 ) );
*/

});
});

/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements that need to be the same size (floats, etc).
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
   $.fn.equalHeights = function( minHeight, maxHeight ) {
      tallest = (minHeight) ? minHeight : 0;
      this.each(function() {
         if($(this).height() > tallest) {
            tallest = $(this).height();
         }
      });
      if ( (maxHeight) && tallest > maxHeight ) tallest = maxHeight;
      return this.each(function() {
         $(this).height(tallest).css( "overflow", "auto" );
      });
   }

   $.fn.cssInt = function( prop ) {
      return parseInt( this.css( prop ), 10 ) || 0;
   };

   $.fn.makeAbsolute = function( rebase ) {
      return this.each(function() {
         var $el = $(this);
         var pos = $el.position();
         $el.css({ position: "absolute", marginLeft: 0, marginTop: 0, top: pos.top, left: pos.left });
         if ( rebase )
            $el.remove().appendTo( "body" );
      });
   };

})(jQuery);